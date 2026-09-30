import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useState,
  type ReactNode,
  type CSSProperties,
} from 'react';
import { skills, type Lang } from '../../data/workspace';
import SkillIcon from './SkillIcon';
const KeyboardScene = lazy(() => import('./KeyboardScene'));

class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
export default function SkillsIsland({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    setEnabled(Boolean(gl));
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return () => query.removeEventListener('change', update);
  }, []);
  const fallback = (
    <div className="keyboard-fallback" aria-hidden="true">
      <div>
        {skills.map((skill, index) => (
          <span
            key={skill.name}
            style={{ '--key-color': skill.color } as CSSProperties}
          >
            <SkillIcon index={index} />
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="skills-experience">
      <div className="keyboard-visual" aria-hidden="true">
        <div className="scene-orbit orbit-one" />
        <div className="scene-orbit orbit-two" />
        {enabled && !reduced ? (
          <SceneBoundary fallback={fallback}>
            <Suspense fallback={fallback}>
              <KeyboardScene active={active} onSelect={setActive} />
            </Suspense>
          </SceneBoundary>
        ) : (
          fallback
        )}
        <span className="scene-caption">
          {lang === 'uk'
            ? 'ОБЕРИ ІНСТРУМЕНТ НИЖЧЕ'
            : 'PICK A KEY. EXPLORE THE STACK.'}
        </span>
      </div>
      <div className="skill-detail" aria-live="polite">
        <span className="mono skill-index">
          {String(active + 1).padStart(2, '0')} / 12
        </span>
        <div>
          <h3 style={{ color: skills[active].color }}>{skills[active].name}</h3>
          <p>{skills[active].detail[lang === 'uk' ? 1 : 0]}</p>
          <span className="mono muted">↳ {skills[active].project}</span>
        </div>
      </div>
      <div
        className="skill-selector"
        role="group"
        aria-label={lang === 'uk' ? 'Обрати технологію' : 'Select a technology'}
      >
        {skills.map((s, i) => (
          <button
            key={s.name}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            style={{ '--key-color': s.color } as CSSProperties}
          >
            <span>
              <SkillIcon index={i} />
            </span>
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}

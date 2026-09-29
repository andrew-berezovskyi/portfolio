import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { github, projects, type Lang } from '../../data/workspace';

function HotelDemo({ uk }: { uk: boolean }) {
  const [booked, setBooked] = useState(false);
  return (
    <div className="hotel-demo">
      <aside>
        <strong>
          H<span>KYIV</span>
        </strong>
        <span className="demo-nav-selected">◫ {uk ? 'Огляд' : 'Overview'}</span>
        <span>▦ {uk ? 'Номери' : 'Rooms'}</span>
        <span>◷ {uk ? 'Бронювання' : 'Reservations'}</span>
        <span>▥ {uk ? 'Звіти' : 'Reports'}</span>
        <small>DEMO WORKSPACE</small>
      </aside>
      <div className="hotel-content">
        <div className="demo-top">
          <span>WORKSPACE / OVERVIEW</span>
          <span>AB ◉</span>
        </div>
        <h3>{uk ? 'Гарного дня, Andrew.' : 'Good afternoon, Andrew.'}</h3>
        <p>{uk ? 'Усе під контролем.' : 'A clear view of your hotel.'}</p>
        <div className="demo-stats">
          <div>
            <small>{uk ? 'ЗАЙНЯТІСТЬ' : 'OCCUPANCY'}</small>
            <strong>
              {booked ? '78' : '75'}
              <i>%</i>
            </strong>
            <span>↗ {uk ? 'демодані' : 'sample data'}</span>
          </div>
          <div>
            <small>{uk ? 'ПОСЕЛЕННЯ' : 'CHECK-INS'}</small>
            <strong>{booked ? '09' : '08'}</strong>
            <span>{uk ? 'сьогодні' : 'today'}</span>
          </div>
          <div>
            <small>{uk ? 'ВІЛЬНІ НОМЕРИ' : 'AVAILABLE'}</small>
            <strong>{booked ? '07' : '08'}</strong>
            <span>{uk ? 'готові для гостей' : 'ready for guests'}</span>
          </div>
        </div>
        <div className="occupancy-chart">
          <div>
            <strong>{uk ? 'Цей тиждень' : 'This week'}</strong>
            <span>● {uk ? 'Зайнятість' : 'Occupancy'}</span>
          </div>
          <div className="bars">
            {[45, 63, 51, 78, 68, 90, 75].map((v, i) => (
              <div key={i}>
                <i style={{ height: `${v}%` }} />
                <span>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="demo-action-row">
          <span>
            <b>204</b> · Deluxe room{' '}
            <small>
              {booked
                ? uk
                  ? 'Заброньовано'
                  : 'Reserved'
                : uk
                  ? 'Вільний'
                  : 'Available'}
            </small>
          </span>
          <button onClick={() => setBooked(!booked)}>
            {booked
              ? uk
                ? 'Скинути'
                : 'Reset demo'
              : uk
                ? 'Поселити гостя'
                : 'Check in guest'}{' '}
            ↗
          </button>
        </div>
      </div>
    </div>
  );
}
function OsDemo({ uk }: { uk: boolean }) {
  const [open, setOpen] = useState(true);
  const [calc, setCalc] = useState(false);
  return (
    <div className="os-demo">
      <div className="os-top">
        <b>B-nix</b>
        <span>Workspace 01</span>
        <span>14:32</span>
      </div>
      <div className="os-icons">
        <button
          onClick={() => {
            setOpen(true);
            setCalc(false);
          }}
        >
          ▣<span>Terminal</span>
        </button>
        <button
          onClick={() => {
            setCalc(true);
            setOpen(true);
          }}
        >
          ▦<span>Calculator</span>
        </button>
      </div>
      <div className="os-wallpaper">
        B<span>nix.</span>
        <small>{uk ? 'ВІД ІДЕЇ ДО ЯДРА.' : 'FROM AN IDEA TO A KERNEL.'}</small>
      </div>
      {open && (
        <div className="os-window">
          <div>
            <span>{calc ? 'calculator' : 'andrew@b-nix: ~'}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label={uk ? 'Закрити вікно' : 'Close window'}
            >
              ×
            </button>
          </div>
          {calc ? (
            <div className="calc-output">
              <small>32 × 1024</small>
              <strong>32768</strong>
              <p>
                {uk
                  ? 'Ілюстрація застосунку ОС'
                  : 'OS application illustration'}
              </p>
            </div>
          ) : (
            <pre>
              <span>andrew@b-nix</span> ~ $ uname
              <br />
              B-nix OS — educational kernel
              <br />
              <br />[ OK ] GDT & IDT initialized
              <br />[ OK ] Memory manager
              <br />[ OK ] VBE display driver
              <br />[ OK ] Desktop ready
              <br />
              <br />
              <span>Welcome to the experiment. ▋</span>
            </pre>
          )}
        </div>
      )}
      <div className="os-dock">
        <button
          onClick={() => {
            setOpen(true);
            setCalc(false);
          }}
        >
          ⌘
        </button>
        <button
          onClick={() => {
            setOpen(true);
            setCalc(true);
          }}
        >
          ▦
        </button>
      </div>
    </div>
  );
}
function WorkshopDemo({ uk }: { uk: boolean }) {
  const [joined, setJoined] = useState(false);
  return (
    <div className="workshop-demo">
      <div className="workshop-nav">
        <b>
          skillbridge<span>✳</span>
        </b>
        <span>
          {uk ? 'Відкрий. Навчись. Поділись.' : 'Discover. Learn. Connect.'}
        </span>
      </div>
      <div className="workshop-heading">
        <small>LEARN SOMETHING TOGETHER</small>
        <h3>{uk ? 'Знайди своїх людей.' : 'Find your people.'}</h3>
        <p>
          {uk
            ? 'Маленькі зустрічі. Великі ідеї.'
            : 'Small workshops. Big ideas.'}
        </p>
      </div>
      <div className="workshop-cards">
        {[
          'Creative coding',
          'Build your first API',
          'Design with intention',
        ].map((name, i) => (
          <div key={name}>
            <div className={`workshop-art art-${i}`}>
              <span>{['{ }', '↗', '✳'][i]}</span>
            </div>
            <small>{['TECHNOLOGY', 'BACKEND', 'DESIGN'][i]}</small>
            <h4>{name}</h4>
            <p>
              {i === 0 && joined ? '5' : '6'}{' '}
              {uk ? 'місць · Онлайн' : 'seats left · Online'}
            </p>
            {i === 0 ? (
              <button onClick={() => setJoined(!joined)}>
                {joined
                  ? uk
                    ? 'Скасувати участь ✓'
                    : 'Cancel reservation ✓'
                  : uk
                    ? 'Долучитися ↗'
                    : 'Reserve a seat ↗'}
              </button>
            ) : (
              <span className="workshop-static">
                {uk ? 'Приклад воркшопу' : 'Sample workshop'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
function ApiDemo({ uk }: { uk: boolean }) {
  const [response, setResponse] = useState(false);
  return (
    <div className="api-demo">
      <div className="api-top">
        <span>◈ ROOM / API</span>
        <small>INTERACTIVE SANDBOX</small>
      </div>
      <h3>
        {uk ? 'Наступна зустріч — простіше.' : 'Your next meeting, sorted.'}
      </h3>
      <div className="api-request">
        <b>GET</b>
        <code>/api/v1/rooms</code>
        <button onClick={() => setResponse(!response)}>
          {response
            ? uk
              ? 'Скинути'
              : 'Clear'
            : uk
              ? 'Запит'
              : 'Send request'}{' '}
          ↗
        </button>
      </div>
      <div className="api-response">
        <div>
          <span>RESPONSE</span>
          <span>{response ? '200 OK · SAMPLE' : 'READY'}</span>
        </div>
        <pre>
          {response
            ? '{\n  "rooms": [\n    { "name": "A", "capacity": 20 },\n    { "name": "B", "capacity": 10 },\n    { "name": "C", "capacity": 8 }\n  ]\n}'
            : uk
              ? '// Натисни «Запит», щоб побачити приклад.\n// Це локальна симуляція відповіді API.'
              : '// Send a request to see a sample response.\n// This is a local API simulation.'}
        </pre>
      </div>
    </div>
  );
}
function PipelineDemo({ uk }: { uk: boolean }) {
  const [step, setStep] = useState(0);
  const names = uk
    ? ['Пошук', 'Перевірка', 'OCR', 'Перегляд', 'Черга']
    : ['Discover', 'Screen', 'OCR check', 'Review', 'Queue'];
  return (
    <div className="pipeline-demo">
      <div className="api-top">
        <b>
          VibeRush<span> / studio</span>
        </b>
        <small>HUMAN IN THE LOOP</small>
      </div>
      <h3>{uk ? 'Від джерела до рішення.' : 'From source to decision.'}</h3>
      <p>
        {uk
          ? 'Розумна автоматизація починається з контролю.'
          : 'Thoughtful automation starts with control.'}
      </p>
      <div className="pipeline-steps">
        {names.map((name, i) => (
          <button
            key={name}
            aria-pressed={i === step}
            onClick={() => setStep(i)}
          >
            <span>{['⌕', '◈', 'Aa', '◎', '▤'][i]}</span>
            <small>{name}</small>
            <i className={i <= step ? 'complete' : ''} />
          </button>
        ))}
      </div>
      <div className="pipeline-console">
        <span>
          0{step + 1} / {names[step]}
        </span>
        <p>
          {
            (uk
              ? [
                  'Пошук у налаштованих джерелах.',
                  'Перевірка медіа та пошук дублікатів.',
                  'Аналіз тексту й ознак водяних знаків.',
                  'Неоднозначні результати очікують рішення людини.',
                  'Схвалений матеріал потрапляє в чергу.',
                ]
              : [
                  'Discover candidates from configured sources.',
                  'Check media properties and possible duplicates.',
                  'Inspect text and watermark evidence.',
                  'Ambiguous candidates wait for human review.',
                  'Approved media enters the processing queue.',
                ])[step]
          }
        </p>
      </div>
    </div>
  );
}
export default function ProjectShowcase({ lang }: { lang: Lang }) {
  const uk = lang === 'uk';
  const [active, setActive] = useState(0);
  const manualSelection = useRef(false);
  const container = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const tilt = useTransform(scrollYProgress, [0, 0.16, 0.88, 1], [7, 0, 0, -2]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (
        manualSelection.current ||
        !container.current ||
        !matchMedia('(min-width: 900px)').matches ||
        reduced
      )
        return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (manualSelection.current || !container.current) return;
        const rect = container.current.getBoundingClientRect();
        const distance = rect.height - window.innerHeight;
        const value = distance > 0 ? -rect.top / distance : 0;
        setActive(
          Math.max(
            0,
            Math.min(projects.length - 1, Math.floor(value * projects.length)),
          ),
        );
      });
    };
    const resumeScroll = () => {
      manualSelection.current = false;
    };
    const resumeKeyboard = (event: KeyboardEvent) => {
      if (
        ['PageDown', 'PageUp', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(
          event.key,
        )
      )
        resumeScroll();
    };
    window.addEventListener('wheel', resumeScroll, { passive: true });
    window.addEventListener('touchmove', resumeScroll, { passive: true });
    window.addEventListener('keydown', resumeKeyboard);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('wheel', resumeScroll);
      window.removeEventListener('touchmove', resumeScroll);
      window.removeEventListener('keydown', resumeKeyboard);
    };
  }, [reduced]);
  const select = (index: number) => {
    manualSelection.current = true;
    setActive(index);
  };
  const project = projects[active];
  return (
    <div
      ref={container}
      className="project-scroll"
      data-reduced={reduced ? 'true' : 'false'}
    >
      <div
        className="project-sticky"
        style={{ '--project-color': project.color } as CSSProperties}
      >
        <div
          className="project-tabs"
          role="group"
          aria-label={uk ? 'Обрати проєкт' : 'Select a project'}
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              aria-pressed={active === i}
              onClick={() => select(i)}
            >
              <span>{p.number}</span>
              {p.title}
            </button>
          ))}
        </div>
        <div className="laptop-stage">
          <motion.div
            className="laptop"
            style={{ rotateX: reduced ? 0 : tilt }}
          >
            <div className="laptop-lid">
              <span className="camera" />
              <div className="laptop-screen">
                <div className="screen-toolbar">
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <small>andrew.workspace / {project.id}</small>
                  <span>↗</span>
                </div>
                <div className="screen-app" key={project.id}>
                  {active === 0 ? (
                    <HotelDemo uk={uk} />
                  ) : active === 1 ? (
                    <OsDemo uk={uk} />
                  ) : active === 2 ? (
                    <WorkshopDemo uk={uk} />
                  ) : active === 3 ? (
                    <ApiDemo uk={uk} />
                  ) : (
                    <PipelineDemo uk={uk} />
                  )}
                </div>
              </div>
              <span className="laptop-name">ANDREW’S WORKSPACE</span>
            </div>
            <div className="laptop-base">
              <span />
            </div>
            <div className="laptop-foot" />
          </motion.div>
          <div className="laptop-glow" />
        </div>
        <div className="demo-disclosure">
          <span>
            ◉ {uk ? 'ІНТЕРАКТИВНА СИМУЛЯЦІЯ' : 'INTERACTIVE SIMULATION'}
          </span>
          <span>
            {uk
              ? 'Демо-інтерфейс · Не оригінальний застосунок'
              : 'Illustrative UI · Not the original application'}
          </span>
        </div>
        <div className="project-description" aria-live="polite">
          <div>
            <span className="eyebrow">
              {project.number} / {project.category}
            </span>
            <h3>
              {project.title}
              <span>®</span>
            </h3>
            <div className="stack-tags">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p>{project.description[uk ? 1 : 0]}</p>
            <small>{project.note[uk ? 1 : 0]}</small>
            <a
              className="text-link"
              href={`${github}/${project.repo}`}
              target="_blank"
              rel="noreferrer"
            >
              {uk ? 'Переглянути код' : 'Explore the source'} ↗
            </a>
          </div>
        </div>
        <div className="project-progress" aria-hidden="true">
          {projects.map((p, i) => (
            <span key={p.id} className={i === active ? 'active' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
}

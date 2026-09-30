import {
  siDotnet,
  siPython,
  siTypescript,
  siReact,
  siDjango,
  siAstro,
  siSqlite,
  siGit,
  siDocker,
  siC,
  siHtml5,
} from 'simple-icons';

// Only these brand paths are included by the bundler, not the icon catalog.
const icons = [
  null,
  siDotnet,
  siPython,
  siTypescript,
  siReact,
  siDjango,
  siAstro,
  siSqlite,
  siGit,
  siDocker,
  siC,
  siHtml5,
];
export const skillLogoPath = (index: number) => icons[index]?.path;
export default function SkillIcon({ index }: { index: number }) {
  const icon = icons[index];
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="skill-icon">
      {icon ? (
        <path fill="currentColor" d={icon.path} />
      ) : (
        <text
          x="12"
          y="12.5"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Arial,sans-serif"
          fontWeight="700"
          fontSize={index === 0 ? 13 : 9}
          fill="currentColor"
        >
          {index === 0 ? 'C#' : '.NET'}
        </text>
      )}
    </svg>
  );
}

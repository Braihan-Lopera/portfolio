import "./SectionHeader.css";

interface SectionHeaderProps {
  index: string;
  title: string;
  align?: "left" | "center";
}

/** Encabezado de sección reutilizable: número + título + línea guía. */
export default function SectionHeader({
  index,
  title,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      <span className="section-header__index">{index}</span>
      <h2 className="section-header__title">{title}</h2>
      <span className="section-header__rule" aria-hidden="true" />
    </div>
  );
}

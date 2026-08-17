import "./Skills.css";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiGit,
  SiLinux,
  SiDocker,
  SiSpringboot,
} from "react-icons/si";
import { FaDatabase, FaFileExcel, FaServer, FaJava } from "react-icons/fa6";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Skill {
  name: string;
  Icon: IconType;
  /** Color de marca; tiñe el logo y, muy sutilmente, el fondo de la ficha. */
  color: string;
}

interface SkillGroup {
  title: string;
  items: Skill[];
}

// Logos de marca (Simple Icons) donde existen; iconos genéricos para
// SQL Server, Excel y Self-hosting, que no tienen logo disponible.
const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Datos",
    items: [
      { name: "SQL Server", Icon: FaDatabase, color: "#CC2927" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Excel", Icon: FaFileExcel, color: "#217346" },
    ],
  },
  {
    title: "Desarrollo",
    items: [
      { name: "Java", Icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
    ],
  },
  {
    title: "Infraestructura",
    items: [
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Self-hosting", Icon: FaServer, color: "#9CA3AF" },
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="skills section reveal" ref={ref}>
      <div className="container">
        <SectionHeader index="02" title="Habilidades" />
        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skills__group">
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map(({ name, Icon, color }) => (
                  <li
                    key={name}
                    className="skills__tile"
                    style={{ "--chip-color": color } as CSSProperties}
                  >
                    <Icon className="skills__tile-icon" aria-hidden="true" />
                    <span className="skills__tile-label">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

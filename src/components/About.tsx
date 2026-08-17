import "./About.css";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FACTS = [
  { label: "Enfoque", value: "Análisis de datos" },
  { label: "Aprendiendo", value: "Desarrollo & despliegues" },
  { label: "Entorno", value: "Linux · Docker · SQL" },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className="about section reveal" ref={ref}>
      <div className="container">
        <SectionHeader index="01" title="Sobre mí" />
        <div className="about__grid">
          <div className="about__body">
            <p className="about__text">
              He trabajado en areas como People Analytics, donde mi día a día es
              consumir, limpiar y mostrar datos de distintas fuentes para
              entregar información veraz a otras áreas. Me enfoco en entender
              bien el problema, el flujo de los datos antes de escribir una sola
              linea, porque un dato mal interpretado cuesta más que uno que
              tarda un poco más en llegar.
            </p>
            <p className="about__text">
              En paralelo construyo y administro mi propio servidor casero y
              aprendo desarrollo web, comandos linux y despliegues para cerrar
              el ciclo completo: del dato crudo a un producto que cualquiera
              pueda usar.
            </p>
          </div>
          <aside className="about__aside">
            {FACTS.map((fact) => (
              <div key={fact.label} className="about__fact">
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-value">{fact.value}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

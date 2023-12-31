import Contact from "../components/Contact.jsx";
import Presentation from "../components/Presentation.jsx";
import Skills from "../components/Skills.jsx";
import ContainerProjects from "../components/containerSkills/containerSkills.jsx";

function Home() {
  return (
    <div className="app-container">
      <div className="first-page">
        <Presentation />
      </div>
      <div className="skills-containers" id="skill-container-id">
        <Skills />
      </div>
      <div className="project-containers">
        <h1>
          {" "}
          <span className="title-skills-h1">Projets</span>
        </h1>
        <div
          className="container-project-container-first"
          id="ContainerProjectId"
        >
          <ContainerProjects />
        </div>
      </div>
      <div className="footer-container">
        <Contact />
      </div>
    </div>
  );
}

export default Home;

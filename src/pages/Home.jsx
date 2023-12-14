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
      <div className="skills-containers">
        <Skills />
      </div>
      <div className="project-containers">
        <h1>project</h1>
        <div>
          <ContainerProjects />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Home;

import Projet from "../Projet.jsx";

function ContainerProjects() {
  const phrase = "lorem ipsum";
  const testing = "lorem ipsum";

  return (
    <div className="container-with-project">
      <div className="first-container-of-my-project">
        <Projet
          icone="test"
          link={phrase}
          title={testing}
          text={"text"}
          techno1={"text"}
          techno2={"text"}
          techno3={"text"}
        />
        <div className="second-container-of-my-project">
          <Projet
            icone="test"
            link={phrase}
            title={testing}
            text={"text"}
            techno1={"text"}
            techno2={"text"}
            techno3={"text"}
          />
        </div>
      </div>
      <div className="third-container-of-my-project">
        <Projet
          icone="test"
          link={phrase}
          title={testing}
          text={"text"}
          techno1={"text"}
          techno2={"text"}
          techno3={"text"}
        />
      </div>
    </div>
  );
}

export default ContainerProjects;

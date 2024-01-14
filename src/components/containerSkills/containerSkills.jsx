import Projet from "../Projet.jsx";

function ContainerProjects() {
  return (
    <div className="container-with-project">
      <div className="first-container-of-my-project">
        <Projet
          link={"https://github.com/Sarhane64/crytpoAnalytics"}
          icone={<img src="/github.svg" width={35} alt="github" />}
          optionlink={"https://cryptoanalytixtheosarhane.netlify.app/"}
          optionIcon={<img src="/web.svg" width={35} alt="url" />}
          title={"CryptoAnalitiX"}
          text={`Développement d'une application permettant aux utilisateurs de suivre les informations sur diverses crypto-monnaies. L'application inclut un tableau détaillé avec de nombreuses cryptos, offrant la possibilité de trier les données selon divers critères tels que le prix, la capitalisation boursière, etc.`}
          techno1={"React"}
          techno2={"SCSS"}
          techno3={"Recharts"}
        />
        <div className="second-container-of-my-project">
          <Projet
            link={"https://github.com/Sarhane64/js-template-fullstack"}
            icone={<img src="/github.svg" width={35} alt="github" />}
            title={"Immobilier"}
            text={`Application sur le thème de la vente immobilière,
              le but est de mettre en place un CRUD et de la gestion d'une BDD .`}
            techno1={"React"}
            techno2={"Sql"}
            techno3={"Express"}
          />
        </div>
        <div className="third-container-of-my-project">
          <Projet
            link={
              "https://github.com/WildCodeSchool-2023-09/JS-RMT-React_If-Projet3-Wildy-Gamy"
            }
            icone={<img src="/github.svg" width={35} alt="github" />}
            optionlink={
              "https://www.figma.com/file/vQMghf027CqugVVYcP43qH/Projet-wildy-gamy?type=design&node-id=0-1&mode=design&t=81VP2wGUHmFWZ0SK-0"
            }
            optionIcon={<img src="/figma.svg" width={35} alt="figma" />}
            title={"Wildy-Gamy"}
            text={`Plateforme de jeu. Au départ, trois jeux classiques seront accessibles 
            (Memorize, Tic Tac ait et Word Typer). L'objectif est de mettre en place un 
            réseau social autour des performances de chaque joueur pour créer de l'émulation.`}
            techno1={"React"}
            techno2={"Sql"}
            techno3={"Jwt"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContainerProjects;

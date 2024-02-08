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
            link={"https://github.com/Sarhane64/pokedexInAngular"}
            icone={<img src="/github.svg" width={35} alt="github" />}
            optionlink={"https://voluble-dango-3045bd.netlify.app"}
            optionIcon={<img src="/web.svg" width={35} alt="url" />}
            title={"Pokedex"}
            text={`Cette application immersive sur le thème Pokemon est conçue pour offrir une expérience captivante. Elle intègre une gestion avancée d'API (PokeAPI), offrant ainsi une plongée profonde dans les mondes des Pokémon. Le développement de l'application s'articule autour des technologies modernes telles qu'Angular et Typescript, offrant une base solide pour la création d'interfaces utilisateur dynamiques et réactives.`}
            techno1={"Angular"}
            techno2={"Typescript"}
            techno3={"Rest Api"}
          />
        </div>
        <div className="third-container-of-my-project">
          <Projet
            link={
              "https://github.com/WildCodeSchool-2023-09/JS-RMT-React_If-Projet3-Wildy-Gamy"
            }
            icone={<img src="/github.svg" width={35} alt="github" />}
            optionlink={"https://wildy-gamy.remote-fr-3.wilders.dev/"}
            optionIcon={<img src="/web.svg" width={35} alt="url" />}
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

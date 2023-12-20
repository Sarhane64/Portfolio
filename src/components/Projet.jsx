/* eslint-disable react/prop-types */
function Projet({ icone, link, title, text, techno1, techno2, techno3 }) {
  return (
    <div className="projects-container">
      <div className="first-project">
        <div className="first-project-top-container">
          <a href={link}>icone </a>
          <span>{icone}</span>
        </div>
        <div className="main-container">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <button>{techno1}</button>
        <button>{techno2}</button>
        <button>{techno3}</button>
      </div>
    </div>
  );
}

export default Projet;

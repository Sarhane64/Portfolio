function Presentation() {
  const mailTo = () => {
    window.location.href = "mailto:sarhane64600@gmail.com";
  };
  const linkTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className="presentation-container">
      <div className="container-of-all">
        <div className="presentation-p">
          <h1>
            Théo<span className="title-skills-h1"> Sarhane</span>
          </h1>
          <p>Developeur Junior Web.</p>
          <div className="left-bottom-part">
            <button
              onClick={() =>
                linkTo(
                  "https://www.linkedin.com/in/th%C3%A9o-sarhane-0740aa284/"
                )
              }
            >
              Linkedin
            </button>
            <button onClick={mailTo}>Email</button>
            <button onClick={() => linkTo("https://github.com/Sarhane64")}>
              Github
            </button>
          </div>
        </div>
        <div className="picture-container">
          <div className="picture">
            <img src="/profile.jpg" alt="profil" width={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;

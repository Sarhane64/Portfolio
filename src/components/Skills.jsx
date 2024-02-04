function Skills() {
  return (
    <>
      <h1 className="title-skill">
        <span className="title-skills-h1">Skills</span>
      </h1>
      <div className="skills-container">
        <div className="skill">
          <h3>Design</h3>
          <div className="skillLiContainer">
            <li>
              <span>
                <img width={40} src="/sass.svg" alt="sass" />
              </span>
              Sass
            </li>
            <li>
              <span>
                <img width={40} src="/figma.svg" alt="figma" />
              </span>
              Figma
            </li>
          </div>
        </div>
        <div className="skill">
          <h3>Frontend</h3>
          <div className="skillLiContainer">
            <li>
              <span>
                <img width={40} src="/reactjs.svg" alt="react" />
              </span>
              React
            </li>
          </div>
        </div>
        <div className="skill">
          <h3>Backend</h3>
          <div className="skillLiContainer">
            <li>
              <span>
                <img width={40} src="/mysql.svg" alt="sql" />
              </span>
              Sql
            </li>
            <li>
              <span>
                <img width={40} src="/nodejs.svg" alt="node" />
              </span>{" "}
              Node
            </li>
          </div>
        </div>
        <div className="skill">
          <h3>Other</h3>
          <div className="skillLiContainer">
            <li>
              <span>
                <img width={40} src="/github.svg" alt="github" />
              </span>{" "}
              git & github
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

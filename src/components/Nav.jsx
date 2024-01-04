function Nav() {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.setAttribute("download", "cv.pdf");
    link.click();
  };

  return (
    <nav className="nav-container">
      <ul className="ul-nav-container">
        <li>
          <a href="#skill-container-id">Skills</a>
        </li>
        <li>
          <a href="#ContainerProjectId">Projets</a>
        </li>
        <li onClick={downloadCv}>Cv</li>
      </ul>
    </nav>
  );
}

export default Nav;

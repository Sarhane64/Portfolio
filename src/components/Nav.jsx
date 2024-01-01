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
        <li>Skills</li>
        <li>Projet</li>
        <li onClick={downloadCv}>Cv</li>
      </ul>
    </nav>
  );
}

export default Nav;

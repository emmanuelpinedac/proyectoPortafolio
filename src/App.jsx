import "./App.css";
import NavBar from "./NavBar";
import SobreMi from "./SobreMi";
import Contact from "./Contact";
import Work from "./Work";

function App() {
  const myWork = [
    {
      image: "public/imagen 1.png",
      name: "Angular Routing Project",
      technologies: ["Angular", "Netlify", "Github"],
      link: "https://github.com/emmanuelpinedac/ProyectoFinal",
    },
    {
      image: "public/imagen 2.png",
      name: "Medical Appointment Manager",
      technologies: ["React", "Javascript", "Bootstrap"],
      link: "https://github.com/emmanuelpinedac/tareaVite.git",
    },
    {
      image: "public/imagen 3.png",
      name: "VW Project",
      technologies: ["Vainilla", "Css", "Bootstrap"],
      link: "https://github.com/emmanuelpinedac/PROYECTO-VW.git",
    },
  ];

  return (
    <div className="container-fluid">
      <NavBar />
      <br id="aboutMe" />
      <br /> <br />
      <br /> <br />
      <br />
      <SobreMi />
      <br id="myWork"/>
      <br />
      <br  />
      <div id="worksTitle">
        <h2>
          <strong>myWork. </strong>
        </h2>
      </div>
      <div className="container-fluid row justify-content-center">
        {myWork.map((work) => (
          <div className="col-xl-4 col-md-6 col-sm-9" key={work.name}>
            <Work work={work} />
          </div>
        ))}
      </div>
      <br />
      <Contact />
      <br id="contactMe" />
      <div id="icons">
        <i id="icon" class="fa-brands fa-square-font-awesome-stroke"></i>
        <i id="icon" class="fa-brands fa-react"></i>
        <i id="icon" class="fa-brands fa-bootstrap"></i>
        <i id="icon" class="fa-brands fa-css3"></i>
      </div>
      <div id="footer">
        <p>© emmanuelPinedaCubero, Inc. 2022</p>
      </div>
    </div>
  );
}

export default App;

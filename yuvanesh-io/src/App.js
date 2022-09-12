import './App.css';
import logo from './logo.png'
import skills from './skills.png'
import bar from './bar.png'
import polaroid from './polaroid.png'
import {FaReact, FaPython, FaHtml5, FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiPytorchlightning} from 'react-icons/si'

function App() {

  const scrollToExperience = () => {
    let element = document.getElementById("experience");

    element.scrollIntoView({behavior: "smooth"});
  }

  const scrollToProject = () => {
    let element = document.getElementById("projects");

    element.scrollIntoView({behavior: "smooth"});
  }

  const scrollToContact = () => {
    let element = document.getElementById("contact");

    element.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="App">
       <header className="App-header">
          <div className="App-navbar">
             <div className="App-navbar-navs">
                <div onClick={scrollToProject} className="App-navbar-navs-item"> Projects </div>
                <div onClick={scrollToExperience} className="App-navbar-navs-item"> Experience </div>
                <div onClick={scrollToContact} className="App-navbar-navs-item"> Contact </div>
             </div>
          </div>
       </header>
       <div className="App-content" >
          <div className="App-content-bg">
             <img src={polaroid} className="App-content-bg-img"/>
          </div>
          <div className="App-content-titlecard" style={{'zIndex':'99', 'position':'relative'}}>
             <div className="App-content-titlecard-intro">
                <i> {"Hey I'm"} </i>
             </div>
             <div className="App-content-titlecard-name">
                Yuvanesh Anand
             </div>
             <div className="App-content-titlecard-socials">
                <FaGithub className="icon" onClick={() => window.open('https://github.com/Yuvanesh-ux', '_blank')} />
                <FaLinkedin className="icon" onClick={() => window.open('https://www.linkedin.com/in/yuvanesh-anand-760521233/', '_blank')}/>
             </div>
          </div>
       </div>
      <div className="App-experience" id="experience">
         <div className="App-experience-title"> Experience </div>
         <div className="App-experience-container">
            <div className="App-experience-nomic">
               <div className="App-experience-nomic-logo">
                    <img className="App-experience-nomic-logo-img" src={logo} alt="logo"/>
               </div>
               <div className="App-experience-nomic-infocard">
                  <div className="App-experience-nomic-bar">
                     <img className="App-experience-nomic-bar-img" src={bar} alt=""/>
                  </div>
                  <div className="App-experience-nomic-info">
                     <div className="App-experience-nomic-info-swe">
                        <div className="App-experience-nomic-swe-title"> Junior Software Engineer </div>
                        <div className="App-experience-nomic-swe-description">
                           - Leveraging <i>React.Js</i> and <i>Python</i> to create beautiful and intuitive FE experiences for Nomic’s Atlas maps
                        </div>
                        <div className="App-experience-nomic-swe-description2">
                            - Used algorithms such as k-means and agglomerate clustering to generate automated topics from mappings of data
                        </div>
                     </div>
                     <div className="App-experience-nomic-intern">
                        <div className="App-experience-nomic-intern-title">
                            Intern
                        </div>
                        <div className="App-experience-nomic-intern-description">
                            - Created data pipelines from various sources around the world, e.x Twitter, Box
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="App-experience-skill">
               <div className="App-experience-skill-logo">
                  <img className="App-experience-skill-logo-img" src={skills} alt=""/>
               </div>
               <div className="App-experience-skill-item-container">
                  <div className="App-experience-skill-item"> <FaReact style={{'fontSize':'40px', 'color':'#61DBFB'}}/> <div>React</div> </div>
                  <div className="App-experience-skill-item"> <FaPython style={{'fontSize':'40px', 'color':'#FFD43B'}}/> <div>Python</div> </div>
                  <div className="App-experience-skill-item"> <FaHtml5 style={{'fontSize':'40px', 'color':'#f54747'}}/><div>HTML/CSS</div> </div>
                  <div className="App-experience-skill-item"> <SiPytorchlightning style={{'fontSize':'40px', 'color':'#990cf5'}}/> <div>Pytorch Lightning</div> </div>
               </div>
            </div>
         </div>
      </div>
      <div className="App-projects" id="projects">
         <div className="App-projects-container">
             <div className="App-projects-container-title"> Projects </div>
             <div className="App-projects-projectcards">
                <div onClick={() => window.open('https://github.com/Tether-Solutions/Tether', '_blank')} className="App-projects-projectcards-card hvr-bounce-to-right"> <div style={{'margin': '0 auto', 'fontSize':'25px'}}>Tether</div> </div>
                <div className="App-projects-projectcards-card hvr-bounce-to-right"> <div style={{'margin': '0 auto', 'fontSize':'25px'}}>Project E</div> </div>
             </div>
         </div>
         <div className="App-projects-contact" id="contact">
            <div className="App-projects-contact-title"> Contact </div>
            <div className="App-projects-contact-container">
                <div className="App-projects-contact-container-item"> Yuvanesh Anand </div>
                <div className="App-projects-contact-container-item"> Phone Number: 804-547-9964 </div>
                <div className="App-projects-contact-container-item"> Email: pilotyuvanesh@gmail.com </div>
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;

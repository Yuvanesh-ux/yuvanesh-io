import { Navbar } from "./Navbar";
import { FaPython, FaReact, FaHtml5 } from "react-icons/fa"
import { SiPytorchlightning } from "react-icons/si"

export function Experience() {
  return (
    <div>
      <body>
        <main className="experience-main" id='main'>
          <div className="experience-card-container">
            <div className="experience-top-card">
            </div>
            <div className="experience-bottom-card">
              <div className="bottom-card-textcontainer">
                <p className="para-1">- Leveraging React.Js and Python to create beautiful and intuitive FE experiences for Nomic's Atlas maps</p>
                <p className="para-2">- Used algorithms such as k-means and agglomerate clustering to generate automated topics from mappings of data</p>
              </div>
              <h1 className="junior-topright">Junior Software Engineer</h1>
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-container-left">
              <div className="logo-react"><FaReact className="react hvr-grow-rotate"/></div>
              <div className="logo-python"><FaPython className="python "/></div>
            </div>
            <div className="logo-container-right">
              <div className="logo-pytorch"><SiPytorchlightning className="pytorch hvr-shrink"/></div>
              <div className="logo-htmlcss"><FaHtml5 className="hvr-bob"/></div>
            </div>
          </div>
        </main>
        <Navbar/>
      </body>
    </div>
  );
}

import foundation from "../data/foundation.jsx"
import org from "../data/org.jsx";
import local from "../data/local.jsx";
import {useState} from "react";
function Forwho() {
    const [selectedContent, setSelectedContent] = useState([]);
    const [selectedButton, setSelectedButton] = useState("");
    const handleButtonClick = (content, buttonLabel) => {
        setSelectedContent(content);
        setSelectedButton(buttonLabel);
    }
    return (

            <section className="container forwho">
                <h2>Komu pomagamy </h2>
                <div className="buffer"></div>
                <div className="forwho_options">
                    <button type="button" className="forwho_fund options" onClick={()=> handleButtonClick(foundation, "Fundacjom")}>Fundacjom </button>
                    <button type="button" className="forwho_organizations options" onClick={()=> handleButtonClick(org, "Organizacjom pozarządowym")}>Organizacjom pozarządowym </button>
                    <button type="button" className="forwho_local options" onClick={()=> handleButtonClick(local, "Lokalnym Zbiórkom")}>Lokalnym Zbiórkom </button></div>

                <p className="forwho_text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują. </p>

                <div className="forwho_fundations">

                    {selectedContent.map((item)=>
                        <div className="forwho_fundations_options" key={item.id}>
                        <h4>Fundacja {item.name}</h4>
                        <p className="forwho_fundations_options_text">{item.things}</p>
                        <p>{item.point}</p>
                        </div> )
                        }


                </div>



            </section>

    )
}

export default Forwho
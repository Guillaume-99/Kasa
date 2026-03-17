// stock valeur pour déroulant
import { useState } from "react";

import '../assets/scss/Accordion.scss'

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion__title" onClick={() => setIsOpen(!isOpen)}>
                <p>{title}</p>
                <i className={isOpen ? "fa-rotate-180 fa-solid fa-chevron-up " : "i-close fa-solid fa-chevron-up"}></i>
            </div>
            <div className={`accordion__content ${isOpen ? "accordion__content--open" : ""}`}>
                {children}
            </div>
        </div>
    );
}

export default Accordion;
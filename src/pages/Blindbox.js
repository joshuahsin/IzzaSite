import * as React from "react";
import { useState, useEffect } from "react";
import Image1 from "../images/sweetBean1.jpg";
import Image2 from "../images/sweetBean2.jpg";
import Image3 from "../images/sweetBean3.jpg";
import Image4 from "../images/sweetBean4.jpg";
import Image5 from "../images/sweetBean5.jpg";
import Image6 from "../images/sweetBean6.jpg";
import Image7 from "../images/sweetBean7.jpg";
import Image8 from "../images/sweetBean8.jpg";
import Image9 from "../images/sweetBean9.jpg";
import Image10 from "../images/sweetBean10.jpg";
import Image11 from "../images/sweetBean11.jpg";
import Image12 from "../images/sweetBean12.jpg";
import Background from "../images/cloudBackground.jpg";

const Blindbox = () => {
    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12];

    const [currentIndex, setCurrentIndex] = useState(0);

    var timerId = null;

    useEffect(() => {
        let index;
    
        // logic stays the same
        if(currentIndex === images.length - 1) {
            //setCurrentIndex(0);
            index = 0;
        } 
        else {
            index = currentIndex + 1;
        }
    
        // update the word
        timerId = setTimeout(() => setCurrentIndex(index), 100);
    }, [currentIndex]);

    const select = () => {
        if (timerId) {
            clearTimeout(timerId)
            timerId = null
        }
        if(currentIndex == 12) {
            alert("Congratulations, you got the secret!");
        }
    }

    const reset = () => {
        let index;
    
        // logic stays the same
        if(currentIndex === images.length - 1) {
            //setCurrentIndex(0);
            index = 0;
        } 
        else {
            index = currentIndex + 1;
        }

        timerId = setTimeout(() => setCurrentIndex(index), 100);
    }

    return (
        <div style={{backgroundImage: `url(${Background})`, backgroundSize: "100%", backgroundRepeat: "repeat"}}>
            <center>
                <img src={images[currentIndex]} height="44%" width="44%" onClick={select}/>
            </center>
            <center>
                <button id="button" onClick={reset} style={{cursor: "pointer",
                                                outline: "0",
                                                color: "#000",
                                                backgroundColor: "#FFC0CB",
                                                borderColor: "#000",
                                                display: "inline-block",
                                                fontWeight: "400",
                                                lineHeight: "1.5",
                                                textAlign: "center",
                                                border: "2px solid",
                                                padding: "6px 12px",
                                                fontSize: "16px",
                                                borderRadius: ".25rem",
                                                transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                                                }}>
                Re-Roll!</button>
            </center>
        </div>
    )
}
  
export default Blindbox;
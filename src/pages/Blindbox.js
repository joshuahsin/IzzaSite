import * as React from "react";
import { useState, useEffect } from "react";
import Image1 from "../images/sweetBean1.jpg";
import Image2 from "../images/sweetBean2.jpg";
import Image3 from "../images/sweetBean3.jpg";

const Blindbox = () => {
    const images = [Image1, Image2, Image3];

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
    }

    return (
        <div>
            <center>
                <img src={images[currentIndex]} height="45%" width="45%" onClick={select}/>
            </center>
        </div>
    )
}
  
  export default Blindbox;
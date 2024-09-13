import * as React from "react";
import { useState, useEffect } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";
import Background from "../images/CinnaBG.jpg";

const Traits = () => {
    const [cards, setCards] = useState([{id: 1, "frontHTML": "", "backHTML": ""}]);

    const fetchData = async () => {
        // get the data from the api
        const data = await fetch('https://izza-site-backend-797611a09f8c.herokuapp.com/app/allTraits');
        // convert data to json
        const json = await data.json();

        setCards(json);
    }

    useEffect(() => {
        const result = fetchData()
          .catch(console.error);
    }, []);

    return (
        <div style={{backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <center>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <FlashcardArray cards={cards} 
                    frontContentStyle={{
                        margin: "auto",
                        width: "50%",
                        height: "50%"
                    }}
                    backContentStyle={{
                        margin: "auto",
                        width: "50%",
                        height: "50%"
                    }}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </center>
        </div>
    );
}
  
  export default Traits;
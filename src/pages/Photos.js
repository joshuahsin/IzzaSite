import * as React from "react";
import './Photos.css';
import { useState, useEffect } from "react";
import { ImageGallery } from "react-image-grid-gallery";
import AWS from 'aws-sdk';
import Background from "../images/cloudBackground.jpg";

const Photos = () => {
    const [images, setImages] = useState([{alt:"", src:"", caption:""}]);
    const [file, setFile] = useState({});
    const [description, setDescription] = useState("");

    const fetchData = async () => {
        // get the data from the api
        const data = await fetch('https://izza-site-backend-797611a09f8c.herokuapp.com/app/allImages');
        // convert data to json
        const json = await data.json();

        setImages(json);
    }

    useEffect(() => {
        const result = fetchData()
          .catch(console.error);
    }, []);

    /*const uploadFile = async () => {
        // S3 Bucket Name
        const S3_BUCKET = "izza-images";
    
        // S3 Region
        const REGION = "us-west-1";
    
        // S3 Credentials
        AWS.config.update({
          accessKeyId: "",
          secretAccessKey: "",
        });
        const s3 = new AWS.S3({
          params: { Bucket: S3_BUCKET },
          region: REGION,
        });
    
        // Files Parameters
    
        const params = {
          Bucket: S3_BUCKET,
          Key: file.name,
          Body: file,
        };
    
        // Uploading file to s3
    
        var upload = s3
          .putObject(params)
          .on("httpUploadProgress", (evt) => {
            // File uploading progress
            console.log(
              "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
            );
          })
          .promise();
    
        await upload.then(() => {
          // File successfully uploaded
          const data = {"caption": description, 
                        "src": "https://izza-images.s3.us-west-1.amazonaws.com/" + file.name};
          fetch('http://localhost:8080/app/createImage', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
          }).then(() => fetchData())
          .catch(console.error);

          alert("File uploaded successfully.");
        }).catch((error) => {console.log(error);});
    };*/

    /*const handleFileChange = (e) => {
        // Uploaded file
        const file = e.target.files[0];
        // Changing file state
        setFile(file);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }*/

    return (
        <div style={{backgroundImage: `url(${Background})`, backgroundSize: "100%", backgroundRepeat: "repeat"}}>
          <ImageGallery
              imagesInfoArray={images}
              columnCount={"auto"}
              columnWidth={230}
              gapSize={18}
              style={{margin:"5 px"}}
          />
        </div>
    );
}

/*<center>
<input type="file" onChange={handleFileChange} />
<label htmlFor="name">Image Description:</label>
<input type="text" onChange={handleDescriptionChange}></input>
<button onClick={uploadFile}>Upload Image</button>
</center>*/

export default Photos;
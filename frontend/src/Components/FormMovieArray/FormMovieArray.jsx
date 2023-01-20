import React from "react";
import { useFormikContext } from "formik";

const FormMovieArray = ({ personIndex, contactsArrayHelpers }) => {
    const [movie, setMovie] = React.useState("");
    const [subTitle, setSubTitle] = React.useState("");
    const { values } = useFormikContext();
  
    const handleAddContactNumber = () => {
      const movies = {};
      movies.movie = movie;
      movies.subTitle = subTitle;
  
      contactsArrayHelpers.push(movies);
      setMovie("");
      setSubTitle("");
    };
  
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
    const handleChange = async (event) => {
      if(event.target.type === "file") {
  
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setMovie(base64);
      }else {
        setSubTitle(event.currentTarget.value);
      }
    };
    return (
      <>
        {values.people[personIndex].movies.map((contact, index) => (
          <div key={index}>
            {"." + contact.subTitle}
            <br />
          </div>
        ))}
        <input type="text" name="subTitle" placeholder="text" value={subTitle} onChange={handleChange} />
  
        <input type="file" name="movie" onChange={handleChange} />
        <button type="button" onClick={handleAddContactNumber}>
          add contact to {values.people[personIndex].title}
        </button>
      </>
    );
  };

export default FormMovieArray

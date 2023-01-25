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
    if (event.target.type === "file") {

      const file = event.target.files[0];
      const base64 = await convertBase64(file);
      setMovie(base64);
    } else {
      setSubTitle(event.currentTarget.value);
    }
  };
  return (
    <>
      {values.people[personIndex].movies.map((contact, index) => (
        <div key={index}>
          <div className="flex justify-between border-solid border-2 border-slate-200 rounded py-1 mt-2">
            {".DĞER" + contact.subTitle}
            <button className="bg-transparent hover:bg-red-500 text-red-400 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded">Delete</button>
          </div>
          <br />
        </div>
      ))}
      <div className="flex flex-col border-solid border-2 border-gray-300 rounded p-2 my-4">
        <input type="text" name="subTitle" placeholder="Movie Title"
          className="border border-2 border-slate-200 rounded h-6 mr-2 mb-4"
          value={subTitle} onChange={handleChange} />

        <input type="file" name="movie"
          class="text-sm text-grey-300
        file:mr-2 file:py-1 file:px-4
        file:rounded-full file:border-0
        file:text-md file:font-semibold  file:text-white
        file:bg-gray-400
        hover:file:cursor-pointer hover:file:opacity-80"
          onChange={handleChange} />
      </div>
      <div className="flex justify-between">
      <button type="button"
        className="bg-transparent hover:bg-amber-500 mb-4 text-amber-400 font-semibold hover:text-white py-1 px-1 border border-amber-500 hover:border-transparent rounded"
        onClick={handleAddContactNumber}>
        Files Add to {values.people[personIndex].title}
      </button>
      <button 
        className="bg-transparent hover:bg-red-500 mb-4 text-red-400 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded"
      >
        Section Delete</button>
        </div>
    </>
  );
};

export default FormMovieArray

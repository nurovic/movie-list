import React from "react";
import { useFormikContext } from "formik";
import { v4 as uuidv4 } from "uuid";
import { uploadImage } from "../../Helpers/Cloudinary/Upload";
import axios from 'axios'
const FormMovieArray = ({ personIndex, contactsArrayHelpers }) => {
  const [movie, setMovie] = React.useState({});
  const [inputVal, setiIputVal] = React.useState("");
  const [subTitle, setSubTitle] = React.useState("");
  const { values } = useFormikContext();

  const handleAddContactNumber = async () => {
    const result = await uploadImage(movie);
    const data = {
      public_id: result.public_id,
      url: result.url,
      signature: result.signature,
    };
    const movies = {};
    movies.movie = data;
    movies.subTitle = subTitle;
    movies.uid = uuidv4().slice(0, 8);
    contactsArrayHelpers.push(movies);
    setMovie({});
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
      const file = await event.target.files[0];
      setMovie(file);

    } else {
      setSubTitle(event.currentTarget.value);
    }
  };
  async function deleteImage(id){
    await axios.delete(`http://localhost:4000/movies/${id}`)

  }
  const deleteFile = (data) => {
    const public_id = data.movie.public_id
    console.log(contactsArrayHelpers)
    // contactsArrayHelpers.remove(data.uid);
    deleteImage(public_id)
  };

  const deleteSection = (id) => {
    // const index = contactsArrayHelpers.form.values.curriculum.indexOf(id)
    console.log(id);
    // console.log(index)
    contactsArrayHelpers.form.values.curriculum.splice("1", 1);

    return contactsArrayHelpers;
    // contactsArrayHelpers.remove(id);
  };

  return (
    <>
      {values.curriculum[personIndex].movies.map((contact, index) => (
        <div key={index}>
          <div className="flex justify-between border-solid border-2 border-slate-200 rounded py-1 mt-2">
            {".DĞER" + contact.subTitle}
            <button
              onClick={() => deleteFile(contact)}
              type="button"
              className="bg-transparent hover:bg-red-500 text-red-400 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded"
            >
              Delete
            </button>
          </div>
          <br />
        </div>
      ))}
      <div className="flex flex-col border-solid border-2 border-gray-300 rounded p-2 my-4">
        <input
          type="text"
          name="subTitle"
          placeholder="Movie Title"
          className="border border-2 border-slate-200 rounded h-6 mr-2 mb-4"
          value={subTitle}
          onChange={handleChange}
        />
        <input
          type="file"
          name="movie"
          class="text-sm text-grey-300
        file:mr-2 file:py-1 file:px-4
        file:rounded-full file:border-0
        file:text-md file:font-semibold  file:text-white
        file:bg-gray-400
        hover:file:cursor-pointer hover:file:opacity-80"
        onChange={handleChange}
        value={inputVal}
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-transparent hover:bg-amber-500 mb-4 text-amber-400 font-semibold hover:text-white py-1 px-1 border border-amber-500 hover:border-transparent rounded"
          onClick={handleAddContactNumber}
        >
          Files Add to {values.curriculum[personIndex].title}
        </button>
        <button
          onClick={() => deleteSection(values.curriculum[personIndex].uid)}
          type="button"
          className="bg-transparent hover:bg-red-500 mb-4 text-red-400 font-semibold hover:text-white py-1 px-1 border border-red-500 hover:border-transparent rounded"
        >
          Section Delete
        </button>
      </div>
    </>
  );
};

export default FormMovieArray;

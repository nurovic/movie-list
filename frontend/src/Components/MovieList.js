import React, { useEffect } from "react";
import { Formik, Form, FieldArray, useFormikContext } from "formik";
import axios from 'axios'
const peopleData = {
  count: 2,
  people: [
    // {
    //   name: "John",
    //   contacts: [{ number: "000000000", title: "Deneme"}]
      {
        title: "John",
        movies: [{ movie: "", subTitle: ""}]
      },
  ]
};

const MoviesList = ({ personIndex, contactsArrayHelpers }) => {
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
      // let document = "";
      //   let reader = new FileReader();
      //   reader.readAsDataURL(event.target.files[0]);
      //   reader.onload = function () {
      //   setMo(reader.result);
      //   };
      //   console.log(document)

      // let js = []
      // const reader = new FileReader()

      // reader.onload = () => {
      //     if(reader.readyState === 2) {
      //       js = reader.result
      //         // setImages(reader.result)
      //     }
      //   }
      //   const a = reader.readAsDataURL(event.target.files[0])
      // setMovie(event.target.value);
    }else {
      setSubTitle(event.currentTarget.value);
    }

  };
  return (
    <>
      {values.people[personIndex].movies.map((contact, index) => (
        <div key={index}>
          {/* {"." + contact.movie} */}
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

const People = ({ peopleArrayHelpers }) => {
  const [title, setTitle] = React.useState("");
  const { values, setFieldValue } = useFormikContext();

  const handleAddPerson = () => {
    const person = {};
    person.title = title;
    person.movies = [];

    peopleArrayHelpers.push(person);
    setFieldValue("count", values.count + 1);
    setTitle("");
  };

  const handleChange = event => {
    setTitle(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" value={title} onChange={handleChange} />
      <button type="button" onClick={handleAddPerson}>
        add person
      </button>
      {values.people.map((person, index) => (
        <div key={person.title + index}>
          <br />
          <span>{person.title}'s contacts:</span>
          <FieldArray name={`people[${index}].movies`}>
            {arrayHelpers => (
              <>
                <br />
                <MoviesList
                  personIndex={index}
                  contactsArrayHelpers={arrayHelpers}
                />
              </>
            )}
          </FieldArray>
        </div>
      ))}
    </>
  );
};

const MyForm = () => {
  const dataCpz = async (e) => {
      const data = e.people
      console.log(JSON.stringify(data))
      const newQuantity = new FormData();
      newQuantity.append('quantity', JSON.stringify(data))
      await axios.post("http://localhost:4000/movies", newQuantity)
  }
  return (

    <>
    <Formik initialValues={{ ...peopleData }} enableReinitialize={true}
    onSubmit={a => {dataCpz(a)}}
    >
      {({ values }) => (
        <Form >
          <div style={{ display: "flex" }}>
            <div style={{ float: "left" }}>
              <span>number of people: {values.count}</span>
              <FieldArray name="people">
                {arrayHelpers => {
                  return (
                    <>
                      <br />
                      <People peopleArrayHelpers={arrayHelpers} />
                    </>
                  );
                }}
              </FieldArray>
            </div>
            <div>
              {/* <pre style={{ fontSize: "65%" }}>
                {JSON.stringify(values, null, 2)}
              </pre> */}
            </div>
          </div>
          <button type="submit" > send</button>
        </Form>
      )}
    </Formik>
      </>
  );
};

export default function App() {
  return <MyForm />;
}

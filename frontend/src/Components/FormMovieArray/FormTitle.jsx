import React from "react";
import FormMovieArray from './FormMovieArray'
import { FieldArray, useFormikContext } from "formik";
import { v4 as uuidv4 } from 'uuid';

const FormTitle = ({ peopleArrayHelpers }) => {
  const [title, setTitle] = React.useState("");
  const { values, setFieldValue } = useFormikContext();

  const handleAddPerson = () => {
    const person = {};
    person.title = title;
    person.movies = [];
    person.uid = uuidv4().slice(0, 8)

    peopleArrayHelpers.push(person);
    setTitle("");
  };

  const handleChange = event => {
    setTitle(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" value={title} onChange={handleChange}
        className="border border-black rounded h-6 mr-2"
        placeholder="Add Section"
      />
      <button type="button" 
      onClick={handleAddPerson}
        className="bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-1 px-1 border border-amber-500 hover:border-transparent rounded">
        Add Section
      </button>
      {values.curriculum.map((person, index) => (
        <div key={person.title + index}
          className="border-solid border rounded border-slate-200 mt-4"
        >
          <br />
          <span
            className="text-lg font-bold"
          >{person.title} Sections:</span>
          <FieldArray

            name={`curriculum[${index}].movies`}>
            {arrayHelpers => (
              <>
                <br />
                <FormMovieArray
                  className="border-2 border-black rounded h-6 mr-2"
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

export default FormTitle

import React from "react";
import FormMovieArray from './FormMovieArray'
import { FieldArray, useFormikContext } from "formik";


const FormTitle = ({ peopleArrayHelpers }) => {
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
                  <FormMovieArray
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

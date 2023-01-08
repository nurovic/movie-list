import { Field, FieldArray, FieldProps, Form, Formik, getIn } from "formik";
import * as React from "react";
import { v4 as uuidv4 } from 'uuid';

import * as yup from "yup";

const validationSchema = yup.object().shape({
  people: yup.array().of(
    yup.object().shape({
      firstName: yup.string().max(10),
      lastName: yup.string().min(2),
      list: yup.array().of(
        yup.object().shape({
          ad: yup.string().min(2)
        })
      )
    })
  )
});

const Input = ({ field, form: { errors } }) => {
  const errorMessage = getIn(errors, field.name);

  return (
    <>
      {/* <TextField {...field} /> */}
      <input {...field} />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
};

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Formik
        initialValues={{
          people: [{ id: "5", firstName: "bob", lastName: "bob2", list:[{ id: "2", ad: "deneme"}]}]
        }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {({ values, errors }) => (
          <Form>
            <FieldArray name="people">
              
              {({ push, remove }) => (
                <div>
                  {values.people.map((p, index) => {
                    console.log( <Field
                      name={`people[${index}].sd`}
                    
                    />)
                    return (
                      <div key={p.id}>
                        <Field
                          name={`people[${index}].firstName`}
                          component={Input}
                        />
                        <Field
                          name={`people[${index}].lastName`}
                          component={Input}
                        />
                          {p.list.map((a,i) => {
                          <div key={a.id}>
                          <Field
                          name={`people[${index}][list].ad`}
                          component={Input}
                        />
                          </div>
                        })}
                        <div onClick={() => remove(index)}>remove</div>


                      </div>

                    );
                  }
                  )
                  
                  }

                  <button
                    type="button"
                    onClick={() =>
                      push({ id: uuidv4(), firstName: "", lastName: "", list:[{id: uuidv4(), ad: ""}] })
                    }
                  >
                    add to list
                  </button>
                </div>
              )}
            </FieldArray>
            <div>
              <button type="submit">submit</button>
            </div>
            {/* <pre
            style={{width: "100"}}
            >{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;

// {p.list.map((a,i) => {
//   <div key={a.id}>
//   <Field
//   name={`people[${index}][list].ad`}
//   component={Input}
// />
//   </div>
// })}
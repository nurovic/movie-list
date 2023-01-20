import React from "react";
import { Formik, Form, FieldArray  } from "formik";
import FormTitle from './FormTitle'
import axios from 'axios'
const peopleData = {
  count: 2,
  people: [
      {
        title: "John",
        movies: [{ movie: "", subTitle: ""}]
      },
  ]
};
const CreateFormArray = () => {
  const dataCpz = async (e) => {
      const data = e.people
      console.log(JSON.stringify(data))
      const newQuantity = new FormData();
      newQuantity.append('quantity', JSON.stringify(data))
      const res = await axios.post("http://localhost:4000/movies", newQuantity)
      console.log(res)
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
                      <FormTitle peopleArrayHelpers={arrayHelpers} />
                    </>
                  );
                }}
              </FieldArray>
            </div>
            <div>
              <pre style={{ fontSize: "65%" }}>
                {JSON.stringify(values, null, 2)}
              </pre>
            </div>
          </div>
          <button type="submit" > send</button>
        </Form>
      )}
    </Formik>
      </>
  );
};

export default CreateFormArray




import React from "react";
import { Formik, Form, FieldArray } from "formik";
import FormTitle from './FormTitle'
import axios from 'axios'
const curriculumData = {
  curriculum: []
};
const CreateFormArray = () => {
  const dataCpz = async (e) => {  
    const data = e.curriculum
    const newQuantity = new FormData();
    newQuantity.append('quantity', JSON.stringify(data))
    const res = await axios.post("http://localhost:4000/movies", newQuantity)
  }
  return (

    <>
      <Formik initialValues={{ ...curriculumData }} enableReinitialize={true}
        onSubmit={a => { dataCpz(a) }}
      >
        {({ values }) => (
          <div className="flex justify-center">
            <Form className="flex flex-col w-5/12 relative">
              <div className="flex justify-center ">
                <div className="w-full">
                  <FieldArray name="curriculum">
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
              <button type="submit" className="bg-transparent right-0 bottom-0  w-24 hover:bg-blue-300 text-blue-400 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded"
              > send</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CreateFormArray




import axios from 'axios'

import React, { Fragment, useEffect, useState } from "react";

const NewProduct = ({ history }) => {
  const [name, setName] = useState("");
  const [nameVideo, setNameVideo] = useState("ser");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [seller, setSeller] = useState("");
  const [images, setImages] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);




  const submitHandler = async(e) => {

      e.preventDefault()

      const formData = new FormData()
      formData.set('name', name)
      formData.set('images', images)

        const ad = await axios.post("http://localhost:4000/movies", formData)
        console.log(ad)
};
const onChange = e => {
    // if(e.target.name === 'avatar') {
        const reader = new FileReader()

        reader.onload = () => {
            if(reader.readyState === 2) {
                setImages(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    // }else {
    //     // setUser({...user, [e.target.name]: e.target.value})
    // }
}
  return (
    <Fragment>
      <div className="row">

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="wrapper my-5">
              <form className="shadow-lg" onSubmit={submitHandler } encType="multipart/form-data">
                <h1 className="mb-4">New Product</h1>

                <div className="form-group">
                  <label htmlFor="name_field">Name</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>



                <div className="form-group">
                  <label>Add Movie</label>

                  <div className="custom-file">
                    <input
                      type="file"
                      name="product_images"
                      className="custom-file-input"
                      id="customFile"
                      onChange={onChange}
                      multiple
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose Images
                    </label>
                  </div>

                    {imagesPreview.map(img => (
                        <img src={img} key={img} alt='Images Preview' className="mt-3 mr-2" width="55" height="52" />
                    ))}

                </div>

                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                //   disabled={loading ? true : false}
                >
                  CREATE
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;

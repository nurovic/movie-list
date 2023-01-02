import { useState } from "react";
import "../App.css";
import axios from "axios";
function MovieList() {
  const [title, setTitle] = useState("");
  const [formVal, setFormVal] = useState([{ subTitle: "", movie: "" }]);
  const [formArr, setFormArr] = useState([{title:"", formVal}])

  const addRow = () => {
    setFormVal([...formVal, { subTitle: "", movie: "" }]);
  };
  const addFormList = () => {
    setFormArr([formVal, {title:""}]);
  };
  const onRemove = (i) => {
    const newForm = [...formVal];
    newForm.splice(i, 1);
    setFormVal(newForm);
  };
  const onHandle = (e, i) => {
    console.log("DOt ,", i)
    let newForm = [...formVal];

    if (e.target.type === "file") {
      const reader = new FileReader();
      newForm[i][e.target.subTitle] = reader.result;

      reader.onload = () => {
        if (reader.readyState === 2) {
          newForm[i][e.target.name] = reader.result;
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }

    newForm[i][e.target.name] = e.target.value;
    setFormVal(newForm);
  };

  const onSubmit = async (e) => {
    const formData = new FormData();
    e.preventDefault();

    formData.set("title", title);
    formVal.forEach((image) => {
      formData.append("images", image.movie);
      formData.append("subTitle", image.subTitle);
    });

    await axios.post("http://localhost:4000/movies", formData);
  };
  return (
    <div className="App">
      <div style={{ width: "60%", margin: "20px auto" }}>
       { 
       formArr?.map((arr,i) => 
       (
        <form onSubmit={onSubmit} className="movie-list">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {formVal.map((item, i) => (
            <div>
              <div style={{ padding: "10px", margin: "10px", diplay: "flex", flexDirection: "row", }}>
                <label style={{ marginTop: "50px" }}>Movie File</label>
                <input type="text" name="subTitle" value={item.subTitle || ""} onChange={(e) => onHandle(e, i)} />
                <input type="file" name="movie" value={item.email || ""} onChange={(e) => onHandle(e, i)}/>
                {i == 0 ? ("") : ( <button onClick={() => onRemove(i)}>Remove</button> )}
              </div>
            </div>
          ))
          }
          <div style={{ marginTop: "20px" }}>
            <button onClick={addRow}>Add Row</button>
            <button type="submit" style={{ marginLeft: "20px" }}>
              Submit
            </button>
          </div>
        </form>
        )

       )
}
        <button onClick={addFormList}>Add New List</button>

      </div>
    </div>
  );
}

export default MovieList;

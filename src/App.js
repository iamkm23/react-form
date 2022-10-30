import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  // console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted sucessfully', formData)
  };

  const handleChange = (event) => {
    // event.target, refer to the whold input object
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        // after destructure, can use
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <section className="wrap">
      <section className="wrap-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName" // name should match with the state variable.
              placeholder="Enter First Name"
              value={formData.firstName} // control component
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName} // control component
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={formData.email} // control component
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Comments</label>
            <textarea
              className="form-control"
              rows="3"
              name="comments"
              placeholder="Please comment"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          {/* checkbox */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="isFriendly"
              name="isFriendly"
              checked={formData.isFriendly}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isFriendly">
              Are you friendly?
            </label>
          </div>

          {/* radio button */}
          <div style={{marginTop: '1rem'}}>Employment Status</div>
          <div className="form-check form-check-block">
            <input
              className="form-check-input"
              type="radio"
              name="employment"
              id="unemployed"
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="unemployed">
              Unemployed
            </label>
          </div>

          <div className="form-check form-check-block">
            <input
              className="form-check-input"
              type="radio"
              name="employment"
              id="part-time"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="part-time">
              Part-time
            </label>
          </div>

          <div className="form-check form-check-block">
            <input
              className="form-check-input"
              type="radio"
              name="employment"
              id="full-time"
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="full-time">
              Full-time
            </label>
          </div>

          {/* selection option */}
          <div style={{marginTop: '1rem'}}>What is your Favorite Color?</div>
          <select
            className="form-select"
            name="favColor"
            value={formData.favColor}
            onChange={handleChange}
          >
            <option value="">Choose Your Favorite Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
          <button className="btn btn-primary">Submit</button>
        </form>
      </section>
    </section>
  );
}

export default App;

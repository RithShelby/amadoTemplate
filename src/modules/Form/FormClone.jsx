import React from "react";
import "../../assets/css/formstyle.css";
class FormClone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: "",
        lsttname: "",
        email: "",
        city: "",
        age: 0,
        gender: null,
        photo: null,
        programing: [],
        bDate: "",
      },
      records: [],
      fileInput: null, // Add this line
    };
  }
  setInputState = (key, event) => {
    if (key === 'photo') {
      this.setState({
        fileInput: event.target.files[0],
      });
    } else {
      this.setState((prevState) => ({
        form: {
          ...prevState.form,
          [key]: event.target.value,
        },
      }));
    }
  };
  onChangeCheckBox = (event) => {
    let finalPro = [...this.state.form.programing];

    if (event.target.checked) {
      finalPro.push(event.target.value);
    } else {
      finalPro = finalPro.filter((e) => e != event.target.value);
    }

    this.setState((preState) => ({
      ...preState,
      form: {
        ...preState.form,
        programing: finalPro,
      },
    }));
  };

  onSubmit = () => {
    this.setState((prevState) => ({
      records: [...prevState.records, { ...prevState.form, photo: URL.createObjectURL(this.state.fileInput) }],
    }));
  };
  render() {
    const { records } = this.state;
    return (
      <div className="container ">
        {" "}
        <div className=" row">
          <div className="col-md-12 bg-light p-5 my-4 form_react">
            <h2>Register Form</h2>
            <div className="row  ">
              <div className="col-md-6">
                {" "}
                <input
                  onChange={(event) => this.setInputState("firstname", event)}
                  className="form-control w-100 py-3 mb-3 "
                  placeholder="Enter first namme..."
                  type="text"
                />
              </div>
              <div className="col-md-6">
                {" "}
                <input
                  onChange={(event) => this.setInputState("lastname", event)}
                  className="form-control w-100 py-3"
                  placeholder="Enter last namme..."
                  type="text"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                {" "}
                <input
                  onChange={(event) => this.setInputState("email", event)}
                  className="form-control py-3 mb-3"
                  placeholder="Enter email..."
                  type="email"
                />
              </div>
              <div className="col-md-6">
                {" "}
                <input
                  onChange={(event) => this.setInputState("city", event)}
                  className="form-control py-3"
                  placeholder="Enter your city..."
                  type="text"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <input
                  onChange={(event) => this.setInputState("age", event)}
                  className="form-control py-3 mb-3"
                  placeholder="Enter your age"
                  type="number"
                />
              </div>
              <div className="col-md-6">
                {" "}
                <input
                  onChange={(event) => this.setInputState("bDate", event)}
                  className="form-control py-3"
                  type="date"
                />
              </div>
            </div>
            <div className="row m-auto mt-3 ">
              <div className="col-md-4 mb-3">
                {" "}
                <select
                  onChange={(event) => this.setInputState("gender", event)}
                  className="form-select text-center py-2"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                {" "}
                <input
                  onChange={(event) => this.setInputState("photo", event)}
                  className="form-control py-2 m-auto"
                  type="file"
                />
              </div>
              <div className="col-md-4 ">
                {" "}
                <label className="p-2">
                  Programing
                  <input
                    onChange={this.onChangeCheckBox}
                    value="C"
                    className="mx-1"
                    type="checkbox"
                  />
                  C
                  <input
                    onChange={this.onChangeCheckBox}
                    value="C++"
                    className="mx-1"
                    type="checkbox"
                  />
                  C++
                  <input
                    onChange={this.onChangeCheckBox}
                    value="JS"
                    className="mx-1"
                    type="checkbox"
                  />
                  JS
                  <input
                    onChange={this.onChangeCheckBox}
                    value="React"
                    className="mx-1"
                    type="checkbox"
                  />
                  React
                </label>
              </div>
            </div>
            <input
              onClick={this.onSubmit}
              className="form-control mt-3 w-25 m-auto btn btn-success mb-4 rounded-0 py-3"
              value="Submit"
              type="button"
            />
          </div>
          <div className=" col-md-12 mt-4">
            <table className="table table_form">  
                <tr className="bg-dark text-white">
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Age</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Photo</th>
                  <th>Programing</th>
                </tr>     
                {records.length === 0 && (
                  <tr>
                    <td className="text-center" colSpan={7}>
                      No Record
                    </td>
                  </tr>
                )}
                {records.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{row.firstname}</td>
                      <td>{row.lastname}</td>
                      <td>{row.email}</td>
                      <td>{row.city}</td>
                      <td>{row.age}</td>
                      <td>{row.bDate}</td>
                      <td>{row.gender}</td>
                      <td>
                        <img className="img-table" src={row.photo} alt="" />
                      </td>
                      <td>{row.programing}</td>
                    </tr>
                  );
                })}
              
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default FormClone;

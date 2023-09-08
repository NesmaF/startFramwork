import React, { useState } from "react";

export default function Contact () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlenAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

  
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("Password:", password);


    // Reset the form
    setName("");
    setAge("")
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="container contact text-center vh-100">
        <h2 className="text-center">CONTACT SECTION </h2>
        <div className="line my-3">
          <div className="line1"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line2"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="userName"
              className="reg form-control"
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="age"></label>
            <input
              type="number"
              id="age"
              value={age}
              placeholder="userAge"
              className="reg form-control"
              onChange={handlenAgeChange}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="userEmail"
              className="reg form-control"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="userPassword"
              className="reg form-control"
              onChange={handlePasswordChange}
            />
          </div>
          <button className="btn btn1" type="submit">
            send Message
          </button>
        </form>
      </div>
    </>
  );
};

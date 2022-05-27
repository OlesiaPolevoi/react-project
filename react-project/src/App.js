import React, { useState } from "react";

export default function ProfileForm() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(profile, "", 2));

    setProfile({
      firstName: "",
      lastName: "",
      bday: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        type="text"
        name="firstName"
        value={profile.firstName || ""}
        onChange={handleChange}
      ></input>
      <input
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={profile.lastName || ""}
        onChange={handleChange}
      ></input>
      <input
        type="date"
        name="bday"
        value={profile.bday || ""}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={profile.password || ""}
        onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

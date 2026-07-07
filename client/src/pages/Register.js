import { useState } from "react";
import API from "../services/api";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const res = await API.post("/auth/register", user);
      alert(res.data.message);
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <input
        className="form-control mb-2"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />

      <button className="btn btn-primary" onClick={register}>
        Register
      </button>
    </div>
  );
}

export default Register;
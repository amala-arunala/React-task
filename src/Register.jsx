import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onRegister = () => {
    var validRegx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      !newUser.username ||
      !newUser.email ||
      !newUser.password ||
      !newUser.confirmPassword
    ) {
      alert("Please fill all the fields");
    } else if (!newUser.email.match(validRegx)) {
      alert("Invalid mail! Please enter valid mail address!");
    } else if (newUser.password !== newUser.confirmPassword) {
      alert("Password and confirm Password did not matched");
    } else {
      const userDetails = JSON.parse(
        JSON.stringify(localStorage.getItem("userDetails"))
      );
      const newUserDetails = JSON.parse(userDetails);
      let randomId = (Math.random() + 1).toString(36).substring(7);
      const newDetails = { ...newUser };
      delete newDetails.confirmPassword;
      newUserDetails.push({ ...newDetails, id: randomId });
      console.log(newUserDetails);
      localStorage.setItem("userDetails", JSON.stringify(newUserDetails));
      navigate("/");
    }
  };

  return (
    <div className="reg-container">
      <div className="user">
        <h2 className="user-text">New User</h2>
        <h5 className="user-content">Please fill the details to register</h5>
      </div>

      <form className="reg-details">
        <input
          type="text"
          placeholder="username"
          className="reg-input"
          value={newUser.username}
          onChange={(event) =>
            setNewUser({ ...newUser, username: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email"
          className="reg-input"
          value={newUser.email}
          onChange={(event) =>
            setNewUser({ ...newUser, email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="reg-input"
          value={newUser.password}
          onChange={(event) =>
            setNewUser({ ...newUser, password: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="reg-input"
          value={newUser.confirmPassword}
          onChange={(event) =>
            setNewUser({ ...newUser, confirmPassword: event.target.value })
          }
        />
      </form>

      <div className="register">
        <button className="reg-btn" onClick={() => onRegister()}>
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;

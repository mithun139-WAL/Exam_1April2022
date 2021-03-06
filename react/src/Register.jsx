/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
/* eslint-disable react/function-component-definition */
import axios from 'axios';

const Register = () => {
  const addUser = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post('/exam/register', {username, password})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="card col-lg-4 col-md-6 mx-auto text-center">
      <form onSubmit={addUser}>
        <h1>Register</h1>
        <input
          type="text"
          name="username"
          className="form-control my-3"
          placeholder="username.."
        />
        <input
          type="password"
          name="password"
          className="form-control my-3"
          placeholder="password.."
        />
        <div className="text-center my-5">
          <button className="btn btn-primary col-12" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

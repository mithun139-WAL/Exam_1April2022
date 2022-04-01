/* eslint-disable object-shorthand */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
/* eslint-disable react/function-component-definition */
import axios from 'axios';
// import {useState} from 'react';
import useLocalStorage from 'use-local-storage';

const Login = () => {
  // const [data, setData] = useState();
  const [token, setToken] = useLocalStorage('token');
  const checkLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post('/exam/login/', {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data.debug_data);
        if (res.data.token === undefined) {
          console.log('Not logged');
          setToken('');
        } else {
          alert('Login Successful');
          setToken(res.data.token);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card col-lg-4 col-md-6 mx-auto text-center">
      <form onSubmit={checkLogin}>
        <h1>Login</h1>
        <input
          tye="text"
          name="username"
          placeholder="username.."
          className="form-control my-3"
        />
        <input
          name="password"
          type="password"
          placeholder="enter password.."
          className="form-control my-3"
        />
        <div className="text-center my-5">
          <button className="btn btn-primary col-12" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;

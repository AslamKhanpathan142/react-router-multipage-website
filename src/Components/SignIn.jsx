import React from "react";
import style from "./SignIn.module.css";
// import { Form, redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center" id={style.divInput}>
          <div className="col-lg-4"> </div>

          <div className="col-lg-4">
          <h2 className="text-center mb-5">LOGIN</h2>
          <p className="text-center mb-5">Enter your email and password to login</p>
          <form>
            <div class="mb-3">
             
              <input
                type="email"
                name="Email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="E-MAIL"
              />
              </div>
              <input
                type="password"
                id="inputPassword5"
                name="Pasword"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                placeholder="PASSWORD"
              ></input>
            <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-light mt-5">Login</button>
            </div>
            </form>
            <p className="text-center mt-5 mb-5">
              Don't have an account? <span><Link to="/signup">Sign up</Link></span>
            </p>
            
          </div>

          <div className="col-lg-4"> </div>
        </div>
      </div>
      <hr className={style.hr}/>
    </>
  );
};

// export const Signin = async (data) => {
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);
//   console.log(postData);

//   return redirect("/Content");
// }

export default SignIn;

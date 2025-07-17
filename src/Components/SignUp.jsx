import React from "react";
import style from "./SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center" id={style.divInput}>
          <div className="col-lg-4"> </div>

          <div className="col-lg-4">
          <h2 className="text-center mb-5">SIGN UP</h2>
          <p className="text-center mb-5">Please fill in information balow</p>
          <form action="">
            <div class="mb-3">
             
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="First name"
              />
              </div>
              <input
                type="text"
                class="form-control mb-3"
                id="exampleFormControlInput2"
                placeholder="Last name"
              />
             

               <input
                type="email"
                class="form-control mb-3"
                id="exampleFormControlInput3"
                placeholder="E-Mail"
              />
               <input
                type="password"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
              ></input>
              
            <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-light mt-5">Create account</button>
            </div>
            </form>
            <p className="text-center mt-5 mb-5">
            Already have an account? <Link to="/signin"><span>Login</span></Link>
            </p>
            
          </div>

          <div className="col-lg-4"> </div>
        </div>
      </div>
      <hr className={style.hr}/>
    </>
  );
};

export default SignUp;

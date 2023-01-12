import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style_SignIn.css";
import { FormControl, Input, InputLabel } from "@mui/material";
//import  TextInput  from "./TextInput";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MDBRow, MDBContainer, MDBCol } from "mdb-react-ui-kit";

const Signin = ({ setSignInUp }) => {
  const [emailPhone, setEmailPhone] = useState();
  const [password, setPassword] = useState();
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = (e) => {
    setShowPass(!showPass);
  };

  const handleGoogleSignUp = (e) => {};

  // const handleEmailPhoneSignUp = (e) => {};

  return (
    <div className="sign-in-component">
      <div className="left">
        <img
          style={{ padding: "0.1rem" }}
          src="/images/signin_image.jpg"
          alt="sign-in"
        />
      </div>
      <div className="right">
        <p className="join-signin">Login</p>
        <div className="emailspace">
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="email" style={{ padding: "5px 2px 5px 10px" }}>
              Login ID
            </InputLabel>
            <Input
              name={"emailOrPhone"}
              type={"text"}
              label={""}
              className={"inputbox"}
              placeholder={"Enter Login ID"}
              setValue={setEmailPhone}
              isRequired={true}
            />
          </FormControl>
        </div>

        <div className="password-wrapper">
          <div className="emailspace">
            <FormControl required fullWidth margin="normal">
              <InputLabel
                htmlFor="password"
                style={{ padding: "5px 2px 5px 10px" }}
              >
                Password
              </InputLabel>
              <Input
                name={"password"}
                type={showPass ? "text" : "password"}
                label={""}
                className={"inputbox"}
                placeholder={"Enter Password"}
                setValue={setPassword}
                isRequired={true}
              />
              <div className="show-hide-pass">
                {showPass ? (
                  <AiFillEye onClick={handleShowPass} />
                ) : (
                  <AiFillEyeInvisible onClick={handleShowPass} />
                )}
              </div>
            </FormControl>
          </div>
        </div>
        <div className="forgot-password">
          <MDBContainer>
            <MDBRow>
              <MDBCol style={{ width: "5vmax" }}>
                <a
                  href="/forgot-password"
                  rel="noreferrer"
                  style={{ fontSize: "1rem" }}
                >
                  Did you forget your password?
                </a>
              </MDBCol>
              <MDBCol>
                <a
                  href="/Reset-paasowrd"
                  rel="noreferrer"
                  style={{
                    color: "red",
                    fontSize: "1rem",
                    marginLeft: "5vmax",
                  }}
                >
                  Reset Password
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="sign-in">
          <Button>Login</Button>
        </div>

        <div className="signup">
          <div className="google" onClick={handleGoogleSignUp}>
            <img
              src="/icons/flat-color-icons_google.svg"
              className="google icon"
              alt="google icon"
            />
            <h5 className="h5">Sign up with Google</h5>
          </div>
        <div className="email-phone" onClick={() => setSignInUp(false)}>
        {/* onclick hide sign in, show sign up */}

        <img
              src="/icons/fxemoji_email.svg"
              className="email icon"
              alt="email icon"
            />
            <h5 className="h5">Sign up with Email or Phone</h5>
          </div>
        </div>
        <MDBContainer>
          <div className="contain-row">
            <div className="line_17"></div>
            <p1 className="line_16">or</p1>
            <div className="line_18"></div>
          </div>
        </MDBContainer>
        <MDBContainer>
          <div className="contain-row1">
          <p1 className="Create-acc1">Don't have a account?</p1>
            <a href="#" rel="noreferrer">
            <p1 className="Create-acc">Register here</p1>
            </a>
          </div>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Signin;

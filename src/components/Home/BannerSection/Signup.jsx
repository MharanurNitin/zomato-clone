import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./signup.css";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Signup() {
  const [open, setOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [formError, setFormError] = React.useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormError({});
    setFullName("");
    setEmail("");
    setPassword("");
    setMessage("");
    setOpen(false);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (password.length < 6) {
      setFormError((prev) => ({
        ...prev,
        password: "password must be at least 6 characters",
      }));
    }
    if (!fullName) {
      setFormError((prev) => ({
        ...prev,
        fullName: "Name is required.",
      }));
    } else {
      setFormError((prev) => ({ ...prev, fullName: "" }));
    }
    if (!email) {
      setFormError((prev) => ({ ...prev, email: "Email is required." }));
    } else if (!regex.test(email)) {
      setFormError((prev) => ({
        ...prev,
        email: "This is not a valid email Format.",
      }));
    } else {
      setFormError((prev) => ({ ...prev, email: "" }));
    }
    if (!password) {
      setFormError((prev) => ({
        ...prev,
        password: "Password is required.",
      }));
    } else if (password.trim().length < 6) {
      setFormError((prev) => ({
        ...prev,
        password: "password must be at least 6 characters",
      }));
    } else {
      setFormError((prev) => ({ ...prev, password: "" }));
    }

    if (email && password && fullName && checkbox) {
      console.log("running");
      let result = await fetch("http://localhost:3000/users/signup", {
        method: "post",
        body: JSON.stringify({ email, password, fullName }),
        headers: { "Content-Type": "application/json" },
      });

      result = await result.json();

      setMessage(result.message);

      setFullName("");
      setEmail("");
      setPassword("");
      if (result.status === "success") {
        setTimeout(() => {
          setOpen(false);
          setMessage("");
        }, 2000);
      }
    }
  }

  return (
    <div>
      <p onClick={handleClickOpen}>Sign up</p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {
            <>
              <div className="heading">
                <h3>Sign Up</h3> <h4 onClick={handleClose}>X</h4>
              </div>
              <p>{message}</p>
            </>
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="dialogbox"
          >
            <form onSubmit={handleSubmit} className="signupform">
              <div className="input-field-wrapper">
                <input
                  type="text"
                  value={fullName}
                  placeholder="FullName"
                  onChange={(e) => setFullName(e.target.value)}
                />
                <p className="error">{formError?.fullName}</p>
              </div>
              <div className="input-field-wrapper">
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
                <p className="error">{formError?.email}</p>
              </div>
              <div className="input-field-wrapper">
                <input
                  type="password"
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value.trim())}
                />
                <p className="error">{formError?.password}</p>
              </div>
              <div className="conditions">
                <input
                  type="checkbox"
                  onChange={() => setCheckbox(!checkbox)}
                />
                <span>
                  I agree to Zomato's <b>Terms of Service</b>,{" "}
                  <b>Privacy Policy</b> and <b>Content Policies</b>
                </span>
              </div>
              <button onClick={handleSubmit}>Create account</button>
            </form>
            <div className="or">
              <span></span>OR<span></span>
            </div>
            <button>Continue with Google</button>
            <h3>
              Already have an account? <Link>Log In</Link>
            </h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

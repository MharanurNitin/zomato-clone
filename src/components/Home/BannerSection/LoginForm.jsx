import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./signup.css";
import { Link } from "react-router-dom";
import { loginUserAtom } from "../../../global-state";
import { useSetRecoilState } from "recoil";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginForm() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginUser, setLoginUser] = React.useState({});
  const setLogUser = useSetRecoilState(loginUserAtom);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      let result = await fetch("http://localhost:3000/users/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await result.json();

      if (data.status === "success") {
        setLogUser(data.loginUserData);
        setLoginUser(data.loginUserData);
        localStorage.setItem(
          "loginUser",
          JSON.stringify({
            email: data.loginUserData.email,
            fullName: data.loginUserData.fullName,
            id: data.loginUserData._id,
          })
        );

        setEmail("");
        setPassword("");
        setOpen(false);
      }
    }
  }
  React.useEffect(() => {
    if (loginUser) {
      // localStorage.setItem("loggedUser", JSON.stringify(data));
    }
  }, [loginUser]);

  return (
    <div>
      <p onClick={handleClickOpen}>Login</p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {
            <div className="heading">
              <h2>Login</h2> <h4 onClick={handleClose}>X</h4>
            </div>
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="dialogbox"
          >
            <form onSubmit={handleSubmit} className="signupform">
              <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Login</button>
            </form>
            <div className="or">
              <span></span>OR<span></span>
            </div>
            <button>Continue with Google</button>
            <h3>
              New to Zomato? <Link>Create Account</Link>
            </h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

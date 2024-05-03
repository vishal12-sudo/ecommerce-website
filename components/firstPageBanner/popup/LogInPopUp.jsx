import "../popup/PopUpStyle.scss";
import { useRef, useEffect } from "react";

const LoginPopUp = ({ setLogin }) => {
  const loginRef = useRef(null);
  const formLogInRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (loginRef.current && formLogInRef.current) {
        if (
          loginRef.current.contains(e.target) &&
          !formLogInRef.current.contains(e.target)
        ) {
          setLogin(false);
        }
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleSubmit = () => {
    const inputs = formLogInRef.current.querySelectorAll("input[required]");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });

    if (isValid) {
      setLogin(false);
    }
  };
  return (
    <div className="form-wrapper" ref={loginRef}>
      <form ref={formLogInRef}>
        <div>
          <label>Enter your email</label>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={() => {}}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            required
            onChange={() => {}}
          />
        </div>
        <div>
          <button onClick={() => handleSubmit}>Log in</button>
        </div>
      </form>
    </div>
  );
};

export { LoginPopUp };

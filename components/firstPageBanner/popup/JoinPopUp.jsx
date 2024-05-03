import "../popup/PopUpStyle.scss";
import { useRef, useEffect } from "react";

const JoinPopUp = ({ setJoin }) => {
  const wrapperRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && formRef.current) {
        if (
          wrapperRef.current.contains(e.target) &&
          !formRef.current.contains(e.target)
        ) {
          setJoin(false);
        }
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleSubmit = () => {
    const inputs = formRef.current.querySelectorAll("input[required]");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });

    if (isValid) {
      setJoin(false);
    }
  };

  return (
    <div className="form-wrapper" ref={wrapperRef}>
      <form ref={formRef}>
        <div>
          <label>First name</label>
          <input type="text" placeholder="Name" required onChange={() => {}} />
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            placeholder="Last name"
            required
            onChange={() => {}}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={() => {}}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email"
            required
            onChange={() => {}}
          />
        </div>
        <div>
          <button onClick={() => handleSubmit()}>Join</button>
        </div>
      </form>
    </div>
  );
};

export { JoinPopUp };

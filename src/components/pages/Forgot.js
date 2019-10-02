import React from "react";

const Forgot = () => {
  return (
    <div className="forgot container d-flex flex-column justify-content-center">
      <h3 className="text-white text-center">Forgot Password</h3>
      <form>
        <div className="form-group">
          <label className="text-white" htmlFor="forgotEmail">
            Email
          </label>
          <input
            className="form-control text-white"
            type="email"
            name=""
            id="forgotEmail"
            style={{ background: "transparent" }}
          />
        </div>
        <input
          className="btn btn-block text-white"
          type="submit"
          value="Reset Password"
          style={{
            backgroundColor: "#3f808b",
            borderColor: "#3f808b"
          }}
        />
      </form>
    </div>
  );
};

export default Forgot;

import React from "react";

function FormInput({ label, name, type }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
}

export default FormInput;

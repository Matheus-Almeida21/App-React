import React from 'react';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="appWrapper">
      <label htmlFor={name} className="appLabel">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="appInput"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="appError">{error}</p>}
    </div>
  );
};

export default Input;

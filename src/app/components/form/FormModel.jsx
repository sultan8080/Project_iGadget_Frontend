import React, { Component } from "react";
import { Formik, Form, useField } from "formik";

export default function FormModel({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        className=" my-4 py-0 text-gray-600"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <span className="text-red-600"> {props.icon} </span>
      <input className="" {...field}{...props} />
      {meta.touched && meta.error ? (
        <small className="error text-red-600">{meta.error}</small>
      ) : null}
    </div>
  );
}

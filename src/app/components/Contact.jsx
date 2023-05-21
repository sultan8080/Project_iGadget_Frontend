import { LockClosedIcon } from "@heroicons/react/solid";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormModel from "./form/FormModel";

/**
 * Component Login
 *
 * @author Peter et SULTAN
 */
const Contact = () => {
  const [errorLog, setErrorLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContact = (values) => {};

  return (
    <div className="min-width: 100%;">
      <div className="text-center mb-5">
        <h4 className="mt-1 text-center  font-bold text-primary">
          BESOIN D'AIDE ?
        </h4>
        <h6 className="text-center text-gray-500 my-3">
          Nous répondons à toutes vos questions !
        </h6>
      </div>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        }}
        onSubmit={handleContact}
      >
        <Form className="mt-4 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-md shadow-sm">
            <div>
              <FormModel
                label="Prénom"
                name="firstName"
                type="text"
                icon="*"
                className="input"
              />
            </div>

            <div>
              <FormModel
                label="Nom"
                name="lastName"
                type="text"
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormModel
                label="Email"
                name="email"
                type="text"
                icon="*"
                className="input"
              />
            </div>

            <div>
              <FormModel
                label="Téléphone"
                name="phone"
                type="text"
                className="input"
              />
            </div>

            <div className="sm:col-span-2">
               <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Votre demande <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="message"
                component="textarea"
                autoComplete="message"
                rows="2"
                className="input"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary group relative w-full"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white group-hover:text-light"
                  aria-hidden="true"
                />
              </span>
              Enovyer
            </button>
          </div>
          {errorLog && (
            <div className="flex justify-center">
              <small className="text-sm italic text-red-600">
                Identifiant/Mot de passe incorrect(s)
              </small>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;

import { LockClosedIcon } from "@heroicons/react/solid";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { URL_HOME } from "../../constants/urls/urlFrontEnd";
import { signIn } from "../../redux-store/authenticationSlice";
import { authenticate } from "../../api/backend/account";

/**
 * Component Login
 *
 * @author Sultan
 */
const Registration = () => {
  const [errorLog, setErrorLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (values) => {
    authenticate(values)
      .then((res) => {
        if (res.status === 200 && res.data.id_token) {
          dispatch(signIn(res.data.id_token));
          navigate(URL_HOME);
        }
      })
      .catch(() => setErrorLog(true));
  };

  return (
    <div className="min-width: 100%;">
      <div className="text-center">
        <h4 className="mt-1 text-center  font-bold text-primary">
          INSCRIPTION
        </h4>
        <small className="text-center my-1">
          Inscrivez-vous pour ne plus passer à côté des occasions
        </small>
      </div>

      <hr className="my-5" />

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          address: "",
          postcode: "",
          userphoto: "",
          phone: "",
          city: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={handleRegister}
      >
        <Form className="mt-4 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 rounded-md shadow-sm">
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Prénom <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="firstname"
                autoComplete="firstname"
                className="input"
              />
            </div>

            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Nom <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="lastname"
                autoComplete="lastname"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Email <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="email"
                autoComplete="email"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Mot de passe <span className="text-red-600"> * </span>
              </label>
              <Field
                type="password"
                name="password"
                autoComplete="current-password"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Confirmer le mot de passe{" "}
                <span className="text-red-600"> * </span>
              </label>
              <Field
                type="password"
                name="passwordConfirmation"
                autoComplete="current-password"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Adresse <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="address"
                autoComplete="address"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Code Postal <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="postcode"
                autoComplete="postcode"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Téléphone <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="phone"
                autoComplete="phone"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Ville <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="city"
                autoComplete="city"
                className="input"
              />
            </div>
            <div className="">
              <label className=" my-4 py-0 text-gray-600" htmlFor="email">
                Votre Photo (jpg, png, jpeg)
              </label>
              <Field
                type="file"
                name="userphoto"
                autoComplete="userphoto"
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
              Je m'inscris
            </button>
            <button
              type="submit"
              className="btn btn-third-outline mt-3 group py-2 relative w-full"
            >
              Déjà un compe? Je me connecte...
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

export default Registration;

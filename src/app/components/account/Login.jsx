import { LockClosedIcon } from "@heroicons/react/solid";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { URL_HOME } from "../../constants/urls/urlFrontEnd";
import { signIn } from "../../redux-store/authenticationSlice";
import { authenticate } from "./../../api/backend/account";

/**
 * Component Login
 *
 * @author Peter Mollet
 */
const Login = () => {
  const [errorLog, setErrorLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
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
    <div className="w-full max-w-md space-y-4 rounded-md bg-white p-4 py-12 px-4 shadow sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-1 text-center text-3xl font-bold text-primary">
          CONNEXION
        </h2>
        <small className="text-center">
          Inscrivez-vous pour ne plus passer à côté des occasions
        </small>
      </div>

      <hr />

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        <Form className="mt-5 space-y-6">
          <div className="flex flex-col space-y-3 rounded-md shadow-sm">
            <Field
              type="text"
              name="username"
              placeholder="Votre email"
              autoComplete="username"
              className="input"
            />
            <Field
              type="password"
              name="password"
              placeholder="votre mot de passe"
              autoComplete="current-password"
              className="input"
            />
          </div>

          <div className=" flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password">
                <span className="cursor-pointer font-medium text-theme-primary hover:text-theme-primary">
                  Mot de passe oublié?
                </span>
              </Link>
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
              Je me connecte
            </button>
            <button
              type="submit"
              className="btn btn-third-outline mt-3 group py-2 relative w-full"
            >
              Pas de Compte? Je m'inscris..
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

export default Login;

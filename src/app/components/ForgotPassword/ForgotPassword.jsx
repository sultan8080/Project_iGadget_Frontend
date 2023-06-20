import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { apiBackEnd } from "../../api/backend/api.Backend";
import { URL_BACK_FORGOT_PASSWORD } from "../../constants/urls/urlBackEnd";
import { URL_HOME } from "../../constants/urls/urlFrontEnd";

/**
 * Component forgotPassword
 *
 * @author sultan
 */
const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleForgotPassword = (values) => {
    apiBackEnd
      .post(URL_BACK_FORGOT_PASSWORD, {
        email: values.username,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success(
            "Un email a été envoyé contenant un lien pour réinitiliser votre mot de passe !",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
          navigate(URL_HOME);
        }
      })
      // .catch(() => setErrorLog(true));
      .catch(function (error) {
        toast.error(
          "Désolé ! Email non trouvé ou vous avez démender deux fois, Verifier votre boite email",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
  };

  return (
    <div className="w-full max-w-md space-y-4 rounded-md bg-white p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-1 text-center text-3xl font-bold text-primary">
          MOT DE PASSE OUBLIÉ
        </h2>
        <small className="text-center">
          Saisissez l'adresse e-mail associé à votre compte iGadget.{" "}
        </small>
      </div>

      <Formik
        initialValues={{
          username: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .email("Adresse e-mail invalide")
            .required("Email Obligatoire"),
        })}
        onSubmit={handleForgotPassword}
      >
        <Form className="mt-5 space-y-6">
          <div className="flex flex-col space-y-3 rounded-md shadow-sm">
            <Field
              type="text"
              name="username"
              placeholder="Votre email"
              // autoComplete="username"
              className="input"
            />
            <small className="text-red-600">
              <ErrorMessage name="username" />
            </small>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary group relative w-full"
            >
              Continuer
            </button>
          </div>

          <Link to="/login">
            <small className="mt-3  py-2 text-third-dark text-right ">
              Aller à la page de connexion.
            </small>
          </Link>

          {/* {errorLog && (
            <div className="flex justify-center">
              <small className="text-sm italic text-red-600">
                Identifiant/Mot de passe incorrect(s)
              </small>
            </div>
          )} */}
        </Form>
      </Formik>
    </div>
  );
};

export default ForgotPassword;

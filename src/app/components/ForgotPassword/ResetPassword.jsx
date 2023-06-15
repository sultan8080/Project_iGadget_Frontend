import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FormModel from "../form/FormModel";
import axios from "axios";

/**
 * Component forgotPassword
 *
 * @author sultan
 */
const ResetPassword = ({ token }) => {
  const handleResetPassword = (values) => {
    axios
      .post(
        `http://127.0.0.1:8000/api/reset-password/reset-password/${token}`,
        {
          password: values.password,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("Votre mot de passe a été réinitialisé avec succès !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Désolé ! Une erreur s'est produite, Veuillez réessayer", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="w-full max-w-md space-y-4 rounded-md bg-white p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8">
      <div className="text-center">
        <h5 className="mt-1 text-center  font-bold text-primary">
          RÉINITIALISEZ MOT DE PASSE{" "}
        </h5>
        <small className="text-center">Entrez votre nouveau mot de passe</small>
      </div>
      <Formik
        initialValues={{
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("Mot de passe obligatoire")
            .min(6, "Au moins six caractères "),
          passwordConfirmation: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Le mot de passe doit être identique"
            )
            .required("Mot de Passe confirmation obligatoire"),
        })}
        onSubmit={handleResetPassword}
      >
        <Form className="mt-5 space-y-6">
          <div className="grid gap-4 rounded-md shadow-sm">
            <div>
              <FormModel
                label="Mot de passe"
                name="password"
                type="password"
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormModel
                label="Confirmer le mot de passe"
                name="passwordConfirmation"
                type="password"
                icon="*"
                className="input"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary group relative w-full"
          >
            Réinitialiser le mot de passe
          </button>

          <Link to="/login">
            <small className="mt-3  py-2 text-third-dark text-right ">
              Aller à la page de connexion.
            </small>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPassword;

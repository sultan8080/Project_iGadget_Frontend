import { LockClosedIcon } from "@heroicons/react/solid";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { URL_HOME } from "../../constants/urls/urlFrontEnd";
import { signIn } from "../../redux-store/authenticationSlice";
import { authenticate } from "../../api/backend/account";
import FormInput from "../form/formInput";


/**
 * Component User Registration Form
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


  const FILE_SIZE = 100 * 1024;
  const SUPPORTED_FORMATS = ["jpg", "jpeg", "png"];
  const photoUpload = useRef();
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
          firstName: "",
          lastName: "",
          address: "",
          postCode: "",
          userPhoto: "",
          phone: "",
          city: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Prénom  Obligatoire"),
          lastName: Yup.string().required("Nom Obligatoire"),
          email: Yup.string()
            .email("Adresse e-mail invalide")
            .required("Champ Obligatoire"),
          password: Yup.string().required("Mot de passe Obligatoire"),
          passwordConfirmation: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Le mot de passe doit être identique"
            )
            .required("Champ Obligatoire"),
          city: Yup.string().required("Champ Obligatoire"),
          phone: Yup.string().required("Champ Obligatoire"),
          address: Yup.string().required("Champ Obligatoire"),
          userPhoto: Yup.mixed()
            .nullable()
            .notRequired()
            .test("FILE_SIZE", "Votre photo est trop volumineux", (value) => {
              return value && photoUpload.current
                ? photoUpload.current.files[0].size <= FILE_SIZE
                  ? true
                  : false
                : true;
            })
            .test(
              "FILE_FORMAT",
              "Format de votre photo non autorisé.",
              (value) =>
                !value || (value && SUPPORTED_FORMATS.includes(value.type))
            ),
          postCode: Yup.string()
            .min(5)
            .max(5, "Doit être composé de 5 chiffres, exemple : 02200")
            .required("Champ Obligatoire"),
        })}
        onSubmit={handleRegister}
      >
        <Form className="mt-4 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 rounded-md shadow-sm">
            <div>
              <FormInput
                label="Prénom"
                name="firstName"
                type="text"
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormInput
                label="Nom"
                name="lastName"
                type="text"
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormInput
                label="Email"
                name="email"
                type="email"
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormInput
                label="Mot de passe"
                name="password"
                type="password"
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormInput
                label="Confirmer le mot de passe"
                name="passwordConfirmation"
                type="password"
                icon="*"
                className="input"
              />
            </div>

            <div>
              <FormInput
                label="Adresse"
                name="address"
                type="text"
                icon="*"
                className="input"
              />
            </div>

            <div>
              <FormInput
                label="Code Postal"
                name="postCode"
                type="text"
                icon="*"
                className="input"
              />
            </div>

            <div>
              <FormInput
                label="Téléphone"
                name="phone"
                type="text"
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormInput
                label="Ville"
                name="city"
                type="text"
                icon="*"
                className="input"
              />
            </div>

            <div>
              <label className=" my-4 py-0 text-gray-600" htmlFor="userPhoto">
                Votre Photo ( jpg/png/jpeg - 100kb )
              </label>
              <Field
                type="file"
                innerRef={photoUpload}
                name="userPhoto"
                className="input"
              />
              <small className="text-red-600">
                <ErrorMessage name="userPhoto" />
              </small>
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

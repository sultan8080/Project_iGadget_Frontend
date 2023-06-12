import { LockClosedIcon } from "@heroicons/react/solid";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormModel from "../form/FormModel";
import { URL_HOME } from "../../constants/urls/urlFrontEnd";
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_REGISTRATION } from "../../constants/urls/urlBackEnd";
import { toast } from "react-toastify";

/**
 * Component User Registration Form
 *
 * @author Sultan
 */
const Registration = () => {
  const navigate = useNavigate();
  const handleRegister = (values) => {
    apiBackEnd
      .post(URL_BACK_REGISTRATION, {
        firstname: values.firstName,
        lastname: values.lastName,
        address: values.address,
        codepostal: values.postCode,
        user_photo: values.userPhoto,
        phone: values.phone,
        city: values.city,
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        toast.success("Succès! nouvel utilisateur ajouté !", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate(URL_HOME);
      })
      .catch(function (error) {
        toast.error("Erreur! quelque chose ne va pas !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
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
          firstName: Yup.string()
            .matches(
              /^s*\S[a-z][\s\S]+$/,
              "Uniquement valide caractères autorisés"
            )
            .required("Prénom  obligatoire"),
          lastName: Yup.string()
            .matches(
              /^s*\S[a-z][\s\S]+$/,
              "Uniquement valide caractères autorisés"
            )
            .required("Prénom  obligatoire"),
          email: Yup.string()
            .email("Adresse e-mail invalide")
            .required("Email obligatoire"),
          password: Yup.string()
            .required("Mot de passe obligatoire")
            .min(6, "Au moins six caractères "),
          passwordConfirmation: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Le mot de passe doit être identique"
            )
            .required("Mot de Passe confirmation obligatoire"),
          city: Yup.string().required("Ville obligatoire"),
          phone: Yup.number()
            .required("Numéro téléphone obligatoire")
            .typeError("Uniquement des chiffres"),
          address: Yup.string().required("Adresse obligatoire"),
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
              "is-file-of-correct-type",
              "Format de votre photo non autorisé",
              () => {
                let valid = true;
                const files = photoUpload?.current?.files;
                if (files) {
                  const fileArr = Array.from(files);
                  fileArr.forEach((file) => {
                    const type = file.type.split("/")[1];
                    const validTypes = ["jpeg", "png", "jpg"];
                    if (!validTypes.includes(type)) {
                      valid = false;
                    }
                  });
                }
                return valid;
              }
            ),

          postCode: Yup.string()
            .required("Code Postale obligatoire")
            .length(5, "Uniquement 5 chiffres, Exemple: 02200"),
        })}
        onSubmit={handleRegister}
      >
        <Form className="mt-4 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 rounded-md shadow-sm">
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
                type="email"
                icon="*"
                className="input"
              />
            </div>
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

            <div>
              <FormModel
                label="Adresse"
                name="address"
                type="text"
                icon="*"
                className="input"
              />
            </div>

            <div>
              <FormModel
                label="Code Postal"
                name="postCode"
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
                icon="*"
                className="input"
              />
            </div>
            <div>
              <FormModel
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

            <Link to="/login">
              <span className="btn btn-third-outline mt-3 group py-2 relative w-full">
                Déjà un compte? Je me connecte...
              </span>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;

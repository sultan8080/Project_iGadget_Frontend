import { LockClosedIcon } from "@heroicons/react/solid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import FormModel from "./form/FormModel";
import * as Yup from "yup";

/**
 * Component Login
 *
 * @author Sultan
 */
const Contact = () => {
  const handleContact = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

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
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .matches(
              /^s*\S[a-z][\s\S]+$/,
              "Uniquement valide caractères autorisés"
            )
            .required("Nom  obligatoire"),
          lastName: Yup.string()
            .matches(
              /^s*\S[a-z][\s\S]+$/,
              "Uniquement valide caractères autorisés"
            )
            .required("Prénom  obligatoire"),
          email: Yup.string()
            .email("Adresse e-mail invalide")
            .required("Email Obligatoire"),
          phone: Yup.number()
            .notRequired()
            .typeError("Uniquement des chiffres"),
          message: Yup.string()
            .required("Vous devez écrire votre message")
            .max(500, " Maximum 500 caractères autorisé"),
        })}
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
                Votre demande ( max 500 caractères){" "}
                <span className="text-red-600"> * </span>
              </label>
              <Field
                type="text"
                name="message"
                component="textarea"
                rows="2"
                className="input"
              />
              <small className="text-red-600">
                <ErrorMessage name="message" />
              </small>
            </div>
          </div>

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
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;

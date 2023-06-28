import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AdminProductsNew = () => {
  // Define the initial form values
  const initialValues = {
    name: "",
    reference: "",
    price: "",
    description: "",
    dimension: "",
    stock: false,
    createdAt: "",
    productimages: [],
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    reference: Yup.string().required("Reference is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be a positive number")
      .required("Price is required"),
    description: Yup.string(),
    dimension: Yup.string(),
    stock: Yup.boolean().required("Stock availability is required"),
    createdAt: Yup.date().required("Creation date is required"),
    productimages: Yup.array().min(1, "At least one image is required"),
  });

  // Submit handler
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("Form values:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="reference">Reference:</label>
          <Field type="text" id="reference" name="reference" />
          <ErrorMessage name="reference" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <Field type="number" id="price" name="price" />
          <ErrorMessage name="price" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="dimension">Dimension:</label>
          <Field type="text" id="dimension" name="dimension" />
          <ErrorMessage name="dimension" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="stock">Stock:</label>
          <Field type="checkbox" id="stock" name="stock" />
          <ErrorMessage name="stock" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="createdAt">Creation Date:</label>
          <Field type="date" id="createdAt" name="createdAt" />
          <ErrorMessage name="createdAt" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="productimages">Product Images:</label>
          <Field type="text" id="productimages" name="productimages" />
          <ErrorMessage
            name="productimages"
            component="div"
            className="error"
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AdminProductsNew;

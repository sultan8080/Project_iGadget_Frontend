import React from "react";
import { useParams } from "react-router-dom";

function AdminProductsEdit() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Product Edit</h1>
    </div>
  );
}

export default AdminProductsEdit;

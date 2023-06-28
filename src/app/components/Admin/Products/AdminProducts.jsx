import { AiFillCloseSquare, AiFillPlusSquare } from "react-icons/ai";
import { BiSquare } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { RiEdit2Fill, RiDeleteBin5Fill, RiEyeFill } from "react-icons/ri";
import DataTable from "react-data-table-component";
import axios from "axios";
import { array } from "yup";
import { BsCheckSquareFill } from "react-icons/bs";

export const AdminProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  // Sample data for the DataTable

  // Columns for the DataTable
  const columns = [
    {
      name: "ID",
      selector: "id",
      headerClass: "font-bold",
      width: "60px",
      sortable: true,
    },
    {
      name: "Nom du Produit",
      selector: "name",
      sortable: true,
      width: "150px",
    },
    {
      name: "Reference",
      selector: "reference",
      sortable: true,
      width: "150px",
    },
    { name: "Prix", selector: "price", width: "100px", sortable: true },
    { name: "Description", selector: "description", width: "300px" },
    { name: "Dimension", selector: "dimension", width: "150px" },
    {
      name: "Disponibilité",
      width: "120px",
      selector: "stock",
      cell: (row) => (
        <div className="text-center">
          {row.stock ? (
            <span className=" text-primary">
              <BsCheckSquareFill />
            </span>
          ) : (
            <span className="text-red">
              <AiFillCloseSquare />
            </span>
          )}
          {row.stock ? "oui" : "rupture"}
        </div>
      ),
    },
    { name: "Date", selector: "createdAt", width: "100px" },
    {
      name: "Image",
      selector: "productimages",
      width: "200px",
      cell: (row) => (
        <>
          {row.productimages.map((image, index) => (
            <img
              key={index}
              src={image.image_name}
              alt={`Prduct Image ${index}`}
              style={{ width: "50px", height: "50px" }}
            />
          ))}
        </>
      ),
    },
    {
      name: "Actions",
      width: "250px",
      cell: (row) => (
        <div className="flex">
          <div
            className="btn btn-secondary-dark m-1"
            onClick={() => handleView(row)}
          >
            <RiEyeFill />
          </div>

          <div className="btn btn-third m-1" onClick={() => handleEdit(row)}>
            <RiEdit2Fill />
          </div>
          <div
            className="btn btn-red m-1 shadow-md"
            onClick={() => handleDelete(row.id)}
          >
            <RiDeleteBin5Fill />
          </div>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Handler for edit button click
  const handleEdit = (row) => {
    // Handle edit logic
    console.log("Edit clicked for row:", row);
  };

  // Handler for delete button click
  const handleDelete = (id) => {
    // Handle delete logic
    console.log("Delete clicked for ID:", id);
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center mb-2">
          <span>
            <BiSquare />
          </span>
          <div className="text-lg pl-3">
            TOUS LES PRODUITS (20 produits par page)
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary group relative flex items-center gap-2"
        >
          <AiFillPlusSquare />
          Ajouter un nouveau Produit
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <DataTable
          // title="User Data"
          data={data}
          columns={columns}
          highlightOnHover
          pagination
          striped
          onSelectedRowsChange={() => {}}
          selectableRows
          noDataComponent="No data found"
          selectableRowsComponentProps={{ inkDisabled: true }}
          selectableRowSelected={(row) => row.isSelected}
        />
      </div>
    </div>
  );
};

export default AdminProducts;

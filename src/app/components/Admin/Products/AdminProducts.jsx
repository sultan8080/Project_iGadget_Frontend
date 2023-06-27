import { AiFillPlusSquare } from "react-icons/ai";
import { BiSquare } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { RiEdit2Fill, RiDeleteBin5Fill, RiEyeFill } from "react-icons/ri";
import DataTable from "react-data-table-component";
import axios from "axios";

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
      style: {
        width: "20px",
      }
    },
    { name: "Nom du Produit", selector: "reference", headerClass: "font-bold", style: {
      width: "30px",
    } },
    { name: "Reference", selector: "name", sortable: true },
    { name: "Prix", selector: "price" },
    { name: "Description", selector: "description" },
    { name: "Dimension", selector: "dimension" },
    { name: "Disponibilité", selector: "stock" },
    { name: "Date", selector: "createdAt" },
    { name: "Image", selector: "[productimages]" },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex">
          <div className="btn btn-secondary" onClick={() => handleView(row)}>
            <RiEyeFill />
          </div>

          <div className="btn btn-third" onClick={() => handleEdit(row)}>
            <RiEdit2Fill />
          </div>
          <div className="btn btn-red" onClick={() => handleDelete(row.id)}>
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
      <div>
        <DataTable
          // title="User Data"
          data={data}
          columns={columns}
          searchable
          highlightOnHover
          pagination
          striped
          onSelectedRowsChange={() => {}}
          selectableRows
          noDataComponent="No data found"
          selectableRowsComponentProps={{ inkDisabled: true }}
          selectableRowSelected={(row) => row.isSelected}
          theme="solarized"
        />
      </div>
    </div>
  );
};

export default AdminProducts;

import { AiFillPlusSquare } from "react-icons/ai";
import { BiSquare } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { RiEdit2Fill, RiDeleteBin5Fill, RiEyeFill } from "react-icons/ri";
import DataTable from "react-data-table-component";
import apiBackEnd from "../../../api/backend/api.Backend";
import { URL_BACK_CATEGORIES } from "../../../constants/urls/urlBackEnd";
import { useSelector } from "react-redux";
import { selectToken } from "../../../redux-store/authenticationSlice";
import moment from "moment";

/**
 * Component display categories
 *
 * @author Sultan
 */

export const AdminCategories = () => {
  const [data, setData] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    apiBackEnd
      .get(URL_BACK_CATEGORIES, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
      });
  }, []);

  // Columns for the DataTable
  const columns = [
    {
      name: "ID",
      selector: "id",
      headerClass: "font-bold",
      sortable: true,
    },
    {
      name: "NOM DU CATÉGORIE",
      selector: "name",
      sortable: true,
    },

    { name: "dATE DE CRÉATION", selector: "createdAt" },
    {
      name: "ACTIONS",
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
    // console.log("Delete clicked for ID:", id);
    // setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center mb-2">
          <span>
            <BiSquare />
          </span>
          <div className="text-lg pl-3">TOUTES LES CATÉGORIES</div>
        </div>

        <button
          type="submit"
          className="btn btn-primary group relative flex items-center gap-2"
        >
          <AiFillPlusSquare />
          Ajouter un nouveau Categorie
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <DataTable
          // title="User Data"
          data={data}
          columns={columns}
          highlightOnHover
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

export default AdminCategories;

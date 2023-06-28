import { AiFillCloseSquare, AiFillPlusSquare } from "react-icons/ai";
import { BiSquare } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { RiEdit2Fill, RiDeleteBin5Fill, RiEyeFill } from "react-icons/ri";
import DataTable from "react-data-table-component";
import { BsCheckSquareFill } from "react-icons/bs";
import apiBackEnd from "../../../api/backend/api.Backend";
import { URL_BACK_USERS } from "../../../constants/urls/urlBackEnd";
import { selectToken } from "../../../redux-store/authenticationSlice";
import { useSelector } from "react-redux";
import moment from "moment";

/**
 * Component new product
 *
 * @author Sultan
 */

export const AdminUsers = () => {
  const [data, setData] = useState([]);
  const token = useSelector(selectToken);

  useEffect(() => {
    apiBackEnd
      .get(URL_BACK_USERS, {
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
      width: "60px",
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: "email",
      sortable: true,
      width: "150px",
    },

    {
      name: "NOM ET PRÉNOM",
      width: "150px",
      cell: (row) => `${row.lastname.toUpperCase()} ${row.firstname}`,
    },
    {
      name: "ROLE",
      selector: "roles",
      cell: (row) => {
        return row.roles.join(", ");
      },
      width: "150px",
    },
    { name: "ADRESSE", selector: "address", width: "200px" },
    { name: "CODE POSTAL", selector: "codepostal", width: "100px" },

    { name: "PHONE", selector: "phone", width: "200px" },
    { name: "CITY", selector: "city", width: "150px" },

    {
      name: "DATE",
      selector: "createdAt",
      width: "80px",
      cell: (row) => moment(row.date).format("DD-MM-YYYY"),
    },
    {
      name: "PHOTO",
      selector: "user_photo",
      width: "100px",
      cell: (row) => (
        <img src={row.user_photo} alt="User Photo" width="50" height="50" />
      ),
    },
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
          <div className="text-lg pl-3">TOUS LES UTILISATEURS</div>
        </div>

        <button
          type="submit"
          className="btn btn-primary group relative flex items-center gap-2"
        >
          <AiFillPlusSquare />
          Ajouter un nouvel utilisateur{" "}
        </button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <DataTable
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

export default AdminUsers;

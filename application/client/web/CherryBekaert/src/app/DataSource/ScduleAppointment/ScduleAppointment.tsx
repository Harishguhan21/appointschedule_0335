import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import GridTable from "../Components/GridTable";
import StatusCellRenderer from "../Components/StatusCellRenderer";
import "./schduleAppointment.css";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
export class ScduleAppointment extends React.Component<any, any> {
  columnDefs: any = [
    // { checkboxSelection: true, headerCheckboxSelection: true, width: 20 },
    {
      headerName: "NAME",
      field: "name",
      sortable: false,
      filter: false,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: "TYPE",
      cellRendererFramework: (params: any) => (
        // <Button>
        //   More details
        // </Button>
        <p>{params.data.type}</p>
      ),
      width: 100,
    },
    {
      headerName: "Status",
      cellRendererFramework: StatusCellRenderer,
      sortable: false,
      filter: false,
    },
    {
      headerName: "Action",
      cellRendererFramework: (params: {
        data: {
          start: any;
          status: any;
          id: any;
        };
      }) => (
        <div className="flex">
          <button className="edit-btn">
            <FiEdit /> <span className="">Edit</span>
          </button>
          <button className="delete-btn mx-2">
            <MdDelete style={{ color: "red" }} />
          </button>
        </div>
      ),
      width: 100,
    },
  ];

  rowData = [
    { name: "John Doe", type: "Type A", status: "Active", id: 1 },
    { name: "Jane Smith", type: "Type B", status: "Inactive", id: 2 },
    { name: "Bob Johnson", type: "Type C", status: "Active", id: 3 },
    // Add more rows as needed
  ];

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="data-source-container">
        <div className="schdule-appointment-container">
          <div className="search-container">
            <i className="search-icon">&#128269;</i>
            <input
              type="text"
              className="search-input"
              placeholder="Search Users By Name"
            />
          </div>
          <div className="mt-5">
            <GridTable columnDefs={this.columnDefs} rowData={this.rowData} />
          </div>
        </div>
      </div>
    );
  }
}

export default ScduleAppointment;

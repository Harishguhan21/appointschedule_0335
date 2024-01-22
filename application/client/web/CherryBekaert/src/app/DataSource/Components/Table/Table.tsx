// TableWithCheckbox.js

import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import "./Table.css";

const TableWithCheckbox = ({ data, btnColor }: any) => {
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [selectAll, setSelectAll] = useState<any>(false);

  const handleCheckboxChange = (id: any) => {
    const isSelected = selectedRows.includes(id);

    if (isSelected) {
      setSelectedRows(selectedRows.filter((rowId: any) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allIds = data.map((row: any) => row.id);
      setSelectedRows(allIds);
    }

    setSelectAll(!selectAll);
  };

  return (
    <Table bordered hover>
      <thead>
        <tr className="table-header">
          <th style={{ width: 60 }}>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              style={{ cursor: "pointer" }}
            />
          </th>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={() => handleCheckboxChange(row.id)}
                style={{ cursor: "pointer" }}
              />
            </td>
            <td>{row.name}</td>
            <td>{row.type}</td>
            <td>
              <div
                style={{
                  background: "#EDEAFF",
                  color: "#7862FF",
                  width: 90,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 10,
                }}
              >
                {row.status}
              </div>
            </td>
            <td>
              <div className="d-flex">
                <button className="edit-btn py-2 px-3">
                  <FiEdit style={{ color: btnColor }} />{" "}
                  <span className="mx-2">Edit</span>
                </button>
                <button className="delete-btn mx-2 py-2 px-3">
                  <MdDelete style={{ color: "red" }} />
                </button>
              </div>
            </td>
            {/* Add more table cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableWithCheckbox;

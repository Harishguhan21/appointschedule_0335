import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../DataSource.css";
export default class DatabaseForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    console.log(this.props, "1234");

    return (
      <div className="data-source-container">
        <div className="data-container">
          <div className="header-bar">
            <div className="title-bar">
              <div className="arrow-icon" style={{ background: "#DDDCE3" }}>
                <IoIosArrowBack
                  className="arrow-icons"
                  onClick={this.props.handlePreviousPage}
                />
              </div>
              <h1 className="title-text">Data Source Explore</h1>
            </div>

            <div className="">
              <button className="test-btn">Test Connection</button>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="content-wrapper">
            <div className="content">
              <div>
                <label className="label-content">Enter type : </label>
              </div>
              <div>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Enter Type"
                />
              </div>
            </div>
            <div className="content">
              <div>
                <label className="label-content">Data type : </label>
              </div>
              <div>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Enter DataType"
                />
              </div>
            </div>
            <div className="content">
              <div>
                <label className="label-content">User Name : </label>
              </div>
              <div>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Enter Username"
                />
              </div>
            </div>
            <div className="content">
              <div>
                <label className="label-content">Password : </label>
              </div>
              <div>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="content">
              <div>
                <label className="label-content">Host : </label>
              </div>
              <div>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Enter Host"
                />
              </div>
            </div>
            <div className="content">
              <div>
                <label className="label-content">Port : </label>
              </div>
              <div>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Enter Port"
                />
              </div>
            </div>
            <div className="content">
              <div>
                <label className="label-content">Data Base : </label>
              </div>
              <div>
                <input
                  className="input-content"
                  type="text"
                  placeholder="Enter Database"
                />
              </div>
            </div>
          </div>

          <hr className="hr-line" />
          <div className="btn-container">
            <button
              className="cancel-btn"
              style={{ color: this.props.theme.color }}
            >
              cancel
            </button>

            <button
              className="next-btn mx-2 "
              style={{ backgroundColor: this.props.theme.color }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

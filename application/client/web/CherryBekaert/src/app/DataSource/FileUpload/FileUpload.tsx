import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../DataSource.css";

export default class FileUpload extends React.Component<any, any> {
  render() {
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
              <h1 className="title-text">Multiple File Upload</h1>
            </div>

            <div className="">
              <button className="test-btn">Save</button>
            </div>
          </div>
          <hr className="hr-line" />
        </div>
      </div>
    );
  }
}

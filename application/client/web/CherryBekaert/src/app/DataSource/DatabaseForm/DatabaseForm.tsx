import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../DataSource.css";

export default class DatabaseForm extends React.Component<any, any> {
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
              <h1 className="title-text">Data Source Explore</h1>
            </div>

            <div className="">
              <button className="test-btn">Test Connection</button>
            </div>
          </div>
          <hr className="hr-line" />
          {/* <div className="card-container">
                {cardData.map((item: any) => {
                  return (
                    <Card
                      data={item}
                      selected={this.state.selectedCard === item.id}
                      onChange={() => this.handleCardSelection(item.id)}
                    />
                  );
                })}
              </div> */}
          <hr className="hr-line" />
          <div className="btn-container">
            <button className="cancel-btn">cancel</button>
            <button className="next-btn mx-2">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

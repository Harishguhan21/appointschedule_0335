import Card from "../card/card";
import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./DataSource.css";

interface CardData {
  id: number;
  name: string;
  image: any;
}

export default class DataSource extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedCard: null,
      isFormView: false,
    };
  }

  handleCardSelection = (id: number) => {
    this.setState({ selectedCard: id });
  };

  handleNextPage = () => {
    this.setState({
      isFormView: true,
    });
  };

  render() {
    const fileIcon: any = require("../../assets/img/fileIcon.png");
    const filterIcon: any = require("../../assets/img/Filter.png");
    const googleDriveIcon: any = require("../../assets/img/google-drive.png");
    const webIcon: any = require("../../assets/img/web.png");
    const homeIcon: any = require("../../assets/img/home.png");
    const cardData: any = [
      {
        id: 1,
        name: "Data-Base",
        image: filterIcon,
      },
      {
        id: 2,
        name: "Google-Drive",
        image: googleDriveIcon,
      },
      {
        id: 3,
        name: "Files",
        image: fileIcon,
      },
      {
        id: 4,
        name: "Website-URL",
        image: webIcon,
      },
      {
        id: 5,
        name: "Data-Warehouse",
        image: homeIcon,
      },
    ];

    return (
      <>
        {!this.state.isFormView ? (
          <>
            <div className="data-source-container">
              <div className="data-container">
                <div className="title-bar">
                  <div className="arrow-icon" style={{ background: "#DDDCE3" }}>
                    <IoIosArrowBack className="arrow-icons" />
                  </div>
                  <h1 className="title-text">Data Source Explore</h1>
                </div>
                <hr className="hr-line" />
                <div className="card-container">
                  {cardData.map((item: any) => {
                    return (
                      <Card
                        data={item}
                        selected={this.state.selectedCard === item.id}
                        onChange={() => this.handleCardSelection(item.id)}
                      />
                    );
                  })}
                </div>
                <hr className="hr-line" />
                <div className="btn-container">
                  <button className="next-btn" onClick={this.handleNextPage}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="data-source-container">
            <div className="data-container">
              <div className="header-bar">
                <div className="title-bar">
                  <div className="arrow-icon" style={{ background: "#DDDCE3" }}>
                    <IoIosArrowBack className="arrow-icons" />
                  </div>
                  <h1 className="title-text">Data Source Explore</h1>
                </div>

                <div className="test-btn">
                  <button className="">Test Connection</button>
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
        )}
      </>
    );
  }
}

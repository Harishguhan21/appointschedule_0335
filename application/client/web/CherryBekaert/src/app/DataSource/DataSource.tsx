import Card from "../card/card";
import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./DataSource.css";
import DatabaseForm from "./DatabaseForm/DatabaseForm";
import FileUpload from "./FileUpload/FileUpload";
import WebsiteModal from "./website/WebsiteModal";

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
      selectCardDetails: {},
      showModal: false,
    };
  }

  handleCardSelection = (item: any) => {
    if (item.name === "Website-URL") {
      this.showModal();
    }
    this.setState({ selectedCard: item.id, selectCardDetails: item });
  };

  handleNextPage = () => {
    if (this.state.selectCardDetails.name != "Website-URL") {
      this.setState({
        isFormView: true,
      });
    } else {
      this.showModal();
    }
  };

  handlePreviousPage = () => {
    this.setState({
      isFormView: false,
    });
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
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
                        onChange={() => this.handleCardSelection(item)}
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
              {this.state.showModal ? (
                <WebsiteModal
                  showModal={this.showModal}
                  handleClose={this.handleClose}
                />
              ) : null}
            </div>
          </>
        ) : (
          <>
            {this.state.selectCardDetails.name === "Data-Base" ? (
              <DatabaseForm handlePreviousPage={this.handlePreviousPage} />
            ) : this.state.selectCardDetails.name === "Files" ? (
              <FileUpload handlePreviousPage={this.handlePreviousPage} />
            ) : this.state.selectCardDetails.name === "Website-URL" ? (
              <WebsiteModal
                showModal={this.showModal}
                handleClose={this.handleClose}
              />
            ) : null}
          </>
        )}
      </>
    );
  }
}

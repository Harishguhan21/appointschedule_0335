import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import "../DataSource.css";

const WebsiteModal = ({ showModal, handleClose, theme }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSaveLink = () => {
    handleClose();
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={handleClose}
    >
      <Modal.Header>
        <div className="header-bar">
          <div className="title-bar">
            <div className="arrow-icon" style={{ background: "#DDDCE3" }}>
              <IoIosArrowBack className="arrow-icons" onClick={handleClose} />
            </div>
            <h1 className="title-text">Website-URL</h1>
          </div>
          <div className="">
            <button
              className={`${!isChecked ? "disabled-btn" : "test-btn"}`}
              disabled={!isChecked}
              onClick={handleSaveLink}
              style={{
                backgroundColor: !isChecked ? "gray" : theme.color,
                color: "white",
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-popup-container">
          <p className="modal-title-text">Upload Your Link</p>
          <div className="input-group-url">
            <div className="input-group-prepend">
              <span className="input-group-text">Https://</span>
            </div>
            <input
              type="text"
              className="url-input"
              placeholder="Enter The URL"
              id="urlInput"
              // value={url}
              // onChange={handleChange}
            />
          </div>
          <div className="checkbox-item">
            <input
              type="checkbox"
              className="check-input"
              onChange={handleCheckboxChange}
            />
            <p style={{ marginLeft: "7px" }}>
              Enter a link to check if it’s safe
            </p>
          </div>

          <p style={{ marginLeft: "7px" }}>
            Always use a URL checker to see if a link is suspicious before
            clicking. Bookmark this one!
          </p>

          <p style={{ marginLeft: "7px" }}>
            Check if a website is badly written or if the formatting and design
            are different from what you usually see from an organization.
          </p>

          <p style={{ marginLeft: "7px" }}>
            Be suspicious of any messages that offer huge promotions, discounts,
            or free products.
          </p>

          <p style={{ marginLeft: "7px" }}>
            Treat any communication that asks for your credentials and other
            personal information with extra caution.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WebsiteModal;

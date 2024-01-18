import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import "../DataSource.css";

const WebsiteModal = ({ showModal, handleClose }: any) => {
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
              <IoIosArrowBack className="arrow-icons" />
            </div>
            <h1 className="title-text">Website-URL</h1>
          </div>
          <div className="">
            <button className="test-btn">Save</button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          <p className="modal-title-text">Upload Your Link</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WebsiteModal;

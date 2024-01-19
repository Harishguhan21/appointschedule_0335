import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./uploadFile.css";
import { HiFolderArrowDown } from "react-icons/hi2";

export default class UploadFiles extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.upload = this.upload.bind(this);
    this.onDrop = this.onDrop.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
    };
  }

  componentDidMount() {
    // UploadService.getFiles().then((response) => {
    //   this.setState({
    //     fileInfos: response.data,
    //   });
    // });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    // UploadService.upload(currentFile, (event: any) => {
    //   this.setState({
    //     progress: Math.round((100 * event.loaded) / event.total),
    //   });
    // });
    // .then((response) => {
    //   this.setState({
    //     message: response.data.message,
    //   });
    //   return UploadService.getFiles();
    // })
    // .then((files) => {
    //   this.setState({
    //     fileInfos: files.data,
    //   });
    // })
    // .catch(() => {
    //   this.setState({
    //     progress: 0,
    //     message: 'Could not upload the file!',
    //     currentFile: undefined,
    //   });
    // });

    this.setState({
      selectedFiles: undefined,
    });
  }

  onDrop(files: any) {
    if (files.length > 0) {
      this.setState({ selectedFiles: files });
    }
  }

  render() {
    const { selectedFiles, currentFile, progress, message, fileInfos }: any =
      this.state;

    return (
      <div>
        {/* {currentFile && (
          <div className="progress mb-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )} */}

        <Dropzone onDrop={this.onDrop} multiple={false}>
          {({ getRootProps, getInputProps }: any) => (
            <section>
              <div
                {...getRootProps({ className: "dropzone" })}
                style={{ borderColor: this.props.theme.color,borderWidth:2, }}
              >
                <input {...getInputProps()} />
                <div className="file-container">
                  <HiFolderArrowDown
                    className="folder-icon"
                    style={{
                      color: this.props.theme.color,
                    }}
                  />
                  {selectedFiles && selectedFiles[0].name ? (
                    <div className="selected-file">
                      {selectedFiles && selectedFiles[0].name}
                    </div>
                  ) : (
                    <>
                      <p
                        className=""
                        style={{
                          fontWeight: "bold",
                          color: "black",
                          marginTop: 20,
                        }}
                      >
                        Drag and drop file here, or click to select file
                      </p>
                      <p style={{ fontWeight: "bold" }}>Or</p>
                      <button
                        className="browse-btn"
                        style={{
                          color: this.props.theme.color,
                          borderWidth: 1,
                          borderColor: this.props.theme.color,
                        }}
                      >
                        Browse Files
                      </button>
                    </>
                  )}
                </div>
              </div>
              {/* <aside className="selected-file-wrapper">
                <button
                  className="btn btn-success"
                  disabled={!selectedFiles}
                  onClick={this.upload}
                >
                  Upload
                </button>
              </aside> */}
            </section>
          )}
        </Dropzone>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        {fileInfos.length > 0 && (
          <div className="card">
            <div className="card-header">List of Files</div>
            <ul className="list-group list-group-flush">
              {fileInfos.map((file: any, index: any) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

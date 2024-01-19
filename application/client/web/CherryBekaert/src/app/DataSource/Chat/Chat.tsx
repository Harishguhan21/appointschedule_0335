import TopBar from "app/TopBar/TopBar";
import React from "react";
import SideBar from "../Components/sidebar";

export class Chat extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="d-flex">
        <SideBar template={this.props.theme} />
        <div className="" style={{ width: "100%" }}>
          <TopBar
            name={this.props.theme.name}
            btnColor={this.props.theme.color}
          />
          <div
            className=""
            style={{ overflowY: "auto", maxHeight: "calc(100vh - 120px)" }}
          >
            <h4>Chat Screen</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;

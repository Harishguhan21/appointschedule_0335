import React, { Component } from "react";
import { MdAccessTime } from "react-icons/md";

class StatusCellRenderer extends Component {
  render() {
    const { data }: any = this.props;
    return (
      <div>
        {/* {value}
        {value && <MdAccessTime style={{ marginLeft: '4px' }} />} */}
        {data.status === "CANCELED" ? (
          <p style={{ color: "red" }}>{data.status}</p>
        ) : (
          <p>{data.status}</p>
        )}
      </div>
    );
  }
}

export default StatusCellRenderer;
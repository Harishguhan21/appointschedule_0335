import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "./GridTable.css";

export class GridTable extends Component<any, any> {
  gridApi: any;
  gridColumnApi: any;
  constructor(props: any) {
    super(props);

    this.state = {
      defaultColDef: {
        flex: 1,
        minWidth: 150,
        filter: false,
        resizable: true,
      },
    };
  }

  gridOptions: any = {
    getRowHeight: function (params: any) {
      return 50;
    },
    headerHeight: 60,
    suppressRowClickSelection: true,
    rowSelection: "multiple",
  };

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;
  }

  render() {
    const { columnDefs, rowData } = this.props;
    return (
      <div
        className="ag-theme-material"
        style={{ height: "700px", width: "100%" }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              gridOptions={this.gridOptions}
              columnDefs={columnDefs}
              defaultColDef={this.state.defaultColDef}
              onGridReady={this.onGridReady}
              rowData={rowData}
              pagination={true}
              paginationPageSize={10}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GridTable;

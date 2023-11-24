import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./appointments.scss";
import  {service}   from './appointments.service';

class Appointments extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'work', field: 'work' },{ headerName: 'status', field: 'statuss' },{ headerName: 'start', field: 'start' },{ headerName: 'provide', field: 'provider' },{ headerName: 'customer', field: 'customer' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
    this.state={
    appointments : {
    canceler: '',
    chatmessages: '',
    customer: '',
    end: '',
    canceledat: '',
    statuss: '',
    work: '',
    exchangerequest: '',
    ids: '',
    invoice: '',
    provider: '',
    start: '',
    },
    user : {
    city: '',
    email: '',
    firstname: '',
    ids: '',
    lastname: '',
    mobile: '',
    notifications: '',
    passwords: '',
    postcode: '',
    roles: '',
    street: '',
    username: '',
    },
    
    rowData :[]
    } }
    


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ appointments: { ...this.state.appointments, [e.target.name]: e.target.value } })
    }
    if(e?.target){
    this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.appointments.created_by = sessionStorage.getItem('email')||'{}';
    this.state.user.created_by = sessionStorage.getItem('email')||'{}';
    }
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">appointments</h2>
        <div id="template-iqz4" className="gjs-row">
    <div id="template-i6xj" className="gjs-cell">
        <div id="template-i545" className="gjs-row"></div>
    </div>
</div>
<div id="template-ipjz" className="ag-theme-material" style={{height:
'500px', width: '100%'}}>
    <AgGridReact columnDefs={this.columnDefs} pagination={true} onGridReady={this.onGridReady}
    paginationPageSize={5} domLayout={ "autoHeight"} animateRows={true}defaultColDef={{sortable:
    true, filter: true }} rowData={this.state.rowData} rowSelection={
    "single"} onRowSelected={this.onRowSelected }></AgGridReact>
</div>
    </>
    );
    };
    };

    export default Appointments;
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
// import Select from "react-select";
import "./work.scss";
import  {service}   from './work.service';

class Work extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    works : {
    description: '',
    duration: '',
    editable: '',
    ids: '',
    name: '',
    price: '',
    providers: '',
    targetcustomer: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ works: { ...this.state.works, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.works.created_by = sessionStorage.getItem('email')||'{}';
    }
    GpCreate  () {
    this.test.GpCreate(this.state.works).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">work</h2>
        <div id="template-iin8" className="gjs-row">
    <div id="template-io6c" className="gjs-cell"></div>
</div>
<div id="template-iqny" className="gjs-row">
    <div id="template-ifvh" className="gjs-cell">
        <label id="template-ipmz" className="label ">Add or Update Work</label>
    </div>
    <div id="template-iw5s" className="gjs-cell">
        <button id="template-i9hj3" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Save</button>
    </div>
</div>
<div id="template-i6qtv" className="gjs-row">
    <div id="template-i7yvx" className="gjs-cell">
        <label id="template-ikl7a" className="label ">user details</label>
    </div>
</div>
<div id="template-i5fys" className="gjs-row">
    <div id="template-ibvnl" className="gjs-cell">
        <label id="template-ilj5k" className="label ">name</label>
        <input id="template-iekfn" onChange={this.handlechange} name="name"
        value={this.state.works.name}className="input form-control " />
    </div>
    <div id="template-ikuph" className="gjs-cell">
        <label id="template-ijtc1" className="label ">price</label>
        <input id="template-iaixf" onChange={this.handlechange} name="price"
        value={this.state.works.price}className="input form-control " />
    </div>
    <div id="template-iw3ea" className="gjs-cell">
        <label id="template-isnsr" className="label ">duration</label>
        <input id="template-imhxb" onChange={this.handlechange}
        name="duration" value={this.state.works.duration}className="input form-control "
        />
    </div>
</div>
<div id="template-ijhgi" className="gjs-row">
    <div id="template-iob6l" className="gjs-cell">
        <label id="template-i91cg" className="label ">Description</label>
        <textarea id="template-iti3g" onChange={this.handlechange}
        name="description" value={this.state.works.description}className="textarea "></textarea>
    </div>
    <div id="template-i7j3r" className="gjs-cell">
        <div id="template-ivq9o" className="gjs-row">
            <div id="template-imk24" className="gjs-cell">
                <label id="template-ihnpd" className="label ">targetcustomer</label>
            </div>
            <div id="template-ihp8b" className="gjs-cell">
                <input type="radio" id="template-imyeq" className="radio form-control "
                />
                <label id="template-itikw" className="label ">retail</label>
            </div>
            <div id="template-ioexh" className="gjs-cell">
                <input type="radio" id="template-i8amz" className="radio form-control "
                />
                <label id="template-i14kl" className="label ">corporate</label>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Work;
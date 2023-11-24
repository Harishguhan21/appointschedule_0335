import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./profile.scss";
import  {service}   from './profile.service';

class Profile extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
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
    GpCreate  () {
    this.test.GpCreate(this.state.appointments).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">profile</h2>
        <div id="template-iin8" className="gjs-row"></div>
<div id="template-iqny" className="gjs-row">
    <div id="template-ifvh" className="gjs-cell">
        <label id="template-ipmz" className="label ">profile</label>
    </div>
    <div id="template-iw5s" className="gjs-cell">
        <button id="template-ibk3" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Send</button>
    </div>
</div>
<div id="template-i6w67" className="gjs-row">
    <div id="template-ia978" className="gjs-cell">
        <div id="template-ia88z" className="gjs-row"></div>
    </div>
</div>
<div id="template-i6qtv" className="gjs-row">
    <div id="template-i7yvx" className="gjs-cell">
        <label id="template-ikl7a" className="label ">user details</label>
    </div>
</div>
<div id="template-iw79g" className="gjs-row">
    <div id="template-ipuaf" className="gjs-cell">
        <label id="template-igibm" className="label ">User name</label>
        <input id="template-ir9zi" onChange={this.handlechange}
        name="username" value={this.state.appointments.username}className="input form-control "
        />
    </div>
    <div id="template-i54ea" className="gjs-cell">
        <label id="template-ifvsm" className="label ">email</label>
        <input id="template-ik1u5" onChange={this.handlechange} name="email"
        value={this.state.appointments.email}className="input form-control " />
    </div>
</div>
<div id="template-i5fys" className="gjs-row">
    <div id="template-ibvnl" className="gjs-cell">
        <label id="template-ilj5k" className="label ">firstname</label>
        <input id="template-ihxzk" onChange={this.handlechange}
        name="firstname" value={this.state.appointments.firstname}className="input form-control "
        />
    </div>
    <div id="template-ikuph" className="gjs-cell">
        <label id="template-ijtc1" className="label ">lastname</label>
        <input id="template-iqpy3" onChange={this.handlechange}
        name="lastname" value={this.state.appointments.lastname}className="input form-control "
        />
    </div>
    <div id="template-iw3ea" className="gjs-cell">
        <label id="template-isnsr" className="label ">mobilenumber</label>
        <input id="template-is78i" onChange={this.handlechange}
        name="mobile" value={this.state.appointments.mobile}className="input form-control "
        />
    </div>
</div>
<div id="template-ijhgi" className="gjs-row">
    <div id="template-iob6l" className="gjs-cell">
        <label id="template-i91cg" className="label ">street</label>
        <input id="template-issnu" onChange={this.handlechange}
        name="street" value={this.state.appointments.street}className="input form-control "
        />
    </div>
    <div id="template-i7j3r" className="gjs-cell">
        <label id="template-i5f3v" className="label ">city
            <br id="template-ik8re"></br>
        </label>
        <input id="template-ipvvb" onChange={this.handlechange} name="city" value={this.state.appointments.city}className="input form-control "
        />
    </div>
    <div id="template-igozk" className="gjs-cell">
        <label id="template-ic25y" className="label ">postcode</label>
        <input id="template-ijed2" onChange={this.handlechange}
        name="postcode" value={this.state.appointments.postcode}className="input form-control "
        />
    </div>
</div>
    </>
    );
    };
    };

    export default Profile;
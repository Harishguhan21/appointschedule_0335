import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
// import Select from "react-select";
import "./provider.scss";
import  {service}   from './provider.service';

class Provider extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    provider : {
    appointments: '',
    city: '',
    corporateworks: '',
    email: '',
    firstname: '',
    ids: '',
    lastname: '',
    mobile: '',
    notifications: '',
    passwords: '',
    postcode: '',
    retailworks: '',
    roles: '',
    username: '',
    workingplan: '',
    works: '',
    },
    workingPlan : {
    friday: '',
    ids: '',
    monday: '',
    provider: '',
    saturday: '',
    sunday: '',
    thursday: '',
    tuesday: '',
    wednesday: '',
    },
    dayplan : {
    breaks: '',
    timeperoidswithbreaksexcluded: '',
    workinghours: '',
    },
    timeperoid : {
    end: '',
    start: '',
    },
    localtime : {
    hour: '',
    minute: '',
    nano: '',
    second: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ provider: { ...this.state.provider, [e.target.name]: e.target.value } })
    }
    if(e?.target){
    this.setState({ workingPlan: { ...this.state.workingPlan, [e.target.name]: e.target.value } })
    }
    if(e?.target){
    this.setState({ dayplan: { ...this.state.dayplan, [e.target.name]: e.target.value } })
    }
    if(e?.target){
    this.setState({ timeperoid: { ...this.state.timeperoid, [e.target.name]: e.target.value } })
    }
    if(e?.target){
    this.setState({ localtime: { ...this.state.localtime, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.provider.created_by = sessionStorage.getItem('email')||'{}';
    this.state.workingPlan.created_by = sessionStorage.getItem('email')||'{}';
    this.state.dayplan.created_by = sessionStorage.getItem('email')||'{}';
    this.state.timeperoid.created_by = sessionStorage.getItem('email')||'{}';
    this.state.localtime.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">provider</h2>
        <div id="template-iin8" className="gjs-row">
    <div id="template-io6c" className="gjs-cell"></div>
</div>
<div id="template-iqny" className="gjs-row">
    <div id="template-ifvh" className="gjs-cell">
        <label id="template-ipmz" className="label ">profile</label>
    </div>
    <div id="template-iw5s" className="gjs-cell">
        <button id="template-icht8" className="button btn btn-primary ">Regesiter</button>
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
        <input id="template-ibjri" onChange={this.handlechange}
        name="username" value={this.state.provider.username}className="input form-control "
        />
    </div>
    <div id="template-i54ea" className="gjs-cell">
        <label id="template-ifvsm" className="label ">email</label>
        <input id="template-ifucd" onChange={this.handlechange} name="email"
        value={this.state.provider.email}className="input form-control " />
    </div>
    <div id="template-i3hfh" className="gjs-cell"></div>
</div>
<div id="template-i5fys" className="gjs-row">
    <div id="template-ibvnl" className="gjs-cell">
        <label id="template-ilj5k" className="label ">firstname</label>
        <input id="template-iex0w" onChange={this.handlechange}
        name="firstname" value={this.state.provider.firstname}className="input form-control "
        />
    </div>
    <div id="template-ikuph" className="gjs-cell">
        <label id="template-ijtc1" className="label ">lastname</label>
        <input id="template-imo8b" onChange={this.handlechange}
        name="lastname" value={this.state.provider.lastname}className="input form-control "
        />
    </div>
    <div id="template-iw3ea" className="gjs-cell">
        <label id="template-isnsr" className="label ">mobilenumber</label>
        <input id="template-ipdkr" onChange={this.handlechange}
        name="mobile" value={this.state.provider.mobile}className="input form-control "
        />
    </div>
</div>
<div id="template-ijhgi" className="gjs-row">
    <div id="template-iob6l" className="gjs-cell">
        <label id="template-i91cg" className="label ">street</label>
        <input id="template-izfm2" className="input form-control "
        />
    </div>
    <div id="template-i7j3r" className="gjs-cell">
        <label id="template-i5f3v" className="label ">city
            <br id="template-ik8re"></br>
        </label>
        <input id="template-ifg69" onChange={this.handlechange} name="city" value={this.state.provider.city}className="input form-control "
        />
    </div>
    <div id="template-igozk" className="gjs-cell">
        <label id="template-ic25y" className="label ">postcode</label>
        <input id="template-ift0h" onChange={this.handlechange}
        name="postcode" value={this.state.provider.postcode}className="input form-control "
        />
    </div>
</div>
    </>
    );
    };
    };

    export default Provider;
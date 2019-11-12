import React, { Component } from "react";
import { Link } from "react-router-dom";


class AddReport extends Component {
    constructor() {
        super();
        this.state = {
            report_id: "",
            type: "",
            date: "",
            content: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newreport = {
            report_id: this.state.report_id,
            type: this.state.type,
            date: this.state.date,
            content: this.state.content
        };
        console.log(newreport);
    };
    render() {
        const { errors } = this.state;
        return (
            <div style={{
                width: '99vw',
            }}>
                <div style={{
                    width: '99vw',
                    height: '30vh',
                    position: 'relative',
                    backgroundImage: 'url(https://mares-med.com/profiles/recruiter/themes/cloudy/images/search-container-img.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                </div>
                <div className="row" style={{ backgroundColor: "White" }}>
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Add New Report</b>
                            </h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                />
                                <label htmlFor="name">Report ID</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">Type</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Date</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                />
                                <label htmlFor="password2">Content</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <Link to="/registration">
                                    <button
                                        style={{
                                            width: "150px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        type="submit"
                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                        Add
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddReport;
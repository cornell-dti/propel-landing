import React, { Component } from "react";
import { FaStickyNote, FaWrench, FaRocket } from "react-icons/fa"

const ServiceList = [
    {
        icon: <FaStickyNote />,
        title: 'Ideation',
        description: 'Students can be excited and driven, but apprehensive and lost. Propel aid students in bringing ideas to reality and creating a solution.'
    },
    {
        icon: <FaWrench />,
        title: 'Build',
        description: 'Students are often surrounded by ambitious peers who turn their projects into tech start-ups and entrepreneurship endeavors. Propel forster students in taking their crucial steps.'
    },
    {
        icon: <FaRocket />,
        title: 'Launch',
        description: 'Launch plans are Propel assist students in pitching ideas to industry experts, entrepreneurs, professors, mentors, and project team leads.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--2">
                                <div className="icon">
                                    {val.icon}
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;
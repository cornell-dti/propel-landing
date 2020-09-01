import React, { Component } from "react";
import { FaStickyNote, FaWrench, FaRocket } from "react-icons/fa"

const ServiceList = [
    {
        icon: <FaStickyNote />,
        title: 'Ideation',
        description: 'We know you have great ideas! We want to help you find the best ones through user and market research.'
    },
    {
        icon: <FaWrench />,
        title: 'Building',
        description: 'Creating a scalable product can be hard sometimes. We will provide you with the resources and assistance to help make it happen.'
    },
    {
        icon: <FaRocket />,
        title: 'Launch',
        description: 'We want to provide you with the opportunity to pitch to industry experts, entrepreneurs, professors, mentors, and project team leads.'
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
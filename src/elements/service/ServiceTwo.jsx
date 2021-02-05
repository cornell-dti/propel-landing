import React, { Component } from "react";
import { FcMoneyTransfer, FcCollaboration, FcPodiumWithAudience, FcDocument } from "react-icons/fc";

const ServiceList = [
    {
        icon: <FcMoneyTransfer />,
        title: 'Funding',
        description: 'Propel will provide each team with $250 in reimbursements towards expenses in building your product.'
    },
    {
        icon: <FcCollaboration />,
        title: 'Mentorship',
        description: 'Each project group will pair with one mentor from DTI who will be specified in different areas of the product development cycle and serve as guidance.'
    },
    {
        icon: <FcPodiumWithAudience />,
        title: 'Networking Opportunities',
        description: 'Propellians will have access to contacts from our monthly industry speakers and project feedback from experts specialized in product development.'
    },
    {
        icon: <FcDocument />,
        title: 'Credits',
        description: 'Each Propellian has the option to receive 2 credits s/u as INFO 1998 for being a part of the program.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Rocket Fuel',
        description = 'Here\'s how Propel plans on helping you launch your product.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="mailto:hyw2@cornell.edu"><span className="text">Have questions? Contact Us</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;

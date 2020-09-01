import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle}</title>
                    <meta name="description" content="Propel is an incubator program devoted to student ideas. At Propel, we will provide resources, networking opportunities, and mentorship for Cornell students to build and scale their project ideas from ideation to launch." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;

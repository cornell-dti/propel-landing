import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'About',
        description = 'Propel is an incubator program devoted to student ideas. At Propel, we will provide resources, networking opportunities, and mentorship for Cornell students to build and scale their project ideas from ideation to launch. ';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center pt-5">

                        <div className="col-lg-5">
                              <div className="thumbnail">
                                  <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                              </div>
                          </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Who we are</h3>
                                                <p>Propel is a student-run initiative program by Cornell Design & Tech Initiative.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">How we work</h3>
                                                <p>Applicants will work interdisciplinary in groups of 1-4 on a project for the semester in developing their technical and entrepreneurial skills.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;
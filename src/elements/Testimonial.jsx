import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Propel was my introduction to the possibilities of building a product from the ground up. With the support of the instructors and mentors, my team and I were able to hit the ground running with all of our crazy ideas.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Angela Chen </span> - Pacts, Propel F20</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>I was just starting to explore product management when I found out about Propel and joining was the best choice I made my senior year -- our product ultimately became integrated into DTI as a pocket project.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Mia and Haley </span> - Roommates, Propel F20</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Propel has given me a safe space to explore the product development cycle and, most importantly to me, what it actually means to be a product manager.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Alyssa and Gordon </span> - Shower Power, Propel F20</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Propel was a great experience for our team. It provided us with the resources needed to start developing our product. We had lots of fun and were able to learn a lot about product design, management, pitching, and much more.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Cornell GO </span> - Propel F20</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;
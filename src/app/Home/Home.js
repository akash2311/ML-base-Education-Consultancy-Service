import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require("../../assets/images/carousel/vssut.jpg")}
                                            alt="First slide"
                                        />
                                        {/* <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require("../../assets/images/carousel/vssut4.jpg")}
                                            alt="Second slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require("../../assets/images/carousel/education.jpg")}
                                            alt="Third slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require("../../assets/images/carousel/education3.jpg")}
                                            alt="Second slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require("../../assets/images/carousel/image1.jpg")}
                                            alt="Second slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={require("../../assets/images/carousel/education2.jpg")}
                                            alt="Second slide"
                                        />

                                        {/* <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">About Us.</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="text-info">Vast demographic need for career counselling</h6>
                                    <p>67% of India's population is in the 15-60 working-age bracket. Out of this, a majority is 15-30 years of age. It is the age where a person can assess and start or restart their careers. However, many are confused about a suitable career option for them. This confused bunch consists of 90% of students in India's schools and colleges. All of this indicates the vast market potential for career counseling.</p>
                                    <p>There are over 180 career paths and 3000 plus occupations to choose from. It is practically impossible to explore and assess all the career options. Students have to visit multiple Question and Answer forums and social media sites to get a gist of the ins and outs of any career.</p>
                                    <p>Career counselors are susceptible to cognitive bias.  A career counsellor who is interested in technology may suggest a career in technology.</p>
                                    <p>Ed-Consultant is the platform which focuses on suggesting career without any bias. Our System uses Machine Learning and process your data and suggest you the best. Because the student gets a clear job responsibility description, they don't create a glorified version of a career. This reduces the possibility of a career change in the future, thus leading to more stability.</p>
                                    <h5 className="text-info">Reduces career stress and unemployment</h5>
                                    <p>Once a student chooses the right career path they can apply themselves wholly to pursue that career. This clarity and focus will reduce the career pressure and depression rate of any society.If the student is clear about eligibility and skills required for the desired career, there is more time for preparation from an early stage. It reduces the unemployment rates due to individuals being unprepared for their careers.</p>
                                    <h5 className="text-info">Gives a clear picture of your career</h5>
                                    <p><p>Ed-Consultant is the platform which focuses on suggesting career without any bias. Our System uses Machine Learning and process your data and suggest you the best. Because the student gets a clear job responsibility description, they don't create a glorified version of a career. This reduces the possibility of a career change in the future, thus leading to more stability.</p></p>

                                </div>
                                <div className="col-md-6">
                                    <img
                                        className="d-block w-100"
                                        src={require("../../assets/images/product_images_2/png2.png")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">How it Works.</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Curious How it Works???</h5>
                                    <h5>Don't Worry we'll explain you breifly how the whole system works!!!</h5>
                                    <p>The whole process consist of only 5 steps. We Collect the basic information about you, like educational interest and other interest, extra curricular interst, Hobbies, Fasinating career, your achhivement etc. The whole taken data will be processed through a huge data set and your careerpath will get generated according to your input data and data set match.</p>
                                    <ul className="list-arrow">
                                        <h4 className="text-danger">Step 1</h4>
                                        <li>	The basic idea is to gather information about the student and match the information to career options. The information may include interests, skills, certifications etc. </li>
                                        <h4 className="text-danger">Step 2</h4>
                                        <li>	A list of careers with respective interests created through a survey, and this dataset is used to generate a career roadmap.</li>
                                        <h4 className="text-danger">Step 3</h4>
                                        <li>	Career roadmap can be shown based on eligibility criteria, job responsibilities, average income etc.</li>
                                        <h4 className="text-danger">Step 4</h4>
                                        <li>    After choosing the career options the students can opt to get notified about exams and opportunities available in the chosen option(s).</li>
                                        <h4 className="text-danger">Step 5</h4>
                                        <li>	Student can pay to get further services such as one-to-one conversation with counsellors.</li>
                                    </ul>

                                </div>
                                <div className="col-md-6">
                                    <img
                                        className="d-block w-100"
                                        src={require("../../assets/images/product_images_2/png1.png")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Developers.</h1>
                            <div className="row">
                                <div className="col-md-4 grid-margin stretch-card">
                                    <div className="card" style={{ backgroundColor: "black" }}>
                                        <div className="card-body">
                                            <h4 className="card-title">Brizish Safaq</h4>
                                            {/* <p>Regd. no. : 1802040009</p> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Regd. no. : 1802040009</p>
                                                    <ul className="list-arrow">
                                                        <li> Course : B.Tech</li>
                                                        <li> Branch : CSE</li>
                                                        <li> Email : brizishsafaq@gmail.com</li>
                                                        <li> Contact : 8327765521</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <img
                                                        className="d-block w-100"
                                                        src={require("../../assets/images/faces/brizish2.jpg")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 grid-margin stretch-card">
                                    <div className="card" style={{ backgroundColor: "black" }}>
                                        <div className="card-body">
                                        <h4 className="card-title">Akash Pattanayak</h4>
                                            {/* <p>Regd. no. : 1802040024</p> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Regd. no. : 1802040024</p>
                                                    <ul className="list-arrow">
                                                        <li> Course : B.Tech</li>
                                                        <li> Branch : CSE</li>
                                                        <li> Email : being.akash23@gmail.com</li>
                                                        <li> Contact : 7992483096</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <img
                                                        className="d-block w-100"
                                                        src={require("../../assets/images/faces/Akash2.jpg")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 grid-margin stretch-card">
                                    <div className="card" style={{ backgroundColor: "black" }}>
                                        <div className="card-body">
                                        <h4 className="card-title">Pragati Joshi</h4>
                                            {/* <p>Regd. no. : 1802040009</p> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Regd. no. : 1802040031</p>
                                                    <ul className="list-arrow">
                                                        <li> Course : B.Tech</li>
                                                        <li> Branch : CSE</li>
                                                        <li> Email : pragatijoshi.sbp@gmail.com</li>
                                                        <li> Contact : 9938142170</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <img
                                                        className="d-block w-100"
                                                        src={require("../../assets/images/faces/pragati.jpg")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

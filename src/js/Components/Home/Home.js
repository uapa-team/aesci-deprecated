import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import {Form, Input, Button, Checkbox, Typography, message} from "antd";
import {withRouter} from "react-router-dom";
import {MainContainer, Tittle} from "./HomeStyled";
import './Home.css';

const {Title, Text} = Typography;
const {Search} = Input;


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            selected: 1
        };
    }

    getContent(element) {
        switch (element) {
            case 1:
                return <div> The graduates of the Program in Chemical Engineering of the Universidad Nacional de
                    Colombia Bogotá
                    Campus, will be integral citizens and professionals who:
                    <br/>
                    <ul style={{listStyleType: "disc"}}>
                        <li>
                            Will develop their careers applying scientific, technological, humanistic and administrative
                            knowledge, with social responsibility to positively influence society.
                        </li>
                        <li>
                            Will become leading professionals who design, operate, manage or market products, processes
                            or
                            industrial facilities, incorporating sustainability criteria.
                        </li>
                            Will be use their communication and team work skills developed as well as their commitment to
                            life-long
                            learning to advance their careers.
                        <li>
                            Will contribute to well-being of their communities through their involvement in research,
                            development
                            and innovation projects.
                        </li>
                    </ul>
                </div>;
            case 2:
                return <div> Student Outcomes <br/> <br/> Nullam commodo sollicitudin risus, eu euismod ex semper
                    quis. <br/> Integer sit amet scelerisque risus. Phasellus sed orci purus. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi a magna ornare arcu
                    vestibulum rhoncus ut ac massa. <br/> Nulla dapibus luctus lacus, vel cursus nunc eleifend eu.
                    Nullam posuere, dui a vehicula efficitur, nulla urna posuere enim, sit amet tempor ligula odio id
                    tortor. Vivamus ac ipsum elit. <br/> Phasellus commodo sit amet nulla ac congue. Praesent non nisi
                    arcu. Praesent ornare eleifend orci eu rutrum. Nam nisi purus, facilisis quis metus bibendum, luctus
                    pharetra nibh. </div>;
            case 3:
                return <div> Relation Among Student Outcomes and Courses <br/> Donec interdum condimentum magna, nec
                    porta libero congue non. Nulla rutrum tortor eget gravida luctus. Fusce finibus vel urna in auctor.
                    Duis posuere venenatis purus in sagittis. Duis vulputate eu neque volutpat molestie. <br/> Maecenas
                    at enim porta, pharetra nunc et, iaculis ante. In hac habitasse platea dictumst. Mauris fermentum
                    rutrum velit id suscipit. Integer libero felis, pharetra in purus vitae, tristique eleifend ante.
                    Donec justo diam, vulputate vitae eros nec, vulputate facilisis arcu. <br/> Curabitur non dui eget
                    eros auctor blandit sit amet porta ligula. Aliquam erat volutpat. Nullam condimentum, nibh sed
                    consequat pellentesque, neque nunc pulvinar dui, vel imperdiet ex libero vitae nulla. Proin eleifend
                    pulvinar turpis, vulputate efficitur sem suscipit vel. In elementum efficitur enim non fringilla.
                </div>;
        }
    }

    render() {
        return (
            <div>
                <MainContainer>
                    <div className="row">
                        <div className="col element title">
                            Academic Evaluation System for Continuous Improvement
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 trim">
                            <div className="row login-button" onClick={() => this.props.history.push("/login")}>
                                Login
                            </div>
                            <div className="row search-container">
                                <Search className="search-input" placeholder="Search" size="large"
                                        onSearch={value => console.log(value)}/>
                            </div>
                            <div className="row lateral-button" onClick={() => this.setState({selected: 1})}>
                                Program Educational Objectives
                            </div>
                            <div className="row lateral-button" onClick={() => this.setState({selected: 2})}>
                                Student Outcomes
                            </div>
                            <div className="row lateral-button" onClick={() => this.setState({selected: 3})}>
                                Relation Among Student Outcomes and Courses
                            </div>
                        </div>
                        <div className="col trim">
                            <div className="row home-subtitle">
                                Program Educational Objectives
                            </div>
                            <div className="row home-content">
                                {this.getContent(this.state.selected)}
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </div>
        );
    }
}

export default withRouter(Home);

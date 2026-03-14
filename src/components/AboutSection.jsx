import React from "react";
import {Images} from "../constants/images";
import "./AboutSection.css";

export default function AboutSection(props) {
    const {title, text} = props;

    return (
        <section className="about-page-sec">
            <div className="about-text">
                <h1>{title}</h1>

                <p>{text}</p>
            </div>

            <div className="about-illustration">
                <img
                    src={Images.heartStethoscope}
                    alt="Healthcare Illustration"
                />
            </div>
        </section>
    );
}

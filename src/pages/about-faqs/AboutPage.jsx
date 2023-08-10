import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
const location = useLocation();
const navigate = useNavigate();
console.log("We are in route:", location.pathname);

const goToPath = (path) => {
    navigate(path);
};

const goBack = () => {
    navigate(-1);
};

const goToForward = () => {
    navigate(1);
};

return (
    <div>
    <h1> About | FAQs </h1>
    <div>
        <button onClick={() => goToPath("/")}> Go to Home </button>
        <button onClick={goBack}> Go back </button>
        <button onClick={goToForward}>Go Forward</button>
    </div>
    </div>
);
};

export default AboutPage;

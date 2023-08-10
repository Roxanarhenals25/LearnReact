import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {

const location = useLocation();
const navigate = useNavigate();
console.log("We are in route:", location.pathname);

const goToPath = (path) => {
    navigate(path);
};


return (
    <div>
        <h1>Home page</h1>
        <button onClick={ () => goToPath('/profile')}> Go to profile</button>
    </div>
);
};

export default HomePage;

import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae voluptatem quos explicabo consequatur qui nemo minus blanditiis id ipsa.</p>
            <button className="btn" onClick={() => history.push('/')}>Back to todo list</button>
        </React.Fragment>
    )
}
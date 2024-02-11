// redbox.jsx

import "./redbox.scss";

function RedBox({ text }) {
    return (
        <div className="redbox">
            <p className="redbox-text">{text}</p>
        </div>
    );
}

export default RedBox;
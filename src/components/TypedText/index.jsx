import { typeString } from "../../utils";

const typingSpeed = 20;

const TypedText = ({ children, type }) => {

    if (type === "h1") {
        return <h1 className="typed-text">{typeString(children, typingSpeed)}</h1>;
    }

    if (type === "h2") {
        return <h2 className="typed-text">{typeString(children, typingSpeed)}</h2>;
    }

    if (type === "h3") {
        return <h3 className="typed-text">{typeString(children, typingSpeed)}</h3>;
    }

    if (type === "h4") {
        return <h4 className="typed-text">{typeString(children, typingSpeed)}</h4>;
    }

    if (type === "h5") {
        return <h5 className="typed-text">{typeString(children, typingSpeed)}</h5>;
    }

    if (type === "h6") {
        return <h6 className="typed-text">{typeString(children, typingSpeed)}</h6>;
    }

    return <p className="typed-text">{typeString(children, typingSpeed)}</p>;
};

export default TypedText;
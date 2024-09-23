import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <h1 className="error-text">Oooopss! Something Went Wrong!!</h1>
            <h3>{err.data}</h3>
            <h4>{err.status} : {err.statusText}</h4>
        </div>
    )
}

export default Error;
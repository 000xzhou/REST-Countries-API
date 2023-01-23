import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <div >404 Page Not Found</div>
            <button className="btn lost-btn hvr-grow"><Link to={`/`}>Go back to home page</Link></button>
        </div>
    )
}

export default PageNotFound
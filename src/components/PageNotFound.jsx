import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <div>404 Page Not Found</div>
            <button><Link to={`/`}>Go back to home page</Link></button>
        </>
    )
}

export default PageNotFound
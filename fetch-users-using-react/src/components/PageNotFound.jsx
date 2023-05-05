import { Link } from "react-router-dom"

const PageNotFound=()=>{
    return <div className="pageNotFound">
        <h1>Page Not Found</h1>
        <button><Link to={"/"}>Go Back to Login Page</Link></button>
    </div>
}
export default PageNotFound
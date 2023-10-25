import { Link } from "react-router-dom";

const Wrapper = ({children}) => {
  return (
    <>
    <div className="wrapper">{children}</div>
    <li className="links"><Link to="BlogPage" style={{textDecoration: 'none', fontSize: 20, fontWeight: 700}}>Blog Page</Link></li> {/* Links to the Blog page and form page inside of the main wrapper on the Home page*/}
    <li className="links"><Link to="FormPage" style={{textDecoration: 'none', fontSize: 20, fontWeight: 700}}>Form Page</Link></li>
    </>
  )
}


export default Wrapper
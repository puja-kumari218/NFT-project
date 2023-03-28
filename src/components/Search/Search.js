import "./Search.css";
import {HiMagnifyingGlass} from "react-icons/hi2";
import Button from 'react-bootstrap/Button';
import {AiOutlinePlus} from "react-icons/ai" ;

function Search() {
    return (
      <div className="Search">
    <div className="search-container">
       <HiMagnifyingGlass size={25} style={{ color: "#3d3d3a" }} className="MagnifyingGlass"/>

    <input type ="text" placeholder="search by creator,collectible or collection" id="search-input"/>
 </div>
 <Button variant="outline-primary" className="Createbtn">
  Create
  <AiOutlinePlus/>
 </Button>{' '}

      </div>
    );
  }
  
  export default Search;
  
  
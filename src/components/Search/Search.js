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
 <Button  className="Createbtn">
 <AiOutlinePlus size={20} style={{marginLeft: "25px", position: "absolute", right:"95px" ,top:"10px"}}/>
  Create

 </Button>{' '}

 <div className="Navlink">
<a href="">Explore</a>
<a href="">Help</a>

<a href="">Activity</a>
<img src="https://www.pngmart.com/files/22/User-Avatar-Profile-Background-Isolated-PNG.png" className="Avtar" alt=""/>
 </div>



      </div>
    );
  }
  
  export default Search;
  
  
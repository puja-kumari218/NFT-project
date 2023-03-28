import './Explore.css';
import { BiPalette } from "react-icons/bi";
import { MdPhotoCamera } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import Button from 'react-bootstrap/Button';


function Explore() {
  return (
    <div className="Explore-Container">

      <h1>Explore</h1>

      <div className='Category-Container'>
        <a href='/AllCategory'><Button  style={{ width: "90px", height: "40px" }}>All</Button>
        </a>

      </div>
      <div className='Category-Container'>
        <a href='/ArtCategory'>
          <Button  className="btn" style={{ width: "90px", height: "40px" }}>
            Art
            <BiPalette size={25} style={{ color: "#3d3d3a" }} className="Palette" />
          </Button>
        </a>

      </div>
      <div className='Category-Container'>
        <a href='/PhotographyCategory'><Button  className="btn" style={{ width: "180px", height: "40px" }}>Photography</Button>
        </a>
        <MdPhotoCamera size={25} style={{ color: "#3d3d3a" }} className="PhotoCamera" />


      </div>
      <div className='Category-Container'>
        <a href='/GamesCategory'><Button className="btn" style={{ width: "160px", height: "40px" }}>Games</Button>
        </a>
        <IoGameController size={25} style={{ color: "#3d3d3a" }} className="Games" />


      </div>


    </div>

  );
}

export default Explore;


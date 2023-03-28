import CardContainer from '../CardContainer/CardContainer';
import './MySales.css';
import data from "../Card.json";

function MySales() {

  console.log (data)
  return (
    <div className="MySales-Container">
      <div className='Header'>
        <h1>
          My Sales / Packs
        </h1>
    <CardContainer/>
      </div>
      
    </div>

  );
}

export default MySales;
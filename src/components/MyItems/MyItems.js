import './MyItems.css';
import CardContainer from '../CardContainer/CardContainer';
import data from "../Card.json";

function MyItems() {
  return (
    <div className="MyItems-Container">
      <div className='Header'>
        <h1>
          My Items
        </h1>
        <CardContainer/>
      </div>
    </div>
  );
}

export default MyItems;
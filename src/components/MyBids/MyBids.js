import Button from 'react-bootstrap/Button';
import './MyBids.css';
import data from "../Card.json";
import CardContainer from '../CardContainer/CardContainer';



function MyBids() {
  return (
    <div className="MyBids-Container">
      <div className='Header'>
        <h1>
          My Bids
        </h1>
        <CardContainer/>

    </div>


    </div>

  );
}

export default MyBids;
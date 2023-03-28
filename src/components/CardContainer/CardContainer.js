import './CardContainer.css';
import  Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "../Card.json";
import {FaEllipsisH} from "react-icons/fa";


function CardContainer() {
  return (
    <div className="CardContainer">
    <Container fluid style={{padding:"5%"}}>
            <Row style={{textAlign: "center"}}>

                {data.map((mov) => 
                <Col id={mov.id} key = {mov.id} xs={4} md={3} lg={4} style={{marginBottom: "2%"}}>
                    <Card className='card'>
                    <Card.Header>
                      
                       <Card.Img variant="top" src="./profile-image.png" className="conversationIcon"/>
                       <FaEllipsisH className='ellipsish'/>
                       
                       </Card.Header>

                    <Card.Img variant="top" src={mov.image} className="cardimage"/>
                   
                    <Card.Body>
                        <Card.Title> {mov.title}</Card.Title>
                        <Card.Text>
                        {mov.description}
                        </Card.Text>
                        <Card.Text>
                        {mov.bid}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                )}
                </Row>
            </Container>
    </div>


  );
}

export default CardContainer;

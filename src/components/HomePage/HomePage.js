import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';
function HomePage() {
  return (
    <div className="HomePage">
      <div className='HomePageheader'>
<h1>Best of the best community owned NFT Market place</h1>
      </div>
     <Carousel fade style={{width:"700px",height:"500px"}} className="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dribbble.com/users/394068/screenshots/16876015/media/637667dd4ddb1b660076a2e5e0df45f6.png?compress=1&resize=1000x750&vertical=top"
          alt="First slide"
          style={{width:"700px",height:"500px" }}
        />
        <Carousel.Caption>        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dribbble.com/users/394068/screenshots/16876015/media/637667dd4ddb1b660076a2e5e0df45f6.png?compress=1&resize=1000x750&vertical=top"
          alt="Second slide"
          style={{width:"700px",height:"500px" }}

        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dribbble.com/users/394068/screenshots/16876015/media/637667dd4ddb1b660076a2e5e0df45f6.png?compress=1&resize=1000x750&vertical=top"
          alt="Third slide"
          style={{width:"700px",height:"500px" }}

        />
   
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HomePage;


// components/MyCarousel.js

import { Carousel, CarouselItem, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
  return (
    <div>
      <Carousel controls indicators interval={3000} fade>
        <CarouselItem>
          <Image className="d-block w-100" src="src/images/cnc/1.jpeg" alt="Slide 1" />
        </CarouselItem>
        <CarouselItem>
          <Image className="d-block w-100" src="/images/cnc/2.jpeg" alt="Slide 2" />
        </CarouselItem>
        <CarouselItem>
          <Image className="d-block w-100" src="/images/cnc/3.jpeg" alt="Slide 3" />
        </CarouselItem>
        {/* Add more CarouselItems as needed */}
      </Carousel>
      <Image>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum
            </p>

        </Carousel.Caption>
      </Image>
    </div>
  );
};

export default MyCarousel;
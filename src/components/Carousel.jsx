import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

function MyCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div className='carousel-images'>
          <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        </div>
        <div className='carousel-images'>
          <img  src="https://images.unsplash.com/photo-1579619002916-88cd4c81a70c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2" />
        </div>
        <div className='carousel-images'>
          <img src="https://images.unsplash.com/photo-1639667851375-49c6c8c04b1c?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
        </div>
        <div className='carousel-images'>
          <img src="https://images.unsplash.com/photo-1452967712862-0cca1839ff27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3" />
        </div>
        <div className='carousel-images'>
          <img src="https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4" />
        </div>
        <div className='carousel-images'>
          <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 5" />
        </div>
        <div className='carousel-images'>
          <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 6" />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;



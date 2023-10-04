import VideoCarousel from "../../Navbar/assets/earth-video.webm";
import Carousel from "react-bootstrap/Carousel";
import '../css/videoContent.css'


const VideoContent: React.FC = () => {
  return (
    <div className="w-100 video-content">
        <video src={VideoCarousel} className="earth-video" autoPlay loop muted></video>
        <Carousel interval={null} className="caroulsel-content">
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center text-small">
            <p className="text-light new-font m-0">PLANETS</p>
            <div>
              <p className="text-light new-font m-0">
                8 <i className="bi bi-arrow-right-circle"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center text-small">
            <p className="text-light m-0 new-font">MOONS</p>
            <div>
              <p className="text-light new-font m-0">
                290 <i className="bi bi-arrow-right-circle"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center text-small">
            <p className="text-light m-0 new-font">ASTEROIDS AND SMALL BODIES</p>
            <div>
              <p className="text-light new-font m-0">
                1.313.161 <i className="bi bi-arrow-right-circle"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-column justify-content-center align-items-center text-small">
            <p className="text-light new-font m-0">COMETS</p>
            <div>
              <p className="text-light new-font m-0">
                3.887 <i className="bi bi-arrow-right-circle"></i>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default VideoContent;
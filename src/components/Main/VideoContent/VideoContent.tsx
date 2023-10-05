import VideoCarousel from "../../Navbar/assets/earth-video.webm";
import "../css/videoContent.css";
import BottomCarousel from "../../GlobalComponents.tsx/BottomCarousel";
import { Carousel } from "react-bootstrap";
//import CarouselItem from "../../GlobalComponents.tsx/CarouselItem";
import CarouselItem from "react-bootstrap/CarouselItem";

const VideoContent: React.FC = () => {
  return (
    <div className="w-100 carousel-down">
      <video
        src={VideoCarousel}
        className="earth-video"
        autoPlay
        loop
        muted
      ></video>
      <BottomCarousel
        children={[
          {
            title: "PLANETS",
            content: "8",
            icon: <i className="bi bi-arrow-right-circle"></i>,
          },
          {
            title: "MOONS",
            content: "290",
            icon: <i className="bi bi-arrow-right-circle"></i>,
          },
          {
            title: "COMETS",
            content: "3.887",
            icon: <i className="bi bi-arrow-right-circle"></i>,
          },
          {
            title: "ASTEROIDS AND SMALL BODIES",
            content: "1.308.871",
            icon: <i className="bi bi-arrow-right-circle"></i>,
          }]}
      />
    </div>
  );
};

export default VideoContent;

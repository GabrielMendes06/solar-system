import VideoCarousel from "./VideoCarousel";
import '../css/videoContent.css'

const VideoContent: React.FC = () => {
  return (
    <div className="container.fluid video-content d-flex ">
        <VideoCarousel />
    </div>
  );
}

export default VideoContent;
import { Carousel } from "react-bootstrap";

interface BottomCarouselProps {
  children: any[];
}

const BottomCarousel: React.FC<BottomCarouselProps> = ({ children }) => {
  return (
    <Carousel interval={null} className="caroulsel-content w-100">
      {children.map((item, index): any => {
        return (
          <Carousel.Item key={index}>
            <div className="d-flex flex-column justify-content-center align-items-center text-small">
              <p className="text-light new-font m-0">{item.title}</p>
              <div>
                <p className="text-light new-font m-0">
                  {item.content} {item.icon}
                </p>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default BottomCarousel;

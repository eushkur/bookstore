import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Book } from "types/types";
import { BookCard } from "components";
import { SliderContainer, StyledSlide } from "./styles";

interface Props {
  booksArray: Book[];
}

export const Slider = ({ booksArray }: Props) => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: 3,
        spacing: 32,
      },

      breakpoints: {
        "(max-width: 1280px)": {
          slides: {
            perView: 2,
            spacing: 32,
          },
        },
        "(max-width: 768px)": {
          slides: {
            perView: 1,
          },
        },
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <SliderContainer ref={ref} className="keen-slider">
      {booksArray.map((book, index) => {
        return (
          <StyledSlide className="keen-slider__slide" key={book.isbn13}>
            <BookCard book={book} index={index} />
          </StyledSlide>
        );
      })}
    </SliderContainer>
  );
};

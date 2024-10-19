import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll, { AutoScrollType } from "embla-carousel-auto-scroll";

interface Slide {
  content: string;
  person: string;
  position: string;
}

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  // useEffect(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll;
  //   if (!autoScroll) return;

  //   setIsPlaying(autoScroll.isPlaying());
  //   emblaApi
  //     .on("autoScroll:play", () => setIsPlaying(true))
  //     .on("autoScroll:stop", () => setIsPlaying(false))
  //     .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  // }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll as AutoScrollType;
    if (!autoScroll) return;

    const handlePlay = () => setIsPlaying(true);
    const handleStop = () => setIsPlaying(false);

    // Ensure emblaApi is defined before attaching event listeners
    if (emblaApi) {
      emblaApi
        .on("autoScroll:play", handlePlay)
        .on("autoScroll:stop", handleStop)
        .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
    }

    return () => {
      if (emblaApi) {
        emblaApi.off("autoScroll:play", handlePlay);
        emblaApi.off("autoScroll:stop", handleStop);
      }
    };
  }, [emblaApi]);

  const handleMouseEnter = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll as AutoScrollType;
    if (autoScroll) {
      autoScroll.stop(); // Stop auto-scroll on hover
    }
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll as AutoScrollType;
    if (autoScroll) {
      autoScroll.play(); // Using `any` for temporary bypass
    }
  }, [emblaApi]);

  return (
    <div className="embla"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => {
            // Determine the background color based on the index
            const backgroundColors = [
              "#f0f2f5",
              "#2467e3",
              "#f0f2f5",
              "#5e19b3",
            ];
            const backgroundColor =
              backgroundColors[index % backgroundColors.length]; // Cycle through colors

            const colors = ["black", "white", "black", "white"];
            const color = colors[index % colors.length]; // Cycle through colors

            color;

            return (
              <div
                className="embla__slide"
                key={index}
                style={{ backgroundColor, color }} // Set the background color dynamically
              >
                <span>{slide.content}</span>

                <div className="absolute bottom-4">
                  <p className="font-bold">{slide.person}</p>
                  <span>{slide.position}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../styles/carosel.css";


export default function Carosel() {
    const [width, setWidth] = useState(window.innerWidth);

    if (width > 1000) {
        return (
            <div className="carosel__section">
                <h2 className="carosel__title">POPULAR</h2>
                <Swiper watchSlidesProgress={true} watchSlidesVisibility={true} slidesPerView={5} className="mySwiper">
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                    <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                </Swiper>
            </div>
        )
    }

    return (
        <div className="carosel__section">
            <h2 className="carosel__title">POPULAR</h2>
            <Swiper watchSlidesProgress={true} watchSlidesVisibility={true} slidesPerView={1} className="mySwiper">
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
                <SwiperSlide><img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/253.jpg" alt="Image 2" /></SwiperSlide>
                <SwiperSlide><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BMQEAAADCoPVP7WULoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuxZIAAeHuCGgAAAAASUVORK5CYII=" alt="Image 5" /></SwiperSlide>
            </Swiper>
        </div>
    )
}


'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Card from "./Card";
import Image from "next/image";

function Sliders() {
	return (
		<>
			<div className="adds">
				<Swiper
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					freeMode={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper"
				>
					{/* <SwiperSlide><img src={slider1} alt="yenilik market" /></SwiperSlide> */}
					<SwiperSlide>
						<Image
							width={1000}
							height={500}
							src="/imgs/slider2.png"
							alt="Yenilik market"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="discounteds">
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={[Pagination, Autoplay]}
					className="discounted-products"
				>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}

export default Sliders;

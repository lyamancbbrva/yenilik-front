import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Card from "@/app/components/client/Card";
// import slider2 from "./../	../../public/imgs/slider2.png";

function page({params}) {
	return (
		<main>
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
						<Image src={slider2} alt="Yenilik market" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={slider2} alt="Yenilik market" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={slider2} alt="Yenilik market" />
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
			<div className="cards">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</main>
	);
}

export default page;

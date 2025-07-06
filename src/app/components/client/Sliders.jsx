'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Card from "./Card";
import Image from "next/image";
import { allProducts } from "@/app/api/api";
import { useEffect, useState } from "react";

function Sliders() {
	const [data, setData] = useState([])
	useEffect(() => {
		allProducts().then((res) => {
			setData(res?.data?.data)
		})

	}, [])

	return (
		<>
			{/* <div className="adds">
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
					<SwiperSlide>
						<Image
							width={1000}
							height={500}
							src="/imgs/slider2.png"
							alt="Yenilik market"
						/>
					</SwiperSlide>
				</Swiper>
			</div> */}
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
					{
						data ? data?.map((item, index) => (
							<SwiperSlide key={index}>
								<Card
									id={item.id}
									name={item.name}
									price={item.price}
									image={item.img_url}
									discountedPrice={item.discountedPrice}
								/>
							</SwiperSlide>
						)) : <div className="loader"></div>
					}
				</Swiper>
			</div>
		</>
	);
}

export default Sliders;

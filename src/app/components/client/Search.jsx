"use client";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { searchProduct } from "@/app/api/api";

function Search() {
    const [data,setData] = useState([])
	function search(value) {
        searchProduct(value).then(resp => setData(resp.data.data))
        console.log(data)
        if (value == "") {
        return document.querySelector(".searched-product-list").style.display = "none";
        }
        if (data.length == 0) {
        return  document.querySelector('.searched-product-list').innerHTML = "<h5 className='not-found-search'>Axtardığınız məhsul mövcud deyil.</h5>"
        }else{
        return document.querySelector(".searched-product-list").style.display = "block";
        }
	}

	return (
		<div className="search-block">
			<form>
				<input
					onChange={(e) => search(e.target.value)}
					type="text"
					placeholder="Axtar..."
					className="search-input"
				/>
			</form>
			<div className="searched-products">
				<div>
					<ul className="searched-product-list">
                        {
                            data && data?.map((item, i) => 
                                <li key={i}>
							<Link className="searched-item" href={"/"}>
								<Image
									src={`http://localhost:3000/uploads/${item.img_url}`}
									alt={item.name}
									width={60}
									height={60}
								/>
								<div className="product-detailes">
									<h5>{item.name}</h5>
									<span>{item.price} AZN</span>
								</div>
							</Link>
						</li>
                            )
                        }
					</ul>
				</div>
			</div>
			<CiSearch className="search-icon" />
		</div>
	);
}

export default Search;

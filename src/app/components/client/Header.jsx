import { CiUser, CiShoppingBasket, CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import Link from 'next/link';
import BarIcon from './BarIcon';
import Logo from './Logo';
import axios from "axios";
import { allcategories } from "@/app/api/api";
import notFound from "@/app/(main)/not-found";

export const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar.style.display === 'block') {
      sidebar.style.display = 'none';
      if (main) main.style.display = 'block';
    } else {
      sidebar.style.display = 'block';
      if (main) main.style.display = 'none';
    }
  };

 async function Header() {

   const {data} = undefined || await allcategories()
  

   
   return (
    <header>
      <nav className="container">
        <div className="navbar">
          <Logo/>
          <div id="header-icons">
            <Link href={"/auth/giris"}>
              <CiUser />
            </Link>
            <Link href={"/sebet"}>
              <CiShoppingBasket />
            </Link>
            <div className="search-block">
              <input
                type="text"
                placeholder="Axtar..."
                className="search-input"
              />
              <CiSearch className="search-icon" />
              <BarIcon/>
            </div>
          </div>
        </div>
      </nav>
      {
        data?.length > 0 ? <div className="categories">
        <div className="container">
					<ul className="main-ul">
						{data?.map((item, i) => (
								<li key={i}>
									{item.name}
									<ul className="sub-cat-ul">
										{item.subcategories &&
											item.subcategories.map(
												(subcat, j) => (
													<li key={j}>
														{subcat.name}
													</li>
												)
											)}
									</ul>
								</li>
							))
            }
					</ul>
        </div>
      </div> : <div className="category-not-found">Kateqoriya tapılmadı</div>
      }
      
      <div id="sidebar" style={{ display: 'none' }}>
        <Sidebar />
      </div>
    </header>
  )
}

export default Header

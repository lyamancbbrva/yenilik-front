
import Image from 'next/image'
import { CiUser, CiShoppingBasket, CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import Link from 'next/link';
import BarIcon from './BarIcon';

export const toggleSidebar = () => {
  console.log('salam')
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

   
   return (
    <header>
      <nav className="container">
        <div className="navbar">
          <Link id="logo" href={"/"}>
            <Image  width={80}  height={50} priority  src="/imgs/logo.png" alt="Yenilik logo" />
          </Link>
          <div id="header-icons">
            <Link href={"/giris"}>
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
      <div className="categories">
        <div className="container">
					{/* <ul className="main-ul">
						{data &&
							data.map((item, i) => (
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
							))}
					</ul> */}
        </div>
      </div>
      <div id="sidebar" style={{ display: 'none' }}>
        <Sidebar />
      </div>
    </header>
  )
}

export default Header

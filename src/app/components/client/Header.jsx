import { CiUser, CiShoppingBasket, CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import Link from 'next/link';
import BarIcon from './BarIcon';
import Logo from './Logo';

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
  export async function getCategories(){
    try {
      const resp = await fetch('http://localhost:3000/api/v1/category')
      return resp.json()
      
    } catch (error) {
      return error;
    }
  }

 async function Header() {

  const {data} = await getCategories()
   
   return (
    <header>
      <nav className="container">
        <div className="navbar">
          <Logo/>
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
					<ul className="main-ul">
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
					</ul>
        </div>
      </div>
      <div id="sidebar" style={{ display: 'none' }}>
        <Sidebar />
      </div>
    </header>
  )
}

export default Header

import { MdOutlineCategory } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { IoLogOutOutline  } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

function AdminHeader() {
  return (
        <>
    <header id='admin-header'>
        <div id="logo-block">
            <Link href="/"><Image width={80} height={50} src='/imgs/logo.png' alt="Logo" /></Link>
        </div>
        <Link href={'/admin/profil'} id="profile">
            <Image height={30} width={30} src='/imgs/user.png' alt="user" />
            <h6>Profil</h6>
        </Link>
    </header>
    <nav id='admin-nav'>
        <div className='navbar-links'>
            <ul>
                <li><Link href={'/admin'}>Ana səhifə <AiOutlineHome /></Link></li>
                <li><Link href={'/admin/mehsul'}>Məhsul <SlBasket /></Link></li>
                <li><Link href={'/admin/kateqoriya'}>Kateqoriya <MdOutlineCategory /></Link></li>
                <li><Link href={'/admin/altkateqoriya'}>Alt kateqoriya <BiCategory /></Link></li>
                <li><Link href={'/admin/elave-melumatlar'}>Əlavə məlumatlar <IoInformationCircleOutline /></Link></li>
            </ul>
        </div>
        <div className="navbar-links">
            <ul>
                <li><Link href={'/'}>Çıxış et <IoLogOutOutline  /></Link></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default AdminHeader;
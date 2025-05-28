import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
    const dateYear = new Date().getFullYear()
  return (
    <footer>
			<div className="container">
				<div id="footer-icons">
					<div>
						<IoLocationOutline />
						<span>Ünvan:</span>
					</div>
					<div>
                    <IoCallOutline />
						<span>Telefon:</span>
					</div>
					<div>
                    <IoLogoInstagram id="insta-icon" />
						<span>İnstagram:</span>
					</div>
					<div>
                    <IoMailOutline id="mail-icon" />
						<span>E-poçt:</span>
					</div>
					<div>
                    <IoLocationOutline />
						<span>Filiallar:</span>
					</div>
				</div>
			</div>
            <div id="copy-right">
                <p>&copy; {dateYear} Bütün hüquqlar qorunur.</p>
            </div>
		</footer>
  )
}

export default Footer
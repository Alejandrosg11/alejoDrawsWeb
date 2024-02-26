import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function NavBar() {
    return (
        <section className={styles.navbar}>
            <div>
                <div>
                    <Image 
                        src="/Logo.svg"
                        alt="Alejo Draws Logo"
                        className={styles.vercelLogo}
                        width={150}
                        height={150}
                        priority
                    />
                </div>
                <ul>
                    <li>Inicio</li>
                    <li>Media Kit</li>
                    <li>Shop</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </section>
    );
}

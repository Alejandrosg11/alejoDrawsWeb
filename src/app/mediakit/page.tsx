import Image from "next/image";
import NavBar from "../../Components/navbar/navbar";
import styles from "./Mediakit.module.scss";

export default function MediaKit() {
  return (
    <section>
        <NavBar />
        <section className={styles.firstsection}>
            <div className={styles.leftside}>
                <h3 className={styles.mediakititle}>Alejo Draws</h3>
                <div className={styles.socialmedia}>
                    <div>
                        <Image 
                            src="/instagram.png"
                            alt="instagram-icon"
                            width={24}
                            height={24}
                        />
                        24.8k
                    </div>
                    <div>
                        <Image 
                            src="/tiktok.png"
                            alt="tiktok-icon"
                            width={24}
                            height={24}
                        />
                        7.9k
                    </div>
                    <div>
                        <Image 
                            src="/tiktok.png"
                            alt="tiktok-icon"
                            width={24}
                            height={24}
                        />
                        1.7k
                    </div>
                    <div>
                        <Image 
                            src="/youtube.png"
                            alt="youtube-icon"
                            width={24}
                            height={24}
                        />929
                    </div>
                </div>
                <div>Palabras clave</div>
                <article>
                    <h3>About</h3>
                    <p>Sumérgete en la creatividad vibrante mientras doy vida a ilustraciones digitales con herramientas como Procreate y Corel Painter. Explora obras únicas, sigue mi proceso creativo y no te pierdas la oportunidad de convertirte en una encantadora caricatura. ¡Conéctate en Instagram y TikTokpara disfrutar a diario de la magia del arte digital!</p>
                </article>
                <div>
                    contacto
                </div>
            </div>
            <div>
                Foto
            </div>
        </section>

        <section>
            <h3>Overall Reach</h3>
            <div>
                <div>Total Followers</div>
                <div>Primary Platform</div>
                <div>Total Post</div>
            </div>
        </section>

    </section>
  );
}

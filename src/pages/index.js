import Head from "next/head"
import Image from "next/image"
import {
  LocationIcon,
  MariachiIconTromp,
  PaymentIcon,
} from "../components/IconsSvg"
import { estados } from "@helpers/estados"

export default function Home({ data }) {
  console.log(data)
  return (
    <div className="container">
      <Head>
        <title>Mariachon</title>
        <meta name="Mariachon" content="Pagina de aterrizaje de mariachon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className="header"
          style={{ backgroundImage: `url("/mariachis.png")` }}
        >
          <div className="header__logo">
            <Image
              src="/mariachonlogo.png"
              alt="Mariachon Logo"
              width={135}
              height={75}
            />
          </div>
          <button>Informes</button>
        </div>
      </main>

      <div className="text">
        <h3>Conoce a la comunidad de mariachis más grande del mundo.</h3>
      </div>
      <div
        className="imageRow"
        style={{ backgroundImage: `url("/mariachisenmexico.png")` }}
      ></div>

      <div className="details">
        <div className="details__section_icon">
          <MariachiIconTromp style={{ width: "100px" }} />
        </div>
        <div className="details__section_icon">
          <p className="details__section_icon__section_text">
            Contrata de manera rápida y segura el mariachi de tu confianza.
          </p>
        </div>
        <div className="details__section_icon">
          <PaymentIcon style={{ width: "100px" }} />
        </div>
        <div className="details__section_icon">
          <p className="details__section_icon__section_text">Formas de pago</p>
        </div>
        <div className="details__section_icon">
          <LocationIcon style={{ width: "100px" }} />
        </div>
        <div className="details__section_icon">
          <p className="details__section_icon__section_text">Formas de pago</p>
        </div>
        <div className="footer_image">
          <img
            src="/mariachonlogo.png"
            alt="Mariachon Logo"
            width={273}
            height={159}
          />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { data: estados }, // will be passed to the page component as props
  }
}

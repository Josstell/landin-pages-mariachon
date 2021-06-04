import Head from "next/head"
import Image from "next/image"
import {
  LocationIcon,
  MariachiIconTromp,
  PaymentIcon,
} from "../components/IconsSvg"

export default function Home() {
  return (
    <div className="landing-container">
      <Head>
        <title>Mariachon</title>
        <meta name="Mariachon" content="Pagina de aterrizaje de mariachon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="landing-header">
        <div className="logo-header">
          <Image
            src="/mariachonlogo.png"
            alt="Mariachon Logo"
            width={135}
            height={75}
          />
        </div>
        <button>Informes</button>
      </div>
      <div className="first-text-landing">
        <h3>Conoce a la comunidad de mariachis más grande del mundo.</h3>
      </div>
      <div className="image-landing"></div>
      <div className="details-landing">
        <div className="section-icon-landing">
          <MariachiIconTromp style={{ width: "100px" }} />
        </div>
        <div className="section-text-landing">
          <p>Contrata de manera rápida y segura el mariachi de tu confianza.</p>
        </div>
        <div className="section-icon-landing">
          <PaymentIcon style={{ width: "100px" }} />
        </div>
        <div className="section-text-landing">
          <p>Formas de pago</p>
        </div>
        <div className="section-icon-landing">
          <LocationIcon style={{ width: "100px" }} />
        </div>
        <div className="section-text-landing">
          <p>Formas de pago</p>
        </div>
      </div>
      <div className="footer-text-landing">
        <Image
          src="/mariachonlogo.png"
          alt="Mariachon Logo"
          width={273}
          height={159}
        />
      </div>
      <style jsx>{`
        .landing-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .landing-header {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          height: 100vh;
          border: 1px solid #000;
          background-image: url("mariachis.png");
          background-position: center; /* Center the image */
          background-repeat: no-repeat; /* Do not repeat the image */
          background-size: cover;
        }
        .logo-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -10vh;
          width: 100%;
          height: 25vh;
          background-color: rgba(255, 255, 255, 0.8);
        }

        button {
          width: 25vh;
          height: 7vh;
          border-radius: 30px;
          background-color: rgba(204, 0, 4, 1);
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          border: none;
        }
        .first-text-landing {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30vh;
        }
        .image-landing {
          width: 100%;
          height: 77vh;
          background-image: url("mariachisenmexico.png");
          background-position: center; /* Center the image */
          background-repeat: no-repeat; /* Do not repeat the image */
          background-size: cover;
        }
        .details-landing {
          width: 100%;
          height: 20vh;
          border: 1 solid #000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .section-icon-landing {
          width: 16.6%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(240, 240, 240, 0.8);
        }
        .section-text-landing {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 4vh;
          padding-right: 4vh;
          width: 16.6%;
          height: 100%;
          background-color: rgba(7, 0, 55, 1);
          color: #fff;
          text-align: center;
        }
        .icon-size-landing {
          width: 50px;
        }
        .footer-text-landing {
          display: flex;
          align-items: center;
          justify-content: flex-end; /* Pack flex items from the end */
          width: 100%;
          padding-right: 10vh;
          height: 40vh;
          background-color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  )
}

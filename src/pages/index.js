import { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Map from "@components/Maps/Map"
import ButtonSass from "@components/Buttons/ButtonSass"

import { shimmer, toBase64 } from "@helpers/index.js"

import {
  LocationIcon,
  MariachiIconTromp,
  PaymentIcon,
} from "../components/IconsSvg"
import { estados } from "@helpers/estados"

// const imagen = "1fQxdX_0Rkv6Cm3jCLOpEC5TrzoCmEtmY"
// const imageSection = "1Hej2AAup_tbHCKfg16zq657s1-qKaDQ-"

export default function Home({ stateArrayNames }) {
  const size = useWindowSize()
  console.log("Estados : ", stateArrayNames)
  let escalar = "scale(1)"

  if (size.width < 800) {
    escalar = "scale(.5)"
  } else {
    escalar = "scale(1)"
  }

  // const imageInicio = ({ src }) => {
  //   return `https://drive.google.com/uc?id=${src}`
  // }

  return (
    <div className="container">
      <Head>
        <title>Mariachon</title>
        <meta name="Mariachon" content="Pagina de aterrizaje de mariachon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="header">
          <Image
            // loader={imageInicio}
            src="/mariachis.png"
            alt="Mariachon inicio"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            quality={80}
          />
          <div className="header__logo">
            <Image
              src="/mariachonlogo.png"
              alt="Mariachon Logo"
              placeholder="blur"
              width={135}
              height={75}
              quality={75}
            />
          </div>

          <ButtonSass text="Informes" region={stateArrayNames.inicio} />
        </div>
      </main>
      <div>
        <Map regions={stateArrayNames} style={{ transform: `${escalar}` }} />
      </div>

      <div className="text">
        <h3>Conoce a la comunidad de mariachis más grande del mundo.</h3>
      </div>
      <div className="imageRow">
        <Image
          // loader={imageInicio}
          // src={imageSection}
          src="/mariachisenmexico.png"
          alt="Mariachon inicio"
          layout="responsive"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(1024, 430)
          )}`}
          width={1024}
          height={430}
          quality={70}
        />
      </div>

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
      <style jsx>{`
        .parent {
          overflow: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 50;
          height: 20%;
          visibility: visible;
        }

        main {
          margin-bottom: 20px;
        }
        .mapScale {
          transform: scale(0.4722);
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const stateNames = []
  estados.forEach((sta) => stateNames.push({ [sta.slug]: sta.slug }))

  return {
    props: {
      data: estados,
      stateArrayNames: stateNames.reduce(function (result, item) {
        const key = Object.keys(item)[0]
        result[key] = item[key]
        return result
      }, {}),
    }, // will be passed to the page component as props
  }
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

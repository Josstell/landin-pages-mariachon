import Head from "next/head"
import HeaderSass from "@components/Header/HeaderSass"
import ContentSass from "@components/Content/ContentSass"

const estado = {
  id: 1,
  state: "Zacatecas",
  images: {
    header: "https://drive.google.com/uc?id=1G3awCzu-MGr379Bcq-zX0BW8e1bvO1H5",

    content: [
      "https://drive.google.com/uc?id=1Iy1HQ_scAo4vM1Nqlg5lJ5t2Hkp9IRTE",
    ],
  },
  text1: "Conoce a la comunidad de mariachis más grande del mundo.",
  textContrata:
    "Contrata de manera rápida y segura el mariachi de tu confianza.",
  textPago: "Formas de pago",
  textLocation: "El mariachi más cercano a tu ubicación",
}

const index = () => {
  if (estado === undefined) {
    return null
  }

  return (
    <div className="container">
      <Head>
        <title>Mariachon - {estado.state}</title>
        <meta
          name={`Mairiachon ${estado.state}`}
          content="Pagina de aterrizaje de mariachon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSass state={estado} />
      <ContentSass state={estado} />
    </div>
  )
}

export default index

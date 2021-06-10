import Head from "next/head"
import HeaderSass from "@components/Header/HeaderSass"
import ContentSass from "@components/Content/ContentSass"

const estado = {
  state: "Queretaro",
  images: {
    header: "https://drive.google.com/uc?id=1-d-qOb2WbZL_atbPaVNFU8qqQjFpTdJ7",
    content: [
      "https://drive.google.com/uc?id=1ycckhNleCKvSI3qsng2ikhEDKB_2174Y",
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

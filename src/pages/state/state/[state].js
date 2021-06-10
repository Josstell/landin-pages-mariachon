import { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import HeaderSass from "@components/Header/HeaderSass"
import ContentSass from "@components/Content/ContentSass"

const estados = [
  {
    id: 1,
    state: "Zacatecas",
    images: {
      header:
        "https://drive.google.com/uc?id=1G3awCzu-MGr379Bcq-zX0BW8e1bvO1H5",

      content: [
        "https://drive.google.com/uc?id=1Iy1HQ_scAo4vM1Nqlg5lJ5t2Hkp9IRTE",
      ],
    },
    text1: "Conoce a la comunidad de mariachis más grande del mundo.",
    textContrata:
      "Contrata de manera rápida y segura el mariachi de tu confianza.",
    textPago: "Formas de pago",
    textLocation: "El mariachi más cercano a tu ubicación",
  },
  {
    id: 2,
    state: "Xalapa",
    images: {
      header:
        "https://drive.google.com/uc?id=1cg_oIkC-z6xrbFtd2i3ivJDWYV1sHluk",
      content: [
        "https://drive.google.com/uc?id=17wkeNGGBtoI-ZwH9ePUyXvGasUujHQdk",
      ],
    },
    text1: "Conoce a la comunidad de mariachis más grande del mundo.",
    textContrata:
      "Contrata de manera rápida y segura el mariachi de tu confianza.",
    textPago: "Formas de pago",
    textLocation: "El mariachi más cercano a tu ubicación",
  },
  {
    id: 3,
    state: "Queretaro",
    images: {
      header:
        "https://drive.google.com/uc?id=1-d-qOb2WbZL_atbPaVNFU8qqQjFpTdJ7",
      content: [
        "https://drive.google.com/uc?id=1ycckhNleCKvSI3qsng2ikhEDKB_2174Y",
      ],
    },
    text1: "Conoce a la comunidad de mariachis más grande del mundo.",
    textContrata:
      "Contrata de manera rápida y segura el mariachi de tu confianza.",
    textPago: "Formas de pago",
    textLocation: "El mariachi más cercano a tu ubicación",
  },
  {
    id: 4,
    state: "Cuernavaca",
    images: {
      header:
        "https://drive.google.com/uc?id=1ZpGDcbEGAocyEUNmv4cHsxvyUeAYUrKu",
      content: [
        "https://drive.google.com/uc?id=1GjOAVno-kJtoDCMiiVs1nt4PrHoRXXsv/",
      ],
    },
    text1: "Conoce a la comunidad de mariachis más grande del mundo.",
    textContrata:
      "Contrata de manera rápida y segura el mariachi de tu confianza.",
    textPago: "Formas de pago",
    textLocation: "El mariachi más cercano a tu ubicación",
  },
  {
    id: 5,
    state: "Cancún",
    images: {
      header:
        "https://drive.google.com/uc?id=1Hv1JCrueQFVuQbe3R6HZHy780Gc25RDu",
      content: [
        "https://drive.google.com/uc?id=1FQbvgbG-V2rJBR2EmmuN8OZ-GrymS925",
      ],
    },
    text1: "Conoce a la comunidad de mariachis más grande del mundo.",
    textContrata:
      "Contrata de manera rápida y segura el mariachi de tu confianza.",
    textPago: "Formas de pago",
    textLocation: "El mariachi más cercano a tu ubicación",
  },
  {
    id: 6,

    state: "Aguascalientes",
    images: {
      header:
        "https://drive.google.com/uc?id=1dIKQs3LMFOWb6tmABEajtawrYA--TpaH",
      content: [
        "https://drive.google.com/uc?id=19O8eVCyyTU3CM2x9RPOb1S6SrqbDNGMA/",
      ],
    },
    text1: "Conoce a la comunidad de mariachis más grande del mundo.",
    textContrata:
      "Contrata de manera rápida y segura el mariachi de tu confianza.",
    textPago: "Formas de pago",
    textLocation: "El mariachi más cercano a tu ubicación",
  },
  {
    id: 7,
    state: "CDMX",
    images: {
      header:
        "https://drive.google.com/uc?id=1IBIKG2YMJ1J_YFD7Qgzzzm00avG_3c62/",
      content: [
        "https://drive.google.com/uc?id=d/1rKgYDcM6UT1Cqs1flwj5J-Qv-YYYixqT/",
      ],
    },
    text1: "Conoce a la comunidad de mariachis más grande del mundo.",
    textContrata:
      "Contrata de manera rápida y segura el mariachi de tu confianza.",
    textPago: "Formas de pago",
    textLocation: "El mariachi más cercano a tu ubicación",
  },
]

const StatesLocations = () => {
  const router = useRouter()
  const [estado, setEstado] = useState({})

  useEffect(() => {
    const est = estados.find((loc) => loc.id === router.query.state)
    setEstado(est)
  }, [router.query.state])

  if (estado === undefined) {
    return null
  }

  return (
    <div className="container">
      <Head>
        <title>Mariachon - {router.query.state}</title>
        <meta
          name={`Mairiachon ${router.query.state}`}
          content="Pagina de aterrizaje de mariachon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSass state={estado} />
      <ContentSass state={estado} />
    </div>
  )
}

export default StatesLocations

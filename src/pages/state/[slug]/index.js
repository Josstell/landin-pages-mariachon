import Head from "next/head"
import { useRouter } from "next/router"
import HeaderSass from "@components/Header/HeaderSass"
import ContentSass from "@components/Content/ContentSass"

import { estados } from "@helpers/estados"

const StatesLocations = ({ region }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>CARGANDO... </div>
  }

  return (
    <div className="container">
      <Head>
        <title>Mariachon - {region.state}</title>
        <meta
          name={`Mairiachon ${region.state}`}
          content={`Pagina de aterrizaje de ${region.state}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSass state={region} />
      <ContentSass state={region} />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await estados.map((path) => ({
    params: { slug: path.slug.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await estados.filter(
    (est) => est.slug.toString() === params.slug
  )
  return {
    props: { region: data[0] }, // will be passed to the page component as props
  }
}

export default StatesLocations

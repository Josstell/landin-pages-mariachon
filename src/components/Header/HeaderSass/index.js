import Image from "next/image"
import ButtonSass from "@components/Buttons/ButtonSass"
import { imageInicioFullUrl } from "@helpers/index.js"

const HeaderSass = ({ state }) => {
  return (
    <main>
      <div className="header">
        <Image
          loader={imageInicioFullUrl}
          src={state.images?.header ? state.images.header : ""}
          alt="Mariachon inicio"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="header__logo">
          <Image
            src="/mariachonlogo.png"
            alt="Mariachon Logo"
            placeholder="blur"
            width={135}
            height={75}
          />
        </div>
        <ButtonSass text="Informes" region={state.state} />
      </div>
    </main>
  )
}

export default HeaderSass

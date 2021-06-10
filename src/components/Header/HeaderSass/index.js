import Image from "next/image"
import ButtonSass from "@components/Buttons/ButtonSass"

const HeaderSass = ({ state }) => {
  return (
    <main>
      <div
        className="header"
        style={{
          backgroundImage: `url(${
            state.images?.header ? state.images.header : ""
          })`,
        }}
      >
        <div className="header__logo">
          <Image
            src="/mariachonlogo.png"
            alt="Mariachon Logo"
            width={135}
            height={75}
          />
        </div>
        <ButtonSass text="Informes" />
      </div>
    </main>
  )
}

export default HeaderSass

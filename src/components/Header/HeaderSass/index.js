import Image from "next/image"
import ButtonSass from "@components/Buttons/ButtonSass"

const HeaderSass = ({ state }) => {
  console.log("estoy aqui", state)
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
        <ButtonSass text="Informes" region={state.state} />
      </div>
    </main>
  )
}

export default HeaderSass

import Image from "next/image"
import { LocationIcon, MariachiIconTromp, PaymentIcon } from "../../IconsSvg"
import { imageInicioFullUrl } from "@helpers/index.js"

const ContentSass = ({ state }) => {
  return (
    <>
      <div className="text">
        <h3>{state.text1}</h3>
      </div>
      <div className="imageRow">
        <Image
          loader={imageInicioFullUrl}
          src={state.images?.content[0]}
          alt="Mariachon inicio"
          layout="responsive"
          placeholder="blur"
          // blurDataURL={`data:image/svg+xml;base64,${toBase64(
          //   shimmer(1024, 430)
          // )}`}
          width={1024}
          height={430}
          quality={80}
        />
      </div>

      <div className="details">
        <div className="details__section_icon">
          <MariachiIconTromp style={{ width: "100px" }} />
        </div>
        <div className="details__section_icon">
          <p className="details__section_icon__section_text">
            {state.textContrata}{" "}
          </p>
        </div>
        <div className="details__section_icon">
          <PaymentIcon style={{ width: "100px" }} />
        </div>
        <div className="details__section_icon">
          <p className="details__section_icon__section_text">
            {state.textPago}
          </p>
        </div>
        <div className="details__section_icon">
          <LocationIcon style={{ width: "100px" }} />
        </div>
        <div className="details__section_icon">
          <p className="details__section_icon__section_text">
            {state.textLocation}
          </p>
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
    </>
  )
}

export default ContentSass

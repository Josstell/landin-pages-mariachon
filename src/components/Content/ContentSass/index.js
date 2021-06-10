import { LocationIcon, MariachiIconTromp, PaymentIcon } from "../../IconsSvg"

const ContentSass = ({ state }) => {
  return (
    <>
      <div className="text">
        <h3>{state.text1}</h3>
      </div>
      <div
        className="imageRow"
        style={{ backgroundImage: `url(${state.images?.content[0]})` }}
      ></div>

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

const Button = ({ text, region }) => {
  const handleEnviarWhats = (e) => {
    e.preventDefault()
    // const sl = "%0A"
    const sendMariachi = 522224617225
    const url =
      "https://wa.me/" +
      sendMariachi +
      "?text=Informes sobre sus servicios en " +
      `${region}` +
      " por favor... "
    window.open(url, "_blank")
  }
  return (
    <button className="buttonWhats" onClick={handleEnviarWhats}>
      {text}
    </button>
  )
}

export default Button

import React from "react"
import { Image } from "react-bootstrap"

type Props = {
  Img: any
}

const ImageSection: React.FC<Props> = ({ Img }) => {
  return (
    <>
      <Image style={{ marginLeft: "20px" }} src={Img} fluid />
    </>
  )
}

export default ImageSection

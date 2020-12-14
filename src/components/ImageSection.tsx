import React from "react"
import { Image } from "react-bootstrap"

type Props = {
  Img: any
}

const ImageSection: React.FC<Props> = ({ Img }) => {
  return (
    <>
      <Image style={{ margin: "20px 0" }} src={Img} fluid />
    </>
  )
}

export default ImageSection

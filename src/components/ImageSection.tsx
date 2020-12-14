import React from "react"
import { Image } from "react-bootstrap"

type Props = {
  Img: any
}

const ImageSection: React.FC<Props> = ({ Img }) => {
  return (
    <>
      <Image style={{ margin: "20px auto" }} src={Img} fluid />
    </>
  )
}

export default ImageSection

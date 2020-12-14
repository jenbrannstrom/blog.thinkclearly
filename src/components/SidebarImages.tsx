import React from "react"
import { Image } from "react-bootstrap"

type Props = {
  Img: any
  ImageLink: string
}
const SidebarImages: React.FC<Props> = ({ Img, ImageLink }) => {
  return (
    <>
      <div style={{ marginTop: "40px", marginLeft: "15px" }}>
        <a href={ImageLink}>
          <Image src={Img} />
        </a>
      </div>
    </>
  )
}

export default SidebarImages

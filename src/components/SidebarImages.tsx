import React from "react"
import { Image } from "react-bootstrap"

type Props = {
  Img: any
}
const SidebarImages: React.FC<Props> = ({ Img }) => {
  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <Image src={Img} />
      </div>
    </>
  )
}

export default SidebarImages

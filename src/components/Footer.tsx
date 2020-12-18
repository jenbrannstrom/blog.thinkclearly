import React from "react"

type Props = {
  FooterText: string
  FooterLink: string
  FooterText2: string
  FooterLink2: string
  footerNormalText: string
}

const Footer: React.FC<Props> = ({
  FooterText,
  FooterLink,
  FooterText2,
  FooterLink2,
  footerNormalText,
}) => {
  return (
    <>
      <div className="footr">
        <p style={{ display: "block" }}>{footerNormalText}</p>
        <a href={FooterLink}>
          <p style={{ display: "inline" }}>{FooterText}</p>
        </a>
        <a href={FooterLink2}>
          <p style={{ display: "inline" }}>{FooterText2}</p>
        </a>
      </div>
    </>
  )
}

export default Footer

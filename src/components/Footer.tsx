import React from "react"

type Props = {
  FooterText: string
  FooterLink: string
}

const Footer: React.FC<Props> = ({ FooterText, FooterLink }) => {
  return (
    <>
      <div className="footr">
        <a href={FooterLink}>
          <p>{FooterText}</p>
        </a>
      </div>
    </>
  )
}

export default Footer

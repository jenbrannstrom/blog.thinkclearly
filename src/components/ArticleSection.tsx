import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

type Props = {
  Text: any
}

const ArticleSection: React.FC<Props> = ({ Text }) => {
  let text = documentToReactComponents(Text) as any
  return (
    <>
      <div className="article-text">{text}</div>
    </>
  )
}

export default ArticleSection

import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

type Props = {
  Text: any
}

const ArticleSection: React.FC<Props> = ({ Text }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <img
          src={node.data?.target?.fields?.file["en-US"]?.url}
          alt={node.data?.target?.fields?.title["en-US"]}
        />
      ),
    },
  }
  let text = documentToReactComponents(Text, options)
  return (
    <>
      <div className="article-text">{text}</div>
    </>
  )
}

export default ArticleSection

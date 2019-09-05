import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { getImagesForNews } from "../helpers/selectors";
import Layout from "../components/layout"
import SEO from "../components/seo"
import News from "../components/news";

const Journal = () => {
    const {
      allJournalJson:{edges: journal },
      allImageSharp:{edges: images },
    } = useStaticQuery(graphql`
    query JournalQuery {
      allJournalJson {
        edges {
          news: node {
            id
            description
            date
            withDivider
            imagesParameters: images {
              file
              height
            }
          }
        }
      }
      allImageSharp {
        edges {
          ...AllImages
        }
      }
    }
  `)
  const [visibleNews, setVisibleNews] = React.useState(journal[0].news.id)
  return <Layout >
    <SEO title="Journal" />
    {journal.map(({ news }) => (
      <News
        key={news.id}
        {...news}
        images={getImagesForNews(images, news)}
        setVisible={setVisibleNews}
        visible={visibleNews === news.id}
      />
    ))}
    {/* <pre>{JSON.stringify(journal, null, 2)}</pre> */}
  </Layout>
}


export default Journal


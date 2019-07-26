import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import News from "../components/news";
import { getImagePropsForGatsby, getNewsImageFile, getImageSrcFromImages } from "../helpers/selectors";

const Journal = () => {
    const [visibleNews, setVisibleNews] = React.useState(null)

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
            images {
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
  console.log({ journal, images })
  return <Layout >
    <SEO title="Journal" />
    {journal.map(({ news }) => (
      <News
        key={news.id}
        {...news}
        images={news.images.map(image =>
          getImagePropsForGatsby(images.find(img => getImageSrcFromImages(img).includes(getNewsImageFile(image))
            ))
          )
        }
        setVisible={setVisibleNews}
        visible={visibleNews === news.id}
      />
    ))}
    {/* <pre>{JSON.stringify(journal, null, 2)}</pre> */}
  </Layout>
}


export default Journal


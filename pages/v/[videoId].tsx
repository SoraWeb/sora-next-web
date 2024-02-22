import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import Carousel from "../../components/Carousel"
import getResults from "../../utils/cachedImages"
import getVideosList from "../../utils/getVideosList"
import type { VideoProps } from "../../utils/types"

const Home: NextPage = ({ currentVideo }: { currentVideo: VideoProps }) => {
  const router = useRouter()
  const { videoId } = router.query
  let index = Number(videoId)

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${currentVideo.hd1080p_mp4.public_id}.jpg`

  return (
    <>
      <Head>
        <title>Sora Video Generator | Sora Next Web</title>
        <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentVideo={currentVideo} index={index} />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const results = await getResults()

  const reducedResults = await getVideosList(results)

  const currentVideo = reducedResults.find(
    (img) => img.id === Number(context.params.videoId)
  )

  return {
    props: {
      currentVideo: currentVideo,
    },
  }
}

export async function getStaticPaths() {
  const results = await getResults()

  const reducedResults = await getVideosList(results)

  let fullPaths = []
  for (let i = 0; i < reducedResults.length; i++) {
    fullPaths.push({ params: { videoId: i.toString() } })
  }

  return {
    paths: fullPaths,
    fallback: false,
  }
}

import type { NextPage } from "next"
import { CldVideoPlayer } from "next-cloudinary"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import Footer from "../components/Footer"
import Bridge from "../components/Icons/Bridge"
import Modal from "../components/Modal"
import Prompt from "../components/Prompt"
import getResults from "../utils/cachedImages"
import getVideosList from "../utils/getVideosList"
import type { VideoProps } from "../utils/types"
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto"

const Home: NextPage = ({ videos }: { videos: VideoProps[] }) => {
  const router = useRouter()
  const { videoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !videoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" })
      setLastViewedPhoto(null)
    }
  }, [videoId, lastViewedPhoto, setLastViewedPhoto])

  return (
    <>
      <Head>
        <title>Sora Video Generator | Sora Next Web</title>
        <meta property="og:image" content="/icon.png" />
        <meta name="twitter:image" content="/icon.png" />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        {videoId && (
          <Modal
            videos={videos}
            onClose={() => {
              setLastViewedPhoto(videoId)
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Image src="/logo.png" alt="Sora Web" width={128} height={128} />
            <h1 className="mb-4 mt-8 text-base font-bold uppercase tracking-widest">
              Sora AI Video Generator
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Make unbelivable AI video from text, by using OpenAI's latest Sora
              AI model.
            </p>
            <Prompt />
          </div>
          {videos.map(
            ({ id, key, nhdp_mp4, nhdp_webm, aspect_ratio, isVideo }) => {
              const previewWidth = 720
              const previewHeight = 720 / aspect_ratio

              return (
                <Link
                  key={id}
                  href={`/?videoId=${id}`}
                  as={`/v/${id}`}
                  ref={
                    id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                  }
                  shallow
                  className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                  {isVideo && (
                    // <VideoPlayer
                    //   mp4={nhdp_mp4?.url}
                    //   webm={nhdp_webm?.url}
                    //   preload="none"
                    //   className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    //  />
                    <CldVideoPlayer
                      id={key}
                      src={nhdp_mp4?.public_id}
                      width={previewWidth}
                      height={previewHeight}
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                      autoPlay
                      loop
                      muted
                      aiHighlightsGraph
                      preload="none"
                      controls={false}
                    />
                  )}
                </Link>
              )
            }
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home

export async function getStaticProps() {
  const results = await getResults()

  const reducedResults = await getVideosList(results)

  return {
    props: {
      videos: reducedResults,
    },
  }
}

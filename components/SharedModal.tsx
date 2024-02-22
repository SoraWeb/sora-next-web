import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentDuplicateIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import { variants } from "../utils/animationVariants"
import downloadVideo from "../utils/downloadVideo"
import prompts from "../utils/prompts"
import { range } from "../utils/range"
import type { SharedModalProps, VideoProps } from "../utils/types"
import Twitter from "./Icons/Twitter"
import VideoPlayer from "./VideoPlayer"

export default function SharedModal({
  index,
  videos,
  changeVideoId,
  closeModal,
  navigation,
  currentVideo,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(true)
  const [isCopied, setIsCopied] = useState(false)

  let filteredVideos = videos?.filter((vid: VideoProps) =>
    range(index - 15, index + 15).includes(vid.id)
  )

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < videos?.length - 1) {
        changeVideoId(index + 1)
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changeVideoId(index - 1)
      }
    },
    trackMouse: true,
  })

  let currentImage = videos ? videos[index] : currentVideo

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(prompts[currentImage?.key || ""])
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
        {...handlers}
      >
        {/* Main image */}
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[3/2] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                {currentImage.isVideo && (
                  <VideoPlayer
                    mp4={currentImage.hd1080p_mp4?.url}
                    webm={currentImage.hd1080p_webm?.url}
                    onLoad={() => setLoaded(true)}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons + bottom nav bar */}
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          {/* Buttons */}
          {loaded && (
            <div className="relative aspect-[3/2] max-h-full w-full">
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changeVideoId(index - 1)}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                  )}
                  {index + 1 < videos.length && (
                    <button
                      className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changeVideoId(index + 1)}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  )}
                </>
              )}
              <div className="absolute right-0 top-0 flex items-center gap-2 p-3 text-white">
                <div className="relative">
                  {isCopied && (
                    <span className="absolute right-0 top-0 mr-12 text-white/75 bg-black/50 p-1 rounded-md">
                      Copied!
                    </span>
                  )}
                  <button
                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    title="Copy prompt to clipboard"
                    rel="noreferrer"
                    onClick={handleCopyClick}
                  >
                    <DocumentDuplicateIcon className="h-5 w-5" />
                  </button>
                </div>
                {navigation ? (
                  <a
                    href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${currentImage.hd1080p_mp4.public_id}.${currentImage.hd1080p_mp4.format}`}
                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    target="_blank"
                    title="Open fullsize version"
                    rel="noreferrer"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                ) : (
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20Sora%20Video%20from%20Sora%20Next%20Web!%0A%0Ahttps://web.getsoraapp.com/v/${index}`}
                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    target="_blank"
                    title="Open fullsize version"
                    rel="noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                <button
                  onClick={() =>
                    downloadVideo(
                      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${currentImage.hd1080p_mp4.public_id}.${currentImage.hd1080p_mp4.format}`,
                      `${index}.mp4`
                    )
                  }
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                  title="Download fullsize version"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute left-0 top-0 flex items-center gap-2 p-3 text-white">
                <button
                  onClick={() => closeModal()}
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                >
                  {navigation ? (
                    <XMarkIcon className="h-5 w-5" />
                  ) : (
                    <ArrowUturnLeftIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          )}
          {/* Bottom Nav bar */}
          {navigation && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14"
              >
                <AnimatePresence initial={false}>
                  {filteredVideos.map(
                    ({ id, isVideo, aspect_ratio, key, ...video }) => (
                      <motion.button
                        initial={{
                          width: "0%",
                          x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                        }}
                        animate={{
                          scale: id === index ? 1.25 : 1,
                          width: "100%",
                          x: `${Math.max(index * -100, 15 * -100)}%`,
                        }}
                        exit={{ width: "0%" }}
                        onClick={() => changeVideoId(id)}
                        key={id}
                        className={`${
                          id === index
                            ? "z-20 rounded-md shadow shadow-black/50"
                            : "z-10"
                        } ${id === 0 ? "rounded-l-md" : ""} ${
                          id === videos.length - 1 ? "rounded-r-md" : ""
                        } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                      >
                        <Image
                          alt="small photos on the bottom"
                          width={180}
                          height={120}
                          className={`${
                            id === index
                              ? "brightness-110 hover:brightness-110"
                              : "brightness-50 contrast-125 hover:brightness-75"
                          } h-full transform object-cover transition`}
                          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_scale,w_180/${video.nhdp_mp4.public_id}.jpg`}
                          onLoad={() => setLoaded(true)}
                        />
                      </motion.button>
                    )
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  )
}

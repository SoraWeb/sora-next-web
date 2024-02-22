import Image from "next/image"
import { useRouter } from "next/router"
import useKeypress from "react-use-keypress"
import type { VideoProps } from "../utils/types"
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto"
import SharedModal from "./SharedModal"

export default function Carousel({
  index,
  currentVideo,
}: {
  index: number
  currentVideo: VideoProps
}) {
  const router = useRouter()
  const [, setLastViewedPhoto] = useLastViewedPhoto()

  function closeModal() {
    setLastViewedPhoto(currentVideo.id)
    router.push("/", undefined, { shallow: true })
  }

  function changeVideoId(newVal: number) {
    return newVal
  }

  useKeypress("Escape", () => {
    closeModal()
  })

  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_jpg,w_8,q_70/${currentVideo.hd1080p_mp4.public_id}.jpg`

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        <Image
          src={currentPhotoUrl}
          className="pointer-events-none h-full w-full"
          alt="blurred background"
          fill
          priority={true}
        />
      </button>
      <SharedModal
        index={index}
        changeVideoId={changeVideoId}
        currentVideo={currentVideo}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  )
}

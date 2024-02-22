import { Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import useKeypress from "react-use-keypress"
import type { VideoProps } from "../utils/types"
import SharedModal from "./SharedModal"

export default function Modal({
  videos,
  onClose,
}: {
  videos: VideoProps[]
  onClose?: () => void
}) {
  let overlayRef = useRef()
  const router = useRouter()

  const { videoId } = router.query
  let index = Number(videoId)

  const [direction, setDirection] = useState(0)
  const [curIndex, setCurIndex] = useState(index)

  function handleClose() {
    router.push("/", undefined, { shallow: true })
    onClose()
  }

  function changeVideoId(newVal: number) {
    if (newVal > index) {
      setDirection(1)
    } else {
      setDirection(-1)
    }
    setCurIndex(newVal)
    router.push(
      {
        query: { videoId: newVal },
      },
      `/v/${newVal}`,
      { shallow: true }
    )
  }

  useKeypress("ArrowRight", () => {
    if (index + 1 < videos.length) {
      changeVideoId(index + 1)
    }
  })

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changeVideoId(index - 1)
    }
  })

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        videos={videos}
        changeVideoId={changeVideoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  )
}

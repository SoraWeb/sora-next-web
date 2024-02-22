/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
  url?: string
  filename?: string
  resource_type?: string
  aspect_ratio?: number
  folder?: string
}

export interface VideoResource {
  public_id: string
  format: "mp4" | "webm"
}

export interface VideoVersions {
  nhdp_mp4?: ImageProps
  nhdp_webm?: ImageProps
  hd1080p_mp4?: ImageProps
  hd1080p_webm?: ImageProps
}

export interface VideoProps extends VideoVersions {
  id: number
  key: string
  isVideo: boolean
  blurDataUrl?: string
  aspect_ratio: number
}

export interface SharedModalProps {
  index: number
  videos?: VideoProps[]
  currentVideo?: VideoProps
  changeVideoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}

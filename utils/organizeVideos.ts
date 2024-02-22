import { VideoResource, VideoVersions } from "./types"

const organizeVideos = (
  videos: VideoResource[]
): Record<string, VideoVersions> => {
  return videos.reduce(
    (acc, video) => {
      // public id format: sora/ships-in-coffee/nhdp_thlrms
      const [folder, subfolder, id] = video.public_id.split("/")

      const prefix = id.split("_")[0]

      if (!acc[subfolder]) acc[subfolder] = {}

      acc[subfolder][`${prefix}_${video.format}`] = video

      return acc
    },
    {} as Record<string, VideoVersions>
  )
}

export default organizeVideos

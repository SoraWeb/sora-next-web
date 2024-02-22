import organizeVideos from "./organizeVideos"
import { VideoVersions } from "./types"

let cachedResults

const numberOfVideos = 12

export default function getVideos(results) {
  if (!cachedResults) {
    const videoData = organizeVideos(results.resources)
    const randomVideos = Object.keys(videoData)
      .slice(0, numberOfVideos)
      .reduce(
        (obj, key) => {
          obj[key] = videoData[key]
          return obj
        },
        {} as Record<string, VideoVersions>
      )

    cachedResults = randomVideos
  }

  return cachedResults
}

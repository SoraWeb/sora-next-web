import getVideos from "./cachedVideos"
import { VideoProps, VideoVersions } from "./types"

export default async function getVideosList(results) {
  let reducedResults: VideoProps[] = []

  let i = 0

  const randomVideos = getVideos(results)

  for (let [key, value] of Object.entries(randomVideos)) {
    const sample = (value as VideoVersions).hd1080p_mp4
    const isVideo = sample.resource_type === "video" || false
    const number = sample.aspect_ratio || 1

    reducedResults.push({
      id: i,
      key,
      isVideo,
      aspect_ratio: number,
      ...(value as VideoVersions),
    })
    i++
  }

  // const blurImagePromises = reducedResults.map((video: VideoVersions) => {
  //   const image = video.hd1080p_mp4 as ImageProps
  //   return getBase64ImageUrl(image)
  // })

  // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  // for (let i = 0; i < reducedResults.length; i++) {
  //   reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  // }

  return reducedResults
}

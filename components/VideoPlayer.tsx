import React from "react"

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  mp4: string
  webm: string
  className?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  mp4,
  webm,
  className,
  ...props
}) => {
  return (
    <video
      controls={false}
      autoPlay
      loop
      muted
      playsInline
      aria-label="Video player"
      className={className}
      {...props}
    >
      <source src={mp4} type="video/mp4" />
      <source src={webm} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer

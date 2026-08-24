export function ArticleVideo({ video, showHeading = true }) {
  if (!video) return null;

  return (
    <figure className="article-video" id="video-guide">
      {showHeading ? (
        <div className="article-video-heading">
          <p className="eyebrow">Original visual guide</p>
          <h2>{video.name}</h2>
        </div>
      ) : null}
      <div className="article-video-frame">
        <video
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          width={video.width}
          height={video.height}
          data-ga-video-id={video.src}
          data-ga-video-title={video.name}
        >
          <source src={video.src} type="video/mp4" />
          {video.captions ? (
            <track
              kind="captions"
              src={video.captions}
              srcLang="en"
              label="English"
            />
          ) : null}
          Your browser does not support HTML video. You can download the MP4 from the video link.
        </video>
      </div>
      <figcaption>
        <p>{video.description}</p>
        <span>Original Game Hint Lab animation · English narration and captions</span>
      </figcaption>
    </figure>
  );
}

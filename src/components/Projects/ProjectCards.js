import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  const iframeRef = useRef(null);

  const {
    title,
    description,
    videoLink,
    driveLink,
    ratio,
    isImage,
    customThumbnail, // ✅ NEW
  } = props;

  /* ------------------ YOUTUBE ID PARSER ------------------ */
  const getYouTubeID = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
      if (parsed.hostname.includes("youtube.com"))
        return parsed.searchParams.get("v");
      return null;
    } catch {
      return null;
    }
  };

  const videoID = videoLink ? getYouTubeID(videoLink) : null;

  /* ------------------ YOUTUBE THUMBNAIL ------------------ */
  useEffect(() => {
    if (!videoID) return;

    const qualities = [
      "maxresdefault.jpg",
      "sddefault.jpg",
      "hqdefault.jpg",
      "mqdefault.jpg",
      "default.jpg",
    ];

    let loaded = false;

    qualities.forEach((q) => {
      const img = new Image();
      const url = `https://img.youtube.com/vi/${videoID}/${q}`;
      img.src = url;

      img.onload = () => {
        if (!loaded && img.width > 120) {
          setThumbnail(url);
          setThumbLoaded(true);
          loaded = true;
        }
      };
    });
  }, [videoID]);

  /* ------------------ DRIVE FILE ID ------------------ */
  const getDriveFileID = (url) => {
    const match = url?.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const driveFileID = driveLink ? getDriveFileID(driveLink) : null;

  const driveThumbnail = driveFileID
    ? `https://drive.google.com/thumbnail?id=${driveFileID}&sz=w800`
    : null;

  const drivePreview = driveFileID
    ? `https://drive.google.com/file/d/${driveFileID}/preview`
    : null;

  /* ------------------ HEIGHT ------------------ */
  const videoHeight =
    ratio === "16:9" ? "220px" : ratio === "9:16" ? "600px" : "300px";

  const handleClick = () => {
    if (!isImage) setIsPlaying(true);
  };

  return (
    <Card className="project-card-view">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: videoHeight,
          overflow: "hidden",
          background: "#000",
          marginBottom: "1rem",
        }}
      >
        {/* VIDEO PLAY */}
        {drivePreview && isPlaying && !isImage && (
          <iframe
            src={drivePreview}
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: "absolute", inset: 0, border: "none", zIndex: 5 }}
          />
        )}

        {videoID && isPlaying && !isImage && (
          <iframe
            src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
            width="100%"
            height="100%"
            allowFullScreen
            style={{ position: "absolute", inset: 0, border: "none", zIndex: 5 }}
          />
        )}

        {/* THUMBNAIL */}
        <div
          onClick={handleClick}
          style={{
            position: "absolute",
            inset: 0,
            cursor: isImage ? "default" : "pointer",
            zIndex: 3,
          }}
        >
          {/* ✅ CUSTOM THUMBNAIL (PRIORITY) */}
          {customThumbnail && (
            <img
              src={customThumbnail}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}

          {/* YOUTUBE */}
          {!customThumbnail && videoID && thumbLoaded && (
            <img
              src={thumbnail}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}

          {/* DRIVE */}
          {!customThumbnail && driveLink && (
            <img
              src={driveThumbnail}
              alt={title}
              onError={(e) => (e.target.src = drivePreview)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}

          {/* PLAY BUTTON */}
          {!isImage && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "24px",
              }}
            >
              ▶
            </div>
          )}
        </div>
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

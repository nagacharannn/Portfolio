import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  const iframeRef = useRef(null);

  const { title, description, videoLink, driveLink, ratio, isImage } = props;

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

  /* ------------------ YOUTUBE THUMBNAIL FETCH ------------------ */
  useEffect(() => {
    if (!videoID) return;

    const tryThumbnail = (qualities, index = 0) => {
      if (index >= qualities.length) {
        setThumbnail(`https://img.youtube.com/vi/${videoID}/hqdefault.jpg`);
        setThumbLoaded(true);
        return;
      }

      const url = `https://img.youtube.com/vi/${videoID}/${qualities[index]}`;
      const img = new Image();

      img.onload = () => {
        if (img.width > 120) {
          setThumbnail(url);
          setThumbLoaded(true);
        } else {
          tryThumbnail(qualities, index + 1);
        }
      };

      img.onerror = () => tryThumbnail(qualities, index + 1);
      img.src = url;
    };

    tryThumbnail([
      "maxresdefault.jpg",
      "sddefault.jpg",
      "hqdefault.jpg",
      "mqdefault.jpg",
      "default.jpg",
    ]);
  }, [videoID]);

  /* ------------------ GOOGLE DRIVE ID PARSER ------------------ */
  const getDriveFileID = (url) => {
    try {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  const driveFileID = driveLink ? getDriveFileID(driveLink) : null;

  /* ------------------ DRIVE THUMBNAIL + FALLBACK ------------------ */
  const driveThumbnail = driveFileID
    ? `https://drive.google.com/thumbnail?id=${driveFileID}&sz=w800`
    : null;

  const drivePreview = driveFileID
    ? `https://drive.google.com/file/d/${driveFileID}/preview`
    : null;

  /* ------------------ HEIGHT BASED ON RATIO ------------------ */
  const videoHeight =
    ratio === "16:9" ? "220px" : ratio === "9:16" ? "600px" : "300px";

  /* ------------------ CLICK HANDLER ------------------ */
  const handleClick = () => {
    if (isImage) return;
    setIsPlaying(true);
  };

  return (
    <Card className="project-card-view">
      <div
        className="video-container"
        style={{
          position: "relative",
          width: "100%",
          height: videoHeight,
          minHeight: videoHeight,
          borderRadius: "0.5rem",
          overflow: "hidden",
          backgroundColor: "#000",
          marginBottom: "1rem",
        }}
      >
        {/* ------------ DRIVE VIDEO IFRAME ------------ */}
        {drivePreview && !isImage && isPlaying && (
          <iframe
            ref={iframeRef}
            src={drivePreview}
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              border: "none",
              zIndex: 4,
            }}
          />
        )}

        {/* ------------ YOUTUBE VIDEO IFRAME ------------ */}
        {videoID && !isImage && isPlaying && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoID}?autoplay=1&controls=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              border: "none",
              zIndex: 4,
            }}
          />
        )}

        {/* ------------ THUMBNAIL LAYER ------------ */}
        <div
          onClick={handleClick}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            cursor: isImage ? "default" : "pointer",
          }}
        >
          {/* YOUTUBE THUMBNAIL */}
          {videoID && thumbLoaded && (
            <img
              src={thumbnail}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}

          {/* DRIVE THUMBNAIL WITH FALLBACK TO PREVIEW */}
          {driveLink && (
            <img
              src={driveThumbnail}
              alt={title}
              onError={(e) => {
                e.target.src = drivePreview; // ⭐ ALWAYS LOAD PREVIEW IF THUMBNAIL FAILS
              }}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}

          {/* PLAY BUTTON (NOT FOR IMAGES) */}
          {!isImage && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0,0,0,0.65)",
                borderRadius: "50%",
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "28px",
                boxShadow: "0 0 12px rgba(0,0,0,0.5)",
              }}
            >
              ▶
            </div>
          )}
        </div>
      </div>

      {/* ------------ CARD CONTENT ------------ */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
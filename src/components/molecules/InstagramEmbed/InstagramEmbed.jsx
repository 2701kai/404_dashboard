import React, { useEffect, useRef } from "react";
import styles from "./InstagramEmbed.module.scss";

const InstagramEmbed = () => {
  const embedRef = useRef(null);

  useEffect(() => {
    const loadInstagramEmbed = () => {
      console.log("✅ Processing Instagram embed...");
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        console.warn("⚠️ instgrm not yet defined");
      }
    };

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (!existingScript) {
      console.log("📦 Adding Instagram embed script...");
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        console.log("✅ Instagram embed script loaded.");
        loadInstagramEmbed();
      };
      document.body.appendChild(script);
    } else {
      console.log("⏳ Script already present, attempting embed...");
      loadInstagramEmbed();
    }
  }, []);

  return (
    <div ref={embedRef} className={styles.instagramWrapper}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DGoraI9CfQ7/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "99%",
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;

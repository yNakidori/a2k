import React from "react";
import { Image, Text, Stack } from "@fluentui/react";

const DescriptionList = ({ items }) => (
  <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#4a4a4a" }}>
    {items.map((item, index) => (
      <li key={index} style={{ marginBottom: "8px" }}>
        {item}
      </li>
    ))}
  </ul>
);

const VideoComponent = ({ videoSrc, title, descriptions }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1200px",
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#f3f2f1",
      }}
    >
      <div style={{ flex: "1 0 50%" }}>
        <video
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          controls
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ flex: "1 0 50%", padding: "16px" }}>
        <Stack tokens={{ childrenGap: 8 }}>
          <Text
            variant="xxLarge"
            styles={{ root: { fontWeight: "bold", color: "#333" } }}
          >
            {title}
          </Text>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <DescriptionList items={descriptions} />
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default VideoComponent;

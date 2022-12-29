import React from "react";
import "../styles/video.module.css"
export default function youtube(video) {
  console.log("props", video);
  return (
    <>
      <div>youtube</div>
      <div>
        <img src={video.video.info.thumbnail} alt='thumbnail' height='100px'/>
        <p>{video.video.info.title}</p>
      </div>
      <div>
        {video.video.sources.map((source,index) => {
            return(
          <ul key={index}>
            <li>{source.resolution}</li>
            <li>{source.size}</li>
            <li>
              <a
                href={source.url}
                download={video.video.info.title}
                
              >
                <button className="btn-Download">Download</button>
              </a>
            </li>
          </ul>
          );
        })}
      </div>
    </>
  );
}

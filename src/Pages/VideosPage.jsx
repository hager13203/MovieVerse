import React, { useState } from "react";
import VideoPlayer from "../Components/VideoPlayer";
import { v4 as uuidv4 } from "uuid";

const VideosPage = () => {
  const [videos] = useState([
    {
      id: uuidv4(),
      title: "Wonder Woman",
      url: "https://www.youtube.com/embed/VSB4wGIdDwo",
      duration: "2:30",
      thumbnail: "https://i.ytimg.com/vi/VSB4wGIdDwo/mqdefault.jpg",
    },
    {
      id: uuidv4(),
      title: "Oblivion: Official Teaser Trailer",
      url: "https://www.youtube.com/embed/XmIIgE7eSak",
      duration: "2:37",
      thumbnail: "https://i.ytimg.com/vi/XmIIgE7eSak/mqdefault.jpg",
    },
    {
      id: uuidv4(),
      title: "Exclusive Interview: Skull Island",
      url: "https://www.youtube.com/embed/44LdLqgOpjo",
      duration: "2:44",
      thumbnail: "https://i.ytimg.com/vi/44LdLqgOpjo/mqdefault.jpg",
    },
    {
      id: uuidv4(),
      title: "Logan: Director James Mangold Interview",
      url: "https://www.youtube.com/embed/DekuSxJgpbY",
      duration: "2:43",
      thumbnail: "https://i.ytimg.com/vi/DekuSxJgpbY/mqdefault.jpg",
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="w-full my-2">
      <div>
        <VideoPlayer title={currentVideo.title} url={currentVideo.url} />
      </div>

      <div className="container-fluid p-2">
        <div className="row g-3 overflow-hidden mb-5">
          {videos.map((video) => (
            <div
              key={video.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 "
              onClick={() => setCurrentVideo(video)}
            >
              <div className="card p-2 cursor-pointer text-light bg-dark">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="card-img-top w-100 rounded mb-2"
                  style={{ objectFit: "cover", height: "150px" }}
                />
                <div className="card-body p-0">
                  <p className="card-title text-sm font-medium">
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-500">{video.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;

import "./Video.scss";

function Video ({selectedVideo}) {
    return (
       <video controls poster={selectedVideo.image} className="video">
           <source></source>
       </video> 
    );
};

export default Video;
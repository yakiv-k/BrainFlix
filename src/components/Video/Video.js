import "./Video.scss";

function Video (props) {
    return (
       <video controls className="video" poster={props.image}>
           <source></source>
       </video> 
    );
};

export default Video;
// import React, { useRef, useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap"; // Import Button from react-bootstrap
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import myVideo from "../../Assets/avatar_video.mp4"; // Replace this with your actual video path

// function Home2() {
//   // Create a reference for the video element
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Function to handle play/pause of the video
//   const handleVideoPlayPause = () => {
//     if (!isPlaying) {
//       videoRef.current.play();
//       videoRef.current.muted = false; // Enable sound when played
//     } else {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset video to start
//       videoRef.current.muted = true; // Optionally mute when paused
//     }
//     setIsPlaying(!isPlaying); // Toggle playing state
//   };

//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//               I am a certified Google Cloud Platform (GCP) Associate and a software engineer passionate about problem-solving and backend development.
//               <br />
//               <br />
//               Specializing in backend technologies like 
//               <i>
//                 <b className="purple"> Python (FastAPI), Node.js (Express.js), and JavaScript, </b>
//               </i>{" "}
//               I also have expertise in frontend development using 
//               <i>
//                 <b className="purple"> React.js. </b>
//               </i>
//               <br />
//               <br />
//               My focus is on creating scalable, efficient web technologies, particularly in 
//               <i>
//                 <b className="purple"> cloud solutions, automation, and data analytics.</b>
//               </i>{" "}
//               <br />
//               <br />
//               I have hands-on experience with GCP services such as 
//               <i>
//                 <b className="purple"> Cloud Run, Cloud Scheduler, BigQuery, and Cloud Functions and many more cloud services</b>
//               </i>{" "}
//               to design and build event-driven architectures and automating workflows.
//               <br />
//               <br />
//               Additionally, I have a strong foundation in data science, using 
//               <i>
//                 <b className="purple"> Python libraries like Pandas, Numpy, Sklearn, and PyTorch</b>
//               </i>{" "}
//               for data manipulation, machine learning, and model training. I also enjoy working on data visualization using 
//               <i>
//                 <b className="purple"> Google Looker Studio</b>
//               </i>{" "}
//               and 
//               <b className="purple"> Tableau</b> to drive insights and informed decision-making.
//             </p>
//           </Col>
//           <Col
//             md={4}
//             className="myAvtar"
//           >
//             <Tilt>
//               {/* Video that plays on click */}
//               <div
//                 style={{
//                   position: "relative",
//                   cursor: "pointer",
//                 }}
//               >
//                 <video
//                   ref={videoRef}
//                   className="img-fluid"
//                   src={myVideo}
//                   alt="avatar video"
//                   loop
//                   muted
//                 />
//               </div>
//             </Tilt>
//             {/* Play/Pause Button */}
//             <Button 
//               onClick={handleVideoPlayPause} 
//               style={{ marginTop: "20px", backgroundColor: "#FF5349", borderColor: "#FF5349" }}
//               className="play-pause-button"
//             >
//               {isPlaying ? "Pause" : "Play"} Introduction
//             </Button>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/bholeshwarwagh"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://twitter.com/BholeshwarWagh"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/bholeshwarwagh/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/bholeshwar_wagh9420/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Home2;







import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap"; // Import Spinner for loading state
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myVideo from "../../Assets/avatar_video.mp4"; // Replace this with your actual video path

function Home2() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Function to handle play/pause of the video
  const handleVideoPlayPause = () => {
    if (!isPlaying) {
      videoRef.current.play();
      videoRef.current.muted = false;
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
    setIsPlaying(!isPlaying); // Toggle playing state
  };

  // Event listener for when the video is ready to play (buffered enough)
  const handleVideoLoaded = () => {
    setIsLoading(false); // Stop showing the loader when video is buffered enough
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a certified Google Cloud Platform (GCP) Associate and a software engineer passionate about problem-solving and backend development.
              <br />
              <br />
              Specializing in backend technologies like 
              <i>
                <b className="purple"> Python (FastAPI), Node.js (Express.js), and JavaScript, </b>
              </i>{" "}
              I also have expertise in frontend development using 
              <i>
                <b className="purple"> React.js. </b>
              </i>
              <br />
              <br />
              My focus is on creating scalable, efficient web technologies, particularly in 
              <i>
                <b className="purple"> cloud solutions, automation, and data analytics.</b>
              </i>{" "}
              <br />
              <br />
              I have hands-on experience with GCP services such as 
              <i>
                <b className="purple"> Cloud Run, Cloud Scheduler, BigQuery, and Cloud Functions and many more cloud services</b>
              </i>{" "}
              to design and build event-driven architectures and automating workflows.
              <br />
              <br />
              Additionally, I have a strong foundation in data science, using 
              <i>
                <b className="purple"> Python libraries like Pandas, Numpy, Sklearn, and PyTorch</b>
              </i>{" "}
              for data manipulation, machine learning, and model training. I also enjoy working on data visualization using 
              <i>
                <b className="purple"> Google Looker Studio</b>
              </i>{" "}
              and 
              <b className="purple"> Tableau</b> to drive insights and informed decision-making.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div
                style={{
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                {isLoading && (
                  <Spinner
                    animation="border"
                    variant="primary"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                    }}
                  />
                )}
                <video
                  ref={videoRef}
                  className="img-fluid"
                  src={myVideo}
                  alt="avatar video"
                  loop
                  muted
                  preload="metadata" // Load only metadata initially
                  onLoadedData={handleVideoLoaded} // Hide spinner when ready
                  style={{ opacity: isLoading ? 0.5 : 1 }} // Dim video while loading
                />
              </div>
            </Tilt>
            <Button
              onClick={handleVideoPlayPause}
              style={{ marginTop: "20px", backgroundColor: "#FF5349", borderColor: "#FF5349" }}
              className="play-pause-button"
            >
              {isPlaying ? "Pause" : "Play"} Introduction
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bholeshwarwagh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/BholeshwarWagh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bholeshwarwagh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bholeshwar_wagh9420/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

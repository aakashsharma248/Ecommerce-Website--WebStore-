import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@material-ui/icons/Facebook';
const About = () => {
  const visitInstagram = () => {
    window.location.href = "https://www.instagram.com/aakashsharma248/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dlzas8qmh/image/upload/v1692631428/avatars/Aakash_gfjo1g.png"
              alt="Founder"
            />
            <Typography style={{fontSize: "1.8vmax"}}>Aakash Sharma</Typography>
            <Button onClick={visitInstagram} color="primary" style={{fontSize: "1.2vmax"}}>
              Visit Instagram
            </Button>
            <span style={{fontSize: "1.0vmax"}}>
              This is a sample wesbite made by @AakashSharma. <br></br>
              Software Developer | Problem Solver | Lifelong Learner <br></br>

              A passionate and dedicated software developer with a strong foundation in problem-solving. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.instagram.com/aakashsharma248/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007503572566&mibextid=ZbWKwL" target="blank" style={{marginTop: "2vmax"}}>
              <FacebookIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

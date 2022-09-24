import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import PostSide from "../../components/PostSide/PostSide";
import "./Profile.css";
const Profile = () => {


 
  return (
    <div className="Profile">
    <ProfileLeft />
    <div className="Profile-center">
      <ProfileCard location = 'profilePage'/>
      <PostSide/>
    </div>
  
  </div>
  );
};

export default Profile;

import React from "react";
import {
  URL_BACK_UPLOADS_AVATAR,
  URL_BACK_NO_API,
} from "../constants/urls/urlBackEnd";

const ProfileHeader = ({ userInfo }) => {
  return (
    <>
      <div className="w-44 mx-auto h-44 relative  border-8 border-white rounded-full overflow-hidden">
        {/* <a href="/profile" className="text-4xl mr-8 mt-2">
          <BsArrowReturnLeft />
        </a> */}
        <img
          className="object-cover object-center"
          src={
            userInfo && userInfo.user_photo
              ? URL_BACK_NO_API + URL_BACK_UPLOADS_AVATAR + userInfo.user_photo
              : "https://spring.uli.org/wp-content/themes/uli-conference-3/img/no-speaker-image.png"
          }
          alt={userInfo && userInfo.user_photo}
        />
      </div>
    </>
  );
};

export default ProfileHeader;

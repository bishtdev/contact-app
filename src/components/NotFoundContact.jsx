import React from "react";
import image1 from "/public/images/Google_Contacts_logo.png";

const NotFoundContact = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-[80vh] text-white ">
      {" "}
      <img className="w-10" src="./public/images/Google_Contacts_logo.png" alt="" /> NO CONTACT
      FOUND
    </div>
  );
};

export default NotFoundContact;

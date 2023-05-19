import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";

/**
 * View/Page Contact
 *
 * @author Sultan
 */

const ContactView = () => {
  const navigate = useNavigate();

  return (
    <div className="w-10/12 md:w-3/4  lg:w-1/2 mx-auto h-full items-center pb-10">
      <Contact className="" />
    </div>
  );
};

export default ContactView;

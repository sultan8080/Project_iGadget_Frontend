import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";

/**
 * View/Page Login
 *
 * @author Sultan
 */
const ForgetPasswordView = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full items-center justify-center">
      <ForgetPassword />
    </div>
  );
};

export default ForgetPasswordView;

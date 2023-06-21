import React, { useEffect } from "react";
import ResetPassword from "../components/ForgotPassword/ResetPassword";
import { useParams } from "react-router-dom";

/**
 * View/Page ResetPassword
 *
 * @author Sultan
 */
const ResetPasswordView = () => {
  const { token } = useParams();

  return (
    <div className="flex h-full items-center justify-center">
      <ResetPassword token={token} />
    </div>
  );
};

export default ResetPasswordView;

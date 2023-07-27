import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EmailVerifier from "../components/ForgotPassword/EmailVerifier";

/**
 * View/Page ResetPassword
 *
 * @author Sultan
 */
const EmailVeriferView = () => {
  const { id } = useParams();

  return (
    <div className="flex h-full items-center justify-center">
      <EmailVerifier />
    </div>
  );
};

export default EmailVeriferView;

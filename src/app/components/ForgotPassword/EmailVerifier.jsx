import React, { useEffect, useState } from "react";
import axios from "axios";

const EmailVerifier = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/email-verification/success"
        );
        setSuccess(response.data.success);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // Redirect to another page if success is true
  //   if (success) {
  //     window.location.href = 'http://localhost:3000/email-verification/success'; // Replace with your React page URL
  //   }
  // }, [success]);

  return (
    <div>
      <h1>Email Verification Success</h1>
      {success ? null : <p>Email verified successfully</p>}
    </div>
  );
};

export default EmailVerifier;

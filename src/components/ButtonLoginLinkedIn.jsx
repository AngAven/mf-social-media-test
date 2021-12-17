import React from "react";
import { Link } from 'react-router-dom';
export default function ButtonLoginLinkedIn() {
  return (
    <Link to="/authLinkedin">
      <input
        type="submit"
        value="Connect with LinkedIn"
        className="primary-button login-button-linkedin"
      />
    </Link>
  );
}

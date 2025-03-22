"use client";

import { useEffect } from "react";

export default function SaveUser() {
  useEffect(() => {
    fetch("/api/save-user");
  }, []);

  return null; // This component doesn't render anything visible
}

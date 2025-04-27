"use client";

import { useState } from "react";
import { base_url } from "../configs/base_api";

const useConversionApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${base_url}/api/meta-conversion/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    } catch (err) {
      console.error("POST Request Error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};

export default useConversionApi;

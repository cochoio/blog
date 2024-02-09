"use client";

import React, { useEffect, useRef } from "react";

const UtterancesComments = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = "utteranc";
    const element = document.getElementById(id);
    if (element) {
      return;
    }

    const script = document.createElement("script");

    const config = {
      src: "https://utteranc.es/client.js",
      repo: "cochoio/tech.cocho.io",
      "issue-term": "pathname",
      theme: "github-light",
      crossOrigin: "anonymous",
      defer: true,
      id: "utteranc",
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value as any);
    });

    ref.current!.append(script);
  }, []);

  return <div ref={ref} />;
};

export default UtterancesComments;

"use client";

import { useEffect } from "react";

export default function TocWrapper({ html }: { html: string }) {
  useEffect(() => {
    const btn = document.querySelector<HTMLButtonElement>("[data-toc-toggle]");
    const list = document.getElementById("lists-srvc");
    if (!btn || !list) return;

    const toggle = () => {
      list.style.display = list.style.display === "none" ? "block" : "none";
    };

    btn.addEventListener("click", toggle);
    return () => btn.removeEventListener("click", toggle);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

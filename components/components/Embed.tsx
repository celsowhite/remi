"use client";

import { useEffect } from "react";

export interface EmbedProps {
  code: string;
  script: string;
}

export default function Embed({ code, script }: EmbedProps) {
  /*----------------------
  Execute Script On Load
  ----------------------*/
  useEffect(() => {
    // If the embed uses an external script then it may need to reload.
    if (script) {
      const executeScript = new Function(script)();
      executeScript();
    }
  }, []);

  /*----------------------
  Template
  ----------------------*/
  return <div dangerouslySetInnerHTML={{ __html: code }}></div>;
}

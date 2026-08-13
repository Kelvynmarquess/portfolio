"use client";

import { useEffect, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button className="copy-button" type="button" onClick={copyEmail}>
      {copied ? "E-mail copiado" : "Copiar e-mail"}
      <span className="sr-only" aria-live="polite">
        {copied ? "Endereço de e-mail copiado para a área de transferência" : ""}
      </span>
    </button>
  );
}

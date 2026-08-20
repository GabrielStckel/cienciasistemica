declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envia um evento para o GA4. Silencioso se o gtag não estiver disponível. */
export function track(event: string, params: Record<string, unknown> = {}) {
  try {
    window.gtag?.("event", event, params);
  } catch {
    /* analytics nunca deve quebrar a página */
  }
}

export {};
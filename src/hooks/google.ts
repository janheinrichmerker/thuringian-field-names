import { google, LoaderOptions, Loader } from "google-maps";
import { useEffect, useState } from "react";

export type Google = google;

export function useGoogle(
  apiKey?: string,
  options?: LoaderOptions
): Google | undefined {
  const [google, setGoogle] = useState<Google | undefined>(undefined);

  useEffect(() => {
    let cancel = false;

    new Loader(apiKey, options).load().then((google) => {
      if (cancel) return;
      setGoogle(google);
    });

    return () => {
      cancel = true;
    };
  }, [apiKey, options]);

  return google;
}

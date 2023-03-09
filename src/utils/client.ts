import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_APP_PROJECTID,
  dataset: import.meta.env.VITE_APP_DATASET,
  useCdn: import.meta.env.VITE_APP_USECDN,
  apiVersion: import.meta.env.VITE_APP_API,
  token: import.meta.env.VITE_APP_TOKEN,
});

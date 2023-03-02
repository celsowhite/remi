import { createClient } from "next-sanity";

// Config
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// CDN Client
export const cdnClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

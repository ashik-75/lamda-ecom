import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "fbouwd40",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-01-12",
  token:
    "sknGzZRSrpScb2XyjdKzYjfSmyXf2L7sU33cQTbtmPFCYFy1aChTjXXJJ8wGKRVGV0rSUd8d0U53lrcB8BsPqGYJDoZ5Z5MrhWWDy9t17KrVXL84KmG9OEOTULa2qw5MLYe2oaOqQvjS5DtidJsxOQT6bpMSkZOcLunoMODwJ9NjwHHfWgwy",
});

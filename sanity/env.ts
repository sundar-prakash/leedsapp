export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-08";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "a45hjv9w",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
export const token = assertValue(
  "skS3dTbFEUGbbMEus5IEh9nwBqz95gOiT8cvyp9YxlWDFdXCYjZyEfWD3R31OXWTemhAULPSr5cRx3y9XR9mP1RZAQCwNtYEZZOyqWMt2YF7Sz0URW5YTtdNCVtIAlTglprZFjyzbXBjtP13BdphzZzHLYz0oI3cxa8HbBgCo1QHDNJ4aEeS",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

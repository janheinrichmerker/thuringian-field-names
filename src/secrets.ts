export const API_USERNAME = requireEnv(
  "REACT_APP_API_USERNAME",
  "the backend API username"
);

export const API_PASSWORD = requireEnv(
  "REACT_APP_API_PASSWORD",
  "the backend API password"
);

function requireEnv(key: string, name?: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      "You must specify " +
        (name ? `${name} in` : "") +
        `the \`${key}\` environment variable. ` +
        "Note that you need to restart the React development server for changes to take effect."
    );
  }
  return value;
}

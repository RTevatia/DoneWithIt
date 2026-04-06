import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://10.0.0.4:9000/api",
  },
  staging: {
    apiUrl: "http://10.0.0.4:9000/api",
  },
  prod: {
    apiUrl: "http://10.0.0.4:9000/api",
  },
};

const getCurrentSettings = () => {
  // Development mode
  if (__DEV__) return settings.dev;

  // Safely access manifest (handles newer Expo versions)
  const releaseChannel =
    Constants.expoConfig?.extra?.releaseChannel ||
    Constants.manifest?.releaseChannel;

  if (releaseChannel === "staging") return settings.staging;

  return settings.prod;
};

export default getCurrentSettings;

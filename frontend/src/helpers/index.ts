export const StatusUnknown = 0;
export const StatusInProgress = 2;
export const StatusDone = 3;

function getApiBaseUrl() {
  const port = `${process.env.VUE_APP_API_PORT}`;
  const host = `${process.env.VUE_APP_API_HOST}`;
  if (host && port) {
    return `${host}:${port}`;
  }
  return host;
}

export const apiBaseUrl = getApiBaseUrl();

export function getServerTime() {
  return {
    now: new Date().toISOString(),
  };
}

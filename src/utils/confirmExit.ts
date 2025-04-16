export const confirmExit = (message: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const confirmed = window.confirm(message);
    resolve(confirmed);
  });
};

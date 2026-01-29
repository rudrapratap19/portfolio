export const useTheme = () => {
  return [
    'dark',
    () => {} // Empty function since we don't need toggle functionality
  ] as const;
};
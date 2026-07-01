export const buildSearchIndex = (
  modules
) => {
  return Object.values(modules).map(
    (module) => module.default
  );
};
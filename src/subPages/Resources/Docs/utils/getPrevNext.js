export const getPrevNext = (
  sidebar,
  currentSlug
) => {
  const pages = [];

  sidebar.forEach((section) => {
    section.items.forEach((item) => {
      pages.push(item);
    });
  });

  const currentIndex = pages.findIndex(
    (page) => page.slug === currentSlug
  );

  return {
    previous:
      currentIndex > 0
        ? pages[currentIndex - 1]
        : null,

    next:
      currentIndex < pages.length - 1
        ? pages[currentIndex + 1]
        : null,
  };
};
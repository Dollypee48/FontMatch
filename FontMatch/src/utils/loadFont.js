export const loadFonts = (fontFamilies) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${fontFamilies.map(font => `family=${font.replace(/ /g, '+')}`).join('&')}&display=swap`;

  document.head.appendChild(link);
};

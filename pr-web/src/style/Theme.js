const size = {
  mobile: "768px",
  tablet: "1024px",
  laptop: "1366px",
  desktop: "1680px",
};

const Theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default Theme;

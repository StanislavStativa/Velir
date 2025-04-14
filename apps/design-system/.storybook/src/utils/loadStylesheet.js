const themeBasePath = 'themes/'; // Relative path to your themes directory

export const loadStylesheet = (theme) => {
  const linkId = 'dynamic-theme';
  const cssPath = `${themeBasePath}${theme}.css`;
  let linkElement = document.getElementById(linkId);

  if (!linkElement) {
    linkElement = document.createElement('link');
    linkElement.id = linkId;
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    document.head.appendChild(linkElement);
  }

  linkElement.href = cssPath;
};

export const isExternalLink = (href = "") =>
  href.startsWith("http") && href.indexOf("obweb.dev") === -1;

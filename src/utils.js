export const MOBILE_WIDTH = 480;
export const BOOK_MIN_WIDTH = 900;
export const DESKTOP_PAGE = { width: 550, height: 600 };
export const MOBILE_PAGE = { width: 500, height: 600 };

export const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

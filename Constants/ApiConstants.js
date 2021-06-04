const backUrl = "https://api.unsplash.com";

export const fetchImages = (searchedImage) => {
  return `${backUrl}/search/photos/?client_id=GbW6BmWadAvvAzzPUOt4EsylTh2kZPZvlGkl3rfTrVY&query=${searchedImage}`;
};

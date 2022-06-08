const baseURL = 'http://localhost:3001/images';

function getImages() {
  return fetch(`${baseURL}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function createImage(image) {
  return fetch(`${baseURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({url: image}),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

export const imageService = {
  getImages,
  createImage
};


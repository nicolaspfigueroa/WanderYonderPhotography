const baseURL = 'http://localhost:3001/images';

function getImages() {
  return fetch(`${baseURL}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function getImage(id) {
  return fetch(`${baseURL}/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function createImage(photo) {
  return fetch(`${baseURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(photo),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function deleteImage(id) {
  return fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function changeTitle(id) {
  return fetch(`${baseURL}/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

export const imageService = {
  getImages,
  createImage,
  deleteImage,
  getImage,
  changeTitle
};


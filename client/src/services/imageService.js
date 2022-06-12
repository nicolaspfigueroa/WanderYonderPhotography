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

function changeTitle(id, title) {
  console.log('here', id)
  const input = {title:title};
  console.log(input);
  console.log(JSON.stringify(input));
  return fetch(`${baseURL}/${id}/title`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input)
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


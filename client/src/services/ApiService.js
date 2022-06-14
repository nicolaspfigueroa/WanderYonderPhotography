const BASE_URL = 'http://localhost:3001';

// possible to refactor into a 'fetch factory' to reduce repetition

const apiService = {};

apiService.login = (user) => {
  // REMOVE-START
  return fetch(`${BASE_URL}/user/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

apiService.logout = () => {
  // REMOVE-START
  return fetch(`${BASE_URL}/user/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

apiService.createCheckoutSession = (cart) => {
  console.log(cart);
  return fetch(`${BASE_URL}/create-checkout-session`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart)
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
};

export default apiService;

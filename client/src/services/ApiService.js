const BASE_URL = 'http://localhost:3001/user';

// possible to refactor into a 'fetch factory' to reduce repetition

const apiService = {};

apiService.login = (user) => {
  // REMOVE-START
  return fetch(`${BASE_URL}/login`, {
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
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

export default apiService;

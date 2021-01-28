import { API_ROOT } from '../config';

export const userService = {
  login,
  logout,
  register
};

async function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  const response = await fetch(`${API_ROOT}/login`, requestOptions);
  const user = await handleResponse(response);

  localStorage.setItem('user', JSON.stringify(user));
  return user;
}

function logout() {
  localStorage.removeItem('user');
}

async function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  const response = await fetch(`${API_ROOT}/users/register`, requestOptions);
  return handleResponse(response);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
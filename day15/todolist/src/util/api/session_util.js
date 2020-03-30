export const login = (username, password) => {
  return $.ajax({
    method: 'POST',
    url: '',
    data: { username, password }
  });
};

export const signup = (username, password) => {
  return $.ajax({
    method: 'POST',
    url: '',
    data: { username, password }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '',
  });
};
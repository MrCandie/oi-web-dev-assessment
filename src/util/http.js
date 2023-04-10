import axios from "axios";

const API_URL = "https://oi-538u.onrender.com/api/v1";

export async function createPost(data, token) {
  const response = await axios.post(API_URL + "/posts", data, {
    headers: {
      Authorization: `Bearer ${token} `,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function updatePost(data, token, id) {
  const response = await axios.patch(API_URL + `/posts/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token} `,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function deletePost(token, id) {
  const response = await axios.delete(API_URL + `/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

export async function getUserPosts(token) {
  const response = await axios.get(API_URL + "/posts/user", {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

export async function getAllPosts(token) {
  const response = await axios.get(API_URL + "/posts", {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

export async function signup(data) {
  const response = await axios.post(API_URL + "/users/register", data);

  return response.data;
}

export async function login(data) {
  const response = await axios.post(API_URL + "/users/login", data);

  return response.data;
}
export async function addComment(data, token, id) {
  const response = await axios.post(API_URL + `/comments/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}
export async function getPostComments(token, id) {
  const response = await axios.get(API_URL + `/comments/post/${id}`, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

export async function getAllComments(token) {
  const response = await axios.get(API_URL + `/comments/user`, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

export async function updateComments(token, data, id) {
  const response = await axios.patch(API_URL + `/comments/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

export async function deleteComments(token, id) {
  const response = await axios.delete(API_URL + `/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

export async function getProfile(token) {
  const response = await axios.get(API_URL + `/users`, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}
export async function editProfile(token, data) {
  const response = await axios.patch(API_URL + `/users`, data, {
    headers: {
      Authorization: `Bearer ${token} `,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function deleteProfile(token) {
  const response = await axios.delete(API_URL + `/users`, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
}

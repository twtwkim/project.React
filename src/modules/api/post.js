import axios from "axios";
const request = axios.create();

export const write_post = (title, body, tags) => request.post('/api/posts', {title, body, tags})

export const read_post = (id) => request.get(`/api/posts/${id}`);

export const list_posts = (page, username, tag) => {
    const response = request.get(`/api/posts`, {params:{page, username, tag}});
    return response
}

export const update_post = (id, title, body, tags) =>{
    const response = request.patch(`/api/posts/${id}`, {title, body, tags})
    return response
}

export const remove_post = (id) =>{
    const response = request.delete(`/api/posts/${id}`)
    return response
}


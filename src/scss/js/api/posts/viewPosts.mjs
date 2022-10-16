
import { Api_social_url } from "../constants.mjs";
import {authFetch} from "../fetchToken.mjs"

const action = "/posts";
const method = "get"

export async function viewAllPosts() {
    const updatePostsURL = `${Api_social_url}${action}`;

    const response = await authFetch(updatePostsURL)

    const results = await response.json()
    console.log(results)
    return results;
}

export async function viewSinglePost(id) {
    const updatePostsURL = `${Api_social_url}${action}/${id}`;

    const response = await authFetch(updatePostsURL)

    const results = await response.json()
    
    return results;
}
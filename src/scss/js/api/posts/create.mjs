import { Api_social_url } from "../constants.mjs";
import {authFetch} from "../fetchToken.mjs"

const action = "/posts";
const method = "POST"

export async function createSinglePost(postData) {
    const createPostsURL = Api_social_url + action;

    const response = await authFetch(createPostsURL, {
        method,
        body: JSON.stringify(postData)
    })

    const results = await response.json()
    console.log(results)
    return results;
}
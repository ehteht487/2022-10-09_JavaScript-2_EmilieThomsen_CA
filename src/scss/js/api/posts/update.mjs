
import { Api_social_url } from "../constants.mjs";
import {authFetch} from "../fetchToken.mjs"

const action = "/posts";
const method = "put"

export async function updateSinglePost(postData) {
    const updatePostsURL = `${Api_social_url}${action}/${postData.id}`;

    const response = await authFetch(updatePostsURL, {
        method,
        body: JSON.stringify(postData)
    })

    const results = await response.json()
    console.log(results)
    return results;
}
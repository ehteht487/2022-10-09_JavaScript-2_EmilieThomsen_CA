

import { Api_social_url } from "../constants.mjs";
import {authFetch} from "../fetchToken.mjs"

const action = "/posts";
const method = "delete"

export async function removeSinglePost(id) {
    const updatePostsURL = `${Api_social_url}${action}/${id}`;

    const response = await authFetch(updatePostsURL, {
        method,
    })

    const results = await response.json()
    console.log(results)
    return results;
}
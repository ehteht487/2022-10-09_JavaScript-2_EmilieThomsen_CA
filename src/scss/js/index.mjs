import * as eventListeners from "./handlers/index.mjs"

import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { removeSinglePost } from "./api/posts/index.mjs";




const path = location.pathname;
if (path === "/profile/login/") {
    eventListeners.setFormLoginListener()
} else if (path === "/profile/register/") {
    eventListeners.setFormRegisterListener()
}else if (path === "/postSINGLE/create/") {
    eventListeners.setCreatePostListener()
}else if (path === "/postSINGLE/edit/") {
    eventListeners.setUpdatePostListener()
    eventListeners.eliminatePost()
}



async function testTemplate() {
    const posts = await postMethods.viewAllPosts();
    const container = document.querySelector("#post")
    templates.renderPostTemplates(posts, container)
}

testTemplate()



// async function testTemplate() {
//     const posts = await postMethods.viewAllPosts();
//     const post = posts[25]
//     const container = document.querySelector("#post")
//     templates.renderPostTemplate(post, container)
// }

// testTemplate()


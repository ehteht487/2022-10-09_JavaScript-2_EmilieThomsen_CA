import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";


import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";




const path = location.pathname;
if (path === "/profile/login/index.html") {
    setFormLoginListener()
} else if (path === "/profile/register/index.html") {
    setFormRegisterListener()
}

async function testTemplate() {
    const posts = await postMethods.viewAllPosts();
    const container = document.querySelector("#post")
    templates.renderPostTemplates(posts, container)
}

testTemplate()




//Single post
// async function testTemplate() {
//     const posts = await postMethods.viewAllPosts();
//     const post = posts[25]
//     const container = document.querySelector("#post")
//     templates.renderPostTemplate(post, container)
// }

// testTemplate()


import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";

import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { renderPostTemplate } from "./templates/index.mjs";





const path = location.pathname;
if (path === "/profile/login/index.html") {
    setFormLoginListener()
} else if (path === "/profile/register/index.html") {
    setFormRegisterListener()
}


async function testTemplate() {
    const posts = await postMethods.viewAllPosts();
    const post = posts[44]
    const container = document.querySelector("#post")
    renderPostTemplate(post, container)
}

testTemplate()


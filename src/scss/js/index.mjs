import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs"



const path = location.pathname;
if (path === "/profile/login/index.html") {
    setFormLoginListener()
} else if (path === "/profile/register/index.html") {
    setFormRegisterListener()
}


// post.createSinglePost()
// post.updateSinglePost()
post.removeSinglePost()
// post.viewAllPosts()
// post.viewSinglePost()
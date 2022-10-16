import {removeSinglePost} from "../api/posts/remove.mjs";



export async function eliminatePost() {
    const remove = document.querySelector("#removePost")
    remove.addEventListener("click", () => {
        removeSinglePost()
    })
}

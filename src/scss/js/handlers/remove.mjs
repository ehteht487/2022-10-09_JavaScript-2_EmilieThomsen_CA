import { removeSinglePost } from "../api/posts/index.mjs";

export async function setRemoveListener() {
    const removeButton = document.querySelector("#removePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    
    const button = document.querySelector("button")
    button.disabled = true
    const post = await viewSinglePost(id);

    removeButton.title.value = post.title
    removeButton.body.value = post.body
    removeButton.tags.value = post.tags
    removeButton.media.value = post.media

    button.disabled = false;

    removeButton.addEventListener("submit", (event) => {
    event.preventDefault();

    const removeButton = event.target;
    const formData = new FormData(form);  
    const post = Object.fromEntries(formData.entries());
    post.id = id

    removeSinglePost(post)


});
} 











// export async function setRemoveListener() {
//     const button = document.querySelector("removePost")
//     button.addEventListener("submit", (event) => {
//         fjernPost()
//     })
// }


// async function fjernPost() {
    
//     const url = new URL(location.href);
//     const id = url.searchParams.get("id");

//     const cutPost = await removeSinglePost(id)
    
    
//     removeSinglePost(cutPost)
//     return await response.json()
// }


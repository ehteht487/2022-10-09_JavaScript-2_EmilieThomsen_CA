// export function postTemplateA(postData) {
//     return `<div class="post>${postData.title}</div>`
// }

export function postTemplateB(postData) {
    const post = document.createElement("div")
    post.classList.add("post")
    post.innerText = postData.title;
    return post;
}

export function renderPostTemplate(postData, parent) {
    // parent.innerHTML = postTemplates(postData)

    parent.append(postTemplateB(postData));
}


export function renderPostTemplates(postDataList, parent) {
    postDataList.map()
}


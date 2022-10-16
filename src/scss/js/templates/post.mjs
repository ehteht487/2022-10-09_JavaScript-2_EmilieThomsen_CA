// export function postTemplateA(postData) {
//     return `<div class="post>${postData.title}</div>`
// }

export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    
    const postH3 = document.createElement("h3")
    postH3.classList.add("mb-0")
    const textNode = document.createTextNode(postData.title)
    postH3.appendChild(textNode);
    post.appendChild(postH3) 

    const idDisplay = document.createElement("h5")
    idDisplay.classList.add("mb-0")
    const textNode1 = document.createTextNode(postData.id)
    idDisplay.appendChild(textNode1)
    post.appendChild(idDisplay)

    const body = document.createElement("p")
    body.classList.add("mb-0")
    const textNode2 = document.createTextNode(postData.body)
    body.appendChild(textNode2)
    post.appendChild(body)
 

    if(postData.media) {
        const picture = document.createElement("img");
        picture.src = postData.media;
        picture.alt = postData.title;
        post.append(picture);
    }

    const buttonPost = document.createElement("a")
    buttonPost.classList.add("btn", "btn-primary")
    const id = postData.id 

    buttonPost.href = "/postSINGLE/edit/?id=" + id
    const textNodeButton = document.createTextNode("Edit post")
    buttonPost.appendChild(textNodeButton)
    post.appendChild(buttonPost)

    return post;
}

export function renderPostTemplate(postData, parent) {
    
    parent.append(postTemplateB(postData))
}





// PostsPLURAL

export function renderPostTemplates(postDataList, parent) {
    const postHTMLElements = postDataList.map(postTemplateB)
    parent.append(...postHTMLElements)

}
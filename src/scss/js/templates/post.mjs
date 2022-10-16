// export function postTemplateA(postData) {
//     return `<div class="post>${postData.title}</div>`
// }

export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;
    

    if(postData.media) {
        const picture = document.createElement("img");
        picture.src = postData.media;
        picture.alt = postData.title;
        post.append(picture);
    }

    return post;
}

export function renderPostTemplate(postData, parent) {
    // parent.innerHTML = postTemplate(postData)

    parent.append(postTemplateB(postData))
}





// PostsPLURAL

export function renderPostTemplates(postDataList, parent) {
    const postHTMLElements = postDataList.map(postTemplateB)
    parent.append(...postHTMLElements)

    // postDataList.forEach((post) => {
    //     postTemplateB(post)        
    // });
}
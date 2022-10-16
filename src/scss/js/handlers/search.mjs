const searchPost = document.querySelector("#searchPost");


export async function filter() {
    const postFilter = searchPost.value.toLowerCase();
    const dataArray = document.querySelectorAll(".post");
     dataArray.forEach((item) =>{
        let search = item.textContent;

        if(search.toLocaleLowerCase().includes(filter.toLowerCase())) {
            search.style.display = "";
    
        } else {
            search.style.display = "none";
        }
     }) 
}
if (searchPost) {
    searchPost.addEventListener("keyup", filter())
}
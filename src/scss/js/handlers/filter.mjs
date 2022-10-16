import {viewAllPosts} from "../api/posts/viewPosts";



const filterButton = document.querySelector("#filterButton");

function checkTags(tag) {
    return tag === "merry";
}

filterButton.onclick = async function filteredArray() {
    const filterItems = await viewAllPosts()
    return filterItems;

    const filPo = filterItems.filter(checkTags)
}
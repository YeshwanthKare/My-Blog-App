/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "https://yesh-blog-api.herokuapp.com/api/posts/";
const API_BASE_URL = "https://yesh-blog-api.herokuapp.com/";

window.onload = () => {
    getPost();
    getpostIdParam()
}

const getpostIdParam = () => {
    const queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    return urlParams.get("id")
}

const getPost = () => {
    // CODE GOES HERE
   const postId = getpostIdParam();
   fetch(`${API_URL}${postId}`, {
       method: "GET"
   }).then((response) => {
       return response.json();
   }).then((data) => {
       buildPost(data)
   })
    
}

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string
    console.log(data);
    let postImage = `${API_BASE_URL}${data.post_image}`
    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
    let postDate = new Date(parseInt(data.added_date)).toDateString();
    document.getElementById("individual-post-title").innerText = data.title;
    document.getElementById("individual-post-content").innerText = data.content;
    document.getElementById("individual-post-date").innerText = `Published on ${postDate}` 
}


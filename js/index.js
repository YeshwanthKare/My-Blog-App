

const API_URL = "https://yesh-blog-api.herokuapp.com/api/posts";
const API_BASE_URL = "https://yesh-blog-api.herokuapp.com/";

//https://blog-app-api-yesh.herokuapp.com/

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: "GET"
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    let blogPostsAll = "";
    for(blogPost of blogPosts){
        let postLink = `/post.html?id=${blogPost.id}`
        let postImage = `${API_BASE_URL}${blogPost.post_image}`
        let postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        blogPostsAll += `
        <a href="${postLink}" class="post-link">
            <div class="post">
                <div class="post-image" style="background-image: url(${postImage})"></div>
                <div class="post-content">
                    <div class="post-date">${postDate}</div>
                    <div class="post-title"><h4>${blogPost.title}</h4></div>
                    <div class="post-text">${blogPost.content}</div>
                </div>
            </div>
        </a>`
    }
    document.querySelector(".blog-posts").innerHTML = blogPostsAll;
    
}
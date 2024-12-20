document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    const commentsContainer = document.getElementById("comments-container");

    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(displayComment);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const text = document.getElementById("text").value;
        const category = document.getElementById("category").value;
        const comment = { text, category };

        displayComment(comment);
        var comments = JSON.parse(localStorage.getItem("comments")) 
        comments.unshift(comment);
        localStorage.setItem("comments", JSON.stringify(comments));
        
        form.reset();
    });

    function displayComment(comment) {
        commentsContainer.innerHTML += `
        <div class="comment">
            <p class="comment__title">${comment.text}</p>
            <p class="comment__type">Категория: ${comment.category}</p>
        </div>
        `;
    }
});
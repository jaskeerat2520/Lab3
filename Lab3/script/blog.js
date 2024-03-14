const apiKey = "42719315-0daee063ceb72e158c1158e0";

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
        console.log(data);

        const ul = document.getElementById('posts');
        
        const list = document.createDocumentFragment();
        data.slice(0, 16).map(function (post) {
            let li = document.createElement('li');
            li.classList.add("card")
            let title = document.createElement('h1');
            title.classList.add("card-title")
            let body = document.createElement('p');
            body.classList.add("card-text")
            title.innerHTML = `${post.title}`;
            body.innerHTML = `${post.body}`;

            li.appendChild(title);
            li.appendChild(body);
            list.appendChild(li);
        });

        ul.appendChild(list);
    });

fetch(`https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo`)
    .then(response => {
    if(!response.ok){
        console.log(response);
    }
    })
    .then(data => {
        console.log(data);
    });

    

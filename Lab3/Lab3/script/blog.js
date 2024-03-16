// Jaskeerat Randhawa
// 03/15/2024

// constant fot the api key for pixabay
const apiKey = "42719315-0daee063ceb72e158c1158e0f";


// inatializr the variables to store data from pixabay
let Photoslist=[];
let PhotoSrc = [];


// fetch the posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // if response is not ok display error in 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        
        console.log(data);

        const ul = document.getElementById('posts');
        
        const list = document.createDocumentFragment();
        // fetch the pictures
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo`)
            .then(response => {
                if (!response.ok) {
                    console.log(response);
                }
                return response.json()
            })
            .then(photos => {
                // copy the hits and copy into Photoslist and take the urls and store into PhotoSrc
                for (i = 0; i < photos.hits.length; i ++){
                    Photoslist[i] = photos.hits[i]
                    
                     PhotoSrc[i] = Photoslist[i].largeImageURL;


                    console.log(Photoslist[i].largeImageURL);
                }
                return data;
            })
            .then(data =>{
        // go through 16 pictures 
        data.slice(0, 16).map(function (post, index) {



            
// create the elements and style using bootstrap
            let li = document.createElement('li');
            li.classList.add("card")
            let title = document.createElement('h1');
            title.classList.add("card-title")
            let body = document.createElement('p');
            body.classList.add("card-text")
            let photo = document.createElement('img');
            photo.classList.add("w-50")
                    console.log(index)
          
            photo.src = PhotoSrc[index] 
            
            title.innerHTML = `${post.title}`;
            body.innerHTML = `${post.body}`;

            li.appendChild(title);
            li.appendChild(body);
            li.appendChild(photo);
            list.appendChild(li);
        
        });

        
        ul.classList.add("flex",  "justify-content-center")
        ul.appendChild(list);

    
    });

});

    
    

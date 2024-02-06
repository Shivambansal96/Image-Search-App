const DivContainer = document.querySelector("#jsDivContainer");

const showMoreButton = document.querySelector("#showMoreButton");

showMoreButton.style.display = "none";

const heading = document.querySelector("#heading");
const searchButton = document.querySelector("#searchButton");
const searchForm = document.querySelector("#searchForm");
const searchField = document.querySelector("#searchField");

// console.log(searchForm);

// var baseUrl = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${searchField.value}`;




// https://api.unsplash.com/search/photos?page=1&query=naruto&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw

let page = 0;

 async function searchButtonHandler(event) {
    // stops the page from refreshing
    event.preventDefault()

    const key = "6Utc3-o98q4N_LJyvNVUW62YAA5zCnT9okUlUV4NW3o";

    page++;

    let baseUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${searchField.value}&client_id=${key}`;


    // let pageNumber = 1;


    const response =  await fetch(baseUrl);

    const data = await response.json();


        // console.log(baseUrl);

        console.log(data);
        for(let i = 0; i < 10; i++) {

            const imageContainer = document.createElement("div");
            const imageTag = document.createElement("img");
            const captionDiv = document.createElement("div");
            const imageCaption = document.createElement("p");
            
            // console.log(imageCaption); 

            const image = data.results[i].urls.raw;
            imageTag.src = image;

            // console.log(image);

            imageCaption.innerText = data.results[i].alt_description;
            console.log(imageContainer);


            // imageCaption.innerText = `${searchValue}`;
            // imageCaption.innerText = "naruto";
            // console.log(imageCaption);

            imageContainer.classList.add("imageContainer");
            imageTag.classList.add("image")
            captionDiv.classList.add("captionDiv");
            imageCaption.classList.add("imageCaption");
            
            
            DivContainer.appendChild(imageContainer)
            imageContainer.append(imageTag,captionDiv, imageCaption)
            captionDiv.appendChild(imageCaption)

            imageCaption.style.color = randomColor();
            // imageCaption.style.color = "white";
            // captionDiv.style.width = "20em";


            // console.log(imageCaption); 


    // TRY TO FIGURE THIS OUT.. on clicking the image it gets scaled to 2 but we need to create a remove button to remove the image from the screen or something.

            // imageTag.addEventListener("click", () => {
            //     imageContainer.style.overflow = "visible";
            //     imageTag.style.transform = "scale(2)";

            //     const removeImage = createElement("button")
            //     removeImage.innerText = "Click ME!";

            //     removeImage.classList.add("removeButton")
            //     image.appendChild(removeImage);

            // })


    // TRY TO FIGURE THIS OUT.. on clicking the image it gets scaled to 2 but we need to create a remove button to remove the image from the screen or something.


        }

        showMoreButton.style.display = "block";



    }

        // console.log(baseUrl);
        heading.style.color = randomColor();

    // searchValue.innerHTML = "";

    // console.log(searchValue);



showMoreButton.addEventListener("click", searchButtonHandler);
    // pageNumber++;


searchButton.addEventListener("click", searchButtonHandler);
// console.log(searchButton);








//             // CHECK THIS AGAIN

// // clear the div container of any previous data
// let inputData = "";
// let pageNumber = 1;
// const APIkey = "BuBCzuPIBUCdHfHlqBxwqn3NhBQ632YngvSCmjXu3TU";

//  function searchButtonHandler() {

//     // const link = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${inputData}&client_id=${APIkey}`;


// }

//             // CHECK THIS AGAIN

function randomColor() {

    let str = "0123456789abcdef";
    let colorStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        colorStr += str[randomIndex];
    }

    return colorStr;

}
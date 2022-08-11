//dogs------------------

function myApiImage(){
    console.log('myapi function started');
    fetchAPI('https:\/\/dog.ceo/api/breeds/image/random', function (response) {
        addImg(response.message);
    });

}


async function fetchAPI(url, callback) {
    console.log('request has been send');

    //const response = await fetch(url, { method: 'POST', body: data });
    const response = await fetch(url);
    const response_json = await response.json();
    console.log(response_json);
    if (response.status == 200) {
        callback(response_json);
    }
}

function myApiText(){
    console.log('myapiImage function started');
    fetchAPI('https://uselessfacts.jsph.pl/random.json', function (response) {
        addText(response.text);
        console.log("izvada"+response);
    });

}

let text_elm = document.querySelector(".post__text");
function addText(src) {
const text = document.createElement("div");
text.textContent = src;
text_elm.append(text);
}


let images_elm = document.querySelector(".post__gallery");
function addImg(src) {
const image = document.createElement("img");
image.src = src;
images_elm.append(image);
}






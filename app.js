
function addNote() {
   let textBox = document.createElement('textarea');
   document.body.appendChild(textBox);
}

function addImage() {
    let imageUrlBox = document.createElement('input');  
    imageUrlBox.setAttribute('value', 'Paste Image URL');
    document.body.appendChild(imageUrlBox);
    let imageSubmitButton = document.createElement('button');
    imageSubmitButton.innerHTML = 'Submit';
    document.body.appendChild(imageSubmitButton);

    imageUrlBox.onclick = function () {
        imageUrlBox.removeAttribute('value', '');
    };

    imageSubmitButton.onclick = function () {
        document.body.removeChild(imageUrlBox);
        document.body.removeChild(imageSubmitButton);
        let createImage = document.createElement('img');
        createImage.src = imageUrlBox.value; 
        document.body.appendChild(createImage);
    }
};



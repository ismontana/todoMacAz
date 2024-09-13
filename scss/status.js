function modalEvidencias1() {
    var myModal1 = new bootstrap.Modal(document.getElementById("modalEvidencias1"));
    myModal1.show();
  }
  
  function modalEvidencias2() {
    var myModal2 = new bootstrap.Modal(document.getElementById("modalEvidencias2"));
    myModal2.show();
  }
  
  function modalEvidencias3() {
    var myModal3 = new bootstrap.Modal(document.getElementById("modalEvidencias3"));
    myModal3.show();
  }

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function showImages(event, containerId) {
    const imagesContainer = document.getElementById(containerId);
    imagesContainer.innerHTML = '';

    if (event.target.files.length > 0) {
        for (let i = 0; i < event.target.files.length; i++) {
            let img = document.createElement('img');
            img.src = URL.createObjectURL(event.target.files[i]);
            img.style.width = "200px";
            img.style.height = "auto";
            img.style.marginLeft = "10px";
            img.style.marginRight = "10px";

            // Crear el botón de eliminar
            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>';
            deleteButton.onclick = function() { removeImage(img); };
            deleteButton.style.position = 'absolute';
            deleteButton.style.top = '-5px';
            deleteButton.style.right = '0%';

            let imageWrapper = document.createElement('div');
            imageWrapper.style.position = 'relative';
            imageWrapper.style.display = 'inline-block';

            imageWrapper.appendChild(img);
            imageWrapper.appendChild(deleteButton);

            imagesContainer.appendChild(imageWrapper);
        }
    }
}


function removeImage(imgElement) {
    imgElement.parentNode.remove();
}
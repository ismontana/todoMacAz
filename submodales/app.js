// Función para cargar una imagen en un modal específico
function cargarImagenEnModal(modalId, imageUrl) {
    const modal = document.getElementById(modalId);
    
    if (modal) {
        const imgElement = document.createElement('img');
        
        imgElement.src = imageUrl;
        
        imgElement.style.width = '100%'; 
        imgElement.style.height = 'auto';
        
        const modalBody = modal.querySelector('.modal-body');
        
        if (modalBody) {
            modalBody.innerHTML = '';
            modalBody.appendChild(imgElement);
        }
    } else {
        console.error(`No se encontró el modal con el ID ${modalId}`);
    }
}

// Ejemplo de uso
const urlsDeImágenes = [
    'https://content.nationalgeographic.com.es/medio/2023/11/29/golden-retriever-corriendo_7a50f15e_231129131211_800x800.jpg',
    'https://www.infobae.com/new-resizer/FsW4FL0FfdyaIwKsVGm5lMgoxWY=/1200x675/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/04/06155038/perro-beso-1024x576.jpg',
    'https://imagenes.heraldo.es/files/image_990_556/uploads/imagenes/2023/01/05/un-perro-en-el-parque-gsc.jpeg'
];

urlsDeImágenes.forEach((url, index) => {
    switch (index) {
        case 0:
            cargarImagenEnModal('inicioModal', url);
            break;
        case 1:
            cargarImagenEnModal('desarrolloModal', url);
            break;
        case 2:
            cargarImagenEnModal('finModal', url);
            break;
    }
});

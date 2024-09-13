function cambioColor() {
    const fileInput = document.getElementById('imageFile');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageElement = new Image();
            imageElement.src = e.target.result;
            imageElement.crossOrigin = 'anonymous'; 
            
            imageElement.onload = function() {
                let colorThief = new ColorThief();
                let colorResult = colorThief.getColor(this); // Obtiene el color dominante en formato RGB
                
                // Desaturar el color obtenido para hacerlo más suave
                let desaturatedColor = desaturateColor(colorResult);

                // Convertir el resultado a hexadecimal
                const hexColor = "#" + desaturatedColor.map(x => {
                    const hex = x.toString(16);
                    return hex.length === 1? '0' + hex : hex;
                }).join('');

                // Calcular el color de texto opuesto para mayor contraste
                const hexColorTexto = getColorContraste(hexColor);

                // Actualizar las variables CSS globales con los colores obtenidos
                document.documentElement.style.setProperty('--color-nav-bar', hexColor);
                document.documentElement.style.setProperty('--color-card', hexColor);
                document.documentElement.style.setProperty('--color-principal', hexColorTexto); // Asumiendo que esto afectará al texto
            };
        };
        reader.readAsDataURL(file);
    }
}

// Función para desaturar el color
function desaturateColor(rgbColor) {
    let r = rgbColor[0], g = rgbColor[1], b = rgbColor[2];
    // Ajustar la saturación reduciendo cada componente en un valor fijo
    r = Math.max(0, Math.min(255, r + 70));
    g = Math.max(0, Math.min(255, g + 70));
    b = Math.max(0, Math.min(255, b + 70));
    return [r, g, b];
}

// Función para calcular el color de texto opuesto
function getColorContraste(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16),
          g = parseInt(hexColor.slice(3, 5), 16),
          b = parseInt(hexColor.slice(5, 7), 16);

    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128)? '#000000' : '#ffffff';
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const card = cards[index];
            const dynamicContent = card.querySelector('.dynamic-content');
            
            if (!card.classList.contains('expanded')) {
                const scale = calculateScale(card);
                generateKeyframes(scale);
                card.style.animationName = 'expand';
                card.style.animationDuration = '0.5s';
                dynamicContent.style.display = 'block';
                card.style.height = 'auto';
                btn.textContent = 'Ver menos';
                card.classList.add('expanded');
            } else {
                card.style.animationName = 'contract';
                card.style.animationDuration = '0.5s';
                dynamicContent.style.display = 'none';
                card.style.height = '80px';
                btn.textContent = 'Ver ticket';
                card.classList.remove('expanded');
            }
        });
    });

    function calculateScale(card) {
        const dynamicContent = card.querySelector('.dynamic-content');
        const initialHeight = card.offsetHeight;
        const finalHeight = dynamicContent.scrollHeight;
        const scale = finalHeight / initialHeight;
        return scale;
    }

    function generateKeyframes(scale) {
        const keyframesStyle = `
            @keyframes expand {
                from {
                    transform: scaleY(${scale});
                    transform-origin: top;
                }
                to {
                    transform: scaleY(1);
                }
            }
            @keyframes contract {
                from {
                    transform: scaleY(1);
                    transform-origin: top;
                }
                to {
                    transform: scaleY(${scale});
                }
            }
        `;
        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.appendChild(document.createTextNode(keyframesStyle));
        document.head.appendChild(styleElement);
    }
});

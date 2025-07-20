// Welcome to your playground!
console.log('Playground loaded successfully');

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    container.addEventListener('click', function() {
        container.style.transform = container.style.transform === 'scale(1.05)' 
            ? 'scale(1)' 
            : 'scale(1.05)';
    });
});
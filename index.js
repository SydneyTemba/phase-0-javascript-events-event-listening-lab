
function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
}

// Invoke the addingEventListener function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    addingEventListener();
});

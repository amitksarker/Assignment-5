function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// sit backgroundcolor function
function hideColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]')
}
function showColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#F7F8F8]')
}
export {addMenu,}
function addMenu(contentDiv){
    const menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.textContent = 'This is the menu. Menu includes Borcht, Sushi, and ligma';
    contentDiv.appendChild(menuTab);
}
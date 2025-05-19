export {addHome,};
function addHome(contentDiv){
    const homeTab = document.createElement('div');
    homeTab.classList.add('tab');
    homeTab.textContent = 'This is the home tab';
    
    contentDiv.appendChild(homeTab);
}

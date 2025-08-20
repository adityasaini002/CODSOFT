const categories = Array.from(jCategory);

document.getElementById("SearchBar").addEventListener("keyup", (e) => {
    const seachData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => 
    
        item.title.toLowerCase().includes(seachData)
    );
    displayItems(filterData);
}); 

const displayItems = (items) =>{
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";
    
    items.forEach((item) =>{
        const {index, images, title, rates, av} = item
        const jList = document.createElement("div")
        jList.className = "jList";
        jList.innerHTML = `
         <img src="${images}" alt="">
            <h3>${title}</h3>
            <p>${rates}</p>
            <span id="key">${av}</span>
        
        `;

        rootElement.appendChild(jList);

        jList.addEventListener("click", () => {
            window.location.href = `jobs-details.html?id=${index}`;
        });
    });
};

displayItems(categories);
const category = [...document.querySelector("#categories").children];
console.log(`Number of categories: ${category.length}`)
category.forEach((el)=>{
    const categoryName = el.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);
    const categoryList = el.lastElementChild.children;
    const amount = [...categoryList].length;
    console.log(`Elements: ${amount} `)
});
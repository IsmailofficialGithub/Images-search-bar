let accessKey="JCsvsQsCRveZ9joHNlE27clwnHX1lptfxGzxCNO8Dxw";

const searchFrom=document.querySelector("#search-form");
const searchBox=document.querySelector("#search-box");
const searchResult=document.querySelector("#search-result");
const showMoreBtn=document.querySelector("#show-more-btn");


let keyword="";
let page=1;


async function searchImages(){
    keyword=searchBox.value;

const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

let responce=await fetch(url);
let data = await responce.json();
const results=data.results;

if (page===1){
    searchResult.innerHTML="";
}

results.map((x)=>{
const images=document.createElement("img");
images.src=x.urls.small;
const imagesLinks=document.createElement("a");
imagesLinks.href=x.links.html;
console.log(imagesLinks)
imagesLinks.target="_blank";
imagesLinks.appendChild(images);
searchResult.appendChild(imagesLinks);

})
showMoreBtn.style.display="block";

}
searchFrom.addEventListener("submit",(e)=>{
    e.preventDefault();
    searchImages();
    page=1; 
})
showMoreBtn.addEventListener("click",()=>{
page++;
searchImages();
})
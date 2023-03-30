



const cartFilm=document.querySelector('.cart-film')
const mainFilm=document.querySelector('.main-film')
const mainFilmName=document.querySelector('.main-film-name')
fetch("https://api.tvmaze.com/shows").then(data=>data.json())
.then(arr=>{
for (let i = 0; i < arr.length; i++) {
    mainFilm.innerHTML+=
    `
    <div class="cart-film mt-1">
    <img class="w-100 h-75" src="${arr[i].image.medium}" alt="">
    <p class="pt-4"> <a class="text-bg-danger p-3 " href=""><strong>Name: </strong><b>${arr[i].name}</b></a></p>
    <p class="pt-4"><a class="text-bg-dark p-3 " href=""><strong>Imdb: </strong><b>${arr[i].externals.imdb}</b></a></p>
    <a href="details.html?id=${arr[i].id}" class="btn btn-primary">Start Waching</a>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
    `
    
}
})





//Sabir muellim demisdiki yazarsiz error versede commente atarsiz





// $.ajax({

//     method: "GET",
//     url: "https://api.tvmaze.com/shows"
// }).done((data)=>{
//  data.forEach(element => {
//     mainFilm.innerHTML+=
//             `
//             <div class="cart-film mt-1">
//             <img class="w-100 h-75" src="${data[i].image.medium}" alt="">
//             <p class="pt-4"> <a class="text-bg-danger p-3 " href=""><strong>Name: </strong><b>${data[i].name}</b></a></p>
//             <p class="pt-4"><a class="text-bg-dark p-3 " href=""><strong>Imdb: </strong><b>${data[i].externals.imdb}</b></a></p>
//         </div>
//             `
//  })
// })
  

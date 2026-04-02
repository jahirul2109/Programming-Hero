const showLoader = () => {
    const loaderSpiner = document.getElementById('loaderBar');
    const videoContainer = document.getElementById('videoscontainer');
    loaderSpiner.classList.remove('hidden');
    videoContainer.classList.add('hidden');
}
const hideLoader = () => {
    const loaderSpiner = document.getElementById('loaderBar');
    const videoContainer = document.getElementById('videoscontainer');
    loaderSpiner.classList.add('hidden');
    videoContainer.classList.remove('hidden');
}

function removeActiveClass() {
    const activeBtns = document.getElementsByClassName('active');
    for (let activeBtn of activeBtns) {
        activeBtn.classList.remove('active');
    }
}

function loadCategoris() {
    // fetch api
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            displayCategoris(data.categories);
        })
        .catch((error) => {

            console.log(error)
        })
}

// called in video details button and get id
const videoDetailes = (video) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video}`
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            displayVideoDetails(data.video)  // called DisplayVideoDetails function and pass perameter
        })
        .catch((error) => {
            console.log(error)
        })
}

const displayVideoDetails = (data) => {
    const modalBtn = document.getElementById('my_modal').showModal();
    const detailesContainer = document.getElementById('detailsContainer');
    detailesContainer.innerHTML = `
<div class="card bg-base-100 image-full w-full shadow-sm">
  <figure>
    <img class='object-cover w-full'
      src="${data.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class = "mx-auto"> 
    <img 
    class="w-14 h-14 rounded-sm object-cover"
    src ="${data.authors[0].profile_picture}"
    />
     </div>
    <h2 class="text-center text-xl md:text-2xl">${data.authors[0].profile_name}</h2>
    <h2 class="font-semibold text-center text-xs md:text-xl">${data.title}</h2>
    <p>${data.description}</p>
  </div>
</div>
    `
}

// function for get individual Category video
function loadByCategori(id) {
    showLoader()
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then((data) => {
            removeActiveClass()
            const clickedBtn = document.getElementById(`btn-${id}`);
            clickedBtn.classList.add('active')
            displayVideos(data.category)
        })
        .catch(' tus tus tadawo');
}

function displayCategoris(categoris) {
    const navbar = document.getElementById('navbar');
    // fetch data 
    for (const cat of categoris) {
        // create new element 
        const categorisBtn = document.createElement('div');
        categorisBtn.innerHTML = `
        <button id="btn-${cat.category_id}" onclick= "loadByCategori(${cat.category_id})" class="btn md:text-xl text-xs  font-semibold">${cat.category}</button>
        `;
        // append new element 
        navbar.appendChild(categorisBtn);
    }
}

function loadVideos(searchBox = "") {
    showLoader()
    // fetch api
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchBox}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data.videos)
            removeActiveClass() // removeclass funtiton call
            document.getElementById('btn-all').classList.add('active') // active class add in defult button
            displayVideos(data.videos) // Call display video function and send data 
        })
        .catch('pechana muje')

}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videoscontainer');
    videoContainer.innerHTML = ''; // InnerHTML empty for When we reloaded defult value is empty

    // Condition check if Videos length was Zero Then work then condition
    if (videos.length === 0) {
        videoContainer.innerHTML = `
                <div id="empty" class="col-span-full flex flex-col justify-center items-center py-10">
            <img class="w-32" src="ph-tube/assets/Icon.png" alt="">
            <h2 class="font-bold text-center text-2xl">Opps !!! Sorry There is no content here</h2>
        </div>
        `;
        hideLoader();
        return;
    }

    // Run loop for single array
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        // Get Video content 
        videoCard.innerHTML = `
    <div class="card  md:w-full  flex flex-col  w-11/12 h-[350px] md:h-[450px] mx-auto shadow-sm">
  <figure class="relative ">
    <img class = ' md:w-[400px] lg:w-full lg:h-[330px] w-full h-[200px] object-cover '
      src= ${video.thumbnail}
      alt="Shoes" />
      <span class="absolute right-2 bottom-2 bg-slate-900 text-white p-1 rounded text-sm">3hrs 56 min ago</span>
  </figure>
  <div class="flex py-5 gap-5">
    <div class="avatar py-5">
  <div class="ring-primary  md:w-10 md:h-10 w-7 h-7 rounded-full ring-2 ring-offset-2">
    <img src= ${video.authors[0].profile_picture} />
  </div>
</div>
    <div>
        <h2 class="font-bold text-xl text-wrap line-clamp-1 ">${video.title}</h2>
        <p class="flex items-center gap-2 text-sm text-gray-400">${video.authors[0].profile_name} ${video.authors[0].verified == true ? `<img src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000" class="md:w-5 md:h-5 w-3 h-3 " alt="">` : ``}</p>
        <p class="text-sm text-gray-400">${video.others.views} views</p>
    </div>
  </div>
  <button onclick ="videoDetailes('${video.video_id}')" class="btn btn-block">Video Detalis</button>
</div>
    `;
        // Append Videocard 
        videoContainer.appendChild(videoCard);
    });
    hideLoader()
}
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const search = e.target.value;
    console.log(search)
    loadVideos(search)
})

loadVideos()
loadCategoris()
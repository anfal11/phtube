const loadVideos = async (id) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
        if (!response.ok) {
            throw new Error('Network problem');
        }
        const data = await response.json();
        const videos = data.data;
        displayVideos(videos);
    } catch (err) {
        console.error('Error loading videos:', err);
    }
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');

    videoContainer.innerText = ''; 

    videos.forEach((video) => {
        console.log(video);
        const div = document.createElement('div');
        div.classList = `card bg-base-100 rounded-box`;
        div.innerHTML = `
            <figure><img id="thumbnail" class="w-4/5 lg:w-[312px] h-48 rounded-lg" src='${video?.thumbnail}'/></figure>
            <div class="card-body">
                <div class="flex flex-row gap-2">
                    <figure><img class="rounded-full w-10 h-10" src=${video?.authors?.[0].profile_picture}/></figure>
                    <h2 class="font-bold text-base">${video?.title}</h2>
                </div>
                <div class="grid grid-cols-2">
                    <p id="user-name" class="text-base">${video?.authors?.[0].profile_name}</p>
                    <img id="blue-badge" src=${video?.authors?.[0].verified} alt="" />
                </div>
                <p id="views">${video?.others?.views}</p>
            </div>
        `;
        videoContainer.appendChild(div);
    });
}

loadVideos(1000);

const allBtn = () => {
    loadVideos(1000);
}
const musicBtn = () => {
    loadVideos(1001);
}
const comedyBtn = () => {
    loadVideos(1003);
}
const drawingBtn = async () => {
    const res = await loadVideos(1005);
    const videoContainer = document.getElementById('video-container');

    if (!res) {
        videoContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center">
            <figure>
                <img id="img-no-data" class="mx-auto" src="./images/Icon.png" alt="" />
                <figcaption>
                    <h1 class="text-2xl text-center font-bold">Oops!! Sorry, There is no content here</h1>
                </figcaption>
            </figure>
        </div>
        `;
    } else {
        videoContainer.innerHTML = '';
    }
}


 





const loadVideos = async (id) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const videos = data.data;
        displayVideos(videos);
        console.log(videos);
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
        div.classList = `card w-96 bg-base-100`;
        div.innerHTML = `
            <figure><img id="thumbnail" src='${video?.thumbnail}' /></figure>
            <div class="card-body">
                <div class="flex flex-row">
                    <figure><img class="rounded-full" src='${video?.authors?.profile_picture}' alt="" /></figure>
                    <h2 class="card-title">${video?.title}</h2>
                </div>
                <div class="grid grid-cols-2">
                    <p id="user-name">${video?.authors?.profile_name}</p>
                    <img id="blue-badge" src=${video?.authors?.verified} alt="" />
                </div>
                <p id="views">${video?.others?.views}</p>
            </div>
        `;
        videoContainer.appendChild(div);
    });
}


loadVideos(1003);
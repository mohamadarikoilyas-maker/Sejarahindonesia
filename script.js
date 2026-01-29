function updateVideo() {
    const videoName = document.getElementById('video-name').value;
    const videoSource = document.getElementById('video-source');
    const videoPlayer = document.getElementById('video-player');
    
    if (videoName) {
        videoSource.src = videoName;
        videoPlayer.load(); // Reload video dengan sumber baru
        alert('Video berhasil diupdate!');
    } else {
        alert('Masukkan nama file video terlebih dahulu.');
    }
}

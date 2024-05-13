const fs = require('fs');
const https = require('https');

function downloadVideo(videoUrl) {
  https.get(videoUrl, (response) => {
    const fileName = "video-2.mp4"; // You can change the file name if needed
    const fileStream = fs.createWriteStream(fileName);

    response.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log(`Video downloaded as ${fileName}`);
    });

    fileStream.on('error', (err) => {
      console.error('Error downloading video:', err);
    });
  }).on('error', (err) => {
    console.error('Error fetching video:', err);
  });
}

// Example usage:
const videoUrl = "https://d29xw9s9x32j3w.cloudfront.net/videos/video_mp4/300k/354862521085683456641cf8ddb0b23.91808226.mp4"
// const videoUrl = 'https://hlsmedia.gannett-cdn.com/authoring/videos/videoelephant/renditions/73666829007/dbc20218-e3d5-481a-b556-954743ecf380/480p_30fps,720p_30fps,1080p_30fps,master.m3u8';
downloadVideo(videoUrl);

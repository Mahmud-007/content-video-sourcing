const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

function convertToMp4(m3u8Url, outputFileName) {
    ffmpeg(m3u8Url)
        .output(outputFileName + '.mp4')
        .on('end', () => {
            console.log(`Video converted successfully to ${outputFileName}.mp4`);
        })
        .on('error', (err) => {
            console.error('ffmpeg error:', err.message);
        })
        .run();
}
function convertToMp4(m3u8Url, outputFileName) {
    ffmpeg(m3u8Url)
        .output(outputFileName + '.mp4')
        .on('end', () => {
            console.log(`Video converted successfully to ${outputFileName}.mp4`);
        })
        .on('error', (err) => {
            console.error('ffmpeg error:', err.message);
        })
        .run();
}

// Example usage:
const m3u8Url = 'https://hlsmedia.gannett-cdn.com/authoring/videos/videoelephant/renditions/73666829007/dbc20218-e3d5-481a-b556-954743ecf380/480p_30fps,720p_30fps,1080p_30fps,master.m3u8';
const outputFileName = 'output';
convertToMp4(m3u8Url, outputFileName);

const ffmpeg = require("fluent-ffmpeg");

ffmpeg()
  .input("img1.jpg")
  .input("img2.jpg")
  .input("img3.jpg")
  .input("img4.jpg")
  .on("end", ()=> console.log("Video Created"))
  .save("output.mp4");

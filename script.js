// this sets up a blank array
var record = Array(64).fill(0);
// this functions is activated when you click on a square
// it only has an effect if you click on white or black squares
function setPixelColour(pixel) {
  //this converts the pixel id into a number
  var position = Number(pixel.id);

  // if it is white change it to black
  if (pixel.style.backgroundColor === "white") {
    pixel.style.backgroundColor = "black";

    //this is where we add a point to each square that can be taken

    for (let i = position; i < 64; i += 8) {
      if (position != i) {
        record[i] = record[i] + 1;
      }
    }
  }
  // to change mind about where you've placed a queen
  // eventually need to remove a point from each square that would have been taken
  else if (pixel.style.backgroundColor === "black") {
    pixel.style.backgroundColor = "white";
  }

  // cycle through all the squares and colouring red if can be taken
  for (let i = 0; i < 64; i++) {
    if (document.getElementById(i).style.backgroundColor != "black") {
      if (record[i] >= 1) {
        document.getElementById(i).style.backgroundColor = "red";
      }
    }
  }
  // can use this to check the number for each square
  console.log(record);
}

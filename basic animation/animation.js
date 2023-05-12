// const root = document.getElementById("root");

// //root.style.width = "500px";

// //animation setup
// const duration = 10;
// const start = 200;
// const end = 500;

// //calc num of steps

// const difference = end - start; //300px
// let steps = difference / duration;
// steps = steps / 1000; //make steps smaller (smoother)
// console.log(steps);

// //track animation

// let width = start;

// const update = () => {
//   root.style.width = `${width}px`;
//   width += steps;

//   if (width > end) {
//     clearInterval(interval);
//   }
// };

// const interval = setInterval(update, 1);

// update();

const letAp = (elementName, property, start, end, duration, callBack) => {
  const root = document.getElementById(elementName);

  //calc the no of steps
  const difference = end - start; //300px
  let steps = difference / duration;
  steps = steps / 1000; //make steps smaller (smoother)

  //track animation
  let value = start;

  const update = () => {
    root.style[property] = `${value}px`;
    value += steps;

    if (value > end) {
      clearInterval(interval);
    }
  };
  const interval = setInterval(update, 1);
};

const onAnimateComplete = () => {
  console.log("complete");
};

letAp("root", "width", 100, 400, 5, onAnimateComplete);
// letAp("root", "height", 100, 400, 5);

// const animations = [
//   ["root", "width", 100, 400, 5],
//   ["root", "height", 100, 400, 5],
// ];

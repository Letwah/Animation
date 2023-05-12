// const onComplete = () => {
//   console.log("onComplete ran!");
// };
// const onStart = () => {
//   console.log("onStart ran!");
// };

// const go = () => {
//   gsap.fromTo(
//     ".circle1",
//     { y: -100, fill: "green" },
//     {
//       y: 50,
//       fill: "orange",
//       duration: 5,
//       // repeat:-1,
//       // delay: 5,
//       // yoyo: true,
//       onComplete: onComplete,
//       onStart: onStart,
//       ease: "elastic.out(1, 0.3)",
//     }
//   );
// };

// // setTimeout(go, 5000);
// go();

///more than one thing

// const myAnim = gsap.fromTo(
//   ".circle1",
//   { y: -100, fill: "green" },
//   {
//     y: 50,
//     fill: "orange",
//     duration: 5,

//     ease: "elastic.out(1, 0.3)",
//   }
// );

// setInterval(() => {
//   myAnim.seek(0.7); //go to certain part of animation
//   // myAnim.restart();
//   // console.log(myAnim.progress());
// }, 2000);

//MULTIPLE ITEMS - diffrent classes
const masterTimeline = gsap.timeline({ default: { duration: 2 } });

const circle = (element) => {
  return gsap.fromTo(
    element,
    { y: -100, fill: "blue" },
    { y: 50, fill: "pink", duration: 5 }
  );
};

masterTimeline.add(circle(".circle1"));
masterTimeline.add(circle(".circle2"));

masterTimeline.play();

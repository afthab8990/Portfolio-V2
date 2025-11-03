import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Grab all .split elements
document.querySelectorAll(".split").forEach((el) => {
  // Split each element individually
  let mySplitText = new SplitText(el, { type: "chars" });
  let chars = mySplitText.chars;

  // Animate each set of characters
  gsap.from(chars, {
    yPercent: 130,
    duration: 0.6,
    stagger: {
      amount: 0.8,
    },
    ease: "expo.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    onComplete: () => {
      gsap.set(chars, { yPercent: 0 });
    },
  });
});
Shery.mouseFollower({
  duration: 1,
});
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".heading-text1", {
  videos: ["./assets/0.mp4", "./assets/2.mp4", "./assets/4.mp4"],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    endTrigger: ".last",
    scrub: 0.5,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");

Shery.imageEffect(".images", {
  style: 3,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach((section, ind) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: (prog) => {
          setScroll(prog.progress + ind + 0.5);
        },
      });
    });
  },
});

import { KeenSliderInstance } from "keen-slider";

// Autoplay
export function keenAutoplay(slider: KeenSliderInstance) {
  // Settings
  const autoplay = slider.container.dataset.autoplay === "true";
  const autoplaySpeed = slider.container.dataset.autoplaySpeed
    ? Number(slider.container.dataset.autoplaySpeed) * 1000
    : 3000;

  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, autoplaySpeed);
  }

  if (autoplay && slider.slides.length > 1) {
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  }
}

// Arrow Nav
export function keenArrowNav(slider: KeenSliderInstance): void {
  const container = slider.container.closest(".keen-slider__container");
  if (!container) return;

  const arrows = container.querySelectorAll(".keen-slider__arrow");

  if (arrows.length > 0) {
    Array.from(arrows).forEach((arrow: Element) => {
      // Assuming arrow is a generic Element, not a more specific type
      const arrowDirection = arrow.getAttribute("data-direction");

      // Click Listener
      arrow.addEventListener("click", (e: Event) => {
        e.preventDefault();
        if (arrowDirection === "prev") {
          slider.prev();
        } else if (arrowDirection === "next") {
          slider.next();
        }
      });
    });
  }
}

// Dot Nav
export function keenDotNav(slider: KeenSliderInstance): void {
  const container = slider.container.closest(".keen-slider__container");
  if (!container) return;

  const dotNavs = Array.from(container.querySelectorAll(".keen-slider__dots"));

  // Toggle Dot Class
  function toggleDotClass(dot: Element, isActive: boolean): void {
    dot.classList.toggle("active", isActive);
  }

  // Initialize dot navigation
  dotNavs.forEach((nav) => {
    const navItems = Array.from(nav.querySelectorAll(".keen-slider__dot"));

    // Add the active class to the first dot initially
    if (navItems.length > 0) {
      toggleDotClass(navItems[0], true);

      // Set up event listeners for dot clicks
      navItems.forEach((dot, index) => {
        dot.addEventListener("click", () => slider.moveToIdx(index));
      });
    }
  });

  // Slide change listener
  slider.on("slideChanged", (s) => {
    const slideIndex = s.track.details.rel;

    dotNavs.forEach((nav) => {
      const navItems = Array.from(nav.querySelectorAll(".keen-slider__dot"));

      navItems.forEach((dot, index) => {
        toggleDotClass(dot, index === slideIndex);
      });
    });
  });
}

// Keyboard Controls
export function keenKeyboardControls(slider: KeenSliderInstance): void {
  let focused = false;

  function eventFocus(): void {
    focused = true;
  }

  function eventBlur(): void {
    focused = false;
  }

  function eventKeydown(e: KeyboardEvent): void {
    if (!focused) return;
    switch (e.key) {
      case "Left":
      case "ArrowLeft":
        slider.prev();
        break;
      case "Right":
      case "ArrowRight":
        slider.next();
        break;
      // default case is not needed if no other action is taken for other keys
    }
  }

  slider.on("created", () => {
    slider.container.setAttribute("tabindex", "0");
    slider.container.addEventListener("focus", eventFocus);
    slider.container.addEventListener("blur", eventBlur);
    slider.container.addEventListener("keydown", eventKeydown);
  });
}

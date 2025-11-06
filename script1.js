document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".cta-button");

  // CTA button click handler
  ctaButton.addEventListener("click", () => {
    console.log("Explore Now clicked! Redirecting to shop...");
    window.location.href = "/shop";
  });
});
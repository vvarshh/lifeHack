import React from "react";

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const cards = Array.from(document.querySelectorAll(".card"));
  let currentIndex = 0;

  function navigateNext() {
    cards[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add("active");
  }

  function navigatePrevious() {
    cards[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[currentIndex].classList.add("active");
  }

//   carousel.addEventListener("swipeleft", navigateNext);
//   carousel.addEventListener("swiperight", navigatePrevious);
});


const LocalPage = () => {
  return (
    <div class="carousel">
      <div class="card active">
        <img src="person1.jpg" alt="Person 1" class="person-image" />
        <h2 class="person-name">John Doe</h2>
        <p class="person-details">Age: 25</p>
        <p class="person-details">Location: New York City</p>
        <p class="person-details">Interests: Travel, Photography, Cooking</p>
      </div>
      <div class="card">
        <img src="person2.jpg" alt="Person 2" class="person-image" />
        <h2 class="person-name">Jane Smith</h2>
        <p class="person-details">Age: 28</p>
        <p class="person-details">Location: Los Angeles</p>
        <p class="person-details">Interests: Hiking, Painting, Music</p>
      </div>
    </div>
  );
};

export default LocalPage;

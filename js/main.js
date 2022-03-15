let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  //[1] Add Color To div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  //[2] Remove Active Class From All Elements
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add active class to target
  document
    .querySelector(`[data-color= "${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    //console.log(e.currentTarget.dataset.color);
    // Remove active class from all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    //Add active class to Current Element
    e.currentTarget.classList.add("active");
    // Add Current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Background Color To selected Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

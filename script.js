    var togglebtn = document.querySelector(".togglebtn");
    var nav = document.querySelector(".navlinks");
    var links = document.querySelector(".navlinks li")
    

    togglebtn.addEventListener("click", function () {
      this.classList.toggle("click");
      nav.classList.toggle("close");
    })

    var typed = new Typed(".input", {
      strings: ["Frontend Developer", "UX Designer", "Web Developer"],
      typeSpeed: 70,
      backSpeed: 55,
      loop: true
    })


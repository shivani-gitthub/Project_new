let movies = [
    {
      name: "IB71",
      des:
        "Indian intelligence officers embark on a high-stakes mission to counter two enemy nations' conspiracy. If things go sideways, they must think on their feet to avoid a disaster.",
      image: "prfct.jpg"
    },
    {
      name: "Secret Invasion",
      des:
        "Nick Fury learns of a secret invasion of Earth by a faction of shapeshifting Skrulls; Fury joins his allies, and together they race against time to thwart an imminent Skrull invasion and save humanity.",
      image: "si.jpg"
    },
    {
      name: "The Trial",
      des:
        "Pyaar Kaanoon Dhokha is a 2023 Indian legal drama streaming television series on Disney+ Hotstar. It is an adaptation of Robert King and Michelle King's The Good Wife, being directed by Suparn Verma and featuring Kajol in the lead role.",
      image: "the-trial-pyaar-kanoon-dhoka-review.jpg"
    },
    {
      name: "The Skeleton Dance",
      des:
        "The Skeleton Dance is a 1929 Silly Symphony animated short subject produced and directed by Walt Disney and animated by Ub Iwerks. In the film, four human skeletons dance and make music around a spooky graveyard—a modern film example of medieval European danse macabre imagery.",
      image: "1929.jpg"
    },
    {
      name: "Luca",
      des:
        "Luca, a sea monster, befriends Alberto, another one of his kind who takes him on a land adventure. He experiences an exciting summer while keeping his parents in the dark.",
      image: "lucaaa.jpeg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
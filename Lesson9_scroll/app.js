
  wrapper = document.querySelector(".wrapper");
  card = document.querySelector(".wrapper .card");
  loding_el = document.querySelector(".loading");
  end = document.querySelector(".end");

  window.onscroll = addPostIfTheyShouldBeAdded;

  function addPostIfTheyShouldBeAdded() {
    if (end.offsetTop < window.pageYOffset + window.innerHeight) {
      addPosts();
      addTexts();
     
    }
  }

  addPostIfTheyShouldBeAdded();

  function addPosts() {
    for (let i = 0; i < 2; i++) {
      wrapper.append(loding_el);
      loding_el.style.display = "block";


      //get image=======================
      fetchAPI(
        "https:\/\/dog.ceo/api/breeds/image/random",
        function (response) {
          addPost({src: response.message });
        }
      );
    }
  }
  function addTexts() {
    for (let i = 0; i < 2; i++) {
      wrapper.append(loding_el);
      loding_el.style.display = "block";
      //get text========================
      fetchAPI(
        "https://uselessfacts.jsph.pl/random.json",
        function (response) {
          addText(response.text);
          console.log(" addtext= "+ response);
        }
      );
    }
  }


  let text_elm = document.querySelector(".post__text");
  function addText(addTextcontent) {
  const text = document.createElement("div");
  var globaltext=addTextcontent;
  text.textContent = addTextcontent;
  console.log(" this is content "+addTextcontent);
  text_elm.append(text);
  }
  


  function addPost(settings) {
    const new_card = card.cloneNode(true);
    const img = new_card.querySelector(".img");
    const divtext = new_card.querySelector(".text");
    divtext.text
    //new_card.querySelector(".text").textContent = "kamis";
    img.src = settings.src;

    img.onload = function () {
      loding_el.style.display = "none";
      new_card.style.display = "block";
    };

    wrapper.append(new_card);
  }

 

  // let observer = new IntersectionObserver(
  //   function () {
  //     for (let i = 0; i <= 5; i++) {
  //       const new_card = card.cloneNode();
  //       wrapper.append(new_card);
  //     }
  //     this.observe(end);
  //   },
  //   {
  //     root: document.querySelector("body"),
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   }
  // );

  // observer.observe(end);

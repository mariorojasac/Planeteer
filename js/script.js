$(function () {
  $(".carousel").carousel({
    interval: 3000
  });
  $("#carouselButton").click(function () {});


});


$(function () {
  // const Variables

  const BASE_URL = "https://images-api.nasa.gov/search?q=";
  //   const API_KEY = "79p2b1vovVqtaHcgHNcWki4H9SKLN4DeB1NNGNvh";
  let nasaData;

  // cached Elements
  const $title = $("#title");
  const $description = $("#description");
  const $dateof = $("#dateof")
  const $picture = $("#picture");
  const $form = $("form");
  const $input = $('input[type="text"]');

  // Event listners
  $form.on("submit", handleGetData);



  // functions
  function handleGetData(event) {
    event.preventDefault();
    const searchText = $input.val();
    $input.val("");

    // get api
    $.ajax(`${BASE_URL}${searchText}&media_type=image&keywords=space`).then(function (data) {
        console.log(data);
        nasaData = data;
        render();
      },

      // error function

      function (error) {

        console.log(error);
        alert("ERROR 404");
      }
    );
  }

  // render  function
  function render() {
    $title.text(nasaData.collection.items[1].data[0].title);
    $dateof.text(nasaData.collection.items[1].data[0].date_created)
    $description.text(nasaData.collection.items[1].data[0].description);
    $picture.html(`<img src="${nasaData.collection.items[1].links[0].href}">`);


    //   console.log(JSON.stringify())
    // console.log(typeof weather.main[0])
  }
});





// get picture of the day 
$(function () {
  // const Variables

  const BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=79p2b1vovVqtaHcgHNcWki4H9SKLN4DeB1NNGNvh";

  let nasaData;

  // cached Elements
  const $title = $("#titleofday");
  const $description = $("#descriptionofday");
  const $picture = $("#pictureofday");
  const $video = $("#videoofday")
  const $button = $("#buttonoftheday");


  // Event listners
  $button.on("click", handleGetData);



  // functions
  function handleGetData(event) {
    event.preventDefault();


    // get api
    $.ajax(`${BASE_URL}`).then(
      function (data) {
        console.log(data);
        nasaData = data;
        render();
      },


      function (error) {

        console.log(error);
        alert("ERROR 404");
      }
    );
  }

  function render() {
    $title.text(`Picture Of The Day: ${nasaData.title}`);
    $description.text(nasaData.explanation);
    $picture.html(`<img class="d-block  img-fluid" id="pictureoftheday" src="${nasaData.url}">`);
    $video.html(`<iframe width="200"
      height="150"  id="pictureoftheday"  src="${nasaData.url}" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen >`);

  }
});




// get news https://newsapi.org/v2/everything?q=tesla&from=2021-08-23&sortBy=publishedAt&apiKey=0704ad543992470888c9d74aa1bcf7e1 
//newsapi.org/v2/everything?domains=wsj.com&apiKey=0704ad543992470888c9d74aa1bcf7e1
 $(function () {
  // const Variables

  const BASE_URL =
    "https://gnews.io/api/v4/search?q=%22space%20x%22&lang=en&token=95bb4c1fbf5834c3e3207f47939ea018";

  let newsData;

  // cached Elements
  const $title = $("#newsFirst");

  // Event listners
  $(document).ready(handleGetData);
  // $button.on("click", handleGetData);

  // functions
  function handleGetData(event) {
    // event.preventDefault();

    // get api
    $.ajax(`${BASE_URL}`).then(
      function (data) {
        console.log(data);
        newsData = data;
        render();
      },

      function (error) {
        console.log(error);
        alert("ERROR 404");
      }
    );
  }

  function render() {
    
    $title.html(`<a href="${newsData.articles[0].url}">${newsData.articles[0].title}</a>`);
  }
 });


 $(function () {
   // const Variables

   const BASE_URL =
     "https://gnews.io/api/v4/search?q=nasa&lang=en&token=95bb4c1fbf5834c3e3207f47939ea018";

   let newsData;

   // cached Elements
   const $title = $("#newsSecond");

   // Event listners
   $(document).ready(handleGetData);
   // $button.on("click", handleGetData);

   // functions
   function handleGetData(event) {
     // event.preventDefault();

     // get api
     $.ajax(`${BASE_URL}`).then(
       function (data) {
         console.log(data);
         newsData = data;
         render();
       },

       function (error) {
         console.log(error);
         alert("ERROR 404");
       }
     );
   }

   function render() {
     $title.html(
       `<a href="${newsData.articles[0].url}">${newsData.articles[0].title}</a>`
     );
   }
 });


 $(function () {
   // const Variables

   const BASE_URL =
     "https://gnews.io/api/v4/search?q=tesla&lang=en&token=95bb4c1fbf5834c3e3207f47939ea018";

   let newsData;

   // cached Elements
   const $title = $("#newsThird");

   // Event listners
   $(document).ready(handleGetData);
   // $button.on("click", handleGetData);

   // functions
   function handleGetData(event) {
     // event.preventDefault();

     // get api
     $.ajax(`${BASE_URL}`).then(
       function (data) {
         console.log(data);
         newsData = data;
         render();
       },

       function (error) {
         console.log(error);
         alert("ERROR 404");
       }
     );
   }

   function render() {
     $title.html(
       `<a href="${newsData.articles[0].url}">${newsData.articles[0].title}</a>`
     );
   }
 });


const form = document.getElementById("submitButtonForMyFav");
const item = document.getElementById("itemFav");



 form.addEventListener("click", clicked);

 function clicked(event) {
   event.preventDefault();
   const value = document.getElementById("valuefrominputtext").value;
   if (value == "pluto" || value == "Pluto" || value == "PLUTO") {
     alert("Please Enter A REAL Planet!");
   } else {
     const li = document.createElement("li");
     li.className = "itemfavcontent";
     li.appendChild(document.createTextNode(value));

     const button = document.createElement("button");

     button.className = "buttonn";
     button.appendChild(document.createTextNode("x"));
     li.appendChild(button);
     item.appendChild(li);
   }
 }
 
$("ul").on("click", "button", function () {
  $(this)
    .closest("li")
    .fadeOut(300, function () {
      $(this.remove());
    });
});

$(function () {
    $(".carousel").carousel({
        interval: 3000
    });
    $("#carouselButton").click(function () { });
    

});


$(function () {
    // const Variables

    const BASE_URL = "https://images-api.nasa.gov/search?q=";
    //   const API_KEY = "79p2b1vovVqtaHcgHNcWki4H9SKLN4DeB1NNGNvh";
    let nasaData;

    // cached Elements
    const $title = $("#title");
    const $description = $("#description");
    const $picture = $("#picture");
    const $form = $("form");
    const $input = $('input[type="text"]');

    // Event listners
    $form.on("submit", handleGetData);

    // function deleteData() {

    // }

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
                // the failure callback
                console.log(error);
                alert("ERROR 404");
            }
        );
    }

    // render  function
    function render() {
        $title.text(nasaData.collection.items[1].data[0].title);
        $description.text(nasaData.collection.items[1].data[0].description);
        $picture.html(`<img src="${nasaData.collection.items[1].links[0].href}">`);


        //   console.log(JSON.stringify())
        // console.log(typeof weather.main[0])
    }
});

// get picture of the day 
// $(function () {
//   // const Variables

//   const BASE_URL = "https://images-api.nasa.gov/search?q=";

//   let nasaData;

//   // cached Elements
//   const $title = $("#title");
//   const $description = $("#description");
//   const $picture = $("#picture");
//   const $form = $("form");
//   const $input = $('input[type="text"]');

//   // Event listners
//   $form.on("submit", handleGetData);

//   // function deleteData() {

//   // }

//   // functions
//   function handleGetData(event) {
//     event.preventDefault();
//     const searchText = $input.val();
//     $input.val("");

//     // get api
//     $.ajax(`${BASE_URL}${searchText}&media_type=image&keywords=space`).then(
//       function (data) {
//         console.log(data);
//         nasaData = data;
//         render();
//       },

//       // error function

//       function (error) {
//         // the failure callback
//         console.log(error);
//         alert("ERROR 404");
//       }
//     );
//   }

//   // render  function
//   function render() {
//     $title.text(nasaData.collection.items[1].data[0].title);
//     $description.text(nasaData.collection.items[1].data[0].description);
//     $picture.html(`<img src="${nasaData.collection.items[1].links[0].href}">`);

//     //   console.log(JSON.stringify())
//     // console.log(typeof weather.main[0])
//   }
// });
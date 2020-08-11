var breedImage = $("#breed-image");

var dropdown = $("#dogbreeds");

var allowSubmit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
  let dogBreed = data.message;
  for (let breed in dogBreed) {
    dropdown.append('<option value="' + breed + '">' + breed + "</option>");
  }
});

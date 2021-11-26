var url = 'https://centus.loan/api.php?x=hello';

fetch(url)
.then(function (response) {
  return response.text();
})
.then(function (body) {
  console.log(body);
});

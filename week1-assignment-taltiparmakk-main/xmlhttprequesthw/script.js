function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() { // requestkodu
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments", true);
  xhttp.send();
}
  
  

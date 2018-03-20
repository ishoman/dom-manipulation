$(document).ready(function(){
  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>grrrrr</li>");
    $("ul#cat").children("li").first().click(function(){
      alert ("yo")
    });
    $("ul#dog").children("li").first().click(function(){
      alert ("yo")
    });
  });

  $("button#bark").click(function(){
    $("ul#dog").prepend("<li>woof!</li>");
    $("ul#cat").prepend("<li>HISS!</li>");
    $("ul#dog").children("li").first().click(function(){
      alert ("yo")
    });
    $("ul#cat").children("li").first().click(function(){
      alert ("yo")
    });
  });
});

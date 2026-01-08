$('.stack').click(function() {
  console.log('stacking');
  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card");
    }, e * 150)
    
  });
  
});

$('.spread').click(function() {
  console.log('spreading');
  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card ani" + e);
    }, e * 150)
    
  });
  
});

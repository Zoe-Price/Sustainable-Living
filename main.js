$(document).ready(function() {
  var city, map;
  map = $('.ct-map');
  city = map.find('.ct-city');
  city.each(function() {
    var button, that;
    that = $(this);
    button = that.find('.ct-city__button');
    return button.on('click', function() {
      city.not(that).removeClass('active');
      if (that.hasClass('active')) {
        that.removeClass('active');
        return map.removeClass('popup-open');
      } else {
        that.addClass('active');
        return map.addClass('popup-open');
      }
    });
  });
});

// Goals
var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", createNewUser);

function createNewUser() {
  var toDo = $('.to-do').val();

  appendNewToDo(toDo);
  clearInputs();
}

function appendNewToDo(toDo) {
    cardContainer.append(`
    <div class="to-do-card">

      <button class = "delete-btn"> COMPLETED </button>
      <p>${toDo}</p>
    </div>
  `);
}

function clearInputs() {
  $('.to-do').val("");
}

$('.card-container').on("click", ".delete-btn", deleteItem)
function deleteItem(event) {
event.target.parentNode.remove()
}

// End Goals

// Sus tips
var tips = ["Use a metal/glass/silicone straw instead of a single-use plastic one!", "Bring a tote bag while shopping instead of using a plastic bag!",
"Use a bamboo toothbrush!", "Bring your own takeout containers for food!", "Use a reusable waterbottle!","Avoid processed food that's packaged in plastic",
 "Bring your own containers to the farmers market!", "Support local businesses and farmers!", "Minimize the amount of packages you order online",
 "Use cloth napkins instead of paper napkins!", "switch out paper towels for dish towels!", "bring your own reusable utensils to use instead single use plastic!",
 "Use a reusable cup or bottle when buying drinks!", "Ditch tissues for handkerchiefs!", "Get a library card to support your local sharing economy.",
 "Try to avoid palm oil!","Repurpose stale bread!","Change light bulbs to LEDs!","Be mindful when using technology.","Bring reusable produce bags for fruits and veggies.",
"Try canning to preserve food.","Check out your farmers market.", "Find your local cobbler to repair tired shoes.","Ditch plastic shower loofahs for a real loofah or a bamboo bath brush.",
"Look into rechargeable batteries instead of disposables.", "Focus on experiences rather than things.","Take public transit if available or carpool.","Join a community garden.",
"Swap tea bags for loose leaf tea in a reusable strainer."]
 var button = $('button');
 var message = $('.message');

function pickTips(){
  var randomDecimal = Math.random();
  var random = randomDecimal*tips.length;
  var final = Math.floor(random);
  var wholeMessage = message.text(`${tips[final]}`);

}

button.on("click", pickTips)

// end sus tips

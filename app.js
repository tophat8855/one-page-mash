$(document).ready(function() {
  function initialize() {
    var resultSpouse;
    var resultKids;
    var resultVehicle;
    var resultHome;
    submitMash();
  }

  function submitMash() {
    $('body').on('click', '#mash', function(event) {
      var randHome = Math.random();
    if (randHome < 0.25) {
      newHome = 'mansion';
    } else if (randHome < 0.5) {
      newHome = 'apartment';
    } else if (randHome < 0.75) {
      newHome = 'shack';
    } else if (randHome < 1) {
      newHome = 'house';
    }

    var randSpouse = Math.ceil(Math.random() * 4);
    newSpouse = $('#spouse' + randSpouse).val();

    var randKid = Math.ceil(Math.random() * 4);
    newKids = $('#kids' + randKid).val();

    var randVehicle = Math.ceil(Math.random() * 4);
    newVehicle = $('#vehicle' + randVehicle).val();

    var results = '<p> You will marry ' + newSpouse + ' and live in a fabulous ' + newHome + '! Have fun cruising the town in your ' + newVehicle + ' with ' + newKids + ' kids!</p>';
    $('body').append(results);
    });
  }

  initialize();
});

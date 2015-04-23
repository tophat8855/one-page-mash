$(document).ready(function() {
  var homeArray = ["mansion", "apartment", "shack", "house"];
  var spouseArray = ["spouse1", "spouse2", "spouse3", "spouse4"];
  var kidsArray = ["kids1", "kids2", "kids3", "kids4"];
  var vehicleArray = ["vehicle1", "vehicle2", "vehicle3", "vehicle4"];
  var everythingArray = homeArray.concat(spouseArray, kidsArray, vehicleArray);
  var number = 2; //this is just for practice
  var count = 1; //debugging purposes
  var currentIndex = -1;
  var timer;

  var results = {};

  function initialize() {
    mash();
  }

  function checkIfDone() {
    console.log(results);
    if (results.home && results.spouse && results.kids && results.vehicle) {
      window.clearInterval(timer);
      $('body').append("You will marry " + results.spouse + " and have " +
        results.kids + " kids, live in a " + results.home + ", and cruise the town with your " +
        results.vehicle + "!");
      console.log("ended the game");
    }
  }

  function moveToNextItemInArray() {
    if(currentIndex === -1) {
      nextId = everythingArray[0];
      nextIdIndex = 0;
    } else {
      currentId = everythingArray[currentIndex];
      if (currentIndex + 1 < everythingArray.length) {
        nextId = everythingArray[currentIndex + 1];
        nextIdIndex = currentIndex + 1;
      } else {
        nextId = everythingArray[0];
        nextIdIndex = 0;
      }
      $('#' + currentId).removeClass('highlighted');
    }
    $('#' + nextId).addClass('highlighted');

    if (!checkForDisabling(nextIdIndex, nextId)) {
      currentIndex = nextIdIndex;
    } else {
      // $('#' + currentId).toggleClass('highlighted');
      $('#' + nextId).removeClass('highlighted');
      if (nextIdIndex === 0) {
        currentIndex -= 1;
      }
    }

    checkIfDone();
    count += 1;
  }

  function checkForDisabling(nextIdIndex, nextId) {
    if(count % number === 0) {
      $('#' + nextId).prop('disabled',true);
      $('#' + nextId).addClass('strikethrough',true);

      everythingArray.splice(nextIdIndex, 1);
      keepResult(nextId);

      return true;
    } else {
      return false;
    }
  }

  function keepResult(nextId) {
    var home = $.inArray(nextId, homeArray);
    var spouse = $.inArray(nextId, spouseArray);
    var kids = $.inArray(nextId, kidsArray);
    var vehicle = $.inArray(nextId, vehicleArray);

    if(home > -1){
      homeArray.splice(home, 1);
      if (homeArray.length === 1) {
        var homeId = homeArray[0];
        results.home = homeId;
        $('#' + homeId).addClass('pinked');

        var homeIndex = $.inArray(homeId, everythingArray);
        everythingArray.splice(homeIndex, 1);
      }
    } else if (spouse > -1) {
      spouseArray.splice(spouse, 1);
      if (spouseArray.length === 1) {
        var spouseId = spouseArray[0];
        results.spouse = $('#' + spouseId).val();
        $('#' + spouseId).addClass('pinked');

        var spouseIndex = $.inArray(spouseId, everythingArray);
        everythingArray.splice(spouseIndex, 1);
      }
    } else if (kids > -1) {
      kidsArray.splice(kids, 1);
      if (kidsArray.length === 1) {
        var kidsId = kidsArray[0];
        results.kids = $('#' + kidsId).val();
        $('#' + kidsId).addClass('pinked');

        var kidsIndex = $.inArray(kidsId, everythingArray);
        everythingArray.splice(kidsIndex, 1);
      }
    } else if (vehicle > -1) {
      vehicleArray.splice(vehicle, 1);
      if (vehicleArray.length === 1) {
        var vehicleId = vehicleArray[0];
        results.vehicle = $('#' + vehicleId).val();
        $('#' + vehicleId).addClass('pinked');

        var vehicleIndex = $.inArray(vehicleId, everythingArray);
        everythingArray.splice(vehicleIndex, 1);
      }
    }
  }

  function mash() {
    $('body').on('click', '#play', function(event) {
      $('#play').remove();
      //every 7/10 of a second highlight the next item in the everything Array and unlight the one that was highlighted
      timer = window.setInterval(moveToNextItemInArray, 667);
    }

    //   var randHome = Math.random();
    // if (randHome < 0.25) {
    //   newHome = 'mansion';
    // } else if (randHome < 0.5) {
    //   newHome = 'apartment';
    // } else if (randHome < 0.75) {
    //   newHome = 'shack';
    // } else if (randHome < 1) {
    //   newHome = 'house';
    // }
    //
    // var randSpouse = Math.ceil(Math.random() * 4);
    // newSpouse = $('#spouse' + randSpouse).val();
    //
    // var randKid = Math.ceil(Math.random() * 4);
    // newKids = $('#kids' + randKid).val();
    //
    // var randVehicle = Math.ceil(Math.random() * 4);
    // newVehicle = $('#vehicle' + randVehicle).val();
    //
    // var results = '<p> You will marry ' + newSpouse + ' and live in a fabulous ' + newHome + '! Have fun cruising the town in your ' + newVehicle + ' with ' + newKids + ' kids!</p>';
    // $('body').append(results);
   );
  }

  // $('.ui.form')
  //   .form({
  //     spouse1: {
  //       identifier  : 'spouse1',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     spouse2: {
  //       identifier  : 'spouse2',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     spouse3: {
  //       identifier  : 'spouse3',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     spouse4: {
  //       identifier  : 'spouse4',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     kids1: {
  //       identifier  : 'kids1',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     kids2: {
  //       identifier  : 'kids2',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     kids3: {
  //       identifier  : 'kids3',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     kids4: {
  //       identifier  : 'kids4',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     vehicle1: {
  //       identifier  : 'vehicle1',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     vehicle2: {
  //       identifier  : 'vehicle2',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     vehicle3: {
  //       identifier  : 'vehicle3',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //     vehicle4: {
  //       identifier  : 'vehicle4',
  //       rules: [
  //         {
  //           type   : 'empty',
  //           prompt : 'Field cannot be blank'
  //         }
  //       ]
  //     },
  //   });

  initialize();
});

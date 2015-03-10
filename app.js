$(document).ready(function() {
  var homeArray = ["mansion", "apartment", "shack", "house"];
  var spouseArray = ["spouse1", "spouse2", "spouse3", "spouse4"];
  var kidsArray = ["kids1", "kids2", "kids3", "kids4"];
  var vehicleArray = ["vehicle1", "vehicle2", "vehicle3", "vehicle4"];
  var everythingArray = homeArray.concat(spouseArray, kidsArray, vehicleArray);

  function initialize() {

    var number = 5; //this is just for practice

    var resultArray = [];

    var resultSpouse;
    var resultKids;
    var resultVehicle;
    var resultHome;
    mash(resultArray, number);
  }

  function currentIdFinder(){
    return $('.highlighted')[0].id;
  }

  function moveToNextItemInArray() {
    var currentId = currentIdFinder();
    var nextId;
    if(everythingArray.indexOf(currentId) + 1 < everythingArray.length) {
      nextId = everythingArray[everythingArray.indexOf(currentId) + 1];
    } else {
      nextId = everythingArray[0];
    }
    $('#' + currentId).toggleClass('highlighted');
    $('#' + nextId).toggleClass('highlighted');
  }

  function mash(resultArray, number) {
    $('body').on('click', '#mash', function(event) {
      //every 7/10 of a second highlight the next item in the everything Array and unlight the one that was highlighted
      window.setInterval(moveToNextItemInArray, 667);
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

$(document).ready(function() {
  var homeArray = ["mansion", "apartment", "shack", "house"];
  var spouseArray = ["spouse1", "spouse2", "spouse3", "spouse4"];
  var kidsArray = ["kids1", "kids2", "kids3", "kids4"];
  var vehicleArray = ["vehicle1", "vehicle2", "vehicle3", "vehicle4"];
  var everythingArray = homeArray.concat(spouseArray, kidsArray, vehicleArray);
  var number = 0;
  var heartCount = 0;
  var count = 1;
  var currentIndex = -1;
  var timer;

  var results = {};

  $('#how-to').click(function() {
    $('#how-to-modal').modal('show');
  });

  function initialize() {
    mash();
  }

  function checkIfDone() {
    if (results.home && results.spouse && results.kids && results.vehicle) {
      window.clearInterval(timer);
      $('body').append("You will marry " + results.spouse + " and have " +
        results.kids + " kids, live in a " + results.home + ", and cruise the town with your " +
        results.vehicle + "!");
      //$('body').append('<div class="ui clear button" id="refresh">Start over</div>');
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
    $('body').on('mouseup', '#play', function(event) {
      $('#play').remove();
      //every 7/10 of a second highlight the next item in the everything Array and unlight the one that was highlighted
      timer = window.setInterval(moveToNextItemInArray, 667);
    });
  }

  //$('body').on('click', '#refresh'), function() {window.reload()};

  // HEARTS
  var colours=new Array('#f00', '#f06', '#f0f', '#f6f', '#f39', '#f9c'); // colours of the hearts
  var minisize=16; // smallest size of hearts in pixels
  var maxisize=28; // biggest size of hearts in pixels
  var hearts=66; // maximum number of hearts on screen
  var over_or_under="over"; // set to "over" for hearts to always be on top, or "under" to allow them to float behind other objects

  /*****************************
  *JavaScript Love Heart Cursor*
  *  (c)2013+ mf2fm web-design *
  *   http://www.mf2fm.com/rv  *
  *****************************/
  var x=ox=400;
  var y=oy=300;
  var swide=800;
  var shigh=600;
  var sleft=sdown=0;
  herz=[];
  var herzx=[];
  var herzy=[];
  var herzs=[];
  var kiss=false;
  var heart = 0;

  if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
    var oldonload=window.onload;
    if (typeof(oldonload)!='function') window.onload=funky;
    else window.onload=function() {
      if (oldonload) oldonload();
      funky();
    };
  }

  addRVLoadEvent(mwah);

  function mwah() { if (document.getElementById) {
    var i, heart;
    for (i=0; i<hearts; i++) {
      heart=createDiv("auto", "auto");
      heart.style.visibility="hidden";
      heart.style.zIndex=(over_or_under=="over")?"1001":"0";
      heart.style.color=colours[i%colours.length];
      heart.style.pointerEvents="none";
      if (navigator.appName=="Microsoft Internet Explorer") heart.style.filter="alpha(opacity=75)";
      else heart.style.opacity=0.75;
      heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
      document.body.appendChild(heart);
      herz[i]=heart;
      herzy[i]=false;
    }
    set_scroll();
    set_width();
    herzle();
  }}

  function herzle() {
    var c;
    if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
      ox=x;
      oy=y;
      for (c=0; c<hearts; c++) if (herzy[c]===false) {
        herz[c].firstChild.nodeValue=String.fromCharCode(9829);
        herz[c].style.left=(herzx[c]=x-minisize/2)+"px";
        herz[c].style.top=(herzy[c]=y-minisize)+"px";
        herz[c].style.fontSize=minisize+"px";
        herz[c].style.fontWeight='normal';
        herz[c].style.visibility='visible';
        herzs[c]=minisize;
        break;
      }
    }
    for (c=0; c<hearts; c++) if (herzy[c]!==false) blow_me_a_kiss(c);
    setTimeout(herzle, 40);
  }

  $('#play').mousedown(pucker);
  $('#play').mouseup(function(){
    number = heartCount;
    if(!$('#number-hearts').length){
      console.log(number);
      $('#number').append("<p class='ui center aligned header' id='number-hearts'>Your number:</p>");
      $('#number').append("<p class='ui center aligned huge header' id='number-hearts'>" + number + "</p>");
    }
    clearTimeout(kiss);
  });

  function pucker() {
    heartCount += 1;
    ox=-1;
    oy=-1;
    kiss=setTimeout(pucker, 250);
  }

  function blow_me_a_kiss(i) {
    herzy[i]-=herzs[i]/minisize+i%2;
    herzx[i]+=(i%5-2)/5;
    if (herzy[i]<sdown-herzs[i] || herzx[i]<sleft-herzs[i] || herzx[i]>sleft+swide-herzs[i]) {
      herz[i].style.visibility="hidden";
      herzy[i]=false;
    }
    else if (herzs[i]>minisize+2 && Math.random()<0.5/hearts) break_my_heart(i);
    else {
      if (Math.random()<maxisize/herzy[i] && herzs[i]<maxisize) herz[i].style.fontSize=(++herzs[i])+"px";
      herz[i].style.top=herzy[i]+"px";
      herz[i].style.left=herzx[i]+"px";
    }
  }

  function break_my_heart(i) {
    var t;
    herz[i].firstChild.nodeValue=String.fromCharCode(9676);
    herz[i].style.fontWeight='bold';
    herzy[i]=false;
    for (t=herzs[i]; t<=maxisize; t++) setTimeout('herz['+i+'].style.fontSize="'+t+'px"', 60*(t-herzs[i]));
    setTimeout('herz['+i+'].style.visibility="hidden";', 60*(t-herzs[i]));
  }

  document.onmousemove=mouse;
  function mouse(e) {
    if (e) {
      y=oy=e.pageY;
      x=ox=e.pageX;
    }
    else {
      set_scroll();
      y=oy=event.y+sdown;
      x=ox=event.x+sleft;
    }
  }

  window.onresize=set_width;
  function set_width() {
    var sw_min=999999;
    var sh_min=999999;
    if (document.documentElement && document.documentElement.clientWidth) {
      if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
      if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
    }
    if (typeof(self.innerWidth)=='number' && self.innerWidth) {
      if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
      if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
    }
    if (document.body.clientWidth) {
      if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
      if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
    }
    if (sw_min==999999 || sh_min==999999) {
      sw_min=800;
      sh_min=600;
    }
    swide=sw_min;
    shigh=sh_min;
  }

  window.onscroll=set_scroll;
  function set_scroll() {
    if (typeof(self.pageYOffset)=='number') {
      sdown=self.Offset;
      sleft=self.pageXOffset;
    }
    else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
      sdown=document.body.scrollTop;
      sleft=document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
      sleft=document.documentElement.scrollLeft;
      sdown=document.documentElement.scrollTop;
    }
    else {
      sdown=0;
      sleft=0;
    }
  }

  function createDiv(height, width) {
    var div=document.createElement("div");
    div.style.position="absolute";
    div.style.height=height;
    div.style.width=width;
    div.style.overflow="hidden";
    div.style.backgroundColor="transparent";
    return (div);
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

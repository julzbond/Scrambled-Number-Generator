module.exports = scrambledNumberGenerator;

function scrambledNumberGenerator(length){
  if(typeof length !== "number"){
    return "error";
  }

  var array = [];
  for (var i = 0; i < length; i++){
    array.push(i);
  }

  //Fisher-Yates Shuffle
  function shuffle(array){
    var m = array.length;
    var t;
    var i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  return shuffle(array);
};
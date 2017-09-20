var myGesturePad = document.getElementById('myGesturePad')

var hammerTime = new Hammer(myGesturePad)


hammerTime.on('swipeleft swiperight tap press', function(event){
    myGesturePad.textContent = event.type + " gesture detected"
})


self.port.on('getElements', function(tag) {
    console.log('received tag ', tag)
    var elements = document.getElementsByTagName(tag)
    console.log('found elements ', elements)
    for (var i=0; i< elements.length; i++) {
        self.port.emit('gotContent', elements[i].innerHTML)
    }
})

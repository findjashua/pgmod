var tag = 'p'
var data = require('sdk/self').data
var pageMod = require('sdk/page-mod')

pageMod.PageMod({
    include: '*',
    contentScriptFile: data.url('element-getter.js'),
    onAttach: attachHandler
})

function attachHandler(worker) {
    console.log('worker ', worker)
    worker.port.emit('getElements', tag)
    worker.port.on('gotContent', function(content) {
        console.log('received content ', content)
    })
}

function hello(name){
    console.log(`hello!${name}`);
}
function byby(name){
    console.log(`by~by!${name}`);
}
module.exports.hello = hello;
exports.byby = byby;

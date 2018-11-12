var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');

module.exports = function(Country) {
    //Order after save..
    Country.observe('after save', function (ctx, next) {
        var socket = Country.app.io;
        if(ctx.isNewInstance){
            console.log('==================')
            console.log('isNewInstance')
            console.log('==================')
            //Now publishing the data..
            pubsub.publish(socket, {
                collectionName : 'Country',
                data: ctx.instance,
                method: 'POST'
            });
        }else{
            console.log('==================')
            console.log('isNotNewInstance')
            console.log('==================')
            //Now publishing the data..
            pubsub.publish(socket, {
                collectionName : 'Country',
                data: ctx.instance,
                modelId: ctx.instance.id,
                method: 'PUT'
            });
        }
        //Calling the next middleware..
        next();
    }); //after save..
}; //Module exports.

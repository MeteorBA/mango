#Meteor Mango
This package provides both the [mango-node](https://github.com/mango/mango-node) and [JavaScript SDK](https://developers.getmango.com/en/tools/javascript-sdk/) to work with [Mango](https://getmango.com)

## Install
Using Meteor's Package System:
~~~sh
$ meteor add meteorba:mango
~~~

In the client, you will have access to the `Mango` object from the [JavaScript SDK](https://developers.getmango.com/en/tools/javascript-sdk/).
~~~js
Mango.setPublicKey('my_public_api_key');
Mango.token.create(cardInfo, handleResponse);
...
~~~

In the server, you will have access to the `mango` variable, which equals to `require('mango')` in [mango-node npm package](https://github.com/mango/mango-node) examples.

Using the mango-node in the server:
~~~js
var mangoAPI = mango({ 'api_key': 'your Mango secret API key'});
mangoAPI.Charges.create({
  'token': 'token_mwhushs06o62aruq9n3pmvu7f0ia696y',
  'amount': 2000,
  'email': 'test@example.org'
}, function(err, charge) {
  console.log(charge);
});
...
~~~

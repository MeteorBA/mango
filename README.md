#Meteor Mango
This package provides both the node-mango and JavaScript SDK to work with [Mango](https://getmango.com)

In the client, you will have access to the `Mango` object from the [JavaScript SDK](https://developers.getmango.com/en/tools/javascript-sdk/).
~~~
Mango.setPublicKey('my_public_api_key');
Mango.token.create(cardInfo, handleResponse);
...
~~~

In the server, you will have access to the `mango` variable, which equals to the `require('mango')` example in [mango-node npm package](https://github.com/mango/mango-node).
Example:
~~~
var mangoAPI = mango({ 'api_key': 'your Mango secret API key'});
mangoAPI.Charges.create({
  'token': 'token_mwhushs06o62aruq9n3pmvu7f0ia696y',
  'amount': 2000,
  'email': 'test@example.org'
}, function(err, charge) {
  console.log(charge);
});
~~~

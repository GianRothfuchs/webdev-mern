# MERN Stack

[Source Video](https://www.youtube.com/watch?v=5yTazHkDR4o&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=2)

# Setup from Scratch

[See server.js](/server.js)

1. Navigate to project folder and do `npm init`
2. Install main tools `npm install express body-parser mongoose concurrently`
3. Install as dev dependency `npm i -D nodemon` 
4. In `package.json` under scripts add start script `"start": "node server.js"`. This is for prod use.
5. In `package.json` under scripts add server script `"server": "nodemon server.js"`. This development use, as it monitors changes.
6. In project folder create file `server.js`

Setup of mongoDB it is possible to have a hosted mongoDB [online](https://cloud.mongodb.com/). The db URI needs to be retrieved vorm that source. It is best practice to create the `config/keys.js` folder/file structure as it can be excluded from git.

`keys.js`

```
module.exports = {
 mongoURI: 'the URI'
}
// This will be accessed by server.js
// like this: const db = require('./config/keys').mongoURI;
```

For interaction with mongoDB mongoose package used. mongoose requres a model to be defined. Agian a separate folder is created `models/Item.js`

[See Item.js](models/Item.js)

Ther is another folder prepared `routes\api\items.js` to hande api routs. 

[See items.js](routes/api/items.js)


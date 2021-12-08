/*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  }) 


    //POST MENTION 

    app.post('/api', (req, res) => {
      apiCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
          console.log(req.body)
                })
        .catch(error => console.error(error))
    })*/



    /* GET MENTION

     app.get('/', (req, res) => {
      db.collection('api-requests').find().toArray()
        .then(results => {
          res.render('index.ejs', { /*BDD nom donné à la colonne qu'on récupèrequotes: results })
        })        
      }) 

    /* PUT MENTION

    app.put('/quotes', (req, res) => {
    console.log(req.body)
    })*/

    /* app.set('view engine', 'ejs')  

    app.get('/', (req, res) => {
      db.collection('api-requests').find().toArray()
        .then(results => {
          res.render('index.ejs', { /*BDD nom donné à la colonne qu'on récupèrequotes: results })
        })        
      }) 
    
    app.put('/quotes', (req, res) => {
    quotesCollection.findOneAndUpdate(
      { name: 'Lucas' },
      {
        $set: {
          name: req.body.name,
          quote: req.body.quote
        }
      },
      {
        upsert: true
      }
    )
    .then(result => {
      console.log(result)
     })
      .catch(error => console.error(error))
    })*/
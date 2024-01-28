function index(req, res) {
    res.render('news/index', {
      title: 'news'
    })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function getNews(req, res) {
  fetch(`https://newsapi.org/v2/everything?q=${req.body.content}&apiKey=${process.env.NEW_API_KEY}`)
   .then(apiResponse => apiResponse.json())
   .then(newsData => {
      console.log(newsData)
      
   })
   .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}  


export {
  index,
  getNews
}

function index(req, res) {
    res.render('news/index', {
      title: 'news'
    })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

// async function getNews(req, res) {
//   try {
//     const data = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEW_API_KEY}`)
//     if (data) {
//       return res.json(data)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }


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

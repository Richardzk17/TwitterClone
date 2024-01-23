function index(req, res) {
      res.render('newsapis/index', {
        title: 'News'
      })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }


export {
    index,
  }
const nunjucks = require("nunjucks")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
  if (!req.query.name) {
    return res.redirect('?name=user')
  } else {
    let name = req.query.name.replace(/\s/,"");
    name = name.replace("{{", "") // nope :)
  
    if (!name.includes("range.constructor") && !name.includes("range[")) {
      temp = `
      Hi ${nunjucks.renderString(name)}
      `
      return res.send(temp)
    }else {
      return res.send("no sir")
    }
  }
})


app.listen()
//imports
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./pages')

//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//configs server
server
//receber dados do req.body
.use(express.urlencoded({extended: true}))
//configuração arquivos estáticos
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500) 
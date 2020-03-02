let express = require('express')
let mysql = require('mysql')
let cors = require('cors')
let url=require('url')
let db=mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password:'123456',
    database:'test'
})
db.connect()
var app = express()
app.use(cors());
var data=[]
db.query('SELECT * FROM list', (err, result) => {
    if (err) throw err;
    for (let k of result) {
        data.push({
                id:k.id,
                name: k.name,
                age:k.age
            })
        }
})
// 初始渲染
app.get('/', (req, res) => {
    res.send(data)
})
// 删
app.get('/delete/:id', (req, res) => {
    let id = req.params.id
    console.log(req.query.name)
    if (req.query.name) {
        db.query(`delete from list where id=${id}`, (err, result) => {
            if (err) throw err;
        })
        for (let item in data) {
            if (id == data[item].id) {
                data.splice(item, 1)
            }
        }
        res.send(data)
    } else {
        res.send('必须在网页请求删除数据！')
    }
   
})
// 增
app.get('/add', (req, res) => {
    let { name, age, id } = url.parse(req.url, true).query
    if (name && age) {
        db.query(`INSERT INTO list (name,age) VALUES('${name}','${age}')`, (err, result) => {
            if (err) throw err;
            console.log('添加成功')
        })
        db.query(`SELECT * FROM list where name='${name}'`, (err, result) => {
            if (err) { throw err }
            else {
                data = data.concat(JSON.parse(JSON.stringify(result)))
                res.send(data)
            }

        })
    } else {
        res.send('必须在网页请求添加数据！')
    }
  
}),
app.get('/edit/:id', (req, res) => {
    console.log(req.query)
    let { id, name, age } = req.query
    db.query(`update list set name='${name}',age=${age} where id=${id}`, (err, result) => {
        if (err) { throw err }
        else {
            
        for (let item of data) {
            if (item.id == id) {
                item.name=name
                item.age=age
            }
        }
        res.send(data)
}
    })
})
app.listen(8080)

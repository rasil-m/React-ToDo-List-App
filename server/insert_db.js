const App=require("./app");
var mysql=require("mysql");
var bodyParser=require("body-parser");
var jsonParser = bodyParser.json();


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo_db'
  });

  connection.connect();


  App.app.post('/add_task', jsonParser, function (req, res) {

    const query="INSERT INTO TASKS (tasks) VALUES ('"+req.body.task+"')";

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      res.json({"msg":"Your Task is successfully saved...!"});
     });
        
    
  })


  App.app.get("/view_task",function(req,res){

    const query="SELECT * FROM TASKS";

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      res.json(results);
     });

   })


   App.app.delete("/delete_task/:id",(req,res)=>{

    const query="DELETE TASKS FROM TASKS WHERE ID='"+req.params.id+"'";

    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      res.json(results);
     });


   });

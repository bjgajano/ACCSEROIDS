var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('react');

db.serialize(function(){
  db.run("CREATE Table playerIGN (id INT, dt TEXT)");
  
  var stmt = db.prepare("INSERT into playerIGN VALUES(?,?)");
  for (var i = 0; i < 10 ; i++){

    var d = new Date();
    var n = d.toLocaleTimeString();
    stmt.run(i, n);
  }

  stmt.finalize();

db.each("SELECT id, dt from playerIGN", function(err, row) {
  console.log("User id:"+row.id, row.dt);
});
});
db.close();
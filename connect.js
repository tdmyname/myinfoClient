var Connection = require('tedious').Connection
var async = require('async')

// Create connection to database
var config = {
  userName: 'myinfo', // update me
  password: 'myinfo', // update me
  server: 'localhost',
  options: {
    port: 1434,
    database: 'myinfo',
  },
}

// function Start(callback) {
//   console.log('Starting...')
//   callback(null, 'Jake')
// }

// function Insert(name, callback) {
//   console.log("Inserting '" + name + "' into Table...")

//   request = new Request('INSERT INTO shiro_user (Name) OUTPUT INSERTED.name VALUES (@name);', function(err, rowCount, rows) {
//     if (err) {
//       callback(err)
//     } else {
//       console.log(rowCount + ' row(s) inserted')
//       callback(null, 'Nikita')
//     }
//   })
//   request.addParameter('Name', TYPES.NVarChar, name)

//   // Execute SQL statement
//   connection.execSql(request)
// }

// function Update(name, callback) {
//   console.log("Updating   ' for '" + name + "'...")

//   // Update the employee record requested
//   request = new Request("UPDATE shiro_user SET name='tandong' WHERE Name = @Name;", function(err, rowCount, rows) {
//     if (err) {
//       callback(err)
//     } else {
//       console.log(rowCount + ' row(s) updated')
//       callback(null, 'Jared')
//     }
//   })
//   request.addParameter('Name', TYPES.NVarChar, name)

//   // Execute SQL statement
//   connection.execSql(request)
// }

// function Delete(name, callback) {
//   console.log("Deleting '" + name + "' from Table...")

//   // Delete the employee record requested
//   request = new Request('DELETE FROM shiro_user WHERE Name = @Name;', function(err, rowCount, rows) {
//     if (err) {
//       callback(err)
//     } else {
//       console.log(rowCount + ' row(s) deleted')
//       callback(null)
//     }
//   })
//   request.addParameter('Name', TYPES.NVarChar, name)

//   // Execute SQL statement
//   connection.execSql(request)
// }

// function Read(callback) {
//   console.log('Reading rows from the Table...')

//   // Read all rows from table
//   request = new Request('SELECT  Name FROM shiro_user;', function(err, rowCount, rows) {
//     if (err) {
//       callback(err)
//     } else {
//       console.log(rowCount + ' row(s) returned')
//       callback(null)
//     }
//   })

//   // Print the rows read
//   var result = ''
//   request.on('row', function(columns) {
//     columns.forEach(function(column) {
//       if (column.value === null) {
//         console.log('NULL')
//       } else {
//         result += column.value + ' '
//       }
//     })
//     console.log(result)
//     result = ''
//   })

//   // Execute SQL statement
//   connection.execSql(request)
// }

// function Complete(err, result) {
//   if (err) {
//     callback(err)
//   } else {
//     console.log('Done!')
//   }
// }

// // Attempt to connect and execute queries if connection goes through
// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Connected')
//   }
// })
module.exports = promise
var promise = new Promise(function(resove, reject) {
  var connection = new Connection(config)
  connection.on('connect', function(err) {
    if (err) {
      console.log(err)
    } else {
      resove(connection)
    }
  })
})

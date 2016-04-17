/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function (server, done) {
  var customers = server.models.customer;
  server.dataSources.mysqlDs.automigrate('customer', function (err) {
    if (err) {
      console.error("boot, ERR:", err);
      done(err);
    } else {


      // replaceOrCreate for existing id
//      customers.create({
//        firstName: 'Amirali',
//        lastName: 'Jafarian',
//        age: 30},
//      function(err, inst) {
//        customers.replaceOrCreate({
//          id: inst.id,
//          firstName: 'Amir1'
//        }, function(err, inst) {
//          console.log('inst:', inst); // { firstName: 'Amir1', id: 1 }
//          done(err);
//        });
//      });


      // replaceOrCreate for non existing id
//      customers.replaceOrCreate({
//        id: 99,
//        firstName: 'Amir2'
//      }, function(err, inst) {
//        console.log('inst:', inst); // { firstName: 'Amir2', id: 99 }
//        done(err);
//      });


      // replaceById: (a static method)
//      customers.create({
//        firstName: 'Amirali',
//        lastName: 'Jafarian',
//        age: 30}, function (err, inst) {
//        customers.replaceById(inst.id, {firstName: 'Amir3'}, done); // { firstName: 'Amir3', id: 1 }
//      });
      

      // replaceAttributes: (a prototype method)
//      customers.create({
//        firstName: 'Amirali',
//        lastName: 'Jafarian',
//        age: 30},
//      function (err, inst) {
//        inst.replaceAttributes({firstName: 'Amir4'}, done); // { firstName: 'Amir4', id: 1 }
//      });

      
      // Promise version for replaceOrCreate
        var data = {
          firstName: 'Amirali',
          lastName: 'Jafarian',
          age: 30
        };      
//        customers.create(data)
//          .then(function(created) {
//            created = created.toObject();
//            delete created.lastName;
//            delete created.age;
//            created.firstName = 'Amir5';
//            return customers.replaceOrCreate(created)
//            .then(function(inst) {
//              console.log('inst:', inst); // { firstName: 'Amir5', id: 1 }
//              done();
//            });
//          })
//        .catch(done);


//        // Promise version for replaceAttributes
//        customers.create(data)
//          .then(function(created) {
//            return created.replaceAttributes({firstName: 'Amir6'})
//            .then(function(inst) { // { firstName: 'Amir6', id: 1 }
//              done();
//            });
//          })
//        .catch(done);


        // Promise version for replaceById
//        customers.create(data)
//          .then(function(created) {
//            return customers.replaceById(created.id, {firstName: 'Amir7'})
//            .then(function(inst) { // { firstName: 'Amir7', id: 1 }
//              done();
//            });
//          })
//        .catch(done);


      // An example of Operation hooks
      customers.observe('before save', function (ctx, next) {
        ctx.instance.firstName = 'Amir8';
        next();
      });

      customers.replaceOrCreate({
        firstName: 'Amirali'
      }, function (err, instance) {
        if (err) {
          return done(err);
        }
        console.log('inst:', instance);
        done();
      });


    }
  })
}
module.exports = function (server, done) {
  var customers = server.models.customer;
  server.dataSources.mongodbDs.automigrate('customer', function (err) {
    if (err) {
      console.error("boot, ERR:", err);
      done(err);
    } else {

      // Queries the customers model
      function showData() {
        customers.find(function(err, data){
          console.log('Final Data:', data[0]);
          done(err);
        });
      }


      // replaceOrCreate for existing id
      customers.create({
        firstName: 'Amirali',
        lastName: 'Jafarian',
        age: 30},
      function(err, inst) {
        if (err) return done(err);
        console.log('created inst:', inst);
        customers.replaceOrCreate({
          id: inst.id,
          firstName: 'Amir1'
        }, function(err, inst) {
          if (err) return done(err);
          showData();
        });
      });


      // replaceOrCreate for non existing id
//      customers.replaceOrCreate({
//        id: 99,
//        firstName: 'Amir2',
//        lastName: 'Jafarian',
//        age: 30
//      }, function(err, inst) {
//          if (err) return done(err);
//          showData();
//      });


      // replaceById: (a static method)
//      customers.create({
//        firstName: 'Amirali',
//        lastName: 'Jafarian',
//        age: 30}, function (err, inst) {
//        if (err) return done(err);
//        console.log('created inst:', inst);
//        customers.replaceById(inst.id, {firstName: 'Amir3'}, function(err, inst) {
//          if (err) return done(err);
//          showData();
//        });
//      });
      

      // replaceAttributes: (a prototype method)
//      customers.create({
//        firstName: 'Amirali',
//        lastName: 'Jafarian',
//        age: 30},
//      function (err, inst) {
//        console.log('created inst:', inst);
//        inst.replaceAttributes({firstName: 'Amir4'}, function(err, data) {
//          if (err) return done(err);
//          showData();
//        }); 
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
//            console.log('created:', created);
//            return customers.replaceOrCreate({
//              id: created.id,
//              firstName: 'Amir5'
//            })
//            .then(function(inst) {
//              showData();
//            });
//          })
//        .catch(done);


        // Promise version for replaceAttributes: (a prototype method)
//        customers.create(data)
//          .then(function(inst) {
//            console.log('created:', inst);
//            return inst.replaceAttributes({firstName: 'Amir6'})
//            .then(function(created) { 
//              showData();
//            });
//          })
//        .catch(done);


        // Promise version for replaceById: (a static method)
//        customers.create(data)
//          .then(function(created) {
//            console.log('created:', created);
//            return customers.replaceById(created.id, {firstName: 'Amir7'})
//            .then(function(inst) {
//              showData();
//            });
//          })
//        .catch(done);


      // An example of Operation hooks
//      customers.observe('before save', function (ctx, next) {
//          ctx.instance.firstName = 'Amir8';
//        next();
//      });
//
//      customers.replaceOrCreate({
//        firstName: 'Amirali'
//      }, function (err, instance) {
//        if (err) return done(err);
//        showData();
//      });


    }
  })
}
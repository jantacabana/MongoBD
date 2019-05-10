// "use strict";

// const assert = require("assert");
// const Profile = require("../src/models/profile");
// const permissions = require("../src/models/permissions");
// const mongoose = require('mongoose');
// // //tell mongoose to use es6 implementation of promises
// mongoose.Promise = global.Promise;

// let profile;
// let objProfile = {
//     name: "callcenter",
//     //enterprise : res,
//     permissions : [permissions.actions.ENTERPRISE_ACCESS, permissions.actions.PRODUCT_PHISICAL_SEARCH]
// };

// describe('Deleting a Profile', () => {
 
//   beforeEach((done)=> {
//     profile = new Profile(objProfile);
//     console.log("paso 122",objProfile)
//     profile.save()
//       .then(() => {
//        console.log("SE guardó:");
//         done()});
//   });

//   console.log("paso 2")
//   it('removes a profile using its instance', (done) => {
//     console.log("paso 3")
//     /*profile.remove()
//       .then(() => Profile.findOne({ name: 'callcenter' }))
//       .then((result) => {
//         console.log("paso>>>>>>>>>>")
//         assert(result === null);
//         done();
//       });*/
//   });

//   /*it('removes multiple pokemons', (done) => {
//     Profile.remove({ name: 'callcenter' })
//       .then(() => Profile.findOne({ name: 'callcenter' }))
//       .then((result) => {
//         assert(result === null);
//         done();
//       });
//   });*/

//   // it('removes a pokemon', (done) => {
//   //   Profile.findOneAndRemove({ name: 'profile' })
//   //     .then(() => Profile.findOne({ name: 'profile' }))
//   //     .then((pokemon) => {
//   //       assert(pokemon === null);
//   //       done();
//   //     });
//   // });

//   // it('removes a pokemon using id', (done) => {
//   //   Profile.findIdAndRemove(profile._id)
//   //   // the following code block is repeated again and again
//   //     .then(() => Profile.findOne({ name: 'profile' }))
//   //     .then((pokemon) => {
//   //       assert(pokemon === null);
//   //       done();
//   //     });
//   //   // block end
//   // })
// })
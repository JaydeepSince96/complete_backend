 //This will give a filter and if it get match with gender male It will filter out and give a list with male
 // 1) db.teacher.aggregate([{$match:{gender:"male"}}])

 //**** If you want to categerize the gender in male and female

//  db.teacher.aggregate([
//   {
//     $match: {
//       gender: { $in: ["male", "female"] }
//     }
//   }
// ])


// It will give unique group of ages along with name of teacher
 //2) db.teacher.aggregate([{$group:{_id:"$age", names:{$push:"$name"}}}])

 //It will give unique age group along with their full details
 //3) db.teacher.aggregate([{$group:{_id:"$age",userDetails:{$push:"$$ROOT"}}}])

// Here performing Aggregation pipeline first will pich females and then we counted number of female teacher.

 //4) db.teacher.aggregate([
 // {$match:{gender:"female"}},
 // {$group:{_id:"$age",numberOfTeacher:{$sum:1}}}
 // ])

 // Along with the case 4 here we also sort the count of female teacher by their number.

 //5)  db.teacher.aggregate([
 // {$match:{gender:"female"}},
 // {$group:{_id:"$age",numberOfTeacher:{$sum:1}}},
 // {$sort:{numberOfTeacher:-1}}
 // ])


// This means till now what we did make it in one record and show the greatest number of Female teacher, this is possible when we give _id as null.

 //6)  db.teacher.aggregate([
 // {$match:{gender:"female"}},
 // ,{$group:{_id:"$age",numberOfTeacher:{$sum:1}}},
 // {$sort:{numberOfTeacher:-1}},
 // {$group:{_id:null, numberOfTeacher:{$max:"$numberOfTeacher"}}}
 //])

 // To Get Average of Age:-

 //7) db.teacher.aggregate([{$group:{_id:null,averageAge:{$avg:"$age"}}}])

 // total No of Hobbies, If we don't put unwind it will give subset of hobbies of array(If teacher have more than one hobbies) inside an array

 //8)  db.teacher.aggregate(
 // [{$unwind:"$hobbies"},
 // {$group:{_id:null,noOfHobbies:{$sum:1}}}
 // ])

 // If you need list of Hobbies:-

 // 9) db.teacher.aggregator(
 // [
 //     {$unwind:"$hobbies"},{$group:{_id:null,listOfHobbies:{$addToSet: "$hobbies"}}}
 // ]
 //)

 // This is how we do filtering in mongodb

 // 10) db.teacher.aggregate(
 // [{$group:{_id:null,avgAge:{$avg:{$filter:{input:"$age",as:"age",cond:{$gt:["$age",24]}}}}}}
 // ])

 // This is how you can combine two collection's fields

// 11)-  db.posts.aggregate([
//   {
//     $lookup: {
//       from: "users",              // the collection to join with
//       localField: "authorId",     // field in the posts collection
//       foreignField: "_id",        // field in the users collection
//       as: "author"                // the name of the new array field
//     }
//   },
//   {
//     $unwind: "$author"            // flatten the array into a single object
//   }
// ])

// ******************

// db.teacher.aggregate([
//   {
//     $match: {
//       gender: "male",
//       age: { $gt: 24 }
//     }
//   },
//   {
//     $group: {
//       _id: null,
//       total: { $sum: 1 }
//     }
//   }
// ])


// When you want to categerozed into discrete group on basis of specified boundaries.

//db.teacher.aggregate([
// {$match:{gender:"female"}},
// {

// $bucket:{
// groupBy:"$age",boundaries:[0,20,25],
// default:"Greater than 25 age",
// output:{count:{$sum:1}}
// }
// }
//   ])

//=============================================================================================





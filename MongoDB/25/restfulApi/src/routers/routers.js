const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


// create doc
// app.post("/students", (req, resp) => {
//     const user = new Student(req.body);
//     console.log(user);
    
//     // save data
//     user.save().then((() => {
//         resp.status(201).send(user);
//     })).catch((err) => resp.status(400).send(err));
// });

// create doc using promicess
router.post("/students", async (req, resp)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        resp.status(200).send(createUser);
    }catch(err){resp.status(400).send(err)}
})

// read the  data of regestered students
router.get("/students", async(req, resp)=>{
    try{
        const studentsData = await Student.find()
        resp.status(200).send(studentsData);
    }catch(err){
        resp.send(err);
    }
})

// get the individual student data using id
router.get("/students/:id", async(req, resp)=>{
    try{
        const _id = req.params.id;
        const stuData = await Student.findById(_id);
        // console.log(stuData);
        if(!stuData){
            return resp.status(404).send();
        }else{
            resp.send(stuData);
        }
    }catch(err){
        resp.send(err);
    }
})

// delete the individual student data using id
router.delete("/students/:id", async(req, resp)=>{
    try{
        const _id = req.params.id;
        const deleteData = await Student.findByIdAndDelete(_id);
        console.log(deleteData);

        if(!deleteData){
            return resp.status(404).send();
        }else{
            resp.send(deleteData);
        }
    }catch(err){
        resp.status(500).send(err);
    }
})

// update the individual document data using id
// put / patch method
router.patch("/students/:id", async(req, resp)=>{
    try{
        const name = req.params.name;
        const updateData = await Student.findByIdAndUpdate(_id, req.body, {
        // const updateData = await Student.findOneAndUpdate(name, req.body, {
            new : true,
        });
        console.log(updateData);

        if(!updateData){
            return resp.status(404).send();
        }else{
            resp.send(updateData);
        }
    }catch(err){
            resp.status(404).send(err);
    }
})
// app.put("/students/:id", async(req, resp)=>{
//     try{
//         const _id = req.params.id;
//         const updateData = await Student.findByIdAndUpdate(_id, req.body, {
//             new : true
//         });
//         console.log(updateData);

//         if(!updateData){
//             return resp.status(404).send();
//         }else{
//             resp.send(updateData);
//         }
//     }catch(err){
//             resp.status(400).send(err);
//     }
// })

module.exports = router;
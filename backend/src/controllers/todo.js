"use strict"

const Todo = require('../models/todo')

module.exports = {

    list: async (req, res) => {
        const data = await Todo.find({})

        res.status(200).send({
            isError: false,
            data
        })           
    },

    create: async (req, res) => {
        const data = await Todo.create(req.body)

        res.status(201).send({
            isError: false,
            data 
        })           
    },

    read: async (req, res) => {
        const data = await Todo.findOne({ _id: req.params.id })

        res.status(200).send({
            isError: false,
            data 
        })           
    }, 

    update: async (req, res) => {

        // const data = await Todo.updateOne({ _id: req.params.id }, req.body)
        // const updateData = await Todo.findOne({ _id: req.params.id })

        const data = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        res.status(202).send({
            isError: false,
            updateData
        })           
    },

    delete: async (req, res) => {

        const { deleteCount } = await Todo.deleteOne({ _id: req.params.id })

       if (!deleteCount) {
            res.statusCode = 404
            throw new Error('Something went wrong')
       } 

        res.status(204).send({
            isError: false,
            data 
        })           
    }
}
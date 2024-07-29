"use strict"

const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    
    title: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 200
    },

    description: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 200
    },

    priority: {
        type: String,
        enum: {
            values: ['low', 'medium', 'high'],
            message: 'Priority must be low, medium or high'},
        default: 'Medium'
    },

    isDone: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'todos',
    timestamps: true
})

module.exports = model('Todo', todoSchema)
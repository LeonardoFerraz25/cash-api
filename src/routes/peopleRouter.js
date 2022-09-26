const express = require('express')

const people = express.Router();

const peopleDb = require('../db/peopleDb')

people.post('/', async(req, res) => {
  const person = req.body;

  try {
    
    const [result] = await peopleDb.insert(person);

    return res.status(201).json({
      "message": `Pessoa cadastrada com sucesso com o id ${result.insertId}`
    })

  } catch(err) {

    console.log(err)
    return res.status(500).json({
      "message": "Ocorreu um erro ao cadastrar uma pessoa"
    })

  }
  
})

module.exports = people;
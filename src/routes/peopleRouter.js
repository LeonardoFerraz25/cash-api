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

people.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDb.findAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "message": err.sqlMessage });
  }
});

people.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDb.findById(id);
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ "message": 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "message": err.sqlMessage });
  }
});


module.exports = people;
const express = require('express')

const people = express.Router();

const peopleDb = require('../db/peopleDb')

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

people.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await peopleDb.update(person, id);
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

people.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDb.remove(id);
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.sqlMessage });
  }
});


module.exports = people;
const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const MateriaPrimaController = require('../controllers/MateriaPrimaController')


// Rotas para requisições de matéria prima.
router.post('/rawMaterials', MateriaPrimaController.novaMateriaPrima)
// router.get('/materiasPrimas', MateriaPrimaController.listarMateriasPrimas)
router.get('/rawMaterials/:nome', MateriaPrimaController.listarUmaMateriaPrima)
// router.put('/atualizar/materiaPrima/:idmateria_prima', MateriaPrimaController.atualizarMateriaPrima)
// router.delete('/deletar/materiaPrima/:idmateria_prima', MateriaPrimaController.deletarMateriaPrima)
router.put('/consumir/materiaPrima/:nome', MateriaPrimaController.consumirMateriaPrima)
router.get('/verificaConsumo/:nome', MateriaPrimaController.verificaConsumoPorPessoa)

module.exports = router
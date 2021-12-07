const database = require('../database/connection')
const { isEmpty } = require('lodash')
const res = require('express/lib/response')

class MateriaPrimaController {

    novaMateriaPrima(request, response) {

        const nome_materia_prima = request.params.nome
        const { nome, quantidade, usuarioCadastro } = request.body
        //  console.log(nome, quantidade, usuarioCadastro)

        database.select("*")
            .table("usuario")
            .where({ nome: usuarioCadastro })
            .then(usuario => {
                // Verifica se existe usuário(a) com o nome informado está cadastrado(a) no sistema.
                if (isEmpty(usuario)) {

                    response.send({ message: "Digite um nome de usuário(a) válido!" });

                } else {

                    // Captura o ID do usuário, caso já esteja cadastrada.
                    const id_usuario = JSON.parse(JSON.stringify(usuario))[0].idusuario

                    if (isEmpty(nome)) {
                        response.send({ message: "Digite o 'nome' da matéria prima!" })
                    } else if (quantidade <= 0) {
                        response.send({ message: "Digite a 'quantidade' com valor maior que zero(0)!" })
                    } else {

                        database.select("*")
                            .table("materia_prima")
                            .where({ nome: nome })
                            .then(materiaPrima => {

                                // console.log(materiaPrima);

                                // Verifica se existe matéria prima com o nome passado no request cadastrada no sistema.
                                if (isEmpty(materiaPrima)) {

                                    console.log("Matéria Prima '" + nome_materia_prima + "' não cadastrada!");

                                    // Cadastra nova matéria prima no sistema.
                                    database.insert({ nome, quantidade, usuarioCadastro })
                                        .table("materia_prima")
                                        .then(materiaPrima => {

                                            database.select("*")
                                                .table("materia_prima")
                                                .where({ nome: nome })
                                                .then(materiaPrima => {

                                                    // Captura o ID da matéria prima atual, caso já esteja cadastrada.
                                                    const id_materiaPrima = JSON.parse(JSON.stringify(materiaPrima))[0].idmateria_prima

                                                    // Cadastra informações de cadastro de matéria prima por usuário no sistema.
                                                    database.insert({ usuario_idusuario: id_usuario, materia_prima_idmateria_prima: id_materiaPrima, quantidade_cadastrada: quantidade })
                                                        .table("usuario_cadastro_materia_prima")
                                                        .then(materiaPrima => {
                                                            // console.log(data)
                                                            response.send({ message: quantidade + " unidade(s) de " + nome + "' cadastrado(s) com sucesso!" })
                                                        }).catch(error => {
                                                            console.log(error)
                                                        })
                                                }).catch(error => {
                                                    console.log(error)
                                                })

                                        }).catch(error => {
                                            console.log(error)
                                        })

                                } else {
                                    // console.log(nome + " já cadastrado!")

                                    // Captura o ID da matéria prima atual, caso já esteja cadastrada.
                                    const id_materiaPrima = JSON.parse(JSON.stringify(materiaPrima))[0].idmateria_prima

                                    // Captura a quantidade atual da matéria prima, caso já esteja cadastrada.
                                    const quantidade_atual = JSON.parse(JSON.stringify(materiaPrima))[0].quantidade
                                    // console.log(id, quantidade_atual);

                                    // Cadastra informações de cadastro de matéria prima por usuário no sistema.
                                    database.insert({ usuario_idusuario: id_usuario, materia_prima_idmateria_prima: id_materiaPrima, quantidade_cadastrada: quantidade })
                                        .table("usuario_cadastro_materia_prima")
                                        .then(materiaPrima => {
                                            // console.log(data)

                                            // Faz atualização da quantidade da matéria prima desejada.
                                            database.update({ quantidade: (quantidade_atual + quantidade) })
                                                .table("materia_prima")
                                                .where({ idmateria_prima: id_materiaPrima })
                                                .then(materiaPrima => {
                                                }).catch(error => {
                                                    console.log(error);
                                                })
                                            response.send({ message: "Quantidade de '" + nome + "' atualizada com sucesso!" })
                                        }).catch(error => {
                                            console.log(error)
                                        })
                                }
                            }).catch(error => {
                                console.log(error)
                            })
                    }
                }
            }).catch(error => {
                console.log(error)
            })
    }

    // Lista todas as matérias primas cadastradas no banco.
    listarMateriasPrimas(request, response) {
        database.select("*")
        .table("materia_prima")
        .then(materiasPrimas => {
            if (isEmpty(materiasPrimas)) {
                response.send({ message: "Nenhuma Matéria Prima cadastrada!" });
            } else {
                response.json(materiasPrimas)
            }
        }).catch(error => {
            console.log(error)
        })
    } 

    listarUmaMateriaPrima(request, response) {
        const nome_materia_prima = request.params.nome

        database.select(["mp.nome as name",
            "mp.quantidade as quantity",
            "mp.usuarioCadastro as user"])
            .table("materia_prima as mp")
            .where({ nome: nome_materia_prima })
            .then(materiaPrima => {
                if (isEmpty(materiaPrima)) {
                    response.send({ message: "Matéria Prima '" + nome_materia_prima + "' não cadastrada!" });
                } else {
                    response.json(materiaPrima)
                }
            }).catch(error => {
                console.log(error)
            })
    }

    /* // Atualiza materia prima através do id.
    atualizarMateriaPrima(request, response) {
        const id = request.params.idmateria_prima
        const { nome } = request.body

        database.update({ nome: nome })
        .table("materia_prima")
        .where({ idmateria_prima: id })
        .then(data => {
            response.json({ message: "Materia prima '" + nome + "' atualizada com sucesso!" })
        }).catch(error => {
            console.log(error);
        })
    }*/

    /* // Deleta materia prima através do id.
    deletarMateriaPrima(request, response) {
        const id = request.params.idmateria_prima

        database.where({ idmateria_prima: id })
        .del()
        .table("materia_prima")
        .then(materiaPrima => {
            response.json({ message: nome + " deletada(o) com sucesso!" })
        }).catch(error => {
            console.log(error);
        })
    }*/

    consumirMateriaPrima(request, response) {

        var quantidade_atual = 0

        const nome_materia_prima = request.params.nome
        const { quantidade, usuarioCadastro } = request.body
        //  console.log(nome, quantidade, usuarioCadastro)

        database.select("*")
            .table("usuario")
            .where({ nome: usuarioCadastro })
            .then(usuario => {
                // Verifica se existe usuário(a) com o nome informado está cadastrado(a) no sistema.
                if (isEmpty(usuario)) {

                    response.send({ message: "Digite um nome de usuário(a) válido!" });

                } else {

                    if (quantidade <= 0) {
                        response.send({ message: "Digite a 'quantidade' que irá utilizar, o valor deve ser maior que zero(0)!" })
                    } else {

                        database.select("*")
                            .table("materia_prima")
                            .where({ nome: nome_materia_prima })
                            .then(materiaPrima => {
                                // Verifica se existe matéria prima com o nome passado no request cadastrada no sistema.
                                if (isEmpty(materiaPrima)) {

                                    response.send({ message: "Matéria Prima '" + nome_materia_prima + "' não cadastrada!" });

                                } else {
                                    // console.log(nome + " já cadastrado!")

                                    // Captura o ID da matéria prima atual, caso já esteja cadastrada.
                                    const id_materiaPrima = JSON.parse(JSON.stringify(materiaPrima))[0].idmateria_prima

                                    // Captura a quantidade atual da matéria prima, caso já esteja cadastrada.
                                    quantidade_atual = JSON.parse(JSON.stringify(materiaPrima))[0].quantidade
                                    // console.log(id, quantidade_atual);

                                    // Captura o ID do usuário, caso já esteja cadastrada.
                                    const id_usuario = JSON.parse(JSON.stringify(usuario))[0].idusuario

                                    if (quantidade > quantidade_atual) {
                                        response.send({ message: "Desculpe, não temos " + quantidade + " unidades de " + nome_materia_prima + " no estoque!" })
                                    } else {

                                        // Faz atualização da quantidade da matéria prima desejada.
                                        database.update({ quantidade: (quantidade_atual - quantidade) }).table("materia_prima").where({ idmateria_prima: id_materiaPrima }).then(data => {

                                            // Cadastra informações do consumo de matéria prima por usuário no sistema.
                                            database.insert({ usuario_idusuario: id_usuario, materia_prima_idmateria_prima: id_materiaPrima, quantidade_consumida: quantidade })
                                                .table("usuario_consumo_materia_prima")
                                                .then(data => {
                                                    // console.log(data)
                                                    response.send({ message: quantidade + " unidade(s) de " + nome_materia_prima + "' consumida(s) com sucesso!" })
                                                }).catch(error => {
                                                    console.log(error)
                                                })

                                        }).catch(error => {
                                            console.log(error);
                                        })
                                    }
                                }
                            }).catch(error => {
                                console.log(error)
                            })
                    }
                }
            }).catch(error => {
                console.log(error)
            })
    }

    verificaConsumoPorPessoa(request, response) {
        const nome = request.params.nome

        database.select("*")
            .table("usuario")
            .where({ nome: nome })
            .then(usuario => {

                // console.log(usuario);

                // Verifica se existe usuário(a) com o nome informado está cadastrado(a) no sistema.
                if (isEmpty(usuario)) {

                    response.send({ message: "Digite um nome de usuário(a) válido!" });

                } else {

                    database.select(["c.idusuario_consumo_materia_prima as id",
                        "mp.nome as name",
                        "c.quantidade_consumida as quantity",
                        "u.nome as user",
                        "c.data as createdDate"])
                        .table("usuario_consumo_materia_prima as c")
                        .innerJoin("usuario as u", "u.idusuario", "c.usuario_idusuario")
                        .innerJoin("materia_prima as mp", "mp.idmateria_prima", "c.materia_prima_idmateria_prima")
                        .where("u.nome", nome)
                        .then(consumoPorUsuario => {

                            response.send(consumoPorUsuario);

                        }).catch(error => {
                            console.log(error)
                        })
                }

            }).catch(error => {
                console.log(error)
            })
    }
}

module.exports = new MateriaPrimaController()
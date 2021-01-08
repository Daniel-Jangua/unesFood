const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const { useReducer } = require('react');
const { response } = require('express');
const { Op } = require("sequelize");

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let cliente=models.Cliente;
let vendedor=models.Vendedor;
let cardapio=models.Cardapio;
let carrinho=models.Carrinho;
let pedido=models.Pedido;

/*app.get('/create',async (req,res)=>{
    let create=await cliente.create({ 
        nome: 'Lucas Parmegiani',
        cpf: '123456789',
        num_celular: '123456789',
        data_nasc: null,
        email: null,
        login: 'lucas',
        senha: '321',
        nota_avaliacao: null,
        regiao: null,
        ocupacao: null,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/read', async (req,res)=>{
    let read = await cliente.findAll({
        raw: true
    });
    console.log(read);
});

app.get('/update',async (req,res)=>{
    let update = await cliente.findByPk(1).then((response)=>{
        response.nome = 'Daniel Ricardo';
        response.senha = '123456';
        response.save();
    });
});

app.get('/delete',async (req,res)=>{
    cliente.destroy({
        where: {id: 2}
    });
});*/

app.post('/loginCli', async (req,res)=>{
    let response = await cliente.findOne({
        where: {login: req.body.login, senha: req.body.senha}
    });
    if(response == null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/loginVend', async (req,res)=>{
    let response = await vendedor.findOne({
        where: {login: req.body.login, senha: req.body.senha}
    });
    if(response == null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/buscaVend', async (req,res)=>{
    let read = null;
    if(req.body.nome != ''){
        read = await vendedor.findAll({
            //raw: true,
            where: {nome:{
                [Op.like]: '%'+ req.body.nome +'%'
            }}
        });
    }else{
        read = await vendedor.findAll({
            //raw: true
        });
    }
    if(read == null)
        res.send(JSON.stringify('nenhum'));
    else
        res.send(read);
});

app.post('/buscaCard', async (req,res)=>{
    let read = await cardapio.findAll({
        attributes: ['id', 'nome', 'vendedorId','tipo','valor','descricao'],
        where: {vendedorId: req.body.id}
    });
    res.send(read);
});

app.post('/cadCli', async (req,res)=>{
    let create = await cliente.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        num_celular: req.body.num_celular,
        data_nasc: req.body.data_nasc,
        email: req.body.email,
        login: req.body.login,
        senha: req.body.senha,
        nota_avaliacao: req.body.nota_avaliacao,
        regiao: req.body.regiao,
        ocupacao: req.body.ocupacao,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    if(create == null)
        res.send(JSON.stringify('Falha ao cadastrar cliente, confira os dados.'));
    else
        res.send(JSON.stringify('Cliente cadastrado com sucesso!'));
});

app.post('/cadVend', async (req,res)=>{
    let create = await vendedor.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        num_celular: req.body.num_celular,
        data_nasc: req.body.data_nasc,
        email: req.body.email,
        login: req.body.login,
        senha: req.body.senha,
        nota_avaliacao: req.body.nota_avaliacao,
        ra: req.body.ra,
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    if(create == null)
        res.send(JSON.stringify('Falha ao cadastrar vendedor, confira os dados.'));
    else
        res.send(JSON.stringify('Vendedor cadastrado com sucesso!'));
});

let port=process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando');
});
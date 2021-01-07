const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

let cliente=models.Cliente;
let vendedor=models.Vendedor;
let cardapio=models.Cardapio;
let carrinho=models.Carrinho;
let pedido=models.Pedido;

app.get('/create',async (req,res)=>{
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
});

let port=process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando');
});
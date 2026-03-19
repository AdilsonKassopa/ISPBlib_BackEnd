Neste projecto sera possivel:

Área de usuário
- Fazer o cadastro de usuário;
- Fazer um login;
- Criar um forum
- Comentar em forum
- subir um artigo


Área de Admin
- Cadastrar um livro
- Eliminar um livro 
- subir um tcc

Livros
- listar os livros
- Pesquisar livros
- ler livros

## BANCO DE DADOS

## Tabelas:
    - Livros
        columns:
            -id
            -titulo
            -ISBN
            -Autor
            -volume
            -ano_pub
            -sinopse
            -path_book
            -status
            -capa_livro
            -categoryid
            -createAT
            -updateAT
            

    - Users
        columns:
            -id
            -username
            -password
            -email
            -createAT
            -updateAT
    -Category
        columns:
            -id
            -nameCategory
            -descricao
            -categoriaPai
            -status
            -createAT
            -updateAT
    -Activity
        columns:
            -id
            -nameActivity
            -pathimg
            -createAT
            -updateAT

    - Forum
        columns:
            -id
            -title
            -forumText
            -userId
    
    -tcc
        columns:
            -id
            -title
            -Autor
            -Area
    

    
    - Area
        columns:
            -id
            -nameArea
    
    - Comentarios
        columns:
            -id
            -Comentario
            -userid
            -forumid


import bcrypt from "bcrypt";

export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}


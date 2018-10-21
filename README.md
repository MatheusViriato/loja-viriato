# Teste para vaga de Desenvolvedor Full-stack - Aplicação

Fiz o front-end com auxílio do bootstrap e Vue.js.

Para rodar o projeto local, só entrar na pasta do mesmo e dar um 'npm install' para instalar as dependências e depois um node app.js para subir.

Também é necessário subir o server da API local que se encontra no repositório https://github.com/MatheusViriato/loja-viriato-api, lá terá a documentação também de como rodar o projeto.

# Banco de dados

Utilizei o MySQL e populei o banco com 3 categorias de produtos, para serem pesquisadas no site:
- Cama (que pode ser pesquisada por cama/camas/quarto)
- Mesa (que pode ser pesquisada por mesa/jantar/cozinha)
- Cortina (que pode ser pesquisada por cortinas/cortina/sala)

Se caso não achar nenhuma das categorias, aparecerá "Categoria não encontrada".

Se você apagar o input pesquisa e der um "Enter", listará todos os produtos novamente.
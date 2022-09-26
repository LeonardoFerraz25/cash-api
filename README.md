
# Cash API

API REST que armazena e busca dados em um servidor MySQL, que permitir realizar a gestão de receitas e despesas pessoais!


## Instalação

- Clone este repositorio

- Instale com npm:

```bash
  npm install
```
- Altere o `.env-exaple` para `.env` com suas variaveis de configuração do banco de dados

- Rode o comando :
```bash
  docker-compose up -D
```

- E inicie com o :
```bash
  npm start
```
## Documentação da API

#### Retorna todos as pessoas

```http
  GET /people
```


#### Retorna uma pessoa pelo ID

```http
  GET /people/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa que você quer |

#### Cadastrar um nova pessoa

```http
  POST /people
```
exemplo de requisição: 

```javascript
{
  "firstName": "Luke",
  "lastName": "Skywalker",
  "email": "luke.skywalker@trybe.com",
  "phone": "851 678 4453"
}
```

#### Editar uma pessoa

```http
  PUT /people
```
exemplo de requisição: 

```javascript
{
  "firstName": "Lucão",
  "lastName": "Andarilho das estrelas",
  "email": "lucao.andarilho@trybe.com",
  "phone": "851 678 4453"
}
```
#### Deletar uma pessoa pelo ID

```http
  DELETE /people/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa que você quer excluir|



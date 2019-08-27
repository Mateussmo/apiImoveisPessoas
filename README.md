# apiPessoasImoveis

Api feita em Node.js com o PostgreSQL

Para instalar as dependências utilize o _npm install_  
Para rodar o server utilize _npm run dev_

Foi criado um usuário no BD com o nome de Mateus, habilite para as tabelas criadas o acesso a esse usuário.

_Para acesso ao banco de dados:_  
_Nome do Database: nodeapi, senha: 1234_

_Na pasta *imgs* no projeto possui imagens de testes realizados via postman._

_obs: O server está rodando na porta 3001._

# Registro de usuário

_Rota: http://localhost:3001/register_  
O usuário primeiro deve se cadastrar na API. Para isso ele deve informar os seguintes campos: _name_, _email_ e _password_. Todos são strings. A senha do usuário é encriptada, para isso foi utilizado o Bcryptjs.

![Registro](https://user-images.githubusercontent.com/26530039/63638937-962be880-c664-11e9-9ea8-a0d01047b167.png)

# Autenticação do usuário

_Rota:http://localhost:3001/register/authenticate_

Após esse procedimento é gerado o token, salve o token é coloque no Header das próximas rotas. A imagem seguinte mostra como esse procedimento deve ser realizado.

![autenticacao](https://user-images.githubusercontent.com/26530039/63639164-b65ca700-c666-11e9-9639-3ed96fea393a.png)

Com o token inserido no header, utilize o email e password, para se autenticar na API.

![autenticacao1](https://user-images.githubusercontent.com/26530039/63639212-181d1100-c667-11e9-8bfd-c15782e4af79.png)

# Cadastro de Pessoas

_Rota:http://localhost:3001/pessoas_

_obs: Informe o token no header novamente._

![pessoas](https://user-images.githubusercontent.com/26530039/63639322-1ef85380-c668-11e9-8450-e96d4444aab1.png)

Com o Token no header, insira as informações da pessoa.  
_As informações são:_  
_name_: _string_  
_lastname_: _string_  
_cpf_: _string_  
_birthday_: _string_  
_phone_:_string_  
_state_:_string_  
_city_:_string_

![pessoas1](https://user-images.githubusercontent.com/26530039/63639423-384dcf80-c669-11e9-9748-9d7c9bcbfdb5.png)

# Cadastro de Imóveis

_Rota:http://localhost:3001/imoveis_

_obs: Informe o token no header novamente._

![imoveis](https://user-images.githubusercontent.com/26530039/63639445-85ca3c80-c669-11e9-9c04-34069b4cd255.png)

Após isso insira as informações de acordo a imagem abaixo.

![imoveis1](https://user-images.githubusercontent.com/26530039/63639483-e8bbd380-c669-11e9-94ce-8f07bf80576b.png)  
_As informações e os seus tipos, são:_  
_title_: _string_  
_description_: _string_  
_offerType_: _string_  
_immobileType_: _string_  
_value_:_Number_  
_numberDormitory_:_Number_  
_hasGarage_:_boolean_(true or false)  
_city_: _string_  
_street_:_string_  
_neighborhood_:_string_  
_houseNumber_:_string_  
_state_: _string_  
_people_:_ObjectId_

# Atualização de Imóveis

_Rota:http://localhost:3001/imoveis/IDIMOVEL_

O procedimento é parecido com o cadastro de imóveis, somente algumas validações a mais foram implementadas.

![Put_IMOVEIS](https://user-images.githubusercontent.com/26530039/63639556-06d60380-c66b-11e9-9d83-505aacbfcd81.png)

# Outras Rotas adicionadas

_Rota - Get - Pessoas: http://localhost:3001/pessoas_

_Rota - Get - Pelo id - Pessoas: http://localhost:3001/pessoas/IDPESSOAS_

_Rota - Get - Imoveis: http://localhost:3001/imoveis_

Com isso é criado o relacionamento entre as tabelas users e peoples(Salvando o ID do user em People) e também entre peoples e immobiles (Salvando o ID de uma ou mais peoples e do immobiles em uma nova tabela chamada immobilesPeoples).

Para mais informações: _mateusmoreirav@gmail.com_

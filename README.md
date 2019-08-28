# apiImoveisPessoas

Api feita em Node.js com o PostgreSQL

Para instalar as dependências utilize o _npm install_  
Para rodar o server utilize _npm run dev_

Foi criado um usuário no BD com o nome de Mateus, habilite para as tabelas criadas o acesso a esse usuário.

_Para acesso ao banco de dados:_  
_O arquivo nodeapi.sql é um backup do banco de dados._  

_Nome do Database: nodeapi, senha: 1234_

_Na pasta *imgs* no projeto possui imagens de testes realizados via postman._

_obs: O server está rodando na porta 3001._

# Registro de usuário

_Rota: http://localhost:3001/register_  
O usuário primeiro deve se cadastrar na API. Para isso ele deve informar os seguintes campos: _name_, _email_ e _password_. Todos são strings. A senha do usuário é encriptada, para isso foi utilizado o Bcryptjs.

Exemplo:  

![Registro](https://user-images.githubusercontent.com/26530039/63816455-90593000-c90e-11e9-935d-fadc2ec92c0b.png)  




# Autenticação do usuário

_Rota:http://localhost:3001/register/authenticate_

Após esse procedimento é gerado o token, salve o token e coloque no Header das próximas rotas. A imagem seguinte mostra como esse procedimento deve ser realizado.


![autenticacao](https://user-images.githubusercontent.com/26530039/63816539-f47bf400-c90e-11e9-8b8f-3c915aa64138.png)



Com o token inserido no header, utilize o email e password, para se autenticar na API.

![autenticacao1](https://user-images.githubusercontent.com/26530039/63816593-2beaa080-c90f-11e9-9b36-06c905165edc.png)


# Cadastro de Pessoas

_Rota:http://localhost:3001/pessoas_

_obs: Informe o token no header novamente._

![pessoas](https://user-images.githubusercontent.com/26530039/63816643-5ccad580-c90f-11e9-8d09-d79946f6d34e.png)


Com o Token no header, insira as informações da pessoa.  
_As informações são:_  
_name_: _string_  
_lastname_: _string_  
_cpf_: _string_  
_birthday_: _string_  
_phone_:_string_  
_state_:_string_  
_city_:_string_

![pessoas1](https://user-images.githubusercontent.com/26530039/63816628-4b81c900-c90f-11e9-9789-64da7700ad76.png)


# Cadastro de Imóveis

_Rota:http://localhost:3001/imoveis_

_obs: Informe o token no header novamente._



Após isso insira as informações de acordo a imagem abaixo.

![imoveis](https://user-images.githubusercontent.com/26530039/63816664-73712c80-c90f-11e9-93f6-2a3e50f47c19.png)  

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

![Put_IMOVEIS](https://user-images.githubusercontent.com/26530039/63816730-b16e5080-c90f-11e9-8a84-ccad724677b8.png)


# Outras Rotas adicionadas

_Rota - Get - Pessoas: http://localhost:3001/pessoas_
  
_Rota - Delete - Pessoas: http://localhost:3001/pessoas/IDPESSOAS_  

_Rota - PUT - Pessoas: http://localhost:3001/pessoas/IDPESSOAS_  

_Rota - Get - IMOVEIS: http://localhost:3001/imoveis_
  
_Rota - Delete - Pessoas: http://localhost:3001/imoveis/IDIMOVEIS_  

_Rota - PUT - Pessoas: http://localhost:3001/imoveis/IDIMOVEIS_  

Com isso é criado o relacionamento entre as tabelas users e peoples(Salvando o ID do user em People) e também entre peoples e immobiles (Salvando o ID de uma ou mais peoples e do immobiles em uma nova tabela chamada immobilesPeoples).

Para mais informações: _mateusmoreirav@gmail.com_

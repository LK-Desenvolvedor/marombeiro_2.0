API  para cadastro de usuários e login utilizando JWT.
2. Como Usar a API

Cadastro de Usuário:
Rota: [/register](http://localhost:3000/auth/register)
Método: POST
Corpo da Solicitação: JSON contendo name, email e password.
Resposta: "message": "Conta registrada com sucesso!" ou "message": "Erro de cadastro: Email ou senha já existem"

Login de Usuário:
Rota: [/login](http://localhost:3000/auth/login)
Método: POST
Corpo da Solicitação: JSON contendo email e password.
Resposta: Token.


3. Testes Realizados
Descreva os testes que foram realizados na sua API e os resultados obtidos. Por exemplo:

Teste de Registro de Usuário: Foram feitas solicitações para a rota de registro com dados válidos e inválidos. Verificou-se se os usuários foram corretamente cadastrados e se foram retornadas mensagens de erro em caso de dados inválidos.
Teste de Login de Usuário: Foram feitas solicitações para a rota de login com credenciais válidas e inválidas. Verificou-se se foram gerados tokens JWT corretamente após o login e se foram retornadas mensagens de erro em caso de credenciais inválidas.

4. Tecnologias Utilizadas
Liste as tecnologias principais utilizadas no desenvolvimento da sua API. Por exemplo:

Node.js
Express.js
MongoDB
JSON Web Tokens (JWT)
bcrypt (para hash de senhas)
5. Instalação e Execução Local
Forneça instruções sobre como instalar e executar sua API localmente. Isso pode incluir comandos como npm install para instalar as dependências e npm start para iniciar o servidor.

5. Necessário

.env - Não foi subido
Node modules
mongoose
bcrypt
express

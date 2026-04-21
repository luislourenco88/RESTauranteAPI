# RESTauranteAPI

## Objetivo da atividade

O **Restaurante do Andrade**, conhecido pelo bom atendimento e pela alta rotatividade de clientes, enfrenta um problema recorrente: a falta de controle eficiente sobre a ocupação das mesas. Em horários de pico, os funcionários têm dificuldade para identificar rapidamente quais mesas estão livres ou reservadas, o que gera atrasos no atendimento e possíveis conflitos na organização do salão.

Diante desse cenário, o proprietário solicitou o desenvolvimento de um **sistema simples de reserva de mesas**, que permita visualizar, em tempo real, o status de cada mesa do restaurante. A proposta é criar uma solução web integrada, capaz de comunicar o front-end com uma API, possibilitando reservar e liberar mesas de forma prática e organizada.


Você irá:

Criar uma API REST no MockAPI
Popular os dados das mesas
Conectar essa API ao sistema web do restaurante (front-end já pronto)

### PARTE 1 — Criar a API
Passo 1: Acessar a plataforma
Entre em: https://mockapi.io/
Faça login (Google ou GitHub)

### Passo 2: Criar um projeto
Clique em "Create new project"
Dê um nome, por exemplo:

```
restaurante-api
```

### Passo 3: Criar o recurso (resource)
Clique em "Create Resource"
Nome do recurso:
mesas

### Passo 4: Criar os campos

Adicione os seguintes campos:

Campo	Tipo
id	(automático)
quantidadeLugares	number
status	string

### Passo 5: Criar 20 registros

Clique em "Create new" e adicione manualmente:

```JSON
Exemplo: 
{
  "quantidadeLugares": 4,
  "status": "livre"
}
```
Repita até ter 20 mesas

💡 Sugestão:

Alterne quantidade de lugares: 2, 4, 6
Todas começam como "livre"

### Passo 6: Obter o endpoint
Copie o endpoint e insira no código javascript

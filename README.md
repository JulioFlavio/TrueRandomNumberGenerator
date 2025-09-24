# True Random Number Generator

Este projeto tem como base a criação de um **conector** para o <a href="n8n.io">n8n</a>, uma plataforma de automação que conta com o uso de inteligencia artificial. O objetivo deste conector é gerar para o usuário um número aleatório entre dois valores, **minimo** e **máximo**, utilizando a API do <a href="Random.org">Random.org</a> como base.

---

## 📂 Estrutura de Pastas

```
  TrueRandomNumberGenerator/
  │
  ├── src/                 
  │   ├── nodes/          # Rotas da API
  │   │   └── RandomNumber/
  │   │       └── RandomNumber.node.ts
  │   └── index.ts
  │
  ├── icons/
  │   └── RandomNumber.svg
  ├── .env                 # Variáveis de ambiente (opcional)
  ├── .gitignore           # Arquivos/pastas ignorados pelo Git
  ├── docker-compose.yaml
  ├── package.json
  ├── package-lock.json
  └── README.md            # Documentação do projeto
```

---

## 🚀 Como executar o projeto

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) (v18 ou superior recomendado)
- [npm](https://www.npmjs.com/) (vem junto com o Node)

Verifique se estão instalados:
```bash
node -v
npm -v
```

---

### 2. Instalar dependências
Após clonar ou copiar o projeto para sua máquina:

```bash
cd meu-projeto
npm install
```

Isso cria a pasta `node_modules/` automaticamente.

---

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
```

---

### 4. Rodar o servidor
```bash
npm start
```

Se você não tiver configurado um script no `package.json`, rode direto com:
```bash
node src/server.js
```

---

### 5. Testar no navegador
Abra no navegador ou no Postman:
```
http://localhost:3000
```

Deve aparecer a resposta **Hello World!** (ou outra mensagem que você definir).

---

## 🛠 Scripts úteis

- `npm install express` → instala o Express
- `npm start` → inicia o servidor
- `npm run dev` → inicia em modo desenvolvimento (se usar o nodemon)

---

## 📌 Observações
- A pasta `node_modules/` **não deve ser enviada para o GitHub** (já está no `.gitignore`).
- Para instalar dependências em outra máquina, basta rodar `npm install` que o `package.json` cuida disso.

---

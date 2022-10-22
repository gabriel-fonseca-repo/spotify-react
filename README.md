# Spotify react
App clone do spotify desenvolvido com o framework React.js para a disciplina de Desenvolvimento Web da unifor.

# Start React
```bash
npm start
```

# Start Json server

Esse comando vai inicializar o json-server na porta 4000, invés da 3000, na qual ele vem por padrão, pois essa porta já é ocupada pelo React. Rodar esse comando antes do npm start. OBS: precisa instalar o json-server globalmente antes

```bash
npm i json-server -g
json-server.cmd -p 4000 .\src\data\db.json
```
# Figma Enterprise Plugin

## Development guide


### Pré-requisitos

- [Node.js](https://nodejs.org) – v18
- [Figma desktop app](https://figma.com/downloads/)

### Build the plugin

Rodar ambiente de desenvolvimento:

```
$ npm run build
```

Isso irá gerar o arquivo [`manifest.json`](https://figma.com/plugin-docs/manifest/) e o diretório  `build/` contendo the bundle(s) de JavaScript necessários para o Plugin.

Para assistir as mudanças enquanto coda e buildar o plugin automaticamente: 

```
$ npm run watch
```

### Install the plugin

1. No Figma desktop app, inicie qualquer arquivo.
2. Busque por pluginsns e rode `Importar plugin a partir do manifest.json` na aba de navegação disponível do plugin.
3. Selecione o arquivo `manifest.json` que foi gerado após o `build`.

### Debugging

Use `console.log` para insecionar valores no seu código

Para abrir o developer console, busque por `Open Console` na aba de desenvolvimento de plugins




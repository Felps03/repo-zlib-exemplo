# README - Uso do Módulo zlib no Node.js

Este repositório contém um exemplo de aplicação Node.js que utiliza o módulo zlib para comprimir dados JSON antes de enviá-los como resposta HTTP. O código demonstra como você pode aproveitar a compressão de dados para otimizar a transferência de dados em uma aplicação web.

## Sobre o Módulo zlib

O módulo `zlib` é uma parte integrada do Node.js que fornece funcionalidades de compressão e descompressão de dados. Ele suporta diferentes algoritmos de compressão, como gzip e deflate, que podem ser úteis para reduzir o tamanho dos dados antes de enviá-los pela rede. Isso é especialmente importante em aplicações web, onde a otimização de recursos é fundamental para o desempenho.

## Como o Código Funciona

O código neste repositório é um servidor Express simples que expõe um endpoint `"/dados-distritos"`. Quando um cliente faz uma solicitação para esse endpoint, o servidor realiza as seguintes ações:

1. Faz uma solicitação HTTP para o URL da API do IBGE para obter dados de distritos.

2. Verifica se o cliente suporta codificação gzip, com base no cabeçalho `accept-encoding` da solicitação.

3. Se o cliente suportar gzip, os dados JSON obtidos são comprimidos usando o módulo `zlib` e enviados como uma resposta com o cabeçalho "Content-Encoding" definido como "gzip".

4. Se o cliente não suportar gzip, os dados JSON são enviados como resposta normal sem compressão.

## Como Usar Este Código

Para usar este código em sua própria aplicação Node.js, siga estas etapas:

1. Clone este repositório em seu ambiente de desenvolvimento:

   ```
   git clone https://github.com/Felps03/repo-zlib-exemplo.git
   ```

2. Instale as dependências necessárias:

   ```
   npm install
   ```

3. Inicie o servidor Express:

   ```
   npm start
   ```

4. O servidor estará em execução na porta 3000. Você pode acessar o endpoint `"/dados-distritos"` em `http://localhost:3000/dados-distritos` para ver a compressão em ação.

## Contribuições e Melhorias

Sinta-se à vontade para contribuir com melhorias ou correções para este exemplo. Você pode abrir issues para relatar problemas ou enviar pull requests com suas melhorias.

## Licença

Este código está licenciado sob a [Licença MIT](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo de acordo com suas necessidades.# repo-zlib-exemplo
# repo-zlib-exemplo

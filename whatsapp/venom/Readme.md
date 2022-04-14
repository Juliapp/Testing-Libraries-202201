# Venom-bot https://github.com/orkestral/venom

- Funcionou!
- Usa puppeteer 
- Demora para baixar os pacotes necessários para deixar a sessão em pé 
- Uma vez colocado o QRCode ele fica salvo no diretório `tokens/session` em disco, então o servidor pode reeniciar que, caso o token seja válido ele poderá reeniciar
- A `token/session` fica pesada (108MB), e eu não tenho certeza do quanto essa pasta vai ficando grande no uso cotidiano dela. É recomendado fazer um teste de estresse pra checar isso.
- Deve ser feito o teste em ambiente de build pra ver como ele se comporta

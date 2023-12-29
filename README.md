# RouterState

Se você está familiarizado com o desenvolvimento em Angular 2+ , é provável que já tenha enfrentado o desafio de navegar entre diferentes rotas dentro do aplicativo e a necessidade de compartilhar dados entre componentes. Existem várias abordagens para lidar com esse processo, e eu gostaria de destacar o uso do Router State como uma opção eficaz.

Ao utilizar os métodos navigate ou navigateByUrl, é possível aproveitar o objeto Navigate.extras. Este objeto inclui o parâmetro state, que pode receber qualquer tipo de dado (any). Dessa forma, é possível transmitir informações relevantes, conforme ilustrado na imagem abaixo.

No componente de destino da rota, para recuperar esses dados, basta acessá-los através de window.history.state. Uma vantagem notável é que mesmo se a página for atualizada, as informações permanecerão acessíveis no history.state.

Essa abordagem oferece uma solução robusta para o compartilhamento de dados entre componentes em rotas diferentes, proporcionando uma experiência consistente, mesmo em cenários de atualização de página. #Angular #DesenvolvimentoWeb #RouterStat
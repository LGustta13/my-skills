<p align="center">
  <img src="images/mySkills.png" height="250">
  <h2 align="center">mySkills - app desenvolvido pelo React Native</h2>
  <p align="center">Aplicação que registra todas as habilidades adquiridas pelo usuário em seus estudos<p>
  
  <p align="center">
    <a href="https://www.instagram.com/react_100native/">
    	<img src="https://img.shields.io/badge/-My_Instagram-blue" alt="sobre" />
    </a>
    <a href="https://www.linkedin.com/in/luis-gusta-oliveira/">
    	<img src="https://img.shields.io/badge/-My_Linkedin-blue" alt="sobre" />
    </a>
  </p>
</p>

<br>

<p align="center">
	<sub>
		<i>A documentação a seguir será postada em Inglês em breve!</i>
	</sub>
</p>

<br>

## Sumário

- [INICIALIZANDO O PROJETO PELO REACT NATIVE](#Inicio)
- [O QUE SABER ANTES DE COMEÇAR?](#Saber)
- [ESTRUTURA DA PASTA DO PROJETO](#Estrutura)
- [TYPESCRIPT](#Type)
- [EXECUÇÃO NOS EMULADORES](#Emulador)
- [GERANDO APK](#Apk)
- [FUNCIONAMENTO DA APLICAÇÃO](#Funcionamento)

<div id='Inicio'/>

## Inicializando o projeto pelo React Native

O React Js é um framework baseado em JavaScript que facilita o desenvolvimento de interfaces para aplicações web e dispositivos móveis, de forma escalonável (dividido em etapas e níveis), onde a renderização do código é mais rápida, leve e menor, uma vez que o .jsx (JS e XML) realiza esse procedimento. 

O [React Native](https://reactnative.dev/docs/tutorial) é um framework React criado pelo Facebook e direcionado para dispositivos móveis tanto para interfaces nativas Android ou IOS. 

Seguindo as recomendações de preparação do ambiente de desenvolvimento pela [Rocketseat](https://react-native.rocketseat.dev/), instalar ou atualizar: 
- Chocolatey (para instalação de ferramentas e dependências no Windows)
- NPM (gerenciador de pacotes do Node.js)
- Yarn (instalação de pacotes e dependências de códigos prontos para uso)
- Node.js (ambiente de execução Javascript server-side)
- JDK11 (pacote disponibilizado pela Oracle para o desenvolvimento de jogos e programas para a plataforma Java) 

<br>

<div id='Saber'/>

## O que saber antes de começar?

Criando um novo projeto React Native pelo CLI

	npx react-native init <nome_do_projeto>

Para executar o metro no nodeJS

	yarn start   
	
Para rodar a aplicação no dispositivo físico ou emulador

	yarn android
	yarn ios

O React Native utiliza componentes nativos ao invés de componentes web. Portanto, no cabeçalho de cada arquivo .tsx importa-se o React para poder utilizar o JSX, além também de outros componentes como View e Text. Algo comum é a criação constante de vários componentes simples ou funcionais que são customizados por diferentes parâmetros.

Se necessário modificar algum componente em resposta à alguma ação, deve-se ter conhecimento de estados. Diferente de propriedades, são variáveis controladas internamente pelo componente utilizando o conceito de hooks, justamente porque o JavaScript não é muito intuitivo com classes, e sim com programação funcional (- classes, + funções, [exemplo aqui](https://reactnative.dev/docs/tutorial)).

<br>

<div id='Estrutura'/>

## Estrutura da pasta do projeto

- _tests_: Pasta com arquivo de configuração para a aplicação de testes, utiliza-se da ferramenta jest. 
- .vscode: apresenta informações de configuração do ambiente de desenvolvimento, neste caso o vsCode.
- android: todo o projeto desenvolvido pelo react native é apresentado nativamente na pasta android para o dispositivo em questão. Observa-se a criação da pasta java, assim como o manifesto com as configurações.
- ios: os arquivos também são gerados nativamente para ios, conforme visto ao android.
- node_modules: como o node.js é usado no backend para o projeto, suas dependências e pacotes se encontram dentro desta pasta. Por padrão já são instaladas algumas bibliotecas do ecossistema React.
- buckconfig: é um sistema de compilação (build) criado pelo Facebook para aprimorar o desempenho no desenvolvimento multiplataforma, pode ser comparado ao gradle no Java.
- .eslintrc.js: arquivo de configuração para uma ferramenta chamada ESLINT, no qual é gerado para realizar uma varredura no código para buscar algo fora do padrão (code Style), como por exemplo o airbnb. Há um comando no package.json onde excuta-se o lint para a varredura. 
- .flowconfig: é um verificador de tipagem para o JavaScript. Para melhores configurações deve-se adicionar os arquivos prettier e eslint.
- .prettierrc.js: Arquivo configurado para lidar com formatação e estilo de código dentro de algum padrão.  Enquanto o Eslint encontra os erros, o prettier executa a correção.
- .watchmanconfig: é configurado para sempre ficar observando as mudanças que são feitas no código e gravá-las, antes de aplicar a tal mudança.
- App.tsx: arquivo principal com os componentes em JSX que rodarão na aplicação.
- app.json: apresenta informações relacionadas a aplicação, como o nome do projeto
- babel.config.js: o babel é um compilador Javascript que converte códigos em ECMAScript em uma versão compatível do JS para o browser ou ambientes atuais e antigos. O Babel pode converter sintaxes em JSX, conforme este exemplo.
- index.js: arquivo que registra qual interface deve abrir primeiramente na aplicação (por padrão abre-se o App.js)
- metro.config.js: realiza o empacotamento do JavaScript para ser interpretado pelo Jscore e transformado em código tanto para Android quanto para IOS. Foca principalmente no fast refresh e no bundle (empacotamento) para o React Native
- package.json:  Arquivo criado pelo NPM com configurações relacionadas as dependências de desenvolvimento, de produção e scripts de inicialização. Principalmente, ele lista todas as dependências necessárias e suas versões para desenvolver a aplicação.
- yarn.lock: basicamente registra todas as dependências que o projeto necessita quando as instalações forem realizadas pelo yarn CLI, sendo assim necessário além do package.json.
- Gemfile: formato de arquivo que descreve as dependências necessárias para executar um código em Ruby
- components: onde todos os componentes serão criados e alocados para uso dentro da aplicação.
- screens: contêm todas as páginas da aplicação, é separada com o nome da página na pasta, direcionando para um arquivo index.js e seu próprio arquivo de estilização (style.js).


<div id='Type'/>

## TypeScript

<div id='Emulador'/>

## Execução nos Emuladores

<div id='Apk'/>

## Gerando APK

<div id='Funcionamento'/>

## Funcionamento da aplicação

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
    <a href="https://web.dio.me/users/LGustta13">
    	<img src="https://img.shields.io/badge/-My%20DIO%20Profile-blue" alt="sobre" />
    </a>
  </p>
</p>

<p align="center">
	<sub>
		<i>A documentação a seguir será postada em Inglês em breve!</i>
	</sub>
</p>

<br>

## Sumário

- [FUNCIONAMENTO DA APLICAÇÃO](#Funcionamento)
- [INICIALIZANDO O PROJETO PELO REACT NATIVE](#Inicio)
- [O QUE SABER ANTES DE COMEÇAR?](#Saber)
- [ESTRUTURA DE PASTAS DO PROJETO](#Estrutura)
- [TYPESCRIPT](#Type)
- [CONFIGURANDO OS EMULADORES](#Emulador)
- [GERANDO APK](#Apk)

<br>

<div id='Funcionamento'/>
	
## Funcionamento da aplicação
	
<p align="center">
  <img src="images/Home.jpg" height="500">
  <img src="images/Add skill.jpg" height="500">
  <img src="images/Delete skill.jpg" height="500">
  <img src="images/Skill list.jpg" height="500">
</p>

<br>

Basicamente, a aplicação registra qualquer texto que for inserido no campo _Insira aqui a skill_, pensado de forma que qualquer pessoa possa inserir habilidades estudadas, ou mesmo criar cards, e a aplicação salva estas informações. Por enquanto é possível inserir cards e deletar, porém novas features já estão a caminho!

<br>

<div id='Inicio'/>

## Inicializando o projeto pelo React Native

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
	
Caso este projeta seja clonado, executar para baixar todas as dependências

    yarn

<br>

<div id='Estrutura'/>

## Estrutura de pastas do projeto

- **android**: todo o projeto desenvolvido pelo react native é apresentado nativamente na pasta android para o dispositivo em questão.
- **ios**: os arquivos também são gerados nativamente para ios, conforme visto ao android.
- **buckconfig**: é um sistema de compilação (build) para aprimorar o desempenho no desenvolvimento multiplataforma.
- **.eslintrc.js**: é gerado para realizar uma varredura no código para buscar algo fora do padrão (code Style)
- **.flowconfig**: é um verificador de tipagem para o JavaScript.
- **.prettierrc.js**: lida com formatação e estilo de código dentro de algum padrão. Enquanto o Eslint encontra os erros, o prettier executa a correção.
- **.watchmanconfig**: é configurado para sempre ficar observando as mudanças que são feitas no código e gravá-las antes de aplicar a tal mudança.
- **App.tsx**: arquivo principal com os componentes em JSX que rodarão na aplicação.
- **app.json**: apresenta informações relacionadas a aplicação.
- **babel.config.js**: é um compilador Javascript que converte códigos em ECMAScript em uma versão compatível do JS para o browser ou ambientes atuais e antigos.
- **index.js**: arquivo que registra qual interface deve abrir primeiramente na aplicação (por padrão abre-se o App.js)
- **metro.config.js**: realiza o empacotamento do JavaScript para ser interpretado pelo Jscore e transformado em código tanto para Android quanto para IOS.
- **package.json**:  Arquivo criado pelo NPM com configurações relacionadas as dependências de desenvolvimento, de produção e scripts de inicialização.
- **yarn.lock**: registra todas as dependências que o projeto necessita quando as instalações forem realizadas pelo yarn CLI.
- **components**: onde todos os componentes serão criados e alocados para uso dentro da aplicação.
- **pages**: contêm todas as páginas da aplicação.

<br>

<div id='Type'/>

## TypeScript

O [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) é um superset de tipagem para o JavaScript, podendo ser usado em componentes e objetos. Não é muito intuitivo mas em grandes proporções é um facilitador para não se perder no projeto por conta de tipagem.

Configurando o TypeScript em um projeto React Native do zero

	npx react-native init <MyApp> --template react-native-template-typescript
	
Configurando o TypeScript em um projeto React Native em andamento

	yarn add -D typescript @types/react @types/react-native

Para o segundo caso, deve-se criar o seguinte arquivo de configuração `tsconfig.json`

	{
  		"compilerOptions": {
			    "allowJs": true,
			    "allowSyntheticDefaultImports": true,
			    "esModuleInterop": true,
			    "isolatedModules": true,
			    "jsx": "react-native",
			    "lib": ["es2017"],
			    "moduleResolution": "node",
			    "noEmit": true,
			    "strict": true,
			    "target": "esnext"
  		},
		"exclude": [
			    "node_modules",
			    "babel.config.js",
			    "metro.config.js",
			    "jest.config.js"
  		]
	}

<br>

<div id='Emulador'/>

## Configurando os emuladores

Como mencionado, deve-se abrir [dois terminais](#Saber): um para executar o Metro Bundler e outro para executar a aplicação. 

Para que a aplicação rode no emulador, deve-se configurar no [Android Studio](https://react-native.rocketseat.dev/android/emulador) anteriormente, e para rodar no [dispositivo físico](https://react-native.rocketseat.dev/usb/android) (Android ou IOS), deve-se configurar o mesmo. 

Para funcionar corretamente, o Metro Bundler deve estar sempre rodando, ou se não o Android ou IOS não reconhecem o JSX. Assim que os emuladores ou dispositivos estiverem em execução, digitando o seguinte comando e adicionando o diretório nas variáveis de ambiente do Windows em Path é possível visualizar quais dispositivos estão conectados

	adb devices
	
	_%ANDROID_HOME%\platform-tools_

<br>

<div id='Apk'/>

## Gerando APK

Segundo a [documentação do React Native](https://reactnative.dev/docs/signed-apk-android), deve-se ter conhecimento de que o sitema Android obriga qua a aplicação tenha uma assinatura digital com um certificado, permitindo sua instalação no dispositivo. Para a PlayStore é necessário uma chave de lançamento (release), no qual também é utilizada para atualizações futuras, mas não vem ao caso por enquanto.

<p align="center">
  <img src="https://developer.android.com/studio/images/publish/appsigning_googleplayappsigningdiagram_2x.png?hl=pt-br" height="180">
</p>

Seguir os seguintes passos para gerar uma chave de assinatura no Windows:

Utilizar a _keytool_ no CMD

	cd C:\Program Files\Java\jdkx.x.x_x\bin
	keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

Colocar a chave no diretório do prórpio projeto

	cd android/app
	
Editar o arquivo _gradle.properties_ adicionando

	cd android/gradle.properties
	
	MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
	MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
	MYAPP_UPLOAD_STORE_PASSWORD=*****
	MYAPP_UPLOAD_KEY_PASSWORD=*****
	
Editar o arquivo _build.gradle_ adicionando

	cd android/app/build.gradle
	
	...
	android {
	    ...
	    defaultConfig { ... }
	    signingConfigs {
		release {
		    if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
			storeFile file(MYAPP_UPLOAD_STORE_FILE)
			storePassword MYAPP_UPLOAD_STORE_PASSWORD
			keyAlias MYAPP_UPLOAD_KEY_ALIAS
			keyPassword MYAPP_UPLOAD_KEY_PASSWORD
		    }
		}
	    }
	    buildTypes {
		release {
		    ...
		    signingConfig signingConfigs.release
		}
	    }
	}
	...

Executar o comando para empacotar a aplicação

	cd android
	gradlew bundleRelease

Executar o comando na raiz do projeto para gerar a APK

	npx react-native run-android --variant=release

Com a release no seu dispositivo móvel, basta somente abrir e utilizar a aplicação! 💜
<br>

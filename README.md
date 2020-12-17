# qr-code-project
qr code dummy project

Steps
1. checkout both projects (this and qr-code-plugin project)

2. Run following commands to build the plugin

* $ cd ./qr-code-reader

* $ npm run build

3. Then Run following commands to setup the dummy project

* $ cd ../qr-code-project

* $ npm i ../qr-code-reader

* $ ionic build

* $ npx cap update ios

* $ npx cap copy

* $ npx cap open ios

# Kuby

## Initialization:
$ git clone "url"

$ npm install

Copy Google Maps key into .env:

Create .env file (or cp .env.test .env) and write line:

GOOGLE_MAPS_API_KEY="your key"

$ cd node_modules/react-native-maps/lib/android

$ nano build.gradle  --> insert line 20: def supportLibVersion = safeExtGet('supportLibVersion', '28.0.0')


## Run:
--- Instruccions per executar l'app Kuby ---

** SERVER **
1. Obrir DB:
        $ mongod -dbpath /Users/Dani/Desktop/data/db
2. Iniciar servidor
        $ cd kubyServer
        $ node server.js

** APP **
Amb mòbil connectat en mode debugging
3. Executar app
        $ cd Kuby
        $ react-native run-android
        
        

# Fermat

Fermat is a powerful native number theory library for Clojurescript.

## Overview

Fermat is a native nuber theory library for Clojurescript. Fermat is currently under production 
but the functions it can do now are:
* Modular arithmatic (i.e. Modular Exponentiation, Modular Inverse, Chinese Remaineder Theorem)
* Primality testing and generation.
* Factorization.
Planned additions include:
* Discrete logrithms. 

## Setup
Put this into your projects.clj dependencies.
```
[fermat "0.1.0"]
```
To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
# fermat

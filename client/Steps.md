# Steps

**Install dendencies**

| Dependency | Command |
| - | - |
| react | npm i react |
| react-dom | npm i react-dom |

Note: This is not the final list. I will add dependencies as and when required.

Install dev dependencies

| Dependency | Command |
| - | - |
| typescript | `npm i -D typescript` |
| react types | `npm i -D @types/react @types/react-dom` |

Note:
I am installing only react & reactDOM as main depnendency cause we don't want typescript as our main dependeny it is just a development tool and not a project dependency. The typescript will convert your .ts/.tsx files into .js file using typescript compiler. This .js file contains your project dependencies(react & reactDOM for the moment ) and your code files(react components for the moment and later your server files) which will be served by your server. Thus, we don't require typescript when publishing the final output.

Again this is not final list of dev dependencies I will add it as and when required.

**Setup .gitignore**

Add `.gitignore` file to root directory. We want few folders/ files not be part of our git repository, thus setting up .gitignore. For now I will add only node_modules, going forward may add few more things. I will mention those file as and when required.

**Setup tsconfig**

Add `tsconfig.json` file into your root diretory. This will tell typescript compiler, how the output should look like. Checkout the config file for more details.

**Setup linting**

Add  linting to your project. This will keep your code in check for readability, maintainability and functionality errors. Initially I was planning on using tslint but they have roadmap to deprecate tslint and use eslint for both javascript and typescript.

In order to add eslinting add following dependencies

`npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks`

Add `.eslintrc.js` in your root diretory. Checkout file for more details.

Add `.eslintignore` in your root directory. Checkout file for more details.

make sure that you have eslint extention enabled.

**Sample Test**

Add test.ts files and check the compiler works as expectd.

**Reconfigure .gitignore**

.gitgnore: add dist & .vscode folder to list of gitignore

Completed typescript setup

---

**Setup React**

Remove the test.ts file.

For the react I am going to use following directory structure

<p>src/
       components/ 
                  screens -> pages of react app
                  parts -> common parts to pages. e.g Header
       assets/
                 images 
                 styles
       declarations/ -> custom declarations 
       index.tsx -> root component

create the directory structure

Add code for your root component in index.tsx and create a demo component Hello.tsx in parts

Include this Hello component in root component

Add index.html to your client folder and refer dist/index.js

Now compile the code using tsc, Check the output by opening index.html file. You'll get an error: Uncaught TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../"

The reason behind the failure is, the typescript compiler just converted your .ts files into .js files and did not pull dependencies(react & react-dom) and pushed them into ./dist/ directory.
To avoid this we will add react & react-dom dependencies into our index.html and remove react & react-dom reference from ./dist/index.js & ./dist/Hello.js

Even after this your code won't work as your browser doesn't understand how to resovle Hello module dependency. You can read more about module resolution at https://www.typescriptlang.org/docs/handbook/module-resolution.html
To avoid this make an absolute reference to Hello module in ./dist/index.js file. Use

`import Hello from "/client/dist/components/parts/Hello.js";`
Now your code works.

---

# dts
The InversifyJS TypeScript type definitions.

This project contains the type definitions of all the official InversifyJS projects:

- [InversifyJS](https://github.com/inversify/InversifyJS)
- [inversify-logger-middleware](https://github.com/inversify/inversify-logger-middleware)
- [inversify-binding-decorators](https://github.com/inversify/inversify-binding-decorators)

To use it you need to install it:

```
$ npm install --save inversify-dts
```
Then add a reference to the type definitions of the project that you need:

```ts
/// <reference path="node_modules/inversify-dts/inversify/inversify.d.ts" />
```

```ts
/// <reference path="node_modules/inversify-dts/inversify-logger-middleware/inversify-logger-middleware.d.ts" />
```

```ts
/// <reference path="node_modules/inversify-dts/inversify-binding-decorators/inversify-binding-decorators.d.ts" />
```

### License

License under the MIT License (MIT)

Copyright © 2015 [Remo H. Jansen](http://www.remojansen.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
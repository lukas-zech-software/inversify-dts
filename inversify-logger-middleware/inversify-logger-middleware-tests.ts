/// <reference path="./inversify-logger-middleware.d.ts" />
/// <reference path="../inversify/inversify.d.ts" />

declare var kernel: inversify.IKernel;

import makeLoggerMiddleware from "inversify-logger-middleware";

interface ILoggerOutput<T> {
    entry: T;
}

let makeStringRenderer = function (loggerOutput: ILoggerOutput<string>) {
    return function (entry: ILogEntry) {
        loggerOutput.entry = textSerializer(entry);
    };
};

let makeObjRenderer = function (loggerOutput: ILoggerOutput<any>) {
    return function (entry: ILogEntry) {
        loggerOutput.entry = entry;
    };
};

let options: inversifyLoggerMiddleware.ILoggerSettings = {
    request: {
        bindings: {
            activated: true,
            cache: true,
            constraint: true,
            dynamicValue: true,
            factory: true,
            implementationType: true,
            onActivation: true,
            provider: true,
            scope: true,
            serviceIdentifier: true,
            type: true
        },
        serviceIdentifier: true,
        target: {
            metadata: true,
            name: true,
            serviceIdentifier: true
        }
    },
    time: true
};

let loggerOutput: ILoggerOutput<string> = { entry: null };
let stringRenderer = makeStringRenderer(loggerOutput);
let logger = makeLoggerMiddleware(null, stringRenderer);
kernel.applyMiddleware(logger);

let loggerOutput: ILoggerOutput<string> = { entry: null };
let stringRenderer = makeStringRenderer(loggerOutput);
let logger = makeLoggerMiddleware(options, stringRenderer);
kernel.applyMiddleware(logger);

// Type definitions for inversify 1.0.0-beta.1
// Project: https://github.com/inversify/inversify-devtools
// Definitions by: inversify <https://github.com/inversify/>

/// <reference path="../inversify/inversify.d.ts" />

interface ConnectKernel extends Function {
  (kernel: inversify.interfaces.Kernel): void;
}

declare module "inversify-devtools" {
  let render: (container: string) => ConnectKernel;
  export default render;
}

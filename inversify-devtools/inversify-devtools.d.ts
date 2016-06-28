// Type definitions for inversify 1.0.0-beta.1
// Project: https://github.com/inversify/inversify-devtools
// Definitions by: inversify <https://github.com/inversify/>

/// <reference path="../inversify/inversify.d.ts" />

interface Window {
  __inversifyDevtools__(kernel: inversify.interfaces.Kernel): void;
}

declare module "inversify-devtools" {
  export default var render: (container: string) => void;
}

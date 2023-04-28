import { DynamicMfConfig } from '@angular-architects/module-federation';

export type CustomRemoteConfig = DynamicMfConfig & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
};

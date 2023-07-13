# Changelog

## [1.7.1](https://github.com/stordco/actions-sync/compare/v1.7.0...v1.7.1) (2023-07-13)


### Bug Fixes

* set onSecondaryRateLimit and onRateLimit options ([#16](https://github.com/stordco/actions-sync/issues/16)) ([3d9d6b8](https://github.com/stordco/actions-sync/commit/3d9d6b8dd841d424b829e7536dbce0049d822c53))

## [1.7.0](https://github.com/stordco/actions-sync/compare/v1.6.2...v1.7.0) (2023-07-12)


### Features

* retry and throttle GitHub requests ([#14](https://github.com/stordco/actions-sync/issues/14)) ([a1a17bd](https://github.com/stordco/actions-sync/commit/a1a17bdf4d95d4b0cd0b86202ea3acabb08d7db2))

## [1.6.2](https://github.com/stordco/actions-sync/compare/v1.6.1...v1.6.2) (2023-05-15)


### Bug Fixes

* git commit new files ([29b9ca9](https://github.com/stordco/actions-sync/commit/29b9ca9502ee41226b11c2e883fdf85bc2e34e9a))

## [1.6.1](https://github.com/stordco/actions-sync/compare/v1.6.0...v1.6.1) (2023-05-09)


### Bug Fixes

* import octokit RequestError instance ([2bc9ef1](https://github.com/stordco/actions-sync/commit/2bc9ef1510bce42ede65d8b28beae6e3e00a8578))

## [1.6.0](https://github.com/stordco/actions-sync/compare/v1.5.0...v1.6.0) (2023-05-09)


### Features

* add license ([eb1f908](https://github.com/stordco/actions-sync/commit/eb1f908b8abf45acd29487f3cb6214b5f5dd226d))
* allow running scripts and passing variables between ([cad4cc2](https://github.com/stordco/actions-sync/commit/cad4cc2ae3ec40ce84dfd77f155fc8505e1a5b90))
* build files when releasing ([d4c4d1f](https://github.com/stordco/actions-sync/commit/d4c4d1f0b7da859bdb97a908c74635803c64026b))
* setup PR workflow ([f18f7d2](https://github.com/stordco/actions-sync/commit/f18f7d27dd24837c4eca937fbe6f82ebeb440158))


### Bug Fixes

* add files to git when running commitChanges ([b889ba0](https://github.com/stordco/actions-sync/commit/b889ba02165037b86b3deeed73238dbe4d1a29c7))
* add release-please config ([0c5a99e](https://github.com/stordco/actions-sync/commit/0c5a99e965cdee3bbb471caa83845cfd4ad4fe59))
* create folder for any file before templating ([9659e94](https://github.com/stordco/actions-sync/commit/9659e94e801b334da35355076a4db42fd66b0f8c))
* more error handling around already existing PRs during creation ([f71ea7f](https://github.com/stordco/actions-sync/commit/f71ea7fec9853a11b3fc19a6b8c4351f5d838301))
* more updates to release please ([#8](https://github.com/stordco/actions-sync/issues/8)) ([0d33f1c](https://github.com/stordco/actions-sync/commit/0d33f1ce6591f34b8843d4aaf98d42ca4704a8b8))
* override new release tag with built files ([f4a54f9](https://github.com/stordco/actions-sync/commit/f4a54f9c42eb0d3b4e9e0ce6b27d41d7af7e26d5))
* update config loading names from camel case to dash case ([2fa99a2](https://github.com/stordco/actions-sync/commit/2fa99a26c8b8b7ee79d374a5327844aa0e761e25))
* update GHA workflows ([e032156](https://github.com/stordco/actions-sync/commit/e032156eb3c9401e5a89ac18a5b4694e6e3cdb77))
* update git commit logic ([2ed7907](https://github.com/stordco/actions-sync/commit/2ed7907edede06fdcc8fe2f2a767402597eb7b43))
* update release build to amend with no edit ([c11a271](https://github.com/stordco/actions-sync/commit/c11a271bd9fb16131bdd1ca3d12456dd72a3a404))
* update release please action commands ([#7](https://github.com/stordco/actions-sync/issues/7)) ([786b160](https://github.com/stordco/actions-sync/commit/786b160b9208a9286a7e8e435dd917956da590ed))
* update scripts output path file creation ([c220514](https://github.com/stordco/actions-sync/commit/c220514f2879356dbb18527e5288937d1ad2e9a7))
* update sync-token to sync-auth in action.yml ([3e63e07](https://github.com/stordco/actions-sync/commit/3e63e07bd38374d99d5bfd870b9c8a23b917b46c))
* update typescript esm imports not working after build ([5d9f148](https://github.com/stordco/actions-sync/commit/5d9f1483d6d5eea25a4ae60b74c242d963f542e2))
* use latest tag and dont replace full semver tag ([ac9baa7](https://github.com/stordco/actions-sync/commit/ac9baa7f52c21b6ba857fbdb2f0a203e3917bd36))

## [1.5.0](https://github.com/stordco/actions-sync/compare/v1.4.0...v1.5.0) (2023-05-09)


### Features

* add license ([eb1f908](https://github.com/stordco/actions-sync/commit/eb1f908b8abf45acd29487f3cb6214b5f5dd226d))
* allow running scripts and passing variables between ([cad4cc2](https://github.com/stordco/actions-sync/commit/cad4cc2ae3ec40ce84dfd77f155fc8505e1a5b90))
* build files when releasing ([d4c4d1f](https://github.com/stordco/actions-sync/commit/d4c4d1f0b7da859bdb97a908c74635803c64026b))
* setup PR workflow ([f18f7d2](https://github.com/stordco/actions-sync/commit/f18f7d27dd24837c4eca937fbe6f82ebeb440158))


### Bug Fixes

* add files to git when running commitChanges ([b889ba0](https://github.com/stordco/actions-sync/commit/b889ba02165037b86b3deeed73238dbe4d1a29c7))
* add release-please config ([0c5a99e](https://github.com/stordco/actions-sync/commit/0c5a99e965cdee3bbb471caa83845cfd4ad4fe59))
* create folder for any file before templating ([9659e94](https://github.com/stordco/actions-sync/commit/9659e94e801b334da35355076a4db42fd66b0f8c))
* more updates to release please ([#8](https://github.com/stordco/actions-sync/issues/8)) ([0d33f1c](https://github.com/stordco/actions-sync/commit/0d33f1ce6591f34b8843d4aaf98d42ca4704a8b8))
* override new release tag with built files ([f4a54f9](https://github.com/stordco/actions-sync/commit/f4a54f9c42eb0d3b4e9e0ce6b27d41d7af7e26d5))
* update config loading names from camel case to dash case ([2fa99a2](https://github.com/stordco/actions-sync/commit/2fa99a26c8b8b7ee79d374a5327844aa0e761e25))
* update GHA workflows ([e032156](https://github.com/stordco/actions-sync/commit/e032156eb3c9401e5a89ac18a5b4694e6e3cdb77))
* update git commit logic ([2ed7907](https://github.com/stordco/actions-sync/commit/2ed7907edede06fdcc8fe2f2a767402597eb7b43))
* update release build to amend with no edit ([c11a271](https://github.com/stordco/actions-sync/commit/c11a271bd9fb16131bdd1ca3d12456dd72a3a404))
* update release please action commands ([#7](https://github.com/stordco/actions-sync/issues/7)) ([786b160](https://github.com/stordco/actions-sync/commit/786b160b9208a9286a7e8e435dd917956da590ed))
* update scripts output path file creation ([c220514](https://github.com/stordco/actions-sync/commit/c220514f2879356dbb18527e5288937d1ad2e9a7))
* update sync-token to sync-auth in action.yml ([3e63e07](https://github.com/stordco/actions-sync/commit/3e63e07bd38374d99d5bfd870b9c8a23b917b46c))
* update typescript esm imports not working after build ([5d9f148](https://github.com/stordco/actions-sync/commit/5d9f1483d6d5eea25a4ae60b74c242d963f542e2))

## [1.4.0](https://github.com/stordco/actions-sync/compare/v1.3.0...v1.4.0) (2023-05-09)


### Features

* add license ([eb1f908](https://github.com/stordco/actions-sync/commit/eb1f908b8abf45acd29487f3cb6214b5f5dd226d))
* allow running scripts and passing variables between ([cad4cc2](https://github.com/stordco/actions-sync/commit/cad4cc2ae3ec40ce84dfd77f155fc8505e1a5b90))
* build files when releasing ([d4c4d1f](https://github.com/stordco/actions-sync/commit/d4c4d1f0b7da859bdb97a908c74635803c64026b))
* setup PR workflow ([f18f7d2](https://github.com/stordco/actions-sync/commit/f18f7d27dd24837c4eca937fbe6f82ebeb440158))


### Bug Fixes

* add files to git when running commitChanges ([b889ba0](https://github.com/stordco/actions-sync/commit/b889ba02165037b86b3deeed73238dbe4d1a29c7))
* add release-please config ([0c5a99e](https://github.com/stordco/actions-sync/commit/0c5a99e965cdee3bbb471caa83845cfd4ad4fe59))
* create folder for any file before templating ([9659e94](https://github.com/stordco/actions-sync/commit/9659e94e801b334da35355076a4db42fd66b0f8c))
* override new release tag with built files ([f4a54f9](https://github.com/stordco/actions-sync/commit/f4a54f9c42eb0d3b4e9e0ce6b27d41d7af7e26d5))
* update config loading names from camel case to dash case ([2fa99a2](https://github.com/stordco/actions-sync/commit/2fa99a26c8b8b7ee79d374a5327844aa0e761e25))
* update GHA workflows ([e032156](https://github.com/stordco/actions-sync/commit/e032156eb3c9401e5a89ac18a5b4694e6e3cdb77))
* update release build to amend with no edit ([c11a271](https://github.com/stordco/actions-sync/commit/c11a271bd9fb16131bdd1ca3d12456dd72a3a404))
* update scripts output path file creation ([c220514](https://github.com/stordco/actions-sync/commit/c220514f2879356dbb18527e5288937d1ad2e9a7))
* update sync-token to sync-auth in action.yml ([3e63e07](https://github.com/stordco/actions-sync/commit/3e63e07bd38374d99d5bfd870b9c8a23b917b46c))
* update typescript esm imports not working after build ([5d9f148](https://github.com/stordco/actions-sync/commit/5d9f1483d6d5eea25a4ae60b74c242d963f542e2))

## [1.3.0](https://github.com/stordco/actions-sync/compare/v1.2.0...v1.3.0) (2023-05-09)


### Features

* add license ([eb1f908](https://github.com/stordco/actions-sync/commit/eb1f908b8abf45acd29487f3cb6214b5f5dd226d))
* allow running scripts and passing variables between ([cad4cc2](https://github.com/stordco/actions-sync/commit/cad4cc2ae3ec40ce84dfd77f155fc8505e1a5b90))
* build files when releasing ([d4c4d1f](https://github.com/stordco/actions-sync/commit/d4c4d1f0b7da859bdb97a908c74635803c64026b))
* setup PR workflow ([f18f7d2](https://github.com/stordco/actions-sync/commit/f18f7d27dd24837c4eca937fbe6f82ebeb440158))


### Bug Fixes

* add release-please config ([0c5a99e](https://github.com/stordco/actions-sync/commit/0c5a99e965cdee3bbb471caa83845cfd4ad4fe59))
* create folder for any file before templating ([9659e94](https://github.com/stordco/actions-sync/commit/9659e94e801b334da35355076a4db42fd66b0f8c))
* override new release tag with built files ([f4a54f9](https://github.com/stordco/actions-sync/commit/f4a54f9c42eb0d3b4e9e0ce6b27d41d7af7e26d5))
* update config loading names from camel case to dash case ([2fa99a2](https://github.com/stordco/actions-sync/commit/2fa99a26c8b8b7ee79d374a5327844aa0e761e25))
* update GHA workflows ([e032156](https://github.com/stordco/actions-sync/commit/e032156eb3c9401e5a89ac18a5b4694e6e3cdb77))
* update release build to amend with no edit ([c11a271](https://github.com/stordco/actions-sync/commit/c11a271bd9fb16131bdd1ca3d12456dd72a3a404))
* update scripts output path file creation ([c220514](https://github.com/stordco/actions-sync/commit/c220514f2879356dbb18527e5288937d1ad2e9a7))
* update sync-token to sync-auth in action.yml ([3e63e07](https://github.com/stordco/actions-sync/commit/3e63e07bd38374d99d5bfd870b9c8a23b917b46c))
* update typescript esm imports not working after build ([5d9f148](https://github.com/stordco/actions-sync/commit/5d9f1483d6d5eea25a4ae60b74c242d963f542e2))

## [1.2.0](https://github.com/stordco/actions-sync/compare/v1.1.0...v1.2.0) (2023-05-09)


### Features

* add license ([eb1f908](https://github.com/stordco/actions-sync/commit/eb1f908b8abf45acd29487f3cb6214b5f5dd226d))
* allow running scripts and passing variables between ([cad4cc2](https://github.com/stordco/actions-sync/commit/cad4cc2ae3ec40ce84dfd77f155fc8505e1a5b90))
* build files when releasing ([d4c4d1f](https://github.com/stordco/actions-sync/commit/d4c4d1f0b7da859bdb97a908c74635803c64026b))
* setup PR workflow ([f18f7d2](https://github.com/stordco/actions-sync/commit/f18f7d27dd24837c4eca937fbe6f82ebeb440158))


### Bug Fixes

* add release-please config ([0c5a99e](https://github.com/stordco/actions-sync/commit/0c5a99e965cdee3bbb471caa83845cfd4ad4fe59))
* override new release tag with built files ([f4a54f9](https://github.com/stordco/actions-sync/commit/f4a54f9c42eb0d3b4e9e0ce6b27d41d7af7e26d5))
* update config loading names from camel case to dash case ([2fa99a2](https://github.com/stordco/actions-sync/commit/2fa99a26c8b8b7ee79d374a5327844aa0e761e25))
* update GHA workflows ([e032156](https://github.com/stordco/actions-sync/commit/e032156eb3c9401e5a89ac18a5b4694e6e3cdb77))
* update scripts output path file creation ([c220514](https://github.com/stordco/actions-sync/commit/c220514f2879356dbb18527e5288937d1ad2e9a7))
* update sync-token to sync-auth in action.yml ([3e63e07](https://github.com/stordco/actions-sync/commit/3e63e07bd38374d99d5bfd870b9c8a23b917b46c))
* update typescript esm imports not working after build ([5d9f148](https://github.com/stordco/actions-sync/commit/5d9f1483d6d5eea25a4ae60b74c242d963f542e2))

## [1.1.0](https://github.com/stordco/actions-sync/compare/v1.0.1...v1.1.0) (2023-05-09)


### Features

* add license ([eb1f908](https://github.com/stordco/actions-sync/commit/eb1f908b8abf45acd29487f3cb6214b5f5dd226d))
* allow running scripts and passing variables between ([cad4cc2](https://github.com/stordco/actions-sync/commit/cad4cc2ae3ec40ce84dfd77f155fc8505e1a5b90))
* build files when releasing ([d4c4d1f](https://github.com/stordco/actions-sync/commit/d4c4d1f0b7da859bdb97a908c74635803c64026b))
* setup PR workflow ([f18f7d2](https://github.com/stordco/actions-sync/commit/f18f7d27dd24837c4eca937fbe6f82ebeb440158))


### Bug Fixes

* override new release tag with built files ([f4a54f9](https://github.com/stordco/actions-sync/commit/f4a54f9c42eb0d3b4e9e0ce6b27d41d7af7e26d5))
* update GHA workflows ([e032156](https://github.com/stordco/actions-sync/commit/e032156eb3c9401e5a89ac18a5b4694e6e3cdb77))
* update scripts output path file creation ([c220514](https://github.com/stordco/actions-sync/commit/c220514f2879356dbb18527e5288937d1ad2e9a7))
* update sync-token to sync-auth in action.yml ([3e63e07](https://github.com/stordco/actions-sync/commit/3e63e07bd38374d99d5bfd870b9c8a23b917b46c))
* update typescript esm imports not working after build ([5d9f148](https://github.com/stordco/actions-sync/commit/5d9f1483d6d5eea25a4ae60b74c242d963f542e2))

## [1.0.1](https://github.com/stordco/actions-sync/compare/v1.0.0...v1.0.1) (2023-05-09)


### Bug Fixes

* override new release tag with built files ([f4a54f9](https://github.com/stordco/actions-sync/commit/f4a54f9c42eb0d3b4e9e0ce6b27d41d7af7e26d5))
* update sync-token to sync-auth in action.yml ([3e63e07](https://github.com/stordco/actions-sync/commit/3e63e07bd38374d99d5bfd870b9c8a23b917b46c))

## 1.0.0 (2023-05-09)


### Features

* add license ([eb1f908](https://github.com/stordco/actions-sync/commit/eb1f908b8abf45acd29487f3cb6214b5f5dd226d))
* allow running scripts and passing variables between ([cad4cc2](https://github.com/stordco/actions-sync/commit/cad4cc2ae3ec40ce84dfd77f155fc8505e1a5b90))
* build files when releasing ([d4c4d1f](https://github.com/stordco/actions-sync/commit/d4c4d1f0b7da859bdb97a908c74635803c64026b))
* setup PR workflow ([f18f7d2](https://github.com/stordco/actions-sync/commit/f18f7d27dd24837c4eca937fbe6f82ebeb440158))


### Bug Fixes

* update GHA workflows ([e032156](https://github.com/stordco/actions-sync/commit/e032156eb3c9401e5a89ac18a5b4694e6e3cdb77))
* update scripts output path file creation ([c220514](https://github.com/stordco/actions-sync/commit/c220514f2879356dbb18527e5288937d1ad2e9a7))

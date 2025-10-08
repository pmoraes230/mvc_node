/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.ts', // Coleta cobertura de todos os arquivos .ts em src
    '!src/**/*.d.ts', // Ignora arquivos de definição de tipos (.d.ts)
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest', // Suporte a TypeScript com ts-jest

  // The root directory that Jest should scan for tests and modules within
  roots: ['<rootDir>/src'], // Busca testes na pasta src

  // The test environment that will be used for testing
  testEnvironment: 'node', // Ambiente Node.js para APIs REST

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.ts', // Testes em pastas __tests__
    '**/?(*.)+(spec|test).ts', // Arquivos como eventoController.test.ts
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\', // Ignora node_modules na cobertura
  ],

  // Reset the module registry before running each individual test
  resetModules: true, // Reinicia módulos entre testes (útil para isolamento)
};

export default config;
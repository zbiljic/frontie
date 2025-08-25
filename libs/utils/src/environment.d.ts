declare global {
  // biome-ignore lint/style/noNamespace: library
  namespace NodeJS {
    type ProcessEnv = {
      FORCE_FETCH?: string;
      SKIP_CLEAN?: string;
      SKIP_UPDATE?: string;
    };
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

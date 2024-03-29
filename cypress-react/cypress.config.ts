import { defineConfig } from "cypress"
import codeCoverage from "@cypress/code-coverage/task"

export default defineConfig({
  projectId: "uxxpw4",
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      codeCoverage(on, config)
      return config
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  experimentalWebKitSupport: true,
})

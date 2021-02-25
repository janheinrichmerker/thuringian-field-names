const config: Cypress.PluginConfig = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);
  return config;
};

export default config;

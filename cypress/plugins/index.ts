const config: Cypress.PluginConfig = (on, config) => {
  require("@cypress/react/plugins/react-scripts")(on, config);
  return config;
};

export default config;

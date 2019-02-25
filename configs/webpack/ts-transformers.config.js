
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

module.exports = () => ({ before: [createStyledComponentsTransformer()] });

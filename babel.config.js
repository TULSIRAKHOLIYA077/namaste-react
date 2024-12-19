module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react',{runtime: "automatic"}]  // Needed for JSX support(to make component work inside test)
  ]
};

module.exports = {
    transformer: {
      getTransformOptionsAsync: async () => ({
        transform: {
          experimentalImportSupport: true,
          inlineRequires: true,
        },
      }),
    },
  };
  
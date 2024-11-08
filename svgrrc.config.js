module.exports = {
  typescript: false,
  replaceAttrValues: {
    '#000': '{props.fill}',
    primary: '{props.fill}',
    '#f00': '{props.fillSecondary}',
    secondary: '{props.fillSecondary}',
    '#111': '{props.stroke}',
    red: 'currentColor',
    '#063855': 'currentColor',
  },
  svgoConfig: {
    plugins: [
      { convertShapeToPath: false },
      { cleanupIDs: false },
      { convertColors: false },
      { cleanupNumericValues: false },
      { mergePaths: false },
      { prefixIds: false },
      { removeAttrs: { attrs: ['path:class'] } },
      { removeTitle: false },
      { removeDesc: false },
      { removeUselessStrokeAndFill: false },
      { removeUselessDefs: false },
      { removeViewBox: false },
      { removeXMLNS: true },
    ],
  },
};

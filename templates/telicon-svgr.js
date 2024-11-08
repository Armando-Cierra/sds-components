function teliconSvgToJsxTemplate (
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  const scriptTemplate = template.smart({ plugins });

  return scriptTemplate.ast`${imports}

function ${componentName} (${props}) {
  return ${jsx};
}

${exports}
  `;
}

module.exports = teliconSvgToJsxTemplate;

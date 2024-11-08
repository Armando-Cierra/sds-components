function svgToTypesTemplate ({ template }, opts, { jsx }) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  const typeScriptTemplate = template.smart({ plugins });

  const availableNames = jsx.children.reduce((allNames, currentChild) => {
    const jsxAttr = currentChild.openingElement.attributes.find(
      (attr) => attr.name.name === 'id'
    );
    return jsxAttr ? [...allNames, jsxAttr.value.value] : allNames;
  }, []);

  return typeScriptTemplate.ast`const availableNames = ${JSON.stringify(
    availableNames
  )} as const;

export type AvailableTelicon = typeof availableNames[number];
  `;
}

module.exports = svgToTypesTemplate;

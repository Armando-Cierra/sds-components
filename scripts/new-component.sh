#!/bin/bash

# Function to convert string to kebab case
convertToKebabCase() {
  local input=$1
  local kebab_case=$(echo "$input" | sed -E 's/([^A-Z-])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]')
  echo "$kebab_case"
}

# Function to add dependencies to an array
addDependencies() {
  local category="$1"
  local dependencies=()

  echo "(To finish adding dependencies, type 'fin')"
  
  while true
  do
    read dependency
    if [ "$dependency" == "fin" ]
    then
      break
    fi
    dependencies+=("$dependency")
  done
  
  dependenciesArrays+=("$category")
  dependenciesArrays+=("${dependencies[@]}")
  
  echo "✅ Dependencies added"
  echo ""
}

# Workflow
echo "🚀 Welcome to the component creator script. With this, you will generate all the basic folders and files for your new component."
echo "Please answer the following questions:"
echo ""

# 1. Defining the component Name
read -p "What is the name of the component?: " componentName
kebabComponentName=$(convertToKebabCase "$componentName")
echo ""

# 2. Defining sub-components list
subcomponents=()
while true
do
  read -p "Does this component have subcomponents? y/n: " subcomponentsValidation
  echo ""

  case "$subcomponentsValidation" in
    [yY])
      echo "⚠️ Enter the subcomponent names one by one. To finish, type 'fin'"
      echo "(To finish adding subcomponents, type 'fin')"
      echo ""
      echo "Subcomponents:"
      
      while true
      do
        read subcomponentName
        if [ "$subcomponentName" == "fin" ]
        then
          echo "✅ Subcomponents added"
          echo ""
          break
        fi
        subcomponents+=("$subcomponentName")
      done
      
      break
      ;;
    [nN])
      echo "✅ No subcomponent folder added"
      echo ""
      break
      ;;
    *)
      echo "❌ Invalid response"
      echo ""
      ;;
  esac
done

# 3. Creating files
cd ./src/components || exit
mkdir "$componentName"
cd "./$componentName" || exit

# 3.1 Base level
echo "export * from './src';" > index.ts
mkdir src

# 3.2 Component Base files
cd ./src || exit

echo "export * from './$componentName';" > index.ts

echo "export interface ${componentName}Props {" > types.ts
echo "  /* Your types go here */" >> types.ts
echo "};" >> types.ts

echo "import React from 'react';" > "$componentName.tsx"
echo "" >> "$componentName.tsx"

if [[ ${#subcomponents[@]} -ne 0 ]]
then
  for subcomponent in "${subcomponents[@]}"
  do
    echo "import { $subcomponent } from './$subcomponent';" >> "$componentName.tsx"
  done
fi

echo "" >> "$componentName.tsx"

echo "import type { ${subcomponent}Props } from './types';" >> "$componentName.tsx"
echo "import './$kebabComponentName.scss';" >> "$componentName.tsx"
echo "" >> "$componentName.tsx"

echo "export const $componentName = ({ /* Your props go here */ }: ${componentName}Props) => {" >> "$componentName.tsx"
echo "  return (" >> "$componentName.tsx"
echo "    /* Your component goes here */" >> "$componentName.tsx"
echo "  );" >> "$componentName.tsx"
echo "};" >> "$componentName.tsx"

if [[ ${#subcomponents[@]} -ne 0 ]]
then
  for subcomponent in "${subcomponents[@]}"
  do
    echo "$componentName.$subcomponent = $subcomponent" >> "$componentName.tsx"
  done
fi

echo "" >> "$componentName.tsx"

touch "$kebabComponentName.scss"
echo "@use 'node_modules/@sipster/core/tools' as *;" >> "$kebabComponentName.scss"
echo "@forward 'tokens';" >> "$kebabComponentName.scss"

echo "" > tokens.scss

mkdir __tests__
cd __tests__ || exit
touch "$componentName.test.tsx"
cd ../ || exit

# 3.3 Subcomponents
if [[ ${#subcomponents[@]} -ne 0 ]]
then
  for subcomponent in "${subcomponents[@]}"
  do
    mkdir "$subcomponent"
    cd "./$subcomponent" || exit

    kebabSubcomponent=$(convertToKebabCase "$subcomponent")

    echo "export * from './$subcomponent';" > index.ts

    echo "export interface ${subcomponent}Props {" > types.ts
    echo "  /* Your types go here */" >> types.ts
    echo "}" >> types.ts

    echo "import React from 'react';" > "$subcomponent.tsx"
    echo "import type { ${subcomponent}Props } from './types';" >> "$subcomponent.tsx"
    echo "" >> "$subcomponent.tsx"
    echo "export const $subcomponent = ({ /* Your props go here */ }: ${subcomponent}Props) => {" >> "$subcomponent.tsx"
    echo "  return (" >> "$subcomponent.tsx"
    echo "    /* Your subcomponent goes here */" >> "$subcomponent.tsx"
    echo "  );" >> "$subcomponent.tsx"
    echo "};" >> "$subcomponent.tsx"

    cd ../ || exit
  done
fi

# 4. Creating dependencies text file
cd ../
dependenciesArrays=()

while true
do
  read -p "Does this component have local dependencies? y/n: " localDependenciesValidation
  echo ""

  case "$localDependenciesValidation" in
    [yY])
      addDependencies "LocalDependencies"
      dependenciesArrays+=("")
      break
      ;;
    [nN])
      echo "✅ No dependencies added"
      dependenciesArrays+=("LocalDependencies")
      dependenciesArrays+=("")
      echo ""
      break
      ;;
    *)
      echo "❌ Invalid response"
      echo ""
      ;;
  esac
done

while true
do
  read -p "Does this component have external dependencies? y/n: " externalDependenciesValidation
  echo ""

  case "$externalDependenciesValidation" in
    [yY])
      addDependencies "ExternalDependencies"
      dependenciesArrays+=("")
      break
      ;;
    [nN])
      echo "✅ No dependencies added"
      dependenciesArrays+=("ExternalDependencies")
      dependenciesArrays+=("")
      echo ""
      break
      ;;
    *)
      echo "❌ Invalid response"
      echo ""
      ;;
  esac
done

while true
do
  read -p "Does this component have dev dependencies? y/n: " devDependenciesValidation
  echo ""

  case "$devDependenciesValidation" in
    [yY])
      addDependencies "DevDependencies"
      dependenciesArrays+=("")
      break
      ;;
    [nN])
      echo "✅ No dependencies added"
      dependenciesArrays+=("DevDependencies")
      dependenciesArrays+=("")
      echo ""
      break
      ;;
    *)
      echo "❌ Invalid response"
      echo ""
      ;;
  esac
done

# 4.1 Write dependencies to the file
file="dependencies.txt"
for item in "${dependenciesArrays[@]}"
do
  echo "$item" >> "$file"
done

# 5. Finishing
echo "✅ Component created"

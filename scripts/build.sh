#!/bin/bash

# ---------Variables---------
build_action=$1
component=$2

# ---------Functions---------
npmPublishing() {
  while true
  do
    echo "Do you want to publish the package on NPM?"
    echo "⚠️ Keep in mind you need to already signed-in on NPM and to have the correct permissions to do so."
    read -p "y/n: " answer
    echo""

    if [ $answer == "y" ]
    then
      echo "⏳ Publishing NPM package..."
      # npm adduser
      npm publish
      echo""
      break
    elif [ $answer == 'n' ]
    then
      echo "✅ Package not published"
      break
    else
      echo "❌ Invalid answer"
      echo""
    fi
  done
}

convertToKebabCase() {
  local input=$1
  local kebab_case=$(echo "$input" | sed -E 's/([^A-Z-])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]')
  echo "$kebab_case"
}

# ---------Building full library---------
if [ $build_action == "general" ]
then

  # 1. Making the Build for the library
  echo ""
  echo "⏳  Building Library Package"
  echo ""
  rm -rf build
  yarn parcel build
  rm -rf .parcel-cache

  # 2. Publishin on NPM
  npmPublishing

  # 3. Cleaning
  while true
  do
    read -p "Do you want to clean the Build files? y/n: " answer

    if [ $answer == 'y' ]
    then
      rm -rf "dist"
      echo "✅ Build/Dist folder removed"
      echo""
      break
    elif [ $answer == "n" ]
    then
      echo "✅ Cleaning not performed"
      echo ""
      break
    else
      echo "❌ Invalid answer"
    fi
  done

  # 4. Finishing
  echo "Process Finished 🤖"

# ---------Building individual components---------
elif [ $build_action == "component" ]
then
  # 1. Welcome
  echo "🚀  This script will generate a package.json file and will prepare internal files of the component for the build."
  echo ""

  # 2. Getting new version
  read -p "Type the version of the component package: " version

  # 3. Making a copy of the not-modified component folder

  cd ./src/components
  cp -rf ./$component ./$component-copy

  # 4. Making a copy of tsconfig.json file
  cp -rf ../../tsconfig.json ./$component

  # 5. Accesing to the correct path
  cd ./$component

  # 6. Adding the base content to the package.json file
  touch package.json

  content='
  {
    "name": "@sipster/react-'$(convertToKebabCase "$component")'",
    "version": "'$version'",
    "source": "src/index.ts",
    "main": "build/index.js",
    "types": "build/types.d.ts",
    "dependencies": {
    "classnames": "^2.3.2"
  },
    "devDependencies": {
      "@types/react": "^18.0.27",
      "@types/react-dom": "^18.0.10",
      "parcel": "^2.8.3",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "sass": "^1.58.0",
      "typescript": "^4.9.5"
    },
    "peerDependencies": {
      "react": "^18.2.0"
    },
    "publishConfig": {
      "access": "public"
    }
  }
  '
  echo "$content" >> package.json

  # 7. Base installations
  yarn install
  yarn add @sipster/core @sipster/themes -D

  # 8. Get Dependencies arrays
  file="dependencies.txt"
  category=""
  dependenciesLocal=()
  dependenciesExternal=()
  dependenciesDev=()

  while IFS= read -r line
  do
    if [[ "$line" == "LocalDependencies" || "$line" == "ExternalDependencies" || "$line" == "DevDependencies" ]] 
    then
      category="$line"
    else
      case "$category" in
        LocalDependencies)
          dependenciesLocal+=("$line");;
        ExternalDependencies)
          dependenciesExternal+=("$line");;
        DevDependencies)
          dependenciesDev+=("$line");;
      esac
    fi
  done < "$file"

  # 9. Installing Dependencies Array
  if [[ ${#dependenciesLocal[@]} -ne 0 ]]
  then
    installCommand="yarn add"
    for string in "${dependenciesLocal[@]}"
    do
      if [ -n "$string" ]
      then
        installCommand+=" @sipster/react-$(convertToKebabCase "$string")"
      fi
    done
    echo "⏳ Installing local dependencies"
    echo ""
    eval $installCommand
  fi

  if [[ ${#dependenciesExternal[@]} -ne 0 ]]
  then
    installCommand="yarn add"
    for string in "${dependenciesExternal[@]}"
    do
      if [ -n "$string" ]
      then
        installCommand+=" $string"
      fi
    done
    echo "⏳ Installing external dependencies"
    echo ""
    eval $installCommand

  fi

  if [[ ${#dependenciesDev[@]} -ne 0 ]]
  then
    installCommand="yarn add -D"
    for string in "${dependenciesDev[@]}"
    do  
      if [ -n "$string" ]
      then
        installCommand+=" $string"
      fi
    done
    echo "⏳ Installing dev dependencies"
    echo ""
    eval $installCommand

  fi


  # 10. Replacing dependencies with a Node script
  cd ../../../scripts

  echo "⏳ Replacing local dependencies imports"
  echo ""
  for dependency in ${dependenciesLocal[@]}
  do
    node ./replace-dependencies.js $component "$dependency"
  done

  # 11. Making the build of the component
  cd ../src/components/$component
  yarn parcel build
  cd build
  sed -i='' 's@import("index")\.@@g' types.d.ts
  rm -r types.d.ts=
  echo "🎉 Build completed!"
  echo ""
  cd ../

  # 12. Publishing Package
  npmPublishing

  # 13. Restoring files
  while true
  do
    read -p "Do you want to clean the Build-Proccess and restore initial files? y/n: " answer
    echo ""

    if [ $answer == "y" ]
    then
      cd ../
      rm -rf ./$component
      mv ./$component-copy ./$component
      echo "✅ Component files restored"
      echo ""
      break
    elif [ $answer == "n" ]
    then
      echo "✅ Cleaning not performed."
      echo "You can find the original files in a folder called '$component-copy'"
      break
    else
      echo "❌ Invalid answer"
      echo""
    fi
  done

  # 3. Finishing
  cd ../../
  echo "Process Finished 🤖"
fi

#!/bin/bash

test_action=$1
component=$2

run_tests() {
  local description=$1
  local test_directory=$2

  echo ""
  echo "🧪 Checking $description Tests"
  echo ""
  yarn jest "$test_directory"
}

if [ "$test_action" == "all" ]
then
  run_tests "All" ""
elif [ "$test_action" == "single" ]
then
  run_tests "$component" "./src/components/$component/src/__tests__"
fi

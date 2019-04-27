#!/bin/bash

# no tests yet - how do I test this?
#python3 setup.py test

python3 setup.py sdist
python3 setup.py bdist_wheel
twine upload dist/*

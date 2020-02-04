# glastoselenium

### A python bot for booking glasto tickets

Resale update coming soon!

[![GitHub forks](https://img.shields.io/github/forks/thomasms/glastoselenium)](https://github.com/thomasms/glastoselenium/network)
[![GitHub stars](https://img.shields.io/github/stars/thomasms/glastoselenium)](https://github.com/thomasms/glastoselenium/stargazers)
[![GitHub license](https://img.shields.io/github/license/thomasms/glastoselenium)](https://github.com/thomasms/glastoselenium/blob/master/LICENSE)
[![HitCount](http://hits.dwyl.io/thomasms/glastoselenium.svg)](http://hits.dwyl.io/thomasms/glastoselenium)

A script/package I used to book Glastonbury tickets in 2019 and 2020 using selenium.

It can refresh quicker than any human, and automatically fills in registration details to avoid any mistakes or delays.

The below plot shows the reason why. Demand for tickets has gone mad recently, and it is only expected to get worse for future years.

![Figure of sellout times](https://github.com/thomasms/glastoselenium/blob/master/figures/sellout_times.png?raw=true)

The script usually requires a bit of tunning beforehand, but it works every time (for me anyway).

The end goal is to have a completely headless bot that can do everything automatically!!! We are not there yet, but hopefully will be soon.

Try:
```bash
python3 scripts/glasto2020.py
```

Requires a webdriver - only tested with chromedriver (http://chromedriver.chromium.org/)

Look in examples and script directories on how to use it.

Run:
```bash
python setup.py install
```

Then set the path to the driver via:
```bash
export CHROMEDRIVER=/path/to/chromedriver
```

Can use the package as:
```python
import glasto as gl
...
```

Alternatively, the first version exists on PyPI and can be installed directly using pip:

```bash
pip install glasto
```



Some test sites are being added to the submodule test/sites - https://github.com/thomasms/testsites.

These mimic a real life web site that needs a lot of refreshing.


One React SPA exists so far. 

Just run it locally via npm
```bash
cd test/sites
npm start
```

Then test the client script:
```bash
python test/testsite1.py
```

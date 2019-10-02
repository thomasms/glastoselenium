# glastoselenium

A script/package I used to book Glastonbury tickets in 2019 using selenium.

It can refresh quicker than any human.

NOTE: I have attempted to adapt this for 2020. It appears as though the html and format will remain unchanged, but sadly I can 
only test it live. I recommend starting with the script 'glasto2020.py'. Add your registration details and give it a go.
It may automatically submit your registration details but again it may not. Also the urls are speculative, based on last year.

It usually requires a bit of tunning, but it works every time.

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

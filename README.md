# glastoselenium

A script/package I used to book Glastonbury tickets in 2019 using selenium.

It can refresh quicker than any human.

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

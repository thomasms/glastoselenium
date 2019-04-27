#!/usr/bin/env python3

import glasto as gl

try:
    from glasto._custom.driver import DRIVER_PATH
except:
    import os
    DRIVER_PATH = os.getenv("CHROMEDRIVER", '')
    if not DRIVER_PATH:
        raise RuntimeError(
            "Requires chromedriver - set the path via env variable CHROMEDRIVER")

s = gl.Service(DRIVER_PATH)
print("Service URL: ", s.url())
c = gl.RefresherClient(s, timeout=2, refreshrate=0.1)

if c.establishconnection('https://google.com', phrases_to_check=["google"]):
    print("success")
    print(c.attempts)
    print(c.timeout)

c.close()

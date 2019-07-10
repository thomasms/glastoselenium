#!/usr/bin/env python3

import glasto as gl

TESTSITE_URL='localhost:3001'
REFRESH_PHRASE="Number of hits:"

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
c = gl.RefresherClient(s, timeout=0.1, refreshrate=0.00001)

if c.establishconnection(TESTSITE_URL, phrases_to_check=[REFRESH_PHRASE]):
    print("success")
    print(c.attempts)
    print(c.timeout)

input('...')
c.close()

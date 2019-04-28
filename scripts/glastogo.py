#!/usr/bin/env python3

import os
import glasto as gl

# test on reference HTML obtained from todays resale
URL = "file:///{}/ref/Buy%20tickets%20for%20Glastonbury%202019%20-%20Glastonbury.html".format(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
PHRASES_TO_CHECK = []
REGISTRATION = "123456789"
POSTCODE = "SW1 1AA"

try:
    from glasto._custom.driver import DRIVER_PATH
except:
    import os
    DRIVER_PATH = os.getenv("CHROMEDRIVER", '')
    if not DRIVER_PATH:
        raise RuntimeError(
            "Requires chromedriver - set the path via env variable CHROMEDRIVER")

s = gl.Service(DRIVER_PATH)
c = gl.Twenty19(s, timeout=2, refreshrate=0.01)

if c.establishconnection(URL, phrases_to_check=PHRASES_TO_CHECK):
    print("success")
    print(c.attempts)
    details={
        'number': REGISTRATION, 
        'postcode': POSTCODE
    }
    c.submit_registration(details)


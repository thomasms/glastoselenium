#!/usr/bin/env python3

import os
import glasto as gl

# test on reference HTML obtained from todays resale
URL = "file:///{}/ref/Buy%20tickets%20for%20Glastonbury%202019%20-%20Glastonbury.html".format(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
URL = "http://localhost:3000/"
PHRASES_TO_CHECK = ["You are in"]#gl.Twenty20.REGISTRATION_PHRASE]


try:
    from glasto._custom.driver import DRIVER_PATH
except:
    import os
    DRIVER_PATH = os.getenv("CHROMEDRIVER", '')
    if not DRIVER_PATH:
        raise RuntimeError(
            "Requires chromedriver - set the path via env variable CHROMEDRIVER")

def attemptconnection(client):
    if client.establishconnection(URL, phrases_to_check=PHRASES_TO_CHECK):
        print("success")
        print(client.attempts)
        client.clickbutton("Click me")
        
# main
s = gl.Service(DRIVER_PATH)
c = gl.Twenty20(s, timeout=4, refreshrate=0.000001, verbose=False)
attemptconnection(c)
input('...')
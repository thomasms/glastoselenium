#!/usr/bin/env python3

import glasto as gl

# DEPOSIT_19_URL = "https://glastonbury.seetickets.com/event/glastonbury-2019-deposits/worthy-farm/1300000"
DEPOSIT_19_URL = "https://glastonbury.seetickets.com/event/addregistrations"
DEPOSIT_19_URL = "https://glastonbury.seetickets.com/event/glastonbury-2019/worthy-farm/1300001"
PHRASES_TO_CHECK = ["maximum possible number of transactions per second",
                    "we couldn't find the event you were looking for",
                    "This page will automatically check for a space every",
                    "anticipated demand for tickets"]

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
# c = gl.Twenty19(s, timeout=2, refreshrate=0.01)
c = gl.Twenty19WithKillSwitch(s, killfile="killfile.txt", timeout=2, refreshrate=0.7)

if c.establishconnection(DEPOSIT_19_URL, phrases_to_check=PHRASES_TO_CHECK):
    print("success")
    print(c.attempts)
    print(c.timeout)

# c.close()

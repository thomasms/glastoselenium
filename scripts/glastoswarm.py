#!/usr/bin/env python3

import time
import multiprocessing as mp

import glasto as gl

try:
    from glasto._custom.driver import DRIVER_PATH
except:
    import os
    DRIVER_PATH = os.getenv("CHROMEDRIVER", '')
    if not DRIVER_PATH:
        raise RuntimeError(
            "Requires chromedriver - set the path via env variable CHROMEDRIVER")

DEPOSIT_19_URL = [
    "https://glastonbury.seetickets.com/event/glastonbury-2019-deposits/worthy-farm/1300000",
    # "https://glastonbury.seetickets.com/",
    "https://glastonbury.seetickets.com/event/glastonbury-2019-ticket-coach-travel-wednesday/worthy-farm/1300007",
    # "https://glastonbury.seetickets.com/event/addregistrations",
    "https://glastonbury.seetickets.com/event/glastonbury-2019-ticket-coach-travel-deposits/worthy-farm/1300002"
]
PHRASES_TO_CHECK = ["maximum possible number of transactions per second",
                    "we couldn't find the event you were looking for",
                    "This page will automatically check for a space every",
                    "anticipated demand for tickets"]
# seems unstable for large number - why?
INSTANCES = 4

def run(i):
    s = gl.Service(DRIVER_PATH)
    c = gl.Twenty19(s, timeout=3, refreshrate=i*0.05)
    if c.establishconnection(DEPOSIT_19_URL[min(i, len(DEPOSIT_19_URL)-1)], phrases_to_check=PHRASES_TO_CHECK):
        print("success")
        print(c.attempts)
        print(c.timeout)

processes = []
for i in range(INSTANCES):
    p = mp.Process(target=run, args=(i,))
    processes.append(p)
    # add a delay of 5 seconds to allow next instance to settle
    time.sleep(5)
    p.start()

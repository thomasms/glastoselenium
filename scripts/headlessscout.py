#!/usr/bin/env python3

import os
import time
import glasto as gl

URL = "https://glastonbury.seetickets.com/event/glastonbury-2020-ticket-deposits/worthy-farm/1450012"

s = gl.Service(gl.DRIVER_PATH)
c = gl.ScoutClient(s, linkphrase="glastonbury", verbose=False, 
    disablejs=False, incognito=True, disableimages=True, 
    headless=True)
    
if c.establishconnection(URL):
    for link in c.getalllinks():
        print(link)

    c.search(nlevels=2)
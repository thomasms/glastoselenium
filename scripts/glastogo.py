#!/usr/bin/env python3

import os
import glasto as gl
import time

# test on reference HTML obtained from todays resale
URL = "file:///{}/ref/Buy%20tickets%20for%20Glastonbury%202019%20-%20Glastonbury.html".format(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
PHRASES_TO_CHECK = [gl.Twenty20.REGISTRATION_PHRASE]

# first is lead booker
REG_DETAILS=[
    {
        'number': "123", 
        'postcode': "SW1 1AA"
    },
    {
        'number': "45", 
        'postcode': "SW1 1AB"
    },
    {
        'number': "67", 
        'postcode': "BA16 1AB"
    },
    {
        'number': "89", 
        'postcode': "BA12 2GB"
    }
]

if len(REG_DETAILS) == 0:
    raise RuntimeError(
        "Must have at least one registration!")

if len(REG_DETAILS) > 6:
    raise RuntimeError(
        "Cannot accept more than 1 + 5 registration details!")

def attemptconnection(client):
    if client.establishconnection(URL, phrases_to_check=PHRASES_TO_CHECK):
        print("success")
        print(client.attempts)
        try:
            gl.tofile(client.content, "reg_page_2020.html")
        except:
            pass
        if client.submit_registration(REG_DETAILS):
            print("Registration details submission success!")

            try:
                gl.tofile(client.content, "payment_page_2020.html")
            except:
                pass
            # we cannot go beyond this automated, 
            # since entering credit cards details automatically
            # is terribly risky.
            # instead leave the page open for us to do that
            # and save the content

            # todo: ????
            return
        else:
            print("Registration details submission failed!")

    # try again??
    # attemptconnection(client)

# main
s = gl.Service(gl.DRIVER_PATH)
c = gl.Twenty20(s, timeout=4, refreshrate=0.000001, verbose=True, 
    disablejs=True, incognito=True, disableimages=True, cache=4096, headless=False,
    proxy=None)
attemptconnection(c)

# backup sleep 
time.sleep(1000000) # Hack - leave it open to fill in details

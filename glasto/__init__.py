from glasto.client import Service, Client, ScoutClient, RefresherClient
from glasto.twenty19 import Twenty19, Twenty19WithKillSwitch
from glasto.twenty20 import Twenty20
from glasto.util import *

from selenium.webdriver.common.keys import Keys as Keys

try:
    from glasto._custom.driver import DRIVER_PATH
except:
    import os
    DRIVER_PATH = os.getenv("CHROMEDRIVER", '')
    if not DRIVER_PATH:
        raise RuntimeError(
            "Requires chromedriver - set the path via env variable CHROMEDRIVER")
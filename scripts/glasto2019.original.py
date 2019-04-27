#!/usr/bin/env python3

import time
import json
from selenium import webdriver
# use as a service to save start up and close down effort for many instances
import selenium.webdriver.chrome.service as service

"""
    Hacky script to refresh the glastonbury page very quickly using chromedriver

    Much work is needed but it worked well this year!

    TODO:
        - add ability to input user details from json file into form
        - make this script more rigorous and reliable
        - abstract away implementation and drivers (FireFox, Safari,...)
        - provide some test cases
"""


BASE_URL     = "https://glastonbury.seetickets.com"
COACH_URL    = "https://glastonbury.seetickets.com/event/glastonbury-2019-ticket-coach-travel-deposits/worthy-farm/1300002"
EXPECTED_URL = "https://glastonbury.seetickets.com/event/glastonbury-2019-deposits/worthy-farm/1300000"
REGISTRATION_URL = "https://glastonbury.seetickets.com/event/addregistrations"
COACH_RESALE_URL = "https://glastonbury.seetickets.com/event/glastonbury-2019-ticket-coach-travel-wednesday/worthy-farm/1300007"

# options
DRIVER           = '/path/to/chromedriver'
URL              = BASE_URL#EXPECTED_URL#"https://glastonbury.seetickets.com"
TIMEOUT          = 2.0 # seconds
TIMETOFILL       = 10000  # seconds (leave this at a large number)
REFRESHRATE      = 0.01 # seconds
PHRASES_TO_CHECK = ["maximum possible number of transactions per second",
                    "we couldn't find the event you were looking for",
                    "This page will automatically check for a space every",
                    "anticipated demand for tickets",
                    "registration"]

def get_client_data(filename='data.json'):
    """
        Expects data in form as below.
        Lead booker is first entry
    
    {
        "clients": [
            {
                "name": "Name1",
                "postcode": "ABC123",
                "registration": "123456789"
            },
            {
                "name": "Name2",
                "postcode": "ABC123",
                "registration": "123456790"
            }
        ]
    }
    """
    with open(filename) as f:
        data = json.load(f)

    if 'clients' not in data:
        print("Data is malformed.")
        exit()

    for c in data['clients']:
        print("Name: {}, Postcode: {}, Registration: {}".format(c['name'], c['postcode'], c['registration']))

    return data['clients']

def init_service(pathtodriver):
    s = service.Service(pathtodriver)
    s.start()
    
    return s

def get_all_links(driver):
    elems = driver.find_elements_by_xpath("//a[@href]")
    return [e.get_attribute("href") for e in elems]

def find_valid_driver(baseurl, service, initialtimeout=TIMEOUT):

    def check_page(content):
        condition = False
        for p in PHRASES_TO_CHECK:
            if p in content.get_attribute("innerHTML"):
                condition = True
        return condition
                
    t0 = initialtimeout
    while True:
        print(service.service_url)
        driver = webdriver.Remote(service.service_url)
        driver.set_page_load_timeout(t0)
        try:
            print("Attempting...")
            driver.get(baseurl)
            html_source = driver.page_source
            try:
                heading1 = driver.find_element_by_tag_name('h1')
                content = driver.find_element_by_class_name('entry-content')
            except:
                print("Incorrect html format found. Is the URL as expected? URL: {}".format(URL))
                return None
            
            ## here check header and content for strings like unsuccesful, try again, etc
            # if they appear then we need to maintain the same timeout but try again.
            while check_page(content):
                # try again
                print("Refreshing...")
                time.sleep(REFRESHRATE) # retry again 0.2 seconds later
                driver.get(baseurl)
                try:
                    content = driver.find_element_by_class_name('entry-content')
                except:
                    continue
            
            return driver
        except Exception as e:
            t0 = max(t0*1.1, 1) # timeout must be at least 1 second
            print("Page load Timeout Occured. Increasing timeout to {} and trying again....".format(t0))
            driver.quit()

def main():
    # driver script
    service = init_service(DRIVER)
    driver  = find_valid_driver(URL, service)
    if driver:
        print("We are in! Browser is open and possible links below:")
        for l in get_all_links(driver):
            print(" - {}".format(l))
        time.sleep(TIMETOFILL) # Hack - leave it open to fill in details
        driver.quit()

if __name__ == "__main__":
    main()

import time
from selenium import webdriver
# use as a service to save start up and close down effort for many instances
import selenium.webdriver.chrome.service as service


class Service(object):
    """
        Wraps the selenium service
    """

    def __init__(self, chromedriver):
        self._driver = chromedriver
        self.service = service.Service(chromedriver)
        self.service.start()

    def url(self):
        return self.service.service_url


class Client(object):
    """
        Wraps the selenium webdriver

        times are in seconds
    """

    def __init__(self, service, timeout=2.0):
        self._service = service

        self.client = None  # webdriver.Remote(service.url())
        self.timeout = timeout
        self.content = ""
        self.attempts = 0

    def establishconnection(self, url, scalefactor=1.1,
                            mintimeout=1.0, maxiterations=1000, phrases_to_check=[]):
        self.attempts = 0
        while True and self.attempts < maxiterations:
            self.client = webdriver.Remote(self._service.url())
            self.client.set_page_load_timeout(self.timeout)
            try:
                self.client.get(url)
                self.content = self.client.page_source
                self._refreshcheck(url, phrases_to_check)
                return True
            except:
                self.timeout = max(self.timeout*scalefactor, mintimeout)
                print("Page load Timeout Occured. Increasing timeout to {} and trying again....".format(
                    self.timeout))
                self.client.quit()
                self.attempts += 1
        return False

    def _refreshcheck(self, url, phrases_to_check):
        pass

    def close(self):
        self.client.quit()


class RefresherClient(Client):
    """
        Wraps the selenium webdriver

        times are in seconds
    """

    def __init__(self,  *args, refreshrate=0.01, **kwargs):
        super().__init__(*args, **kwargs)
        self.refreshrate = refreshrate

    def _refreshcheck(self, url, phrases_to_check):
        def check_page(content):
            condition = False
            for p in phrases_to_check:
                if p in content:
                    condition = True
            return condition

        # here check header and content for strings like unsuccesful, try again, etc
        # if they appear then we need to maintain the same timeout but try again.
        while check_page(self.content):
            # try again
            print("Refreshing...")
            time.sleep(self.refreshrate)
            self.client.get(url)
            self.attempts += 1
            try:
                self.content = self.client.page_source
            except:
                continue

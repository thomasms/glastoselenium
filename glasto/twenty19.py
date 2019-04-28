import time

from selenium.webdriver.common.keys import Keys

from .client import RefresherClient


class Twenty19(RefresherClient):
    """
        2019 hack attempt
    """

    def _refreshcheck(self, url, phrases_to_check):
        def check_page(content):
            condition = False
            for p in phrases_to_check:
                if p in content.get_attribute("innerHTML"):
                    condition = True
            return condition

        try:
            _ = self.client.find_element_by_tag_name('h1')
            self.content = self.client.find_element_by_class_name(
                'entry-content')
        except:
            print(
                "Incorrect html format found. Is the URL as expected? URL: {}".format(url))
            return

        # here check header and content for strings like unsuccesful, try again, etc
        # if they appear then we need to maintain the same timeout but try again.
        while check_page(self.content):
            # try again
            print("Refreshing...")
            time.sleep(self.refreshrate)
            self.client.get(url)
            try:
                self.content = self.client.find_element_by_class_name(
                    'entry-content')
            except:
                continue
    
    def submit_registration(self, details):
        """
            todo: implement

            only handles lead booker so far. a bit hacky
        """

        inputs = self.client.find_elements_by_tag_name('input')
        
        # loop to find registration input - lead booker only
        foundNum = False
        foundPost = False
        for i in inputs:
            if foundNum and foundPost:
                break
            if 'registrationid' in i.get_attribute('name').lower():
                i.send_keys(details['number'])
                foundNum = True
            if 'postcode' in i.get_attribute('name').lower():
                i.send_keys(details['postcode'])
                foundPost = True

        if not foundPost or not foundNum:
            print("No such input.")
            # how to handle invalid or mismatch??

        # loop again to find submit and go to submit page
        for i in inputs:
            if 'submit' in i.get_attribute('type').lower():
                print("submitting...")
                i.send_keys(Keys.ENTER)


class Twenty19WithKillSwitch(Twenty19):
    """
        2019 hack attempt with kill switch file
    """
    def __init__(self, *args, killfile="", safeword='STOP', **kwargs):
        super().__init__(*args, **kwargs)
        self.killfile = killfile
        self.safeword = safeword

    def _refreshcheck(self, url, phrases_to_check):
        def check_page():
            condition = False
            for p in phrases_to_check:
                if p in self.content.get_attribute("innerHTML"):
                    condition = True
            return condition

        def checkfile():
            try:
                with open(self.killfile) as f:
                    if self.safeword in f.read().replace('\n', ''):
                        return True
            except:
                pass
            return False

        try:
            _ = self.client.find_element_by_tag_name('h1')
            self.content = self.client.find_element_by_class_name(
                'entry-content')
        except:
            return

        while check_page():
            if checkfile():
                print("Stopped!")
                return
            # try again
            print("Refreshing...")
            time.sleep(self.refreshrate)
            self.client.get(url)
            try:
                self.content = self.client.find_element_by_class_name(
                    'entry-content')
            except:
                continue
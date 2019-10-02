import time

from selenium.webdriver.common.keys import Keys

from .client import RefresherClient


class Twenty20(RefresherClient):
    """
        2020 hack attempt
    """
    REGISTRATION_PHRASE = "Please enter your registration details"

    def _refreshcheck(self, url, phrases_to_check):
        def isregistration(content):
            condition = False
            for p in phrases_to_check:
                if p in content.get_attribute("innerHTML"):
                    condition = True
            return condition

        try:
            self.content = self.client.find_element_by_tag_name('body')
            # _ = self.client.find_element_by_tag_name('h1')
            # self.content = self.client.find_element_by_class_name(
            #     'entry-content')
        except:
            print(
                "Incorrect html format found. Is the URL as expected? URL: {}".format(url))
            return

        # here check for phrases expected in registration page
        # i.e. Please enter registration details...
        while not isregistration(self.content):
            # try again
            if self.verbose:
                print("Refreshing...")
            time.sleep(self.refreshrate)
            self.client.get(url)
            try:
                self.content = self.client.find_element_by_tag_name('body')
                # self.content = self.client \
                #     .find_element_by_xpath("//*[contains(text(), '{}')]".format(REGISTRATION_PHRASE))
            except:
                continue

        self.content = self.pagesource
    
    def submit_registration(self, details):
        """
            A bit hacky and largely dependent on id and class names (not good!)
        """

        submitted = False
        inputs = self.client.find_elements_by_tag_name('input')
        
        # loop to find registration input
        reg_count = 0
        post_code_count = 0
        for i in inputs:
            if reg_count == len(details) and post_code_count == len(details):
                break
            print(i.get_attribute('name').lower())
            # if foundNum and foundPost:
            #     break
            if 'registrationid' in i.get_attribute('name').lower():
                i.send_keys(details[reg_count]['number'])
                reg_count += 1
            if 'postcode' in i.get_attribute('name').lower():
                i.send_keys(details[post_code_count]['postcode'])
                post_code_count += 1

        if reg_count != len(details) or post_code_count != len(details) :
            print("No such input.")
            # how to handle invalid or mismatch??

        # loop again to find submit and go to submit page
        for i in inputs:
            if 'submit' in i.get_attribute('type').lower():
                print("submitting...")
                i.send_keys(Keys.ENTER)
                submitted = True

        return submitted

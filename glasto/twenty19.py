import time

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
            heading1 = self.client.find_element_by_tag_name('h1')
            self.content = self.client.find_element_by_class_name('entry-content')
        except:
            print("Incorrect html format found. Is the URL as expected? URL: {}".format(url))
            return
        
        ## here check header and content for strings like unsuccesful, try again, etc
        # if they appear then we need to maintain the same timeout but try again.
        while check_page(self.content):
            # try again
            print("Refreshing...")
            time.sleep(self.refreshrate)
            self.client.get(url)
            try:
                self.content = self.client.find_element_by_class_name('entry-content')
            except:
                continue
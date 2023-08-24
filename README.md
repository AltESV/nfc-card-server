# nfc-card-server

This is a simple in progress Node.js application that will handle incoming requests from users swiping one of our NFC cards. NFC Cards will be encoded with a master url and a query string for authentication and resource management.

This is to retain flexibility and access management post deployment of the hardware (NFC Cards) so they don't need to be collected again and re-written later on.

Variety of use cases still in discussion and methods how to give a user access to resources that we or a partner company may want to inject:

### IDEAS

* METHOD 1: user will be re-directed to a gated location

* METHOD 2: sends an email via Outlook to the NFC Card Holder. This will be a code to use.

* METHOD 3: launches an application.

* METHOD 4: initiates a transaction.

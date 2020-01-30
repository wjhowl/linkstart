# Inspiration
Underserved populations (E.g. homeless, low-income, rural) usually face problems accessing sufficient social resources. In most cases, these underserved populations also need access to multiple resources that can be located far apart and are difficult to access conveniently.

Social workers struggle with accessing updated resource databases and organization records (E.g. Availability, Types of services offered). They must navigate to individual resource sites and contact them for more critical information. Social workers are not able to access critical organization information from one location.

The overall goal of this web app is to streamline the process of searching for appropriate organizations, referring patients to organizations with available resources, and sending necessary documentation in one convenient platform. It also places the responsibility of updating resource details on the organization itself, ensuring that the database is up-to-date and does not have to be managed by the webhost. This eliminates the burden of the patient needing to travel to different organizations to check for availability of resources and/or submit paperwork. It also ensures a continuous communication channel between different social organizations.

# What it does
This web application more easily facilitates communication between charities, food banks, and other resource organizations, focusing on its applications to underserved communities.

Organizations can register and update their home page with availability and organization details.

Search : Most Relevant Organizations and their details can be easily viewed in a table, and can be filtered based on needs (ex. Type of Resource, Distance, Availability)

To refer a person in need to another organization for aid, the current organization can search and refer them to a relevant organization through a messaging platform. Reduces need to contact every single organization to check availability or if they are able to accept more patients.

The messaging platform provides a space to send and receive important documents related to patient referrals. This can be used, for example, to send immunization records, HIPAA release forms, prescriptions and legal documents. This feature reduces patient paperwork and eliminates the need for patients to travel to organizations to fill out and submit paperwork.

# How we built it
Built basic organization home page html framework, using html, css, and JavaScript. Then linked options on side bar to their corresponding web pages.
Connected organization list to Google Cloud Firebase database. Used JavaScript jQuery to filter organization search bar.
Added messaging option to organization search results for easy referrals/messaging.
Connected message buttons to a message template.
Added sidebar option for message inbox, listing referrals sent by other organizations.
Linked to corresponding referrals, able to view referral details and also displaying patient documentation.
Challenges we ran into
We struggled to figure out what server to use to link most easily with different platforms. We tried using LAMP, Django, and Google Cloud/Firebase. Google Cloud turned out to be the most user friendly.

# Accomplishments that we're proud of
Successfully reading and writing to Google Cloud from the web-app. Also, learning how to connect to cloud platforms and upload documents was challenging. Learning a lot of UI, HTML, CSS and Javascript.
What we learned
Learning how to make a nice UI using available templates, configuring HTML, CSS and Javascript.

# What's next for linkstart
Improve security and improve functionality of databases and its complexity to allow for more complex search functions and details.

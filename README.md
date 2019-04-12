# Swiftly

# Front End

The Deployment.txt file details how to run the app.
The start.bat file will launch expo in your defaut web browser, providing a QR code that can be scanned using the Expo app on your android phone. This will then launch the Swiftly app on your Phone.
The fronend folder conatins all code needed to run the app using the expo framework.
The .js files within the main Frontend folder are the files specific to the customer side and to navigating between screens.
The .js files within the Frontend/assets are the files specific to the driver side of the app.

# Back End

The backend contains three scripts:
1. The 'install' script can be run on Ubuntu and any other distros of linux with the apt-get package manager. When it is run, it installs all of the packages required for the backed api to run.
2. The 'startDatabase' script can be run on linux. When it is run it allows the creation of a fresh database as well as the creation of a superuser for the backend.
3. The 'runserver' script runs the backend code. It uses the server it is run on, to allow anyone to access its functions.

The backend contains an evironment to run the server, as well as the server itself. It contains a website which uses the Django framework to run an API as its main app. What this means is that the Django framework allows the running of the service. Within the service there is an app which is a REST API. It is what is used as a backed for the Swiftly app. The REST API is a smart interface for the SQLite database running behind it. It allows the creation of functions so that data may be inputted in a specific way.

# Swiftly

# Front End

# Back End

The backend contains three scripts:
1. The 'install' script can be run on Ubuntu and any other distros of linux with the apt-get package manager. When it is run, it installs all of the packages required for the backed api to run.
2. The 'startDatabase' script can be run on linux. When it is run it allows the creation of a fresh database as well as the creation of a superuser for the backend.
3. The 'runserver' script runs the backend code. It uses the server it is run on, to allow anyone to access its functions.

The backend contains an evironment to run the server, as well as the server itself. It contains a website which uses the Django framework to run an API as its main app. What this means is that the Django framework allows the running of the service. Within the service there is an app which is a REST API. It is what is used as a backed for the Swiftly app. The REST API is a smart interface for the SQLite database running behind it. It allows the creation of functions so that data may be inputted in a specific way.
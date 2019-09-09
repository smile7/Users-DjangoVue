# Users - DjangoVue

Web application created on Vuejs (framework - Nuxtjs) and Python (framework - Django). Allows users to login and depending on their role (User or Admin) to have access to different pages.
Users can only see the homepage.
Administrators can see all users, edit their information, delete users and add users.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What you need to have already installed:

```
npm
python3
pip3
```
### Create virtual env in a folder of your choice
```
sudo pip3 install virtualenv  # installing virtualenv
virtualenv venv  #creating env called venv
source venv/bin/activate  #start the virtual env
```
If you need to close the virtual env, simply type
```
deactivate
```

### Running the server

1. Clone the repo
2. In the root folder of the project, type
```
sudo pip3 install -r requirements.txt
sudo python3 manage.py runserver
```
You should have the server running.

### Running the client

1. Go to /client
2. Type:
```
npm install
npm run dev
```
You dhould have the client running too.


### Open the app

http://localhost:3000/

Admin crenetials:
   user: admin@admin.com
   pass: wewewe23
User credentials:
   user: rlt@rlt.rlt
   pass: wewewe23

### Open the backend

http://localhost:8000/admin/

### Access endpoints

http://localhost:8000/api/users/

## Authors

* **Silvena Miteva**

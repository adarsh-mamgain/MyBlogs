# MyBlogs

A personal blogging website made using **React.js** and **Django REST Framework** 🛠


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=github)](https://img.shields.io/github/license/adarsh-mamgain/MyBlogs/blob/main/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/adarsh-mamgain/MyBlogs?style=for-the-badge)]()
[![GitHub stars](https://img.shields.io/github/stars/adarsh-mamgain/MyBlogs?style=for-the-badge)]()

---

## Tech Stack

**Client/Frontend:** React, Material UI

**Server/Backend:** Node, Django

**API:** Django Rest Framework

**DBMS:** PostgreSQL

**UI/UX:** Figma

---

## Installation 🛠

**Open respective terminal in your machine.**

**NOTE:** Make sure you have Python, pip, Node.js, npm and PostgreSQL installed on your machine :)

To check whether you have the same installed. Run all the following commands in your terminal.

```sh
python --version

pip --version

node --version

npm --version
```

1. Clone this repository

```sh
git clone https://github.com/adarsh-mamgain/MyBlogs.git

cd MyBlogs
```
    
2. Install and create a Python virtual environment to install the dependencies.

```sh
pip3 install virtualenv

virtualenv venv
```

3. Start using the virtual environment.

    - On Windows
    ```sh
    venv\scripts\activate
    ```
        
    - On Linux and MacOS
    ```sh
    source venv/bin/activate
    ```

4. Run the following command to install all backend dependencies
```sh 
pip3 install -r requirements.txt
```

5. Install all npm dependencies for frontend
```sh
npm install
```

6. Create a PostgreSQL user, database, make migrations of models and then migrate the models to database
```sh
psql postgres

CREATE ROLE newUser WITH LOGIN PASSWORD ‘password’;

ALTER ROLE newUser CREATEDB;

\q

psql postgres -U newuser

CREATE DATABASE database WITH ENCODING 'UTF8';

GRANT ALL PRIVILEGES ON DATABASE database TO newUser;

```

7. Configure the `DATABASES` inside` backend/MyBlogs/settings.py` for PostgreSQL
```js
...
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'database',
        'USER': 'newUser',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
...
```

8. Finally run the following command to start backend and frontend services 
```sh
python manage.py runserver

npm run dev
```

---

## Acknowledgements 📑

- Awesome **UX/UI** 🎨 created by [**Tanmay Chakrabarty**](https://github.com/tanmaychk)

- README created using https://readme.so/editor

- Markdown editor for blogs https://stackedit.io/

## Author 🧑

- [@adarsh-mamgain](https://github.com/adarsh-mamgain)


## Support 🏷️

📧 Email: am7722@srmist.edu.in

➕ LinkedIn: https://www.linkedin.com/in/adarsh-mamgain/

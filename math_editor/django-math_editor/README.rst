1. Add "polls" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'editor',
        'ckeditor',
        'ckeditor_uploader',
        'django_mysql',
    ]

2. Change the Database setting in setting.py like this ::

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '3306',
        'OPTIONS': {
            # Tell MySQLdb to connect with 'utf8mb4' character set
            'charset': 'utf8mb4',
        },
    }
}


3. Include the polls URLconf in your project urls.py like this::

    path('editor/', include('editor.urls')),

4. Run `python manage.py migrate` to create the polls models.

5. Start the development server and visit http://127.0.0.1:8000/admin/
   
6. 'pillow','django-ckeditor','mysqlclient'
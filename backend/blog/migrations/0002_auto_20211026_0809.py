# Generated by Django 3.2.8 on 2021-10-26 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='id',
        ),
        migrations.AlterField(
            model_name='blog',
            name='slug',
            field=models.SlugField(primary_key=True, serialize=False),
        ),
    ]

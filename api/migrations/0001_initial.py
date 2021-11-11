# Generated by Django 3.2.8 on 2021-11-10 10:34

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('markdown', models.TextField()),
                ('date', models.DateField(default=django.utils.timezone.now)),
                ('time', models.TimeField(default='00:00:00')),
                ('publish', models.BooleanField(default=False)),
                ('slug', models.SlugField(max_length=200)),
                ('author', models.CharField(default='Adarsh Mamgain', max_length=50)),
            ],
        ),
    ]
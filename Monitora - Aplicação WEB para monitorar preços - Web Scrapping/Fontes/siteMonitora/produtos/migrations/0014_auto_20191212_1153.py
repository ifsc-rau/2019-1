# Generated by Django 2.2.4 on 2019-12-12 14:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0013_auto_20191122_1441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicopreco',
            name='data',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='notificacao',
            name='data',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='produto',
            name='data_cadastro',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]

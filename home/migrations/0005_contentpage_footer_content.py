# Generated by Django 3.2.13 on 2022-05-04 16:44

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_contentpage'),
    ]

    operations = [
        migrations.AddField(
            model_name='contentpage',
            name='footer_content',
            field=wagtail.core.fields.StreamField([('paragraph', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock()), ('text', wagtail.core.blocks.RichTextBlock())]))], default=''),
            preserve_default=False,
        ),
    ]

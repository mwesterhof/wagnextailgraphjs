from grapple.models import GraphQLStreamfield
from wagtail.admin.edit_handlers import StreamFieldPanel
from wagtail.core.fields import StreamField

from wagtail.core.models import Page

from .blocks import HeroImageBlock, ParagraphBlock


class HomePage(Page):
    content = StreamField([
        ('hero_image', HeroImageBlock()),
        ('paragraph', ParagraphBlock()),
    ])

    content_panels = Page.content_panels + [
        StreamFieldPanel('content'),
    ]

    graphql_fields = [
        GraphQLStreamfield('content'),
    ]


class ContentPage(Page):
    body = StreamField([
        ('paragraph', ParagraphBlock()),
    ])

    footer_content = StreamField([
        ('paragraph', ParagraphBlock()),
    ])

    content_panels = Page.content_panels + [
        StreamFieldPanel('body'),
        StreamFieldPanel('footer_content'),
    ]

    graphql_fields = [
        GraphQLStreamfield('body'),
        GraphQLStreamfield('footer_content'),
    ]

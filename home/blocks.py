from grapple.helpers import register_streamfield_block
from grapple.models import GraphQLImage, GraphQLString
from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


@register_streamfield_block
class HeroImageBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    image = ImageChooserBlock()

    graphql_fields = [
        GraphQLString('title'),
        GraphQLImage('image')
    ]


@register_streamfield_block
class ParagraphBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    text = blocks.RichTextBlock()

    graphql_fields = [
        GraphQLString('title'),
        GraphQLString('text')
    ]

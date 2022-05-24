import graphene

from grapple.types.pages import PageInterface
from wagtail.core.models import Page


class CoreQuery(graphene.ObjectType):
    in_menu_pages = graphene.List(PageInterface)

    def resolve_in_menu_pages(self, *args, **kwargs):
        return Page.objects.live().filter(show_in_menus=True)

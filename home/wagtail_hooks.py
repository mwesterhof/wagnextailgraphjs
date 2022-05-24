from wagtail.core import hooks

from .types import CoreQuery


@hooks.register('register_schema_query')
def register_core_query(query_mixins):
    query_mixins.append(CoreQuery)

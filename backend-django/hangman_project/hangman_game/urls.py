from django.urls import path, re_path
from . import views

urlpatterns = [
    path("categories/", views.CategoryList.as_view(), name="category-list"),
    re_path(
        r"^words/(?P<category_name>.+)/$", views.WordList.as_view(), name="word-list"
    ),
    re_path(
        r"^random-word/(?P<category_name>.+)/$",
        views.RandomWord.as_view(),
        name="random-word",
    ),
    path("how-to-play/", views.HowToPlayList.as_view(), name="how-to-play-list"),
]

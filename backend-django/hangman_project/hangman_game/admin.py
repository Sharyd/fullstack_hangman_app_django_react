from django.contrib import admin
from .models import Category, Word, HowToPlayStep


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "selected")
    list_filter = ("category", "selected")
    search_fields = ("name", "category__name")


@admin.register(HowToPlayStep)
class HowToPlayStepAdmin(admin.ModelAdmin):
    list_display = ("number", "title")

from rest_framework import serializers
from .models import Category, Word, HowToPlayStep


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ["name", "selected"]


class HowToPlayStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = HowToPlayStep
        fields = ["number", "title", "description"]

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Word, HowToPlayStep
from .serializers import CategorySerializer, WordSerializer, HowToPlayStepSerializer
from django.utils.encoding import uri_to_iri
from django.db.models import Q


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class WordList(generics.ListAPIView):
    serializer_class = WordSerializer

    def get_queryset(self):
        category_name = uri_to_iri(self.kwargs.get("category_name", ""))
        return Word.objects.filter(
            Q(category__name__iexact=category_name)
            | Q(category__name__iexact=category_name.replace("%20", " "))
        )


class RandomWord(APIView):
    def get(self, request, category_name):
        category_name = uri_to_iri(category_name)
        word = Word.objects.filter(category__name=category_name).order_by("?").first()
        if word:
            serializer = WordSerializer(word)
            return Response(serializer.data)
        return Response({"error": "No word found"}, status=404)


class HowToPlayList(generics.ListAPIView):
    queryset = HowToPlayStep.objects.all()
    serializer_class = HowToPlayStepSerializer

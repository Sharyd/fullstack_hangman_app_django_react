from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Word(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="words"
    )
    name = models.CharField(max_length=100)
    selected = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} ({self.category.name})"


class HowToPlayStep(models.Model):
    number = models.CharField(max_length=10)
    title = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        ordering = ["number"]

    def __str__(self):
        return f"{self.number}: {self.title}"

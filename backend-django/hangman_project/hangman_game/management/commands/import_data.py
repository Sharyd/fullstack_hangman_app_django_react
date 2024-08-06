import json
import os
from django.core.management.base import BaseCommand
from hangman_game.models import Category, Word, HowToPlayStep


class Command(BaseCommand):
    help = "Import data from data.json file and add How to Play steps"

    def handle(self, *args, **kwargs):
        # Get the directory of the current script
        current_dir = os.path.dirname(os.path.abspath(__file__))

        # Construct the path to data.json
        file_path = os.path.join(current_dir, "data.json")

        with open(file_path, "r") as file:
            data = json.load(file)

        # Import categories and words
        for category_name, words in data["categories"].items():
            category, created = Category.objects.get_or_create(name=category_name)
            self.stdout.write(
                self.style.SUCCESS(
                    f'Category "{category_name}" {"created" if created else "already exists"}'
                )
            )

            for word_data in words:
                word, created = Word.objects.get_or_create(
                    category=category,
                    name=word_data["name"],
                    defaults={"selected": word_data["selected"]},
                )
                action = "created" if created else "already exists"
                self.stdout.write(
                    self.style.SUCCESS(
                        f'Word "{word.name}" {action} in category "{category_name}"'
                    )
                )

        # Import How to Play steps
        how_to_play_data = [
            {
                "number": "01",
                "title": "Choose a category",
                "description": "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
            },
            {
                "number": "02",
                "title": "Guess letters",
                "description": "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
            },
            {
                "number": "03",
                "title": "Win or lose",
                "description": "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
            },
        ]

        for step_data in how_to_play_data:
            step, created = HowToPlayStep.objects.get_or_create(
                number=step_data["number"],
                defaults={
                    "title": step_data["title"],
                    "description": step_data["description"],
                },
            )
            action = "created" if created else "already exists"
            self.stdout.write(
                self.style.SUCCESS(
                    f'How to Play step "{step.number}: {step.title}" {action}'
                )
            )

        self.stdout.write(self.style.SUCCESS("Data import completed successfully"))

from rest_framework import serializers
from .models import Event, Gallery 

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        fields="__all__"


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model=Gallery
        fields="__all__"
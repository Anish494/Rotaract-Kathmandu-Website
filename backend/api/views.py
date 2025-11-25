from django.shortcuts import render
from rest_framework import viewsets
from .models import Event , Gallery
from .serializer import EventSerializer, GallerySerializer
from rest_framework.response import Response

class EventListViewSet(viewsets.ViewSet):
    queryset=Event.objects.all()

    def list(self,request):
        serializer=EventSerializer(self.queryset, many=True)
        return Response(serializer.data)
    

    

class GalleryListViewSet(viewsets.ViewSet):
    queryset = Gallery.objects.all()

    def list(self, request):
        category = request.query_params.get('category', None)
        if category:
            photos = Gallery.objects.filter(category=category)
        else:
            photos = self.queryset

        serializer = GallerySerializer(photos, many=True, context={'request': request})
        return Response(serializer.data)

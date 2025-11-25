from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    event_date = models.DateField() 
    weekday = models.CharField(max_length=20) 
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f"{self.title} - {self.event_date} ({self.weekday})"


CATEGORY_CHOICES = [
    ('all','All Photos'),
    ('fellowship', 'Fellowship'),
    ('service', 'Service'),
    ('leadership', 'Leadership'),
    ('international', 'International'),
]




def gallery_upload_path(instance, filename):
    # Store images like: api/gallery/<category>/<id>/<filename>
    return f"gallery/{instance.category}/{instance.id}/{filename}"

class Gallery(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to=gallery_upload_path)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='all')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

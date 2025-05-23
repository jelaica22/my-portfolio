from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),  # Make sure this exists!
    path('contact/', views.contact_view, name='contact'),
    path('success/', views.success_view, name='success'),
    path('hobbies/', views.hobbies, name='hobbies'),
    path('project/', views.project, name='project'),
    path('contact/', views.contact, name='contact'),
    path('form/', views.contact_form, name='form'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
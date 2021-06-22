
from django.urls import path,include

import eshop.views

urlpatterns = [
    path('home', eshop.views.getHome),
    path('test', eshop.views.test),
    path('news',eshop.views.news),
    path('contact-us',eshop.views.contact),
    path('about-us',eshop.views.about),
    path('products',eshop.views.product),
    # path('upload',eshop.vie)
]
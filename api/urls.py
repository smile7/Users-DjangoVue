from django.conf.urls import url, include
from rest_framework import routers
from api.views import UserViewSet
from api.views import CurrentUserInfo

from . import views

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
#router.register(r'user', CurrentUserInfo)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', include('rest_auth.urls')),
    url('user/', views.CurrentUserInfo.as_view(), name='current-user-info'),
]
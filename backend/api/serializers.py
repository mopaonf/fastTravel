from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note, Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['phonenumber']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(write_only=True)  # Handle nested profile data

    class Meta:
        model = User
        fields = ["id", "username", "password", "email", "profile"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile', {})  # Extract profile data
        user = User.objects.create_user(**validated_data)
        if profile_data:
            Profile.objects.create(user=user, **profile_data)
        return user
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
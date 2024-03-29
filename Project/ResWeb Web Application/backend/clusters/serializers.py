# Rest Framework
from abc import ABC

from rest_framework import serializers

# Models
from .models import Cluster, CrawledData


class CreateClusterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cluster
        fields = ('user', 'username', 'cluster_name', 'url1', 'url2', 'url3', 'depth', 'pdf', 'word', 'powerpoint',
                  'text', 'non_html_text')


class ClusterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cluster
        fields = ('user', 'username', 'id', 'cluster_name', 'date_of_creation', 'url1', 'url2', 'url3', 'depth', 'pdf', 'word', 'powerpoint',
                  'text', 'non_html_text', )


class CreateCrawledDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrawledData
        fields = ('user', 'username', 'cluster', 'root_url', 'current_url', 'depth', 'crawled_data_type', 'content')


class GetSearchResultSerializer(serializers.Serializer):

    # id = serializers.IntegerField(default=None)
    # root_url = serializers.CharField(max_length=255)
    # current_url = serializers.CharField(max_length=255)
    # content = serializers.CharField(max_length=255)
    # depth = serializers.IntegerField(default=None)

    data_crawled = serializers.JSONField()



---
layout: page
title: Taxonomy Audit
permalink: /audit/
---
### All Categories
{% for category in site.categories %}
- **{{ category[0] }}** ({{ category[1].size }} posts)
{% endfor %}

### All Tags
{% for tag in site.tags %}
- **{{ tag[0] }}** ({{ tag[1].size }} posts)
{% endfor %}

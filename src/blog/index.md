---
title: Blog
header: News
order: 7
sitemap:
  priority: 1
  changefreq: 'weekly'
sections:

---

<ul>
{% for post in site.posts %}
<li>
<a href="{{ post.url }}">{{ post.url }}</a>
{{ post.title }}
</li>
{% endfor %}
</ul>

<ul>
{% for tag in site.tags %}
<li>{{ tag[0] }}</li>
{% endfor %}
</ul>

<ul>
{% for cat in site.categories %}
<li>{{ cat[0] }}</li>
{% endfor %}
</ul>
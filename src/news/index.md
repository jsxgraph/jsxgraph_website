---
title: News
subtitle: Announcements
icon: fa-solid fa-bullhorn
order: 8
in_shortcuts: true
order_shortcuts: 4
is_blogpost: false
---

Stay informed about the latest developments in JSXGraph — from new features and performance enhancements to upcoming events that shape the future of interactive mathematics on the web.

{% if const.feed.enabled %}
<p>
{% assign stringToCheck = site.feed.path | default: const.feed.link %}
{% assign checkArray = stringToCheck | split: ':' %}
{% if checkArray[0] == 'http' or checkArray[0] == 'https' %}
{% assign link = site.feed.path | default: const.feed.link %}
{% assign target = const.feed.target | default: "_blank" %}
{% else %}
{% assign link = site.feed.path | default: const.feed.link %}
{% assign link = relBase | append: link %}
{% assign target = const.feed.target | default: "_self" %}
{% endif %}
To make sure you never miss an update, subscribe to our
<a href="{{ link }}" target="{{ target }}">RSS feed</a>.
</p>
{% endif %}
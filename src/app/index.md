---
title: App
header: sketchometry
layout: plain_splash
sitemap:
  priority: 0
  changefreq: 'never'

splash:
  background: var(--sketchometry-splash-gradient), url('{{ relBase }}/media/images/2x1/bausteine-winkel-hand-mitte.jpg')
  topbar: false
  content:
    - content: this
      overlay: false
      scroll: false
---

{% assign const = site.data.const %}
{%- if page.absolute_paths -%}
{%- assign relBase = site.data.const.url.web -%}
{%- else -%}
{% assign relBase = ".." %}
{% endif -%}

<div class="m-between-4" style="font-size: initial;">
<div class="text-center">
    <div class="sketcho sketcho-sketchometry sketcho-xxl lh-base"></div>
</div>

<div class="d-flex flex-wrap justify-content-center align-items-center">
    <a href="{{ const.url.start }}" target="_blank" class="btn btn-secondary-gradient rounded-max h-fix-md py-0 px-3 mx-2 mb-2" style="width:220px;">
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="sketcho sketcho-compass-cursor sketcho-lg"></div>
            <div class="ms-2">
                Start in browser
            </div>
        </div>
    </a>
    <a href="{{ const.url.web }}" class="btn btn-secondary-gradient rounded-max h-fix-md py-0 px-3 mx-2 mb-2" style="width:220px;">
        <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <div class="sketcho sketcho-computer sketcho-lg"></div>
            <div class="ms-2">
                Go to homepage
            </div>
        </div>
    </a>
</div>

{% include part/stores.html direction="horizontal" css_class="justify-content-center" %}

<script type="text/javascript">
    (function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        {%- for store in const.appstores -%}
        {%- if store.redirect.enabled %}
        if (/{{ store.redirect.useragent }}/i.test(userAgent)) {
            window.location.href = "{{ store.url }}";
            // document.write("{{ store.id }}");
            return;
        }
        {% endif -%}
        {%- endfor -%}

        if (JXG.exists(userAgent)) {
            // window.location.href = "{{ const.url.start }}";
        }
    })();
</script>
</div>

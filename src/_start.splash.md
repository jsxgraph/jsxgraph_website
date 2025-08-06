<div class="container md-container text-center">
    <img class="h-auto h-fix-xxl-over-md vw-80 vw-75-over-xs vw-60-over-sm w-auto-over-md" src="{{ relBase }}/media/logos/logo.png" />
    {%- if const.carousel.active != true -%}
        <div class="bigger mt-2">
            {%- assign slogan = const.slogan | split: '#~#' -%}
            {%- for sl in slogan %}
                <span class="nowrap">{{ sl }}</span>
            {% endfor -%}
        </div>
    {%- endif -%}
</div>
{%- if const.carousel.active == true -%}
    {% include part/carousel.html class="container md-container" %}
{%- endif -%}

{% include part/shortcuts.html class="container md-container" %}
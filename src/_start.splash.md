{%- if false -%}
<div class="container md-container text-center">
    <img class="h-auto h-fix-xxl-over-md vw-80 vw-75-over-xs vw-60-over-sm w-auto-over-md" src="{{ relBase }}/media/logos/logo.png" />
    <div class="bigger mt-2">
        <span class="nowrap">Math Visualization.</span>
        <span class="nowrap">Web-Based.</span>
        <span class="nowrap">Interactive. Seamless.</span>
    </div>
</div>
{%- else -%}
<div class="container md-container text-center">
    <img class="h-auto h-fix-xxl-over-md vw-80 vw-75-over-xs vw-60-over-sm w-auto-over-md" src="{{ relBase }}/media/logos/logo.png" />
</div>
<div id="carouselExampleAutoplaying" class="carousel carousel-dark slide w-100" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="container md-container text-center">
                <div class="bigger mt-2">
                    <span class="nowrap">Math Visualization.</span>
                    <span class="nowrap">Web-Based.</span>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container md-container text-center">
                <div class="bigger mt-2">
                    <span class="nowrap"><a href="https://jsxgraph.org/conf2025" class="text-danger" target="_blank">6<sup>th</sup> International</a></span>
                    <span class="nowrap text-danger"><a href="https://jsxgraph.org/conf2025" class="text-danger" target="_blank">JSXGraph Conference!</a></span>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container md-container text-center">
                <div class="bigger mt-2">
                    <span class="nowrap">Interactive. Seamless.</span>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container md-container text-center">
                <div class="bigger mt-2">
                    <span class="nowrap"><a href="https://jsxgraph.org/conf2025" class="text-danger" target="_blank">6<sup>th</sup> International</a></span>
                    <span class="nowrap text-danger"><a href="https://jsxgraph.org/conf2025" class="text-danger" target="_blank">JSXGraph Conference!</a></span>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" data-bs-touch="false">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" data-bs-touch="false">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
{%- endif -%}

{% include part/shortcuts.html class="container md-container" %}
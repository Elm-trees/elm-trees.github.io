# Writing

I enjoy writing. This is where I put pieces about science that I've made for fun. Right now, I'm trying to get better at writing about technical topics for a general audience.

<div class="tiles-container">
  {% for page in site.pages %}
    {% if page.path contains 'writing/' and page.path != 'writing.md' %}
      <div class="tile">
        <a href="{{ page.url | relative_url }}">
          <h3>{{ page.title }}</h3>
          <p>{{ page.excerpt }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
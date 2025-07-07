module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      tags = site.posts.docs.flat_map { |post| post.data['tags'] || [] }.to_set
      tags.each do |tag|
        site.pages << TagPage.new(site, site.source, tag)
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, tag)
      @site = site
      @base = base
      slope = Jekyll::PostMarkdown::slopify(tag)
      @dir  = File.join(site.config['taglist']['root'], slope)
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'blog_list.html')
      for name, val in site.config['bloglist'] do
          self.data[name] = val
      end
      for name, val in site.config['taglist'] do
          self.data[name] = val
      end
      self.data['is_taglist'] = true
      self.data['is_categorylist'] = false
      self.data['tag'] = tag
      self.data['title'] = "Tag \"#{tag}\""
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      categories = site.posts.docs.flat_map { |post| post.data['categories'] || [] }.to_set
      categories.each do |category|
        site.pages << CategoryPage.new(site, site.source, category)
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, base, category)
      @site = site
      @base = base
      slope = Jekyll::PostMarkdown::slopify(category)
      @dir  = File.join(site.config['categorylist']['root'], slope)
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'blog_list.html')
      for name, val in site.config['bloglist'] do
          self.data[name] = val
      end
      for name, val in site.config['categorylist'] do
          self.data[name] = val
      end
      self.data['is_taglist'] = false
      self.data['is_categorylist'] = true
      self.data['category'] = category
      self.data['title'] = "Category \"#{category}\""
    end
  end
end
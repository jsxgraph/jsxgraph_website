# Replace content before markdown2html

Jekyll::Hooks.register [:pages, :documents], :pre_render do |doc, payload|
    doc.content = doc.content.gsub(/(#+) /, '#\1 ');
end

module Jekyll
  module PreMarkdown
    def replace_headers(input)
      input = input.gsub(/(#+) /, '#\1 ')
    end

    def pre_markdown(input)
      if(input != nil)
        input = replace_headers(input)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::PreMarkdown)
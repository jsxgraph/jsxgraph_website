# Replace content before markdown2html

Jekyll::Hooks.register [:pages, :documents], :pre_render do |doc, payload|
    doc.content = doc.content.gsub(/(#+) /, '#\1 ');
    doc.content = doc.content.gsub(/{{( )*relBase( )*}}/, 'placeholder_relBase_Z7fjMwSUhPD9ZI5tgpY4mZq1UI44kZ');
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
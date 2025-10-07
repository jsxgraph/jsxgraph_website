# Replace content after markdown2html

module Jekyll
  module PostMarkdown
    def replace_buttons(input)
      input = input.gsub(/<a([^"]*)type="button"( colorclass="([^"]+)")?( class="([^"]+)")?/, '<a\1class="btn btn-\3 d-flex justify-content-center align-items-center \5"')
      input = input.gsub(/<button([^"]*)type="button"( colorclass="([^"]+)")?( class="([^"]+)")?/, '<button\1type="button" class="btn btn-\3 d-flex justify-content-center align-items-center \5"')
      input = input.gsub('btn--gradient', 'btn-primary-gradient')
    end

    def replace_links(input)
      # Add target="_blank" to external links
      input = input.gsub(/<a([^"]*)href="http([^"]+)"([^>]*)>([^<]*)<\/a>/, '<a\1href="http\2" target="_blank"\3>\4<i class="fa-solid fa-arrow-up-right-from-square icon-external-link"></i></a>');
      input = input.gsub(/<a([^"]*)href="([^"]+)"([^"]*)target="_blank"([^>]*)>([^<]*)<\/a>/, '<a\1href="\2"\3target="_blank"\4>\5<i class="fa-solid fa-arrow-up-right-from-square icon-external-link"></i></a>');
      # Add icon to YouTube and mundo links
      input = input.gsub(/<a([^"]*)href="([^"]*)(youtube|mundo\.schule)([^"]*)"([^>]*)>/, '<a\1href="\2\3\4" target="_blank"\5><i class="fa-brands fa-fw fa-lg fa-youtube me-1"></i>');
      # Add target="_blank" and icon to files
      input = input.gsub(/<a([^"]*)href="([^"]+)\.(pdf)"([^>]*)>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-pdf me-1"></i>');
      input = input.gsub(/<a([^"]*)href="([^"]+)\.(gif|jpg|jpeg|png|svg)"([^>]*)>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-image me-1"></i>');
      input = input.gsub(/<a([^"]*)href="([^"]+)\.(zip)"([^>]*)>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-zipper me-1"></i>');
      input = input.gsub(/<a([^"]*)href="([^"]+)\.(ttf|woff)"([^>]*)>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-word me-1"></i>');
      input = input.gsub(/<a([^"]*)href="([^"]+)\.(jc|js|sketcho|css|map)"([^>]*)>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-code me-1"></i>');
      input = input.gsub(/<a([^"]*)href="([^"]+)\.(template\.html)"([^>]*)>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-code me-1"></i>');
    end

    def replace_tables(input)
        input = input.gsub(/<table([^>]*)>(.*)<\/table>/m, '<table\1 class="table table-striped table-list-sm">\2</table>');
        input = input.gsub(/<thead([^>]*)>(.*)<\/thead>/m, '<thead\1>\2</thead>');
        input = input.gsub(/<td>[\s|\n|\r|\r\n]*<strong>[\s|\n|\r|\r\n]*<em>[\s|\n|\r|\r\n]*(.*)[\s|\n|\r|\r\n]*<\/em>[\s|\n|\r|\r\n]*<\/strong>[\s|\n|\r|\r\n]*<\/td>/, '<th scope="row">\1</th>');
    end

    def replace_post(input)
      if(input != nil)
        input = replace_tables(input)
        input = replace_buttons(input)
        input = replace_links(input)
      end
    end

    def self.slopify(input)
      input = input.downcase
      input = input.gsub(/[^a-z0-9]/, '-');
      input = input.gsub(/(\-)+$/, '');
      input = input.gsub(/^(\-)+/, '');
    end

    def slopify(input)
      input = Jekyll::PostMarkdown::slopify(input)
    end

    def to_id(input)
      input = Jekyll::PostMarkdown::slopify(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::PostMarkdown)
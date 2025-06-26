# Replace content after markdown2html

module Jekyll
  module PostMarkdown
    def replace_buttons(input)
      input = input.gsub(/<a(.*)type="button"( colorclass="([^"]+)")?( class="([^"]+)")?/, '<a\1class="btn btn-\3-gradient rounded-max h-fix-md w-fit py-1 px-3 d-flex justify-content-center align-items-center m-between-2 \5"')
      input = input.gsub(/<button(.*)type="button"( colorclass="([^"]+)")?( class="([^"]+)")?/, '<button\1type="button" class="btn btn-\3-gradient rounded-max h-fix-md w-fit py-1 px-3 d-flex justify-content-center align-items-center m-between-2 \5"')
      input = input.gsub('btn--gradient', 'btn-primary-gradient')
    end

    def replace_links(input)
      # Add target="_blank" to external links
      input = input.gsub(/<a(.*)href="http([^"]+)"([^>]*)>(.*)<\/a>/, '<a\1href="http\2" target="_blank"\3>\4</a>');
      # Add icon to YouTube and mundo links
      input = input.gsub(/<a(.*)href="([^"]*)(youtube|mundo\.schule)([^"]*)"([^>]*)>(.*)<\/a>/, '<a\1href="\2\3\4" target="_blank"\5><i class="fa-brands fa-fw fa-lg fa-youtube me-1"></i>\6</a>');
      # Add target="_blank" and icon to files
      input = input.gsub(/<a(.*)href="([^"]+)\.(pdf)"([^>]*)>(.*)<\/a>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-pdf me-1"></i>\5</a>');
      input = input.gsub(/<a(.*)href="([^"]+)\.(gif|jpg|jpeg|png|svg)"([^>]*)>(.*)<\/a>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-image me-1"></i>\5</a>');
      input = input.gsub(/<a(.*)href="([^"]+)\.(zip)"([^>]*)>(.*)<\/a>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-zipper me-1"></i>\5</a>');
      input = input.gsub(/<a(.*)href="([^"]+)\.(ttf|woff)"([^>]*)>(.*)<\/a>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-word me-1"></i>\5</a>');
      input = input.gsub(/<a(.*)href="([^"]+)\.(jc|js|sketcho|css|map)"([^>]*)>(.*)<\/a>/, '<a\1href="\2.\3" target="_blank"\4><i class="fa-solid fa-fw fa-lg fa-file-code me-1"></i>\5</a>');
    end

    def replace_post(input)
      if(input != nil)
        input = replace_buttons(input)
        input = replace_links(input)
      end
    end

    def to_id(input)
      input = input.downcase
      input = input.gsub(/[^a-z0-9]/, '-');
      input = input.gsub(/(\-)+$/, '');
      input = input.gsub(/^(\-)+/, '');
    end
  end
end

Liquid::Template.register_filter(Jekyll::PostMarkdown)
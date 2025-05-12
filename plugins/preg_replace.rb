module Jekyll
  module RegexFilter
    def preg_replace(input, reg_str, repl_str)
      re = Regexp.new reg_str.to_s

      # This will be returned
      input.gsub re, repl_str
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
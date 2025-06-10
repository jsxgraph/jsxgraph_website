# This "hook" is executed right before the site's pages are rendered
Jekyll::Hooks.register :site, :pre_render do |site|
  require "rouge"

  # This class defines the PDL lexer which is used to highlight "pdl" code snippets during render-time
  class MoreJSLexer < Rouge::Lexers::Javascript
    title 'JessieCode'
    aliases 'jessiecode'
  end
end
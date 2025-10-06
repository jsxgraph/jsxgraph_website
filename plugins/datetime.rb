module DateFilter
    def date_formatting(input, language, months, caseGram = 'nom')
        date = Date.parse(input);
        d = date.mday.to_s;
        if months.kind_of?(Array)
            m = months[date.mon - 1];
        else
            m = months[caseGram][date.mon - 1];
        end
        m_int = date.mon.to_s;
        y = date.year.to_s;
        if language == 'en'
            return  m + ' ' + d +  ordinal(d.to_i) + ', ' + y;
        end
        if language == 'de'
            return  d + '. ' + m + ' ' + y;
        end
    end
end

Liquid::Template.register_filter(DateFilter)
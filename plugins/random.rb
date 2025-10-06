require 'securerandom'

module RandomNumber
    def randhex(n)
        SecureRandom.hex(n)
    end

    def randint(max, min = 0)
        diff = max - min
        dt = date("now", "%N").to_i * date("now", "%N").to_i
        rand = dt % diff
        return min + rand
    end
end

Liquid::Template.register_filter(RandomNumber)
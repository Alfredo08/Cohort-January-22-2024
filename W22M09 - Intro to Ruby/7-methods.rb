
def add_two_numbers num1, num2
    num1 + num2
end

def add_or_subtract num1, num2
    if num1 > num2
        num1 + num2
    else
        num1 - num2
    end
end

result = add_or_subtract 20, 30
puts result
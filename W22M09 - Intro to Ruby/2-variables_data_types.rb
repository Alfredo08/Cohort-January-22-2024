
=begin
    Primitive
    - Numbers
        - Integer
        - Float
    - Strings
    - Nil
    - Boolean
        - TrueClass
        - FalseClass

    Composite
    - Arrays
    - Hashes
    - Classes
=end

first_name = "Alex"
last_name = 'Miller'
age = 25
grade = 9.8
graduated = true
extra_certificate = nil

puts first_name, first_name.class
puts age, age.class
puts grade, grade.class
puts graduated, graduated.class
puts extra_certificate, extra_certificate.class
    
num1 = 3
num2 = 2.0

puts num1/num2

PI = 3.1416
puts PI
PI = 123.123 # We can change it, however, as a standard we shouldn't change it.
puts PI
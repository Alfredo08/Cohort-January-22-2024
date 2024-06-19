=begin
    let i = 1;
    while(i <= 10){
        console.log(i);
        i ++;
    }

    for(let i = 1; i <= 10; i ++){
        console.log(i);
    }
=end

i = 1

while i <= 10
    puts i
    i += 1
end

puts "-----"

i = 1
loop do
    puts i
    i += 1
    break if i > 5
end

puts "-----"

(5..10).each do |num|
    puts num
end

puts "-----"

names = ["Alex", "Julie", "Michael", "Roger", "Brianna"]
names.each do |name|
    puts name
end

puts "-----"

names.each_with_index do |value, index|
    puts "#{value} - #{index}"
end
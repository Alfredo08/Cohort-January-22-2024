=begin
    Concatenation
    let firstName = "Alex";
    let lastName = "Miller";
    let fullName = firstName + " " + lastName;
    let age = 25;
    console.log("Hey there, my name is " + fullName + " and I am " + age + " years old.");

    Interpolation
    let firstName = "Alex";
    let lastName = "Miller";
    let age = 25;
    console.log(`Hey there, my name is ${fullName} and I am ${age} years old.`);
    
    return(
        <div>
            {firstName} {lastName}
        </div>
    );

=end

# Concatenation
first_name = "Alex"
last_name = "Miller"
full_name = first_name + " " + last_name
age = 25
puts "Hey there, my name is " + full_name + " and I am " + age.to_s + " years old."

# Interpolation
puts "Hey there, my name is #{full_name} and I am #{age} years old."
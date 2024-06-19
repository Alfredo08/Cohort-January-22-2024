
class Book
    # Scope of attributes
    # Getter scope
    # attr_reader :title, :authors, :num_pages
    # Setter scope
    # attr_writer :title, :authors, :num_pages
    
    # Both getter and setter
    attr_accessor :title, :authors, :num_pages

    # Constructor - In charge of building up a Book
    def initialize title, authors, num_pages
        # Attributes - Characteristics of the object to be created
        @title = title
        @authors = authors
        @num_pages = num_pages
    end

    # Methods
    def print_info
        puts "Title: #{@title}"
        puts "Authors: #{@authors}"
        puts "Num of pages: #{@num_pages}"
    end

    # Setter
    def set_title new_title
        @title = new_title
    end

    # Getter
    def get_title
        @title  
    end
end

book_one = Book.new "Book A", ["One", "Two", "Three"], 200
book_two = Book.new "Book BB", ["One", "Four"], 500

book_one.print_info
puts "-----"
book_two.print_info
puts "-----"
puts book_one.get_title
book_one.set_title "Lord of the Rings"
puts book_one.get_title

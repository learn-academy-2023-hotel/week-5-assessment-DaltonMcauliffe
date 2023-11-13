# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# -------------------1) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
#  created a method named states using a parameter called states_hash
# def states (states_hash)
#     states_sorted = states_hash.values.flatten
#     # created a variable named states_sorted. I invoked the parameter states_hash then use the .value to return an array with only the values. We use the .flatten to take a nested array and then it combines it into a single array.
#     all_states = states_sorted.sort
#     # I use the .sort to sort the flatten array alphabeticaly
# end
# p states(us_states)
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------2a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.

# Pseudo code:

# we create a class named Bike
# we use an attr_accessor to define getter an setter for model,wheels and current_speed
#  we use the initialize method and set 3 parameters model, wheels, current_speed
#  we set the values for the 3 objects
#  create a method bike_info with the output we want using string interpolation
# we use Trek from the example and use the Bike.new to refactor our initialize and give it 3 arguments
# Output: "The Trek bike has 2 wheels and is going 0 mph"
class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize (model, wheels, current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end

# trek = Bike.new('Trek', @wheels, @current_speed)

# p trek.bike_info
# -------------------2b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
# I created a method using the desired name:  pedal_faster and we use a parameter speed.
#  add speed to the current speed
# create a new method brake with the parameter speed
# create a conditional if speed < 0 then @current_speed will take value of 0 else subtract speed from current_speed

# SIDE NOTE!!! (I wanted to see how it will all tie together so I called bike_info each time to see the new information get passed)

# "The Trek bike has 2 wheels and is going 0 mph"
# 10
# "The Trek bike has 2 wheels and is going 10 mph"
# 28
# "The Trek bike has 2 wheels and is going 28 mph"
# 23
# "The Trek bike has 2 wheels and is going 23 mph"
# 0
# "The Trek bike has 2 wheels and is going 0 mph"


    def pedal_faster (speed)
        @current_speed = @current_speed + speed
    end

    def brake (speed)
       if @current_speed - speed < 0
        @current_speed = 0
       else 
        @current_speed = @current_speed - speed
       end
    end
end
my_bike = Bike.new("Trek", @wheels, @current_speed)
p my_bike.bike_info
p my_bike.pedal_faster(10)
p my_bike.bike_info
p my_bike.pedal_faster(18)
p my_bike.bike_info
p my_bike.brake(5)
p my_bike.bike_info
p my_bike.brake(25)
p my_bike.bike_info








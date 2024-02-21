age = 40
if age > 18:
    print("You are an adult.")
else:
    print("You are a minor.")
    
def greet(name):
    print("Hello, " + name + "!")
greet("Alice")


user_input = input("Enter your name: ")
print("Hello, " + user_input + "!")


import math
result = math.sqrt(30)
print(result)


with open("example.txt", "w") as file:
    file.write("Hello, File!")
    
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")

import math

base = 2
exponent = 3

result = math.pow(base, exponent)

print(f"{base} raised to the power of {exponent} is: {result}")


# Define functions for basic arithmetic operations
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Error: Division by zero"

# Main calculator function
def calculator():
    print("Simple Calculator")

    # Get user input for two numbers
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    # Display menu for operations
    print("Select operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")

    # Get user choice for operation
    choice = input("Enter choice (1/2/3/4): ")

    # Perform the selected operation
    if choice in ('1', '2', '3', '4'):
        if choice == '1':
            result = add(num1, num2)
            print(f"{num1} + {num2} = {result}")
        elif choice == '2':
            result = subtract(num1, num2)
            print(f"{num1} - {num2} = {result}")
        elif choice == '3':
            result = multiply(num1, num2)
            print(f"{num1} * {num2} = {result}")
        elif choice == '4':
            result = divide(num1, num2)
            print(f"{num1} / {num2} = {result}")
    else:
        print("Invalid input. Please enter a valid choice (1/2/3/4).")

# Run the calculator function
calculator()

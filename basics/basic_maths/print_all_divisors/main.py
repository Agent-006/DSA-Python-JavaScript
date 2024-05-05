import math


# NOTE: This method is having a time complexity of O(n)
def print_divisors1(n):
    for i in range(1, n + 1):
        if n % i == 0:
            print(i, end=", ")


# NOTE: This method is having a time complexity of O(sqrt(n)) + O(n log(n)) + O(n)
def print_divisors2(n):
    arr = []
    #  6 * 6 <= 36
    #  7 * 7 <= 36 false
    #  O(sqrt(n))
    # for i in range(1, int(math.sqrt(n)) + 1): # We will not use the sqrt func bcoz it is an inbuild function and it will take different time everytime.
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            arr.append(i)
            if int(n / i) != i:
                arr.append(int(n / i))
    # O(n log(n)) : n is the number of factors
    # O(no of factors * log(no of factors))
    arr.sort()
    # O(n)
    # O(number of factors)
    for value in arr:
        print(value, end=", ")


n = int(input("Enter the number: "))
# print_divisors1(n)
print_divisors2(n)

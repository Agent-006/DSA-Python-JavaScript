def gcd(a, b):
    while a > 0 and b > 0:
        if a > b:
            a = a % b
        else:
            b = b % a
    if a == 0:
        return b
    return a


a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

print(gcd(a, b))

def print_pattern(n):
    value = 0
    for i in range(n):
        for k in range(i + 1):
            value += 1
            print(value, end=" ")
        print("")
        

n = int(input("Enter the size: "))
print_pattern(n)

def print_pattern(n):
    for i in range(n): 
        for k in range(n-i):
            print("*", end=" ")
        print("")
        

n = int(input("Enter the size: "))
print_pattern(n)

def print_pattern(n):
    for i in range(n):
        for k in range(i+1):
            print(k+1, " ", end=" ")
        print("")
        

n = int(input("Enter the limit: "))

print_pattern(n)
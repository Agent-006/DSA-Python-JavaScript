def print_pattern(rows, cols):
    for i in range(rows):
        for k in range(cols):
            print("* ", end=" ")
        print("")


rows = int(input("Enter the no. of rows: "))
cols = int(input("Enter the no. of cols: "))

print_pattern(rows, cols)
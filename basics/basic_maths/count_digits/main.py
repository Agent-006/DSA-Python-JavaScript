def count_digit(n):
    count = 0
    while n > 0:
        n = int(n / 10)
        count += 1
    return count


n = int(input("Enter the number: "))
digits = count_digit(n)
print(f"The number of digits present in {n} is: ", digits)

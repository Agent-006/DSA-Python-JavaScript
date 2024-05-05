def reverse_number(n):
    rev_num = 0
    while n > 0:
        digit = n % 10
        rev_num = (rev_num * 10) + digit
        n = int(n / 10)
    return rev_num


n = int(input("Enter the number: "))
rev_num = reverse_number(n)
print(f"The reverse of {n} is: {rev_num}")

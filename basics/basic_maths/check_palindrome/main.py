def is_palindrome(n):
    rev_num = 0
    num = n
    while num > 0:
        digit = num % 10
        rev_num = (rev_num * 10) + digit
        num = int(num / 10)
    if rev_num == n:
        return True
    else:
        return False


n = int(input("Enter the number: "))
print(is_palindrome(n))

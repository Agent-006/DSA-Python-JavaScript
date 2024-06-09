def missing_number(arr, n):
    for i in range(1, n + 1):
        flag = 0
        for k in range(n - 1):
            if arr[k] == i:
                flag = 1
                break
        if flag == 0:
            return i



if __name__ == "__main__":
    n = int(input("Enter the value of n: "))
    arr = list(map(int, input("Enter the elements: ").split()))
    print("The missing number is:", missing_number(arr, n))


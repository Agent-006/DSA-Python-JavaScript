# using single pointer method
def reverse_arr(i, arr):
    n = len(arr)
    if i >= int(n / 2):
        return

    # swap
    temp = arr[i]
    arr[i] = arr[n - i - 1]
    arr[n - i - 1] = temp
    reverse_arr(i + 1, arr)


def main():
    arr = list(map(int, input("Enter the array elements: ").split()))
    reverse_arr(0, arr)
    print(arr)


main()

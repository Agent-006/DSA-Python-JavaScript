arr = list(map(int, input("Enter the array elements, separate with space: ").split()))

# pre-compute/hashing
hash = {}
for i in range(len(arr)):
    if arr[i] in hash:
        hash[arr[i]] += 1
    else:
        hash[arr[i]] = 1
for x in hash:
    print(f"{x} occurs {hash[x]} in the array")

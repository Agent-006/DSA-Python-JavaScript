n = int(input("Enter the size of the array: "))
arr = list(map(int, input("Enter the array elements, separate with spaces: ").split()))

# pre-compute/hashing
hash = {}
for i in range(n):
    hash[arr[i]] = 0
print(hash)

for i in range(n):
    hash[arr[i]] += 1
print(hash)

# Query input
q = int(input("Enter the number of queries: "))
print("Enter the queries one by one -")

while q > 0:
    number = int(input())
    q -= 1
    # fetch
    print(f"The frequency of {number} is {hash[number] if number in arr else 0}")

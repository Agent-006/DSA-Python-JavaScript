# array input
n = int(input("Enter the size of the array: "))
arr = list(map(int, input("Enter the array elements, separate with spaces: ").split()))

# pre-compute/hashing
default_value = 0
# depending on the maximum number/size in the array(maybe given in the question)
size = 13
hash = [default_value] * size

for i in range(n):
    hash[arr[i]] += 1

# query input
q = int(input("Enter the number of queries: "))
print("Enter the queries one by one -")

while q > 0:
    number = int(input())
    q -= 1 
    # fetch
    print(f"The frequency of {number} is {hash[number]}")

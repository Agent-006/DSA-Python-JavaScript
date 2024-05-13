s = input("Enter the string: ")

# pre-compute/hashing
hash = {}
for i in range(len(s)):
    hash[s[i]] = 0
print(hash)

for i in range(len(s)):
    hash[s[i]] += 1
print(hash)

# Query input
q = int(input("Enter the number of queries: "))
print("Enter the queries one by one - ")

while q > 0:
    c = input()
    q -= 1
    # fetch
    print(f"The frequency of {c} is {hash[c] if c in s else 0}")

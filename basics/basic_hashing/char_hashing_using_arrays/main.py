# string input
s = input("Enter the string: ")

# pre-compute
default_value = 0
# Incase you have other characters also then change the size to 256.
size = 26

hash = [default_value] * size
for i in range(len(s)): 
    hash[ord(s[i]) - ord("a")] += 1

# query inputs
q = int(input("Enter the number of queries: "))
print("Enter the characters one by one -")
while q > 0:
    c = input()
    print(hash[ord(c) - ord("a")])
    q -= 1

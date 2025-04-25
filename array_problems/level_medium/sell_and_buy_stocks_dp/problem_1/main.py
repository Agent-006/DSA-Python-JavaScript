import os 

def maximum_profit(prices: list) -> int:
    # Initialize the minimum price to the first price in the list
    minimun_price = prices[0]
    # Initialize the maximum profit to 0
    maximum_profit = 0
    # Get the number of prices
    n = len(prices)
    
    # Iterate over the prices starting from the second price
    for i in range(1, n):
        # Calculate the potential profit by subtracting the minimum price from the current price
        cost = prices[i] - minimun_price
        # Update the maximum profit if the current potential profit is greater
        maximum_profit = max(maximum_profit, cost)
        # Update the minimum price if the current price is lower
        minimun_price = min(minimun_price, prices[i])
    # Return the maximum profit found
    return maximum_profit

if __name__ == "__main__":
    # Get the current directory of the script
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # Define the path to the input file
    input_file = os.path.join(current_dir, "input.txt")
    
    # Read the input file and process the content
    with open(input_file, "r") as file:
        content = file.read().strip()
        # Convert the file content into a list of prices
        prices = list(map(int, content.split()))
        
        # Calculate the maximum profit
        result = maximum_profit(prices)
        # Print the maximum profit
        print(f"Maximum Profit: {result}")
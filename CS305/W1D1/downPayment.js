//5. Defining table:
/*
Input:
    Cost of a house
Process:
    down payment calculated as a percentage of cost of the house.
    For cost less than 50,000
        Down payment = cost * 0.05
    For cost less than 100,000
        Down payment = 1000 + (cost - 50_000) * 0.1
    For cost less than 200,000
        Down payment = 2000 + (cost - 100_000) * 0.15
    For cost greater than 200,000
        Down payment = 5000 + (cost - 200_000) * 0.1

Output:
	Down payments
*/
import random 
print("Lets play a game of rock paper scissors")
print("Lets play a game of rock paper scissors")
print("Lets play a game of rock paper scissors")
print("Rock,\n" "Paper, \n" "Scissors")

player1 = input("P1, Please put your character here:").lower()
#print("****NO CHEATING! \n\n" * 25)
player2 = input("P2, Please put your character here:").lower()
computer3 = random.randint(0, 2)
if computer3 == 0:
	computer = "rock"
elif computer3 == 1: 
	computer = "paper"
else:
	computer = "scissors"
print(computer)		
if player1 == player2:
	print("Its a tie!")
elif player1 == "rock":
	if player2 == "scissors":
		print("player1 wins")
	elif player2 == "paper":
		print("player2 wins")
elif player1 == "paper":
	if player2 == "scissors":
		print("player2 wins")	
	elif player2 == "rock":
		print("player1 wins")
elif player1 == "scissors":
	if player2 == "rock":
		print("player2 wins")
	elif player2 == "paper":
		print("player1 wins")			
else:
	print("Something went wrong")
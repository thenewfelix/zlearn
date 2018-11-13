
age = input("How old are you:")
if age:
	age = int(age)
	if age >= 18 and age < 21:
		print("You can enter but need a wristband")
	elif age	 >= 21:
		print("Your drink has been served")
	else:
		print("You are not old enough to drink little one :(") 		 
else:
	print("Please enter a valid age")






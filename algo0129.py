'''
1. Question One:
With the given list below, loop through each name and make each of 
them say hello.
name_list = ['Rachel', 'Ross', 'Chandler', 'Monica']
-Here's what your terminal should look like once you code is running.

Hi I'm Rachel
Hi I'm Ross
Hi I'm Chandler
Hi I'm Monica
'''
# name_list = ['Rachel', 'Ross', 'Chandler', 'Monica']
# str = "Hi I'm"
# for friend in name_list:
#     print(f"{str} {friend}")

# name_list = ['Rachel', 'Ross', 'Chandler', 'Monica']
# def friends(str):
#     str = "Hi I'm"
#     while True:
#         return f"{str} {name_list[0]}\n{str} {name_list[1]}\n{str} {name_list[2]}\n{str} {name_list[3]}"

# output = friends(str)
# print(output)

'''
2. Question Two:
With the given list below, create a function that adds one more charachter.
name_list2 = ['Rachel', 'Ross', 'Chandler', 'Monica']
-Here's what your terminal should look like once you code is running.

['Rachel', 'Ross', 'Chandler', 'Monica', 'newname']
'''
# name_list2 = ['Rachel', 'Ross', 'Chandler', 'Monica']
# def new_name(str):
#     str = "Smelly Cat"
#     name_list2.append(str)
#     return name_list2

# output = new_name(str)
# print(output)

'''
3. Question Three:
-Create a function that has secret number and asks the user to guess. 
-If the user gets the answer wrong, have it print "wrong number", until 
they guess correctly.

-Here's what your terminal should look like once you code is running.

Hey user! Can you guess the secret number? 4
wrong number
Try again? 55
wrong number
Try again? 33
'''
# def guess_num(num):
#     user_name = input("What is your name? ")
#     user_input = int(input(f"Hey {user_name}! Can you guess the secret number? "))
#     while True:
#         if user_input == num:
#             return f"You did it {user_name}!"
#         else:
#             user_input = int(input("Try again? "))
            
# output = guess_num(21)
# print(output)

'''
5. Question 5:
Given two strings, write a function that determines if the second string 
is an anagram of the first string.
An anagram is a word, phrase, or anme formed by rearranging the letters 
of another, such as cinema, formed from iceman.
Some Examples:
print(validAnagram('', '')); #true
print(validAnagram('aaz', 'zza')); #false
print(validAnagram('cinema', 'iceman')); #true
print(validAnagram('rat', 'car')); #false
print(validAnagram('qwerty', 'qeywrt')); #true
'''
def validAnagram(str1, str2):
    if ''.join(sorted(str1)) in ''.join(sorted(str2)):
        return True
    else:
        return False

print(validAnagram('', '')); #true
print(validAnagram('aaz', 'zza')); #false
print(validAnagram('cinema', 'iceman')); #true
print(validAnagram('rat', 'car')); #false
print(validAnagram('qwerty', 'qeywrt')); #true

'''
6. Question 6:
Write a function called sameFrequency which accepts two positive integers
The function should return True if both numbers have the same frequency 
of digits
Some Examples:
print(sameFrequency(182, 281)) #true
print(sameFrequency(34, 14)) #false
print(sameFrequency(3589578, 5879385)) #true
print(sameFrequency(22, 222)) #false
'''
# def sameFrequency(int1, int2):
#     str1 = ''.join(sorted(str(int1)))
#     str2 = ''.join(sorted(str(int2)))
#     if  str1 in  str2 and len(str1) == len(str2):
#         return True
#     else:
#         return False

# print(sameFrequency(182, 281)) #true
# print(sameFrequency(34, 14)) #false
# print(sameFrequency(3589578, 5879385)) #true
# print(sameFrequency(22, 222)) #false

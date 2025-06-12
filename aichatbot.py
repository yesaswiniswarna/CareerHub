import requests

# Replace 'YOUR_API_KEY' with your actual Botbutcher API key
API_KEY = '02790552-45cf-46ff-882f-09eb2650d79c'

# Define the API endpoint
API_ENDPOINT = 'https://api.botbutcher.com/chat'

def get_bot_response(user_input):
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json',
    }
    
    data = {
        'message': user_input
    }

    response = requests.post(API_ENDPOINT, headers=headers, json=data)
    
    if response.status_code == 200:
        return response.json().get('response')
    else:
        return "Sorry, I couldn't process your request."

def main():
    print("Chatbot: Hello! How can I help you today?")
    
    while True:
        user_input = input("You: ")
        
        if user_input.lower() in ['exit', 'quit', 'bye']:
            print("Chatbot: Goodbye!")
            break
        
        bot_response = get_bot_response(user_input)
        print(f"Chatbot: {bot_response}")

if __name__ == "__main__":
    main()

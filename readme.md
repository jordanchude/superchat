\# Project Overview
## Superchat
Superchat is a chat application that allows users to login and speak with other users on the application. The purpose of this application is to better understand React and Firebase and gain the knowledge to put chat functionality in larger, more expansive applications. The key features include authentication and real-time messaging. Key tools include React + Firebase. 

## Architecture
### Diagram
```
                                              Login
                                                |
                                      Authentication Service
                                                |
                                       Chat App Homepage
                                                |
                                          Chat Window                 
                                           /        \              
                                          /          \              
                                      User 1      User 2  
                                        |            |
                                     Message      Message      
                                           Chat Box
                                           /      \       
                                          /        \            
                                     Input     Send Button

```

### Description
The Superchat chat app has a three-tiered architecture, with a front-end client and a cloud-based back-end. The front-end client is implemented using React, and consists of a login page, a chat app homepage, and a chat window. The cloud-based back-end is provided by Firebase, and is responsible for storing and syncing data, handling user authentication, and providing other services as needed.

Users can log in to the chat app using the login page, which uses Firebase's built-in authentication service to verify their credentials. Once logged in, users are taken to the chat app homepage, which displays the chat window and the chat box. The chat window displays the messages and users in the current chat room, and the chat box allows users to send new messages to the chat window. The chat box displays all the messages in the current chat room.


## Data Representation
- Entity: User
    - Attributes:
       - User ID
       - User name
       - Email address
       - Password
- Entity: Chat Message
    - Attributes:
        - Message ID
        - User ID
        - Message text
        - Timestamp
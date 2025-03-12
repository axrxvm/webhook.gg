
---

# Webhook.gg

A simple Node.js application to send messages to a Discord webhook with customizable username, avatar, and message repetition.

Made with ❤ by Aarav Mehta  
[Visit my website](https://aaravm.me/)

---

## Overview

Webhook.gg is a command-line tool built with Node.js that allows users to send messages to a Discord webhook. It prompts the user for the webhook URL, username, avatar URL, message content, and the number of times to send the message. The tool uses the `discord.js` library to interact with Discord's webhook API and `readline` for command-line input handling.

---

## Features

- Send messages to a Discord webhook.
- Customize the webhook's username and avatar.
- Specify how many times the message should be sent.
- Simple and interactive command-line interface.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.0.0 or higher recommended)
- A Discord webhook URL (you can create one in a Discord server under channel settings > Integrations > Webhooks)

---

## Installation

1. **Clone or Download the Project**  
   Clone this repository or download the code to your local machine.

   ```bash
   git clone <repository-url>
   cd webhook-gg
   ```

2. **Install Dependencies**  
   Run the following command to install the required Node.js packages:

   ```bash
   npm install discord.js readline
   ```

3. **Verify Setup**  
   Ensure the `discord.js` and `readline` modules are listed in your `package.json` or installed in the `node_modules` folder.

---

## Usage

1. **Run the Application**  
   Start the script using Node.js:

   ```bash
   node index.js
   ```

2. **Follow the Prompts**  
   The application will ask for the following inputs:
   - **Webhook URL**: Paste the full Discord webhook URL (e.g., `https://discord.com/api/webhooks/123456789/abcdefg`).
   - **Webhook Username**: Enter the name you want the webhook to display.
   - **Webhook Avatar URL**: Provide a direct image URL (e.g., `https://example.com/avatar.png`) or leave blank for the default avatar.
   - **Message**: Type the message you want to send.
   - **Number of Times**: Enter how many times to send the message (must be a valid number).

3. **Example Interaction**  
   ```
   [NodeJS Runtime Enviroment] Welcome to NodeJS Engine. Starting application.
   [webhook.gg] The Webhook URL you want to send messages to :
   https://discord.com/api/webhooks/123456789/abcdefg
   [webhook.gg] What should be the name of the webhook user :
   MyBot
   [webhook.gg] What should be the Avatar of the Webhook user :
   https://example.com/avatar.png
   [webhook.gg] What is the message to send through the Webhook User :
   Hello, world!
   [webhook.gg] How many times the message is to be send :
   3
   ```

   Output:
   ```
   [webhook.gg] Sent Hello, world! to your webhook!
   [webhook.gg] Sent Hello, world! to your webhook!
   [webhook.gg] Sent Hello, world! to your webhook!
   [NodeJS Runtime Enviroment] Process Completed! Closing NodeJS Engine Now!
   ```

4. **Error Handling**  
   - If the number of times is not a valid number, the program will exit with an error message:
     ```
     [webhook.gg] ERROR : That is not a Valid Number. Exiting
     [Node.js Runtime Enviroment] Application Exited! Closing the engine.
     ```

---

## Code Explanation

- **Dependencies**:  
  - `discord.js`: Used to interact with Discord's webhook API.
  - `readline`: Provides an interface for reading input from the command line.

- **Workflow**:  
  1. The script initializes a `readline` interface to capture user input.
  2. It prompts for the webhook URL, username, avatar, message, and repetition count.
  3. The webhook URL is split to extract the `id` and `token` required by `discord.js`.
  4. A `WebhookClient` is created and sends the message the specified number of times.
  5. The program exits gracefully after completion or on error.

---

## Contributing

Feel free to fork this project and submit pull requests with improvements! Suggestions for better error handling, additional features, or UI enhancements are welcome.

---

## License

This project is open-source and available under the [LICENSE](LICENSE).  
Created by Aarav Mehta.

---

## Contact

For questions or support, reach out to me at [the Discord Server](https://discord.gg/7MQczhh2pS)

---

*Last Updated: March 12, 2025*

---

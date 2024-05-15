# File-Log-Manager

`file-log-manager` is a customizable, easy-to-use logging utility for Node.js applications. This utility is designed to allow dynamic path configurations for logs, ensuring that your logging structure is as flexible as needed for various environments and scenarios.

#### Features

- Configurable Path for Logs: You can specify a custom path for log directories, facilitating integration into diverse environments or complex file hierarchies.
- Automatic Directory and File Creation: Automatically organizes logs into directories and files based on custom log names and the current date.
- Timestamped Logs: Each log entry is prepended with a precise timestamp, making it easy to track events chronologically.
- Simple API: Easy to set up and use, with minimal configuration needed to start logging messages.

#### Installation

Install the package using npm:

```bash
npm install file-log-manager
```

#### Configuration

Here's how to integrate `file-log-manager` into your Node.js application and configure it:

- Require the Module:

```javascript
const path = require('path');
const fileLogManager = require('file-log-manager');
```

- Configure and Use the Logger:

```javascript
const logger = fileLogManager({
  path: path.join(__dirname, '../logs'), // Customizable log directory path
});

// Example log entries
logger('server', 'Server is up and running.');
logger('database', 'Database connection established.');
logger('auth', 'User logged in successfully.');
logger('errors', 'Failed to fetch user data.');
```

#### How It Works

`file-log-manager` is designed to provide a flexible logging solution with the following functionalities:

- Directory Management: Creates a directory named after the specified log category inside the configured logs folder.
- File Naming: Generates a log file named with the current date (formatted as YYYY-MM-DD.log).
- Message Formatting: Adds a timestamp to each log message for a precise record of when events occur.
- Appending Logs: Writes and appends log messages to the specified file, creating it if it doesn't exist.
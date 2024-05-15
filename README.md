# File-Logger

`File-Logger` is a lightweight, easy-to-use logging utility for Node.js applications. Designed to simplify logging by automatically creating and managing log files with timestamps, this tool ensures your logs are well-organized and accessible.

#### Features

- Automatic Directory and File Creation: Automatically organizes logs into directories and files based on custom log names and current dates.
- Timestamped Logs: Each log entry is prepended with a precise timestamp, making it easy to track events chronologically.
- Simple API: Minimal setup and easy-to-use function for logging messages.

#### Installation

Install the package using npm:

```bash
npm install my-file-logger
```

#### Usage

Here's how to integrate my-file-logger into your Node.js application:

- Require the Module:

```javascript
const fileLogger = require('my-file-logger');
```

- Log Messages:

```javascript
// Log a message in the 'app' log
fileLogger('app', 'Application has started.');

// Log an error message in the 'errors' log
fileLogger('errors', 'An unexpected error occurred.');
```

#### Example

```javascript   
const fileLogger = require('my-file-logger');

fileLogger('server', 'Server is up and running.');
fileLogger('database', 'Database connection established.');
fileLogger('auth', 'User logged in successfully.');
fileLogger('errors', 'Failed to fetch user data.');
````

#### How It Works

`my-file-logger` takes care of the following tasks:

- Directory Management: Creates a directory named after the specified log name inside a logs folder.
- File Naming: Generates a log file with the current date (formatted as YYYY-MM-DD.log).
- Message Formatting: Adds a timestamp to each log message to keep a precise record of when events occur.
- Appending Logs: Writes log messages to the specified file, creating it if it doesn't exist.
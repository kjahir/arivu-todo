let config = {}

config.host = process.env.HOST || "https://arivu.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "TmnBryyhUdbNmnTwz7vKt7QVssDEivGJHQmYO9dIkfHQyh6wf1KebRWm5OBIrigqFEEwLJqcrHvXbW7XNHiO9g==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
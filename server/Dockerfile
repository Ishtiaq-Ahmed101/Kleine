# Use an official Node.js runtime as a base image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app

# Install app dependencies
RUN npm install

# Bundle your app source code into the container
COPY . .

# Expose the port your app will run on
EXPOSE 5000

# Define the command to run your application in development mode
CMD ["npm", "run", "dev"]
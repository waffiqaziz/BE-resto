# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./


# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy app source code
COPY . .

# Set environment variables

# Expose port 8081
EXPOSE 8080

# Run database migrations
CMD npm start
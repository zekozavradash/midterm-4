# Step 1: Use a base image with Node.js
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Expose the port your app runs on (default for NestJS is 3000)
EXPOSE 3000

# Step 7: Define the command to run the application
CMD ["npm", "run", "start:prod"]

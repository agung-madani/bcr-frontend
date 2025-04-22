FROM node:20

WORKDIR /app

# Copy package files and install all dependencies (including dev)
COPY package*.json ./
RUN npm install

# Copy source files and the .env file
COPY . .

# Build TypeScript to JS
RUN npm run build

RUN npm install -g serve

# Run the compiled JS file (not the .ts file)
CMD ["serve","-s","dist","-l","3039"]

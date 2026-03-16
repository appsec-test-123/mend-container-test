# Use an old, vulnerable base image
FROM node:10.16.0-stretch

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies (will include vulnerable lodash/st)
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 3001

# Start the application
CMD [ "npm", "start" ]

# Link to GitHub for GHCR visibility
LABEL org.opencontainers.image.source=https://github.com/appsec-test-123/mend-container-test

# Fetching the minified node image on apline linux
FROM node:20-alpine

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY package.json ./

# Installing dependencies
RUN npm install

# Copying all the files in our project
COPY . .

# Exposing server port
EXPOSE 4000

# Starting our application
CMD [ "npm", "start" ]


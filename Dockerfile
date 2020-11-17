# Step 1
FROM node:12
# Step 2
WORKDIR /app
# Step 3
COPY package.json ./
# Step 4
RUN npm install
# Step 5
RUN npm install webpack webpack-cli webpack-dev-server -g
# Step 6
COPY . ./
# Step 7
EXPOSE 8080
# Step 8
CMD ["npm", "run", "dev"]

FROM node:16-alpine
WORKDIR /server
COPY .env .
COPY package*.json .
COPY server .
RUN npm install
CMD [ "npm", "run", "app" ]

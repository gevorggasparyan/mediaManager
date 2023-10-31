FROM node:16-alpine
WORKDIR /server
COPY .env .
COPY package*.json .
COPY server .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "app" ]

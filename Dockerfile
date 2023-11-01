FROM node:16-alpine
RUN apk update && apk add --no-cache chromium
ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/chromium-browser"
WORKDIR /server
COPY .env .
COPY package*.json .
COPY server .
RUN npm install
RUN npm install playwright && ./node_modules/.bin/playwright install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

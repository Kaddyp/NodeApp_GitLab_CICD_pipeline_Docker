FROM node:21.5.0

WORKDIR /usr/src/app

COPY package*.json index.js ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
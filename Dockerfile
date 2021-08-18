FROM node:14

WORKDIR /home/node/express-app

COPY package*.json ./


RUN npm install -D nodemon

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
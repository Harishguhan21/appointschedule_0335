FROM node:20.2-alpine
COPY . /notification
WORKDIR /notification
RUN npm install
RUN npm i -g ts-node
CMD npm run prod
FROM node:20.2-alpine
COPY . /provider
WORKDIR /provider
RUN npm install
RUN npm i -g ts-node
CMD npm run prod
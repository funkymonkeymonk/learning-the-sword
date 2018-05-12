FROM node:latest
RUN npm install --global gatsby-cli
WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]
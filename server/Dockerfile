FROM node:alpine

WORKDIR /app
COPY .package.json ./
RUN npm i --silent
COPY . .

ENV DB_URI=mongodb+srv://admin:OSHVwEaMLk7nboFM@testzomato.gptly.mongodb.net/Zomato?retryWrites=true&w=majority
ENV PORT=4000
ENV JWT_PRIVATE_KEY=zomato
ENV OAUTH_GOOGLE_CLIENT_ID=1080160869968-a41ddvqrhge59kbob39h1lor02avpkat.apps.googleusercontent.com
ENV OAUTH_GOOGLE_CLIENT_SECRET=ZUVv8uAWPsBplMODbU2tVdZs
ENV NODE_ENV=production

CMD ["npm", "run", "start"]

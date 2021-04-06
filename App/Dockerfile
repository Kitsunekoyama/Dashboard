FROM node:10-alpine AS alpine
ADD ./ ./
WORKDIR ./
RUN npm install expo
RUN npm install -g expo-cli
EXPOSE 19006
CMD ["npm", "run", "web", "--tunnel"]
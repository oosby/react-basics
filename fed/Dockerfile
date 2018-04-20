FROM node:8 as test
WORKDIR /home/node
COPY . ./
RUN npm install -p && npm run build

FROM node:8
COPY --from=test /home/node ./
ENV PORT 8080
EXPOSE 8080
CMD ["npm", "start"]
FROM node:8 as test
WORKDIR /home/node
COPY . ./
RUN npm install -p

FROM node:8
COPY --from=test /home/node ./
ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]
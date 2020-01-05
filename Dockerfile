FROM node:lts-alpine

RUN mkdir -p /app/client
WORKDIR /app/client

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /app/client/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /app/client

CMD ["npm", "run", "serve"]
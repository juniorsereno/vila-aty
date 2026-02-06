FROM node:20-alpine

WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar todo o código
COPY . .

# Build do frontend
RUN npm run build

# Variável de ambiente para a chave da API (será substituída no runtime)
ENV GOOGLE_API_KEY=""
ENV PORT=3000

# Expor a porta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]

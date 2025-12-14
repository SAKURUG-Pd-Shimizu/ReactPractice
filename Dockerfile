# Node.js の公式イメージを使用
FROM node:22-bookworm

# 作業ディレクトリを作成
WORKDIR /app

# パッケージマネージャ関連ファイルをコピー
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Vite 開発サーバー用のポートを開放
EXPOSE 5173

# 開発サーバーを起動
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM node:14.17.0-alpine
# docker-compose.ymlから変数を受け取るための器
ARG WORKDIR
ARG CONTAINER_PORT
ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    # 仮想環境で起動したnodeにアクセスするために必要
    HOST=0.0.0.0 \
    # 環境変数を受け取る
    API_URL=${API_URL}
# 作業ディレクトリ設定
WORKDIR ${HOME}
# コンテナ公開のためのポート番号
EXPOSE ${CONTAINER_PORT}

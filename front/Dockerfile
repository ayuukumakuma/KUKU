FROM node:14.4.0-alpine

ARG WORKDIR
ARG CONTAINER_PORT

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    # 仮想環境で起動したnodeにアクセスするために必要
    HOST=0.0.0.0
# 作業ディレクトリ設定
WORKDIR ${HOME}
# コンテナ公開のためのポート番号
EXPOSE ${CONTAINER_PORT}

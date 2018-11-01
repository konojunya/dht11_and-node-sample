# dht11_and-node-sample
[CODE SANDBOX] 温度センサーを試す

## 手順

1. まず `npm init -y` をする
2. - curl -O http://www.airspayce.com/mikem/bcm2835/bcm2835-1.36.tar.gz
   - tar zxvf bcm2835-1.36.tar.gz
   - cd bcm2835-1.36
   - ./configure
   - make
   - sudo make check
   - sudo make install
3. `npm install node-dht-sensor --save` をする
4. `app.js` を作成する
5. `node app.js` で試す
6. `npm install express` をする
7. `server.js` を作成する
8. `node server.js` をして localhost:3000 にアクセスできるか試す
9. `server.js` を改良してみる
10. `[GET] /sensor` で値がかえってくるかを確認する
11. ajaxを使って通信をしてみる(index.htmlを編集する)

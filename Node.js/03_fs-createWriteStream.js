const fs = require('fs');

const ws = fs.createWriteStream('write.txt', 'utf-8');

ws.write('使用stream写入文本数据...\n');
ws.write('END \n');
ws.end();

const ws2 = fs.createWriteStream('write2.txt', 'utf-8');
ws2.write(Buffer.from('使用stream写入二进制文本数据...\n'),'utf-8');
ws2.write('END \n','utf-8');
ws2.end();
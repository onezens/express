/**
 * Created by wackosix on 16/6/1.
 */

//mysql
module.exports = {
    cookieSecret: 'myblog',//cookieSecret 用于 Cookie 加密与数据库无关
    db: 'blog',
    host: 'localhost',
    port: 27017
};

//mongodb
module.exports = {
    cookieSecret: 'signcookie',//cookieSecret 用于 Cookie 加密与数据库无关
    db: 'sign',
    host: 'localhost',
    port: 27017
};
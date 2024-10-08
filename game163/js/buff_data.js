// BUFF页面下商品的数据

// CS商品数据
// CS热门商品数据
// 14 个字段: id; imgurl; wear; wearPercent; wearNumber; wearName; isStatTrak; paintSeed; goodsName; Price; isPrinting; printing(1-4)Url
// wearPercent 通过计算再加入数组对象中
var hotData = [
    {
        id: 1,
        imgurl: 'assets/buff-hot-good1.png',
        wear: 0.11373671144247055,
        isStatTrak: true,
        paintSeed: 25,
        goodsName: '格洛克18型 | 水栽竹 ',
        Price: 388888,
        isPrinting: false,
        printing1Url: '',
        printing2Url: '',
        printing3Url: '',
        printing4Url: ''
    },
    {
        id: 2,
        imgurl: 'assets/buff-hot-good2.png',
        wear: 0.313736431144247055,
        isStatTrak: false,
        paintSeed: 262,
        goodsName: '格洛克18型 | 水栽竹 ',
        Price: 288888,
        isPrinting: false,
        printing1Url: '',
        printing2Url: '',
        printing3Url: '',
        printing4Url: ''
    },
    {
        id: 3,
        imgurl: 'assets/buff-hot-good3.png',
        wear: 0.158364431144247055,
        isStatTrak: false,
        paintSeed: 14,
        goodsName: 'AK47 | 水栽竹 ',
        Price: 288888,
        isPrinting: true,
        printing1Url: 'assets/printing1.png',
        printing2Url: 'assets/printing1.png',
        printing3Url: '',
        printing4Url: ''
    },
    {
        id: 4,
        imgurl: 'assets/buff-hot-good4.png',
        wear: 0.568364431144247055,
        isStatTrak: false,
        paintSeed: 27,
        goodsName: '格洛克18型 | 水栽竹 ',
        Price: 198765,
        isPrinting: false,
        printing1Url: '',
        printing2Url: '',
        printing3Url: '',
        printing4Url: ''
    },
    {
        id: 5,
        imgurl: 'assets/buff-hot-good5.png',
        wear: 0.348364431144247055,
        isStatTrak: true,
        paintSeed: 999,
        goodsName: 'AK47 | 二西莫夫 ',
        Price: 166666,
        isPrinting: true,
        printing1Url: 'assets/printing1.png',
        printing2Url: 'assets/printing1.png',
        printing3Url: 'assets/printing1.png',
        printing4Url: 'assets/printing1.png'
    },
    {
        id: 6,
        imgurl: 'assets/buff-hot-good6.png',
        wear: 0.148364431144247055,
        isStatTrak: true,
        paintSeed: 666,
        goodsName: 'AK47 | 红线 ',
        Price: 99999,
        isPrinting: true,
        printing1Url: 'assets/printing7.png',
        printing2Url: 'assets/printing8.png',
        printing3Url: 'assets/printing9.png',
        printing4Url: 'assets/printing4.png'
    },
    {
        id: 7,
        imgurl: 'assets/buff-hot-good7.png',
        wear: 0.121364431144247055,
        isStatTrak: false,
        paintSeed: 250,
        goodsName: '格洛克18型 | 水栽竹 ',
        Price: 888888,
        isPrinting: false,
        printing1Url: '',
        printing2Url: '',
        printing3Url: '',
        printing4Url: ''
    },
    {
        id: 8,
        imgurl: 'assets/buff-hot-good8.png',
        wear: 0.103364431144247055,
        isStatTrak: true,
        paintSeed: 438,
        goodsName: 'USP 消音型 | 水栽竹 ',
        Price: 222222,
        isPrinting: true,
        printing1Url: 'assets/printing11.png',
        printing2Url: 'assets/printing12.png',
        printing3Url: 'assets/printing12.png',
        printing4Url: 'assets/printing2.png'
    },
    {
        id: 9,
        imgurl: 'assets/buff-hot-good9.png',
        wear: 0.288364431144247055,
        isStatTrak: false,
        paintSeed: 290,
        goodsName: 'AK47 | 水栽竹 ',
        Price: 11111,
        isPrinting: true,
        printing1Url: 'assets/printing1.png',
        printing2Url: 'assets/printing3.png',
        printing3Url: 'assets/printing5.png',
        printing4Url: 'assets/printing7.png'
    },
    {
        id: 10,
        imgurl: 'assets/buff-hot-good10.png',
        wear: 0.058364431144247055,
        isStatTrak: true,
        paintSeed: 1,
        goodsName: 'AK47 | 火神 ',
        Price: 889999,
        isPrinting: true,
        printing1Url: 'assets/printing13.png',
        printing2Url: 'assets/printing13.png',
        printing3Url: 'assets/printing13.png',
        printing4Url: 'assets/printing13.png'
    }
];

// 热门商品数据处理
// 直接添加wearPercent 属性
for (let i = 0; i < hotData.length; i++) {
    hotData[i].wearPercent = (hotData[i].wear * 100).toFixed(2) + '%';
    hotData[i].wearNumber = Math.floor(hotData[i].wear * 100);
    // 添加wearName 属性
    if (hotData[i].wearNumber <= 7) {
        hotData[i].wearName = '(崭新出厂)';
    } else if (hotData[i].wearNumber <= 15) {
        hotData[i].wearName = '(略有磨损)';
    } else if (hotData[i].wearNumber <= 38) {
        hotData[i].wearName = '(久经沙场)';
    } else if (hotData[i].wearNumber <= 45) {
        hotData[i].wearName = '(破损不堪)';
    } else if (hotData[i].wearNumber <= 80) {
        hotData[i].wearName = '(战痕累累)';
    }
}
// 上方又再添加一个wearNumber 属性, 是为了用于比较大小, 选择对应背景颜色的span盒子和文字来渲染
// 还有一个 wearName 属性, 为的就是自动渲染武器名称后面括号内的磨损度!
// console.log(hotData); => success

// 第二部分CS商品数据
// 5 个字段: id; imgurl; goodsName; intPrice; floatPrice
var section2Data = [
    {
        id: 1,
        imgurl: 'assets/buff-normal-good1.png',
        goodsName: '格洛克18型 | 水栽竹 (略有磨损)',
        intPrice: '35',
        floatPrice: '.5'
    },
    {
        id: 2,
        imgurl: 'assets/buff-normal-good2.png',
        goodsName: 'AWP | 不认识 (略有磨损)',
        intPrice: '135',
        floatPrice: '.1'
    },
    {
        id: 3,
        imgurl: 'assets/buff-normal-good3.png',
        goodsName: 'MP5 | 冷月兔 (崭新出厂)',
        intPrice: '5',
        floatPrice: '.8'
    },
    {
        id: 4,
        imgurl: 'assets/buff-normal-good4.png',
        goodsName: 'M4A4 | 这是啥 (战痕累累)',
        intPrice: '35',
        floatPrice: ''
    },
    {
        id: 5,
        imgurl: 'assets/buff-normal-good5.png',
        goodsName: 'UMP45 | 大黄蜂 (略有磨损)',
        intPrice: '6',
        floatPrice: '.8'
    },
    {
        id: 6,
        imgurl: 'assets/buff-normal-good6.png',
        goodsName: '一个T的探员 | 叫啥来着忘了',
        intPrice: '28',
        floatPrice: '.2'
    },
    {
        id: 7,
        imgurl: 'assets/buff-normal-good7.png',
        goodsName: 'P250(StatTrak™) | 孙儿 (破损不堪)',
        intPrice: '38',
        floatPrice: ''
    },
    {
        id: 8,
        imgurl: 'assets/buff-normal-good8.png',
        goodsName: 'USP | 灰头土脸 (略有磨损)',
        intPrice: '6',
        floatPrice: '.7'
    },
    {
        id: 9,
        imgurl: 'assets/buff-normal-good9.png',
        goodsName: '尼泊尔军刀 | 屠龙 (略有磨损)',
        intPrice: '888',
        floatPrice: '.88'
    },
    {
        id: 10,
        imgurl: 'assets/buff-normal-good10.png',
        goodsName: 'M4A1 | 绿油油 (略有磨损)',
        intPrice: '61',
        floatPrice: '.4'
    }
];

// 第三部分CS商品数据
// 同第二部分
var section3Data = [
    {
        id: 1,
        imgurl: 'assets/buff-normal-good11.png',
        goodsName: '格洛克18型 | 水栽竹 (略有磨损)',
        intPrice: '35',
        floatPrice: '.5'
    },
    {
        id: 2,
        imgurl: 'assets/buff-normal-good12.png',
        goodsName: 'AWP | 不认识 (略有磨损)',
        intPrice: '135',
        floatPrice: '.1'
    },
    {
        id: 3,
        imgurl: 'assets/buff-normal-good13.png',
        goodsName: 'MP5 | 冷月兔 (崭新出厂)',
        intPrice: '5',
        floatPrice: '.8'
    },
    {
        id: 4,
        imgurl: 'assets/buff-normal-good14.png',
        goodsName: 'M4A4 | 这是啥 (战痕累累)',
        intPrice: '35',
        floatPrice: ''
    },
    {
        id: 5,
        imgurl: 'assets/buff-normal-good15.png',
        goodsName: 'UMP45 | 大黄蜂 (略有磨损)',
        intPrice: '6',
        floatPrice: '.8'
    },
    {
        id: 6,
        imgurl: 'assets/buff-normal-good16.png',
        goodsName: '一个T的探员 | 叫啥来着忘了',
        intPrice: '28',
        floatPrice: '.2'
    },
    {
        id: 7,
        imgurl: 'assets/buff-normal-good17.png',
        goodsName: 'P250(StatTrak™) | 孙儿 (破损不堪)',
        intPrice: '38',
        floatPrice: ''
    },
    {
        id: 8,
        imgurl: 'assets/buff-normal-good18.png',
        goodsName: 'USP | 灰头土脸 (略有磨损)',
        intPrice: '6',
        floatPrice: '.7'
    },
    {
        id: 9,
        imgurl: 'assets/buff-normal-good19.png',
        goodsName: '尼泊尔军刀 | 屠龙 (略有磨损)',
        intPrice: '888',
        floatPrice: '.88'
    },
    {
        id: 10,
        imgurl: 'assets/buff-normal-good20.png',
        goodsName: 'M4A1 | 绿油油 (略有磨损)',
        intPrice: '61',
        floatPrice: '.4'
    }
];


// DOTA2商品数据

// 第一部分DOTA2商品数据
var section1DotaData = [
    {
        id: 1,
        imgurl: 'assets/buff-dota-hotgood1.jpg',
        level: '至宝',
        goodsName: '尊享 剑心之遗',
        intPrice: '136',
        floatPrice: ''
    },
    {
        id: 2,
        imgurl: 'assets/buff-dota-hotgood2.jpg',
        level: '至宝',
        goodsName: '尊享 千劫神屠',
        intPrice: '128',
        floatPrice: '.63'
    },
    {
        id: 3,
        imgurl: 'assets/buff-dota-hotgood3.jpg',
        level: '神话',
        goodsName: '遗世龙皇',
        intPrice: '148',
        floatPrice: '.49'
    },
    {
        id: 4,
        imgurl: 'assets/buff-dota-hotgood4.jpg',
        level: '神话',
        goodsName: '霜潮之灵',
        intPrice: '31',
        floatPrice: '.09'
    },
    {
        id: 5,
        imgurl: 'assets/buff-dota-hotgood5.jpg',
        level: '神话',
        goodsName: '鬼雾骁骑',
        intPrice: '17',
        floatPrice: '.5'
    },
    {
        id: 6,
        imgurl: 'assets/buff-dota-hotgood6.jpg',
        level: '神话',
        goodsName: '独特 圣殿守卫 - 护臂',
        intPrice: '548',
        floatPrice: '.66'
    },
    {
        id: 7,
        imgurl: 'assets/buff-dota-hotgood7.jpg',
        level: '神话',
        goodsName: '独特 鬼雾骁骑 - 武器',
        intPrice: '239',
        floatPrice: '.59'
    },
    {
        id: 8,
        imgurl: 'assets/buff-dota-hotgood8.jpg',
        level: '至宝',
        goodsName: '圣旦之王',
        intPrice: '885',
        floatPrice: '.84'
    },
    {
        id: 9,
        imgurl: 'assets/buff-dota-hotgood9.jpg',
        level: '不朽',
        goodsName: '白雪娃娃',
        intPrice: '167',
        floatPrice: '.99'
    },
    {
        id: 10,
        imgurl: 'assets/buff-dota-hotgood10.jpg',
        level: '传说',
        goodsName: '雪天使卫士',
        intPrice: '67',
        floatPrice: '.26'
    }
];

// 第二部分DOTA2商品数据
var section2DotaData = [
    {
        id: 1,
        imgurl: 'assets/buff-dota-good1.jpg',
        level: '至宝',
        goodsName: '铭刻 心渊魔角',
        intPrice: '122',
        floatPrice: '.93'
    },
    {
        id: 2,
        imgurl: 'assets/buff-dota-good2.jpg',
        level: '不朽',
        goodsName: '共鸣心焦',
        intPrice: '19',
        floatPrice: '.79'
    },
    {
        id: 3,
        imgurl: 'assets/buff-dota-good3.jpg',
        level: '普通',
        goodsName: '暗星风纪武器',
        intPrice: '1',
        floatPrice: '.95'
    },
    {
        id: 4,
        imgurl: 'assets/buff-dota-good4.jpg',
        level: '神话',
        goodsName: '铭刻 擂鼓巫蟾',
        intPrice: '440',
        floatPrice: ''
    },
    {
        id: 5,
        imgurl: 'assets/buff-dota-good5.jpg',
        level: '神话',
        goodsName: '海豹兄弟捆绑包',
        intPrice: '5',
        floatPrice: '.11'
    },
    {
        id: 6,
        imgurl: 'assets/buff-dota-good6.jpg',
        level: '普通',
        goodsName: 'Pepper签名头像等级 - 2021年国际邀请赛',
        intPrice: '6',
        floatPrice: '.31'
    },
    {
        id: 7,
        imgurl: 'assets/buff-dota-good7.jpg',
        level: '不朽',
        goodsName: '龙焰信徒',
        intPrice: '719',
        floatPrice: ''
    },
    {
        id: 8,
        imgurl: 'assets/buff-dota-good8.jpg',
        level: '神话',
        goodsName: '尼西埃的棋局',
        intPrice: '9',
        floatPrice: '.74'
    },
    {
        id: 9,
        imgurl: 'assets/buff-dota-good9.jpg',
        level: '神话',
        goodsName: 'Matt Lange灵氲异空音乐包',
        intPrice: '3',
        floatPrice: '.7'
    },
    {
        id: 10,
        imgurl: 'assets/buff-dota-good10.jpg',
        level: '不朽',
        goodsName: '亲笔签名 灵象硝骑标识',
        intPrice: '1',
        floatPrice: '.66'
    }
];

// 第三部分DOTA2商品数据 (同第二部分)
var section3DotaData = [
    {
        id: 1,
        imgurl: 'assets/buff-dota-good1.jpg',
        level: '至宝',
        goodsName: '铭刻 心渊魔角',
        intPrice: '122',
        floatPrice: '.93'
    },
    {
        id: 2,
        imgurl: 'assets/buff-dota-good2.jpg',
        level: '不朽',
        goodsName: '共鸣心焦',
        intPrice: '19',
        floatPrice: '.79'
    },
    {
        id: 3,
        imgurl: 'assets/buff-dota-good3.jpg',
        level: '普通',
        goodsName: '暗星风纪武器',
        intPrice: '1',
        floatPrice: '.95'
    },
    {
        id: 4,
        imgurl: 'assets/buff-dota-good4.jpg',
        level: '神话',
        goodsName: '铭刻 擂鼓巫蟾',
        intPrice: '440',
        floatPrice: ''
    },
    {
        id: 5,
        imgurl: 'assets/buff-dota-good5.jpg',
        level: '神话',
        goodsName: '海豹兄弟捆绑包',
        intPrice: '5',
        floatPrice: '.11'
    },
    {
        id: 6,
        imgurl: 'assets/buff-dota-good6.jpg',
        level: '普通',
        goodsName: 'Pepper签名头像等级 - 2021年国际邀请赛',
        intPrice: '6',
        floatPrice: '.31'
    },
    {
        id: 7,
        imgurl: 'assets/buff-dota-good7.jpg',
        level: '不朽',
        goodsName: '龙焰信徒',
        intPrice: '719',
        floatPrice: ''
    },
    {
        id: 8,
        imgurl: 'assets/buff-dota-good8.jpg',
        level: '神话',
        goodsName: '尼西埃的棋局',
        intPrice: '9',
        floatPrice: '.74'
    },
    {
        id: 9,
        imgurl: 'assets/buff-dota-good9.jpg',
        level: '神话',
        goodsName: 'Matt Lange灵氲异空音乐包',
        intPrice: '3',
        floatPrice: '.7'
    },
    {
        id: 10,
        imgurl: 'assets/buff-dota-good10.jpg',
        level: '珍稀',
        goodsName: '亲笔签名 灵象硝骑标识',
        intPrice: '1',
        floatPrice: '.66'
    }
];

// 游戏数组
var gameData = [
    {
        id: 1,
        name: 'CS2',
        iconurl: 'assets/logo_csgo2.png'
    },
    {
        id: 2,
        name: 'DOTA2',
        iconurl: 'assets/logo_dota_black.png'
    }
];

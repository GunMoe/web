// 汉字对应图片名称
var emojiImgs = new Array();
	emojiImgs['微笑'] = 'weixiao.gif';
	emojiImgs['色'] = 'se.gif';
	emojiImgs['发呆'] = 'fadai.gif';
	emojiImgs['哭'] = 'ku.gif';
	emojiImgs['流泪'] = 'ku.gif';
	emojiImgs['害羞'] = 'haixiu.gif';
	emojiImgs['闭嘴'] = 'bizui.gif';
	emojiImgs['睡觉'] = 'shuijiao.gif';
	emojiImgs['惊吓'] = 'xia.gif';
	emojiImgs['吓'] = 'xia.gif';
	emojiImgs['流汗'] = 'han.gif';
	emojiImgs['汗'] = 'han.gif';
	emojiImgs['发火'] = 'fahuo.gif';
	emojiImgs['生气'] = 'fahuo.gif';
	emojiImgs['怒'] = 'fahuo.gif';
	emojiImgs['调皮'] = 'tiaopi.gif';
	emojiImgs['鬼脸'] = 'tiaopi.gif';
	emojiImgs['哈哈'] = 'haha.gif';
	emojiImgs['吐'] = 'tu.gif';
	emojiImgs['恶心'] = 'tu.gif';
	emojiImgs['偷笑'] = 'touxiao.gif';
	emojiImgs['白眼'] = 'baiyan.gif';
	emojiImgs['歪眼'] = 'baiyan.gif';
	emojiImgs['困'] = 'kun.gif';
	emojiImgs['磕睡'] = 'kun.gif';
	emojiImgs['呲牙'] = 'ciya.gif';
	emojiImgs['大兵'] = 'dabing.gif';
	emojiImgs['酷'] = 'dabing.gif';
	emojiImgs['绿帽子'] = 'dabing.gif';
	emojiImgs['奋斗'] = 'fendou.gif';
	emojiImgs['加油'] = 'fendou.gif';
	emojiImgs['咒骂'] = 'ma.gif';
	emojiImgs['骂'] = 'ma.gif';
	emojiImgs['疑问'] = 'yiwen.gif';
	emojiImgs['晕'] = 'yun.gif';
	emojiImgs['倒霉'] = 'daomei.gif';
	emojiImgs['骷髅'] = 'kulou.gif';
	emojiImgs['敲打'] = 'qiaoda.gif';
	emojiImgs['再见'] = 'bye.gif';
	emojiImgs['拜拜'] = 'bye.gif';
	emojiImgs['坏笑'] = 'huaixiao.gif';
	emojiImgs['阴险'] = 'huaixiao.gif';
	emojiImgs['鄙视'] = 'bishi.gif';
	emojiImgs['委屈'] = 'weiqu.gif';
	emojiImgs['菜刀'] = 'caidao.gif';
	emojiImgs['吃饭'] = 'fan.gif';
	emojiImgs['猪头'] = 'em/zhutou.gif';
	emojiImgs['花'] = 'hua.gif';
	emojiImgs['花谢了'] = 'hua2.gif';
	emojiImgs['心'] = 'xin.gif';
	emojiImgs['心碎了'] = 'xin2.gif';
	emojiImgs['炸弹'] = 'zhadan.gif';
	emojiImgs['虫子'] = 'chongzi.gif';
	emojiImgs['大便'] = 'dabian.gif';
	emojiImgs['赞'] = 'zan.gif';
	emojiImgs['顶'] = 'zan.gif';
	emojiImgs['强'] = 'zan.gif';
	emojiImgs['谢谢'] = 'xiexie.gif';
	emojiImgs['勾引'] = 'gouyin.gif';
	emojiImgs['OK'] = 'ok.gif';
	emojiImgs['ok'] = 'ok.gif';
	emojiImgs['爱情'] = 'ai.gif';
	emojiImgs['爱'] = 'ai.gif';
	emojiImgs['药'] = 'yao.gif';
	emojiImgs['钱'] = 'qian.gif';
	emojiImgs['红唇'] = 'hongchun.gif';
	emojiImgs['时间'] = 'shijian.gif';

var Emoji = {

	// 需要转换的文字 [/色]
	reg: /\[\/微笑\]|\[\/色\]|\[\/发呆\]|\[\/哭\]|\[\/流泪\]|\[\/害羞\]|\[\/闭嘴\]|\[\/睡觉\]|\[\/吓\]|\[\/惊吓\]|\[\/汗\]|\[\/流汗\]|\[\/发火\]|\[\/生气\]|\[\/怒\]|\[\/调皮\]|\[\/鬼脸\]|\[\/哈哈\]|\[\/吐\]|\[\/恶心\]|\[\/偷笑\]|\[\/白眼\]|\[\/歪眼\]|\[\/困\]|\[\/磕睡\]|\[\/呲牙\]|\[\/大兵\]|\[\/酷\]|\[\/绿帽子\]|\[\/奋斗\]|\[\/加油\]|\[\/咒骂\]|\[\/骂\]|\[\/疑问\]|\[\/晕\]|\[\/倒霉\]|\[\/骷髅\]|\[\/敲打\]|\[\/再见\]|\[\/拜拜\]|\[\/坏笑\]|\[\/阴险\]|\[\/鄙视\]|\[\/委屈\]|\[\/菜刀\]|\[\/吃饭\]|\[\/猪头\]|\[\/花\]|\[\/花谢了\]|\[\/心\]|\[\/心碎了\]|\[\/炸弹\]|\[\/虫子\]|\[\/大便\]|\[\/赞\]|\[\/顶\]|\[\/谢谢\]|\[\/强\]|\[\/勾引\]|\[\/OK\]|\[\/ok\]|\[\/爱情\]|\[\/爱\]|\[\/药\]|\[\/钱\]|\[\/红唇\]|\[\/时间\]/g,

	// 图片路径前缀
	//emojiPath: 'http://cdn.aowana.com/emoji/',
	emojiPath: '/phiz/qq/',

	//表情图片的最大尺寸   暂时无用
	maxSize: 20,

	emoji: function(text) {

		/*
		暂时屏蔽   高清屏使用大尺寸表情
		var pixelRatio = parseFloat(window.devicePixelRatio) || 1;
		if (pixelRatio > 1.2) {

			Emoji.emojiPath += '2x/';
		}

		*/

		// 支持延时
		Emoji.emoji = function(text) {
			setTimeout(function() {
				Emoji.trans(text);
			}, 0);
		}

		Emoji.emoji(text);
	},

	trans:  function(text) {
		var isElement, el, fontSize;
		if (text.nodeType) {
			el = text;
			fontSize = (el.currentStyle || window.getComputedStyle(el, ''))['fontSize'];

			//IE浏览器下如果css中的font-size单位不是象素的话，需要转换一下
			if (!/px$/i.test(fontSize)) {
				var left = el.style.left;
					el.style.left = '1em';

				fontSize = el.style.pixelLeft;
				el.style.left = left;
			}

			fontSize = parseFloat(fontSize);
			text = el.innerHTML;
			isElement = true;
		} else {
			fontSize = fontSize || 14;
		}

		fontSize += 4;
		fontSize = Math.min(fontSize, Emoji.maxSize);

		text = text.replace(Emoji.reg, function(code) {
			return '<img src="' + Emoji.emojiPath + Emoji._encodeURI(code) + '">';
		});

		if (isElement) {
			el.innerHTML = text;
		}
		return text;
	},
	
	//地址转换
	_encodeURI: function(str) {
		str = str.replace(/\//, '');  //   "/"
		str = str.replace(/\[/, '');  //   "["
		str = str.replace(/\]/, '');  //   "]"

		return emojiImgs[str];
	}
};

if (typeof $ !== 'undefined') {
	$.fn.emoji = function() {
		this.each(function(index, element) {
			Emoji.emoji(element);
		});
	};
}

window.Wetter = window.Wetter || {};

window.Wetter.ads = new (function () {
    this.sizes = {
        //contentadds
        'wetter_direct_content1': {'w': 600, 'h': 125, 'tile': 7},
        'wetter_direct_toolbar': {'w': 1145, 'h': 45, 'mw': true, 'tile': 13},
    };

    this.wx_ins = '';
    this.wx_wxkaernten = '';
    this.wx_wxoberstaufen = '';
    this.cDate = '';
    this.wx_parameters = '';

    this.init = function () {
        if ('undefined' !== typeof advertising) {
            window.Wetter.ads.wx_ins = '';
            if (typeof advertising.Data.parameters.wx_wxins !== 'undefined') {
                window.Wetter.ads.wx_ins = "%26wx_wxins%3D" + advertising.Data.parameters.wx_wxins + "%26wx_tmaxins%3D" + advertising.Data.parameters.wx_tmaxins + "%26wx_wxinstext%3D" + advertising.Data.parameters.wx_wxinstext;
            }
            window.Wetter.ads.cDate = "&c=" + Date.now();
            window.Wetter.ads.wx_parameters = "%26wcom_country%3D" + advertising.Data.site +
                "%26wx_continent%3D" + advertising.Data.parameters.continentCode +
                "%26wx_statecode%3D" + advertising.Data.parameters.regionCode +
                "%26wx_country%3D" + advertising.Data.parameters.countryCode.substring(2, 4) +
                "%26wx_cityname%3D" + advertising.Data.parameters.cityName +
                "%26wx_citycode%3D" + advertising.Data.parameters.cityCode +
                "%26wx_postcode%3D" + advertising.Data.parameters.cityZipcode +
                "%26wx_wx%3D" + advertising.Data.parameters.weatherState +
                "%26wx_tmin%3D" + advertising.Data.parameters.temperatureMin +
                "%26wx_tmax%3D" + advertising.Data.parameters.temperatureMax +
                "%26wx_cold%3D" + advertising.Data.parameters.coldWeatherIndex +
                "%26wx_munic%3D" + advertising.Data.parameters.admin4Code +
                "%26wx_windmin%3D" + advertising.Data.parameters.windMin +
                "%26wx_windmax%3D" + advertising.Data.parameters.windMax +
                "%26wx_gust%3D" + advertising.Data.parameters.gust +
                "%26wx_lat%3D" + advertising.Data.parameters.lat +
                "%26wx_lon%3D" + advertising.Data.parameters.lon +
                "%26loc%3D" + escape(window.location) +
                "%26referer%3D" + escape(document.referrer) +
                "%26source%3D" + advertising.Data.getSitePage();
        }
        const dfpSlots = document.querySelectorAll("[id^='div-gpt-ad-']");
        dfpSlots.forEach(function (element, i) {
            Wetter.ads.load(element);
            element.setAttribute('data-adReady', 1);
        });
    };

    this.load = function (element) {
        var id = element.getAttribute('id'),
            slot = id.replace('div-gpt-ad-', '');

        if (typeof this.sizes[slot] != 'undefined') {
            var h = this.sizes[slot].h,
                w = this.sizes[slot].w,
                tile = this.sizes[slot].tile;

            if (typeof this.sizes[slot].h2 != 'undefined') {
                var h2 = this.sizes[slot].h2;
            } else {
                var h2 = 999;
            }
            var iframe = document.createElement('iframe');
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("title", "gam.js container");
            iframe.setAttribute("scrolling", "no");
            iframe.setAttribute("marginwidth", "0");
            iframe.setAttribute("marginheight", "0");
            iframe.setAttribute("width", w);
            if (this.sizes[slot].mw) {
                iframe.setAttribute("style", 'max-width: 100%');
            }
            iframe.setAttribute("height", h);
            iframe.setAttribute("src", "//pubads.g.doubleclick.net/gampad/adx?iu=16486012/" + slot
                + "&sz=" + w + "x" + h + "|" + w + "x" + h2
                + "&t=ad_type%3D" + slot + "%26ad_slot%3D" + slot + "_" + window.ad_slot
                + this.wx_parameters
                + this.wx_ins
                + this.cDate
                + "&tile=" + tile
            );
            document.getElementById(id).appendChild(iframe);
        }
    };
});

window.Wetter.ads.init();

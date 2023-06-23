(function (s, o, m, t, a, g) {
    s.somtag = {
        cmd: function () {
            g = [].slice.call(arguments);
            g.push(o.currentScript || o.scripts[o.scripts.length - 1]);
            (this.q = this.q || []).push(g);
        }
    };
    a = o.createElement('script');
    a.src = m;
    a.async = true;
    a.onload = function () {
        wcomSomInsertAds();
    }
    o.head.appendChild(a);
})(window, document, '//ad.71i.de/somtag/loader/loader.js');

const optOut = window.cmpOptOut || false;
console.log('CMP: somtag optout ' + optOut.toString());
/**
 * Note:
 *   Only Tags that are used must be enabled, thus
 *   the slot needs to be added bei AdParameteres.insertAd, so it can be marked %SOMTAG:SLOT:slot%
 *   and then used here via %SOMTAG:STATE:slot%
 *
 *   This is because any enabled performance Slot calls a head bidding request (-$$)
 *   that waits to be inserted later on the page (+$$)
 */
somtag.cmd('init', {
    enabled: (wcomSomEnabled || true),
    config: {
        id: (wcomSomId || 'wettercom'),
        consent: {
            optOut: optOut,
            optOutUncertifiedVendors: optOut
        },
    },
    device: {
        mode: 'auto',
        breakpoint: 800
    },
    taxonomy: {
        channels: (wcomSomChannels || []),
        content: (wcomSomContent || 'content')
    },
    keywords: (wcomSomKeywords || []),
    custom: (wcomSomCustom || []),
    display: {
        slots: {
            fullbanner2: {
                enabled: false
            },
            skyscraper1: {
                enabled: false
            },
            rectangle1: {
                enabled: true
            },
            mbanner1: {
                enabled: true
            },
            minread1: {
                enabled: true
            },
            performanceFullbanner1: {
                enabled: false
            },
            performanceFullbanner2: {
                enabled: false
            },
            performanceFullbanner3: {
                enabled: false
            },
            performanceFullbanner4: {
                enabled: false
            },
            performanceFullbanner5: {
                enabled: false
            },
            performanceMbanner1: {
                enabled: false
            },
            performanceMbanner2: {
                enabled: false
            },
            performanceRectangle1: {
                enabled: false
            },
            performanceRectangle2: {
                enabled: false
            },
            performanceRectangle3: {
                enabled: false
            },
            performanceRectangle4: {
                enabled: false
            },
            performanceRectangle5: {
                enabled: false
            },
            performanceRectangle6: {
                enabled: false
            },
            performanceRectangle7: {
                enabled: false
            },
            performanceRectangle8: {
                enabled: false
            }
        }
    }
});

const h = document.getElementsByTagName('head')[0];
const e = document.createElement('script');
const c = Date.now();
const cmp = (window.Wetter && window.Wetter.cmp) ? window.Wetter.cmp : {};
const tcString = cmp.tcString || false;

if (tcString) {
    e.src = 'https://ad.yieldlab.net/d/6846326/766/2x2?ts=' + c +'&gdpr=1&gdpr_consent=' + tcString;
    e.onload = function () {
        console.log('Yieldlab container loaded');
    }

    h.appendChild(e);
}

function wcomSomInsertAds() {
    if (performance.mark) {
        performance.mark('insertAd');
    }

    if (typeof wcomSomSlots !== "undefined") {
        wcomSomSlots.forEach((tag) => {
            if (tag === 'minread1') {
                somtag.cmd('insertAd', tag, {container: '#ad_inread_container'});
            } else {
                somtag.cmd('insertAd', tag, {container: '#somtag-container-' + tag}, function (error, ad) {
                    if (ad && ad.data && ad.data.adConfig && ad.data.adConfig.productName) {
                        document.body.classList.add('has-' + ad.data.adConfig.productName);
                    }

                    if (tag === 'fullbanner2' || tag === 'mbanner1') {
                        if (ad.data && ad.data.options && ad.data.slotName === tag && ad.data.adConfig && ad.data.options.container) {
                            const iframe = document.querySelector(ad.data.options.container + ' iframe.somtag');

                            if (iframe) {
                                iframe.addEventListener('load', function () {
                                    const el = document.getElementById('ad-' + tag + '-outer');

                                    if (tag === 'mbanner1' && el.offsetHeight > 0) {
                                        el.parentElement.style.height = 'initial';
                                    }
                                });
                            }
                        }
                    }

                    if (ad.data && ad.data.slotName === 'rectangle1' && ad.data.options && ad.data.options.container) {
                        const iframe = document.querySelector(ad.data.options.container + ' iframe.somtag');

                        if (iframe) {
                            iframe.addEventListener('load', function () {
                                const el = document.getElementById('somtag-container-rectangle1');

                                Object(iframe).offsetHeight >= 600 && document.body.classList.add('has-halfPage');

                                if (el.offsetHeight > 0) {
                                    el.parentElement.style.height = 'initial';
                                }
                            });
                        }
                    }

                    if (tag.match(/performance/) && ad.data && ad.data.slotName === tag && ad.data.options && ad.data.options.container) {
                        const iframe = document.querySelector(ad.data.options.container + ' iframe.somtag');

                        if (iframe) {
                            iframe.addEventListener('load', function () {
                                const el = document.getElementById('somtag-container-' + tag );
                                if (el.offsetHeight > 0) {
                                    el.parentElement.style.height = 'initial';
                                }
                            });
                        }
                    }
                });
            }
        });
    }
}

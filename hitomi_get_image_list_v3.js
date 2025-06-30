// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 2376:
case 3294:
case 3563:
case 3844:
case 877:
case 1207:
case 3389:
case 1921:
case 1132:
case 1144:
case 66:
case 2252:
case 912:
case 533:
case 1687:
case 690:
case 2182:
case 1341:
case 3488:
case 2466:
case 3633:
case 3834:
case 704:
case 177:
case 697:
case 534:
case 362:
case 931:
case 2597:
case 2553:
case 1134:
case 2381:
case 2780:
case 2567:
case 2647:
case 184:
case 745:
case 129:
case 1870:
case 3100:
case 2530:
case 126:
case 314:
case 435:
case 2956:
case 963:
case 3702:
case 20:
case 3170:
case 1800:
case 1938:
case 1622:
case 288:
case 2127:
case 2660:
case 1429:
case 1068:
case 3123:
case 884:
case 257:
case 3774:
case 2690:
case 2988:
case 1611:
case 3966:
case 4037:
case 1797:
case 1948:
case 561:
case 250:
case 3046:
case 1767:
case 1580:
case 313:
case 1753:
case 40:
case 2235:
case 3033:
case 756:
case 764:
case 2953:
case 2997:
case 2748:
case 54:
case 657:
case 2047:
case 3725:
case 1605:
case 3440:
case 302:
case 3855:
case 1826:
case 2865:
case 1756:
case 2895:
case 2245:
case 450:
case 763:
case 60:
case 3993:
case 1514:
case 2037:
case 1213:
case 336:
case 457:
case 3957:
case 996:
case 3453:
case 1980:
case 2303:
case 1679:
case 1698:
case 731:
case 1668:
case 501:
case 3241:
case 3566:
case 519:
case 1609:
case 904:
case 3891:
case 3729:
case 1024:
case 1392:
case 2940:
case 2851:
case 712:
case 2899:
case 641:
case 3377:
case 351:
case 2808:
case 2493:
case 3050:
case 2457:
case 1472:
case 3307:
case 2463:
case 3830:
case 1527:
case 1006:
case 1744:
case 810:
case 2031:
case 4092:
case 358:
case 1130:
case 2784:
case 4062:
case 1076:
case 1219:
case 2495:
case 865:
case 2991:
case 1742:
case 387:
case 1734:
case 3260:
case 3840:
case 2961:
case 738:
case 3290:
case 165:
case 4094:
case 2782:
case 3358:
case 2243:
case 3371:
case 2857:
case 2532:
case 2863:
case 1872:
case 2544:
case 2451:
case 1215:
case 3965:
case 3700:
case 1620:
case 3652:
case 1802:
case 3995:
case 373:
case 1673:
case 2309:
case 1167:
case 83:
case 3491:
case 3104:
case 2662:
case 1874:
case 1017:
case 3035:
case 3461:
case 3654:
case 1804:
case 3174:
case 3723:
case 3247:
case 3386:
case 3897:
case 3125:
case 1681:
case 1286:
case 4028:
case 1188:
case 1347:
case 2896:
case 1510:
case 2866:
case 3888:
case 1201:
case 1606:
case 1337:
case 422:
case 3649:
case 3856:
case 1676:
case 1258:
case 3444:
case 520:
case 805:
case 1156:
case 2236:
case 1927:
case 2631:
case 281:
case 3508:
case 1982:
case 2324:
case 4031:
case 2112:
case 576:
case 3129:
case 1073:
case 3418:
case 2062:
case 938:
case 1761:
case 2555:
case 1791:
case 1390:
case 3054:
case 2934:
case 2311:
case 1400:
case 3565:
case 3645:
case 2322:
case 2114:
case 248:
case 3052:
case 785:
case 2121:
case 843:
case 247:
case 3047:
case 2725:
case 2316:
case 202:
case 613:
case 1796:
case 2855:
case 4036:
case 3235:
case 240:
case 3967:
case 946:
case 1480:
case 3748:
case 949:
case 2126:
case 2993:
case 2430:
case 614:
case 171:
case 1972:
case 3037:
case 236:
case 755:
case 2957:
case 3865:
case 3895:
case 691:
case 1902:
case 3245:
case 2043:
case 2859:
case 2646:
case 2241:
case 2891:
case 397:
case 3373:
case 2729:
case 3712:
case 2861:
case 3940:
case 1354:
case 2453:
case 3303:
case 390:
case 2467:
case 3060:
case 1281:
case 3239:
case 3714:
case 1151:
case 560:
case 1276:
case 3:
case 1019:
case 1199:
case 3457:
case 36:
case 3463:
case 567:
case 1108:
case 515:
case 1601:
case 3899:
case 3878:
case 1352:
case 3320:
case 3721:
case 3869:
case 3556:
case 3637:
case 3306:
case 2456:
case 1349:
case 1438:
case 1884:
case 1220:
case 3376:
case 2563:
case 2643:
case 2264:
case 3184:
case 1448:
case 3597:
case 1339:
case 3567:
case 2262:
case 3182:
case 4050:
case 2633:
case 2488:
case 2292:
case 71:
case 214:
case 4033:
case 2036:
case 1058:
case 500:
case 1071:
case 388:
case 2650:
case 2772:
case 542:
case 1763:
case 1793:
case 2100:
case 402:
case 1414:
case 3530:
case 2313:
case 749:
case 647:
case 55:
case 2704:
case 2046:
case 213:
case 602:
case 3540:
case 818:
case 1412:
case 2123:
case 640:
case 2774:
case 357:
case 3988:
case 2966:
case 436:
case 1925:
case 3896:
case 3387:
case 3246:
case 4045:
case 2434:
case 3559:
case 3866:
case 2888:
case 894:
case 811:
case 1482:
case 1298:
case 809:
case 1016:
case 673:
case 1848:
case 1268:
case 2639:
case 3918:
case 806:
case 2125:
case 893:
case 194:
case 1343:
case 22:
case 381:
case 3236:
case 1689:
case 2508:
case 106:
case 2315:
case 2569:
case 2649:
case 674:
case 1484:
case 832:
case 1838:
case 109:
case 2599:
case 2578:
case 2726:
case 680:
case 1812:
case 2054:
case 4049:
case 3934:
case 3311:
case 724:
case 3112:
case 687:
case 2635:
case 786:
case 2418:
case 3944:
case 658:
case 2052:
case 582:
case 1077:
case 3932:
case 487:
case 3121:
case 1613:
case 1814:
case 2595:
case 1007:
case 2645:
case 2565:
case 3322:
case 3465:
case 2978:
case 1089:
case 1500:
case 3784:
case 2951:
case 1570:
case 169:
case 166:
case 853:
case 77:
case 1224:
case 1880:
case 986:
case 3518:
case 3782:
case 3041:
case 521:
case 1523:
case 2039:
case 3991:
case 2260:
case 3959:
case 3961:
case 2290:
case 2455:
case 3451:
case 178:
case 3499:
case 2965:
case 1926:
case 1193:
case 2652:
case 1677:
case 1163:
case 1085:
case 3469:
case 62:
case 2371:
case 3893:
case 3857:
case 698:
case 1336:
case 3863:
case 3664:
case 274:
case 2654:
case 2174:
case 3379:
case 2723:
case 878:
case 2247:
case 2459:
case 3534:
case 1410:
case 2104:
case 3309:
case 3662:
case 1287:
case 3955:
case 2461:
case 42:
case 3233:
case 1043:
case 618:
case 2902:
case 271:
case 3514:
case 802:
case 4086:
case 1993:
case 1126:
case 139:
case 1957:
case 847:
case 1963:
case 3213:
case 136:
case 2904:
case 1033:
case 3155:
case 4058:
case 3675:
case 625:
case 2766:
case 836:
case 147:
case 2974:
case 2529:
case 102:
case 3605:
case 4001:
case 2601:
case 2108:
case 1377:
case 523:
case 2671:
case 2276:
case 2658:
case 2151:
case 1636:
case 3364:
case 1307:
case 2169:
case 775:
case 3404:
case 524:
case 1467:
case 3698:
case 3159:
case 921:
case 2686:
case 3548:
case 586:
case 3609:
case 1891:
case 3362:
case 1241:
case 1566:
case 3024:
case 1861:
case 1729:
case 1596:
case 851:
case 3341:
case 3740:
case 4019:
case 3075:
case 3912:
case 2929:
case 1842:
case 1292:
case 3425:
case 1633:
case 2448:
case 2882:
case 721:
case 2504:
case 2339:
case 1563:
case 1832:
case 1294:
case 1557:
case 1593:
case 3730:
case 3207:
case 2349:
case 3144:
case 3132:
case 3921:
case 2220:
case 3277:
case 4083:
case 3068:
case 1123:
case 1996:
case 2412:
case 3429:
case 2925:
case 3118:
case 3079:
case 383:
case 3098:
case 4015:
case 3216:
case 1774:
case 3823:
case 3624:
case 3797:
case 3009:
case 3580:
case 3767:
case 1046:
case 1704:
case 814:
case 1385:
case 2763:
case 384:
case 1772:
case 326:
case 1313:
case 2827:
case 2414:
case 218:
case 3870:
case 114:
case 3938:
case 2071:
case 1170:
case 1856:
case 900:
case 3337:
case 3606:
case 3201:
case 1315:
case 2765:
case 2900:
case 209:
case 1551:
case 2343:
case 294:
case 907:
case 3258:
case 3271:
case 3676:
case 1432:
case 2970:
case 942:
case 555:
case 1508:
case 3927:
case 2848:
case 478:
case 2016:
case 898:
case 232:
case 2923:
case 3347:
case 3188:
case 2166:
case 95:
case 3286:
case 2268:
case 3681:
case 1639:
case 305:
case 1888:
case 2333:
case 3510:
case 3825:
case 1434:
case 2007:
case 2821:
case 715:
case 2769:
case 2751:
case 1645:
case 1052:
case 453:
case 760:
case 2613:
case 3470:
case 1635:
case 1129:
case 3423:
case 3617:
case 3073:
case 1418:
case 2812:
case 2205:
case 466:
case 728:
case 3390:
case 1260:
case 928:
case 3734:
case 253:
case 4077:
case 187:
case 51:
case 365:
case 2880:
case 317:
case 4007:
case 2523:
case 3140:
case 3527:
case 1830:
case 595:
case 2570:
case 1049:
case 3732:
case 254:
case 887:
case 3006:
case 3744:
case 266:
case 3130:
case 158:
case 3426:
case 2500:
case 1999:
case 967:
case 3076:
case 1969:
case 2222:
case 915:
case 3219:
case 3874:
case 3167:
case 3673:
case 1491:
case 2410:
case 1459:
case 1035:
case 3197:
case 75:
case 1867:
case 3718:
case 411:
case 693:
case 409:
case 1247:
case 546:
case 3582:
case 1723:
case 1045:
case 742:
case 174:
case 2607:
case 609:
case 493:
case 2336:
case 1237:
case 432:
case 4016:
case 3215:
case 1700:
case 1301:
case 278:
case 537:
case 694:
case 3283:
case 2677:
case 2163:
case 3620:
case 1652:
case 700:
case 2157:
case 979:
case 2005:
case 2142:
case 3504:
case 78:
case 1567:
case 1780:
case 3339:
case 1553:
case 2740:
case 1182:
case 2075:
case 3273:
case 1496:
case 2687:
case 2912:
case 4011:
case 1306:
case 2921:
case 1637:
case 3220:
case 1252:
case 3438:
case 3683:
case 1376:
case 2331:
case 1317:
case 2624:
case 325:
case 2948:
case 80:
case 2753:
case 2580:
case 2767:
case 150:
case 2429:
case 1660:
case 2118:
case 3925:
case 2611:
case 283:
case 2079:
case 850:
case 4087:
case 1127:
case 2622:
case 2938:
case 3619:
case 2800:
case 3345:
case 927:
case 2328:
case 229:
case 3763:
case 857:
case 3001:
case 3827:
case 1530:
case 3414:
case 318:
case 3793:
case 3083:
case 3015:
case 483:
case 3972:
case 1037:
case 727:
case 629:
case 2826:
case 2521:
case 1895:
case 626:
case 2756:
case 484:
case 3766:
case 1047:
case 2788:
case 3974:
case 3529:
case 768:
case 3796:
case 1953:
case 3480:
case 135:
case 3217:
case 1235:
case 2155:
case 1748:
case 3671:
case 4075:
case 3276:
case 3019:
case 1493:
case 1808:
case 2022:
case 3658:
case 1930:
case 897:
case 3169:
case 1457:
case 477:
case 3601:
case 3108:
case 1249:
case 2538:
case 890:
case 1869:
case 470:
case 1320:
case 1721:
case 86:
case 1373:
case 2609:
case 197:
case 2362:
case 1588:
case 3525:
case 3810:
case 1940:
case 8:
case 2024:
case 2191:
case 2404:
case 2011:
case 2159:
case 2548:
case 3686:
case 779:
case 1239:
case 3281:
case 2668:
case 599:
case 265:
case 3224:
case 596:
case 643:
case 2910:
case 1959:
case 916:
case 353:
case 210:
case 2742:
case 901:
case 919:
case 1305:
case 3211:
case 3616:
case 1961:
case 644:
case 3500:
case 2426:
case 1031:
case 733:
case 2219:
case 2076:
case 792:
case 503:
case 369:
case 3570:
case 2744:
case 366:
case 354:
case 2006:
case 1398:
case 2603:
case 1368:
case 2582:
case 605:
case 761:
case 2874:
case 2167:
case 1309:
case 2673:
case 1534:
case 3410:
case 3346:
case 1692:
case 1955:
case 3193:
case 3926:
case 2584:
case 378:
case 2283:
case 3085:
case 822:
case 3163:
case 3677:
case 2802:
case 2620:
case 545:
case 1893:
case 1408:
case 952:
case 1243:
case 3607:
case 1664:
case 3336:
case 23:
case 3343:
case 2156:
case 2258:
case 2271:
case 3970:
case 4017:
case 752:
case 1631:
case 2927:
case 1236:
case 2337:
case 306:
case 2606:
case 3765:
case 63:
case 3838:
case 309:
case 311:
case 3484:
case 1148:
case 1387:
case 2755:
case 1896:
case 1591:
case 205:
case 3333:
case 1866:
case 2825:
case 961:
case 3848:
case 3298:
case 3279:
case 3196:
case 564:
case 3482:
case 2347:
case 74:
case 3166:
case 2286:
case 1918:
case 3268:
case 2681:
case 3685:
case 1932:
case 1628:
case 244:
case 1944:
case 992:
case 1064:
case 512:
case 465:
case 1114:
case 3751:
case 3350:
case 2984:
case 1094:
case 3526:
case 1555:
case 617:
case 3812:
case 701:
case 665:
case 3205:
case 1934:
case 2390:
case 2791:
case 1112:
case 2617:
case 1062:
case 934:
case 2073:
case 531:
case 3562:
case 408:
case 831:
case 2441:
case 3592:
case 2716:
case 375:
case 1481:
case 2847:
case 2267:
case 2935:
case 3187:
case 2065:
case 3257:
case 3594:
case 3928:
case 2095:
case 1985:
case 3564:
case 3644:
case 1507:
case 3338:
case 68:
case 2945:
case 608:
case 2837:
case 3773:
case 2890:
case 2240:
case 163:
case 859:
case 3941:
case 227:
case 2329:
case 929:
case 3703:
case 3059:
case 581:
case 3091:
case 3111:
case 1754:
case 926:
case 1417:
case 1623:
case 3435:
case 1989:
case 2078:
case 2119:
case 2230:
case 164:
case 2707:
case 156:
case 863:
case 2069:
case 1600:
case 268:
case 2008:
case 1822:
case 2949:
case 2777:
case 3720:
case 1749:
case 3032:
case 845:
case 783:
case 2665:
case 1585:
case 3528:
case 3776:
case 3994:
case 427:
case 522:
case 1513:
case 3105:
case 726:
case 784:
case 3034:
case 627:
case 729:
case 3042:
case 3781:
case 1739:
case 3175:
case 1805:
case 4078:
case 3655:
case 4051:
case 1212:
case 3962:
case 679:
case 104:
case 1420:
case 2302:
case 1136:
case 2549:
case 803:
case 2669:
case 777:
case 2256:
case 1070:
case 2678:
case 2699:
case 2171:
case 1745:
case 2785:
case 3836:
case 770:
case 28:
case 196:
case 1363:
case 321:
case 2713:
case 3531:
case 199:
case 3717:
case 1735:
case 1868:
case 1146:
case 1248:
case 3454:
case 3109:
case 2304:
case 1879:
case 103:
case 1403:
case 3168:
case 1023:
case 2492:
case 3266:
case 2288:
case 1916:
case 3541:
case 3659:
case 3018:
case 3198:
case 2374:
case 3640:
case 692:
case 3590:
case 2116:
case 1986:
case 2218:
case 4093:
case 56:
case 2066:
case 1025:
case 744:
case 4057:
case 185:
case 1743:
case 965:
case 39:
case 917:
case 1971:
case 3630:
case 1958:
case 1395:
case 328:
case 216:
case 910:
case 743:
case 2326:
case 1901:
case 597:
case 1519:
case 634:
case 2550:
case 2242:
case 461:
case 2892:
case 2234:
case 3310:
case 1154:
case 2533:
case 3103:
case 1674:
case 1873:
case 1409:
case 3724:
case 3697:
case 3854:
case 93:
case 3173:
case 3667:
case 3120:
case 1672:
case 2543:
case 3436:
case 2663:
case 24:
case 535:
case 1308:
case 2894:
case 3852:
case 1515:
case 3537:
case 2107:
case 1369:
case 1284:
case 1602:
case 3722:
case 1583:
case 1399:
case 1378:
case 3269:
case 2950:
case 557:
case 3384:
case 3030:
case 3176:
case 905:
case 3278:
case 3299:
case 3656:
case 3849:
case 1571:
case 3208:
case 35:
case 3443:
case 1149:
case 1881:
case 2447:
case 342:
case 3382:
case 1586:
case 2546:
case 2666:
case 44:
case 1625:
case 1139:
case 3990:
case 1487:
case 2696:
case 3960:
case 2259:
case 2841:
case 3845:
case 1422:
case 2093:
case 2113:
case 943:
case 710:
case 2185:
case 1072:
case 3265:
case 2771:
case 1145:
case 616:
case 3327:
case 2943:
case 1736:
case 601:
case 1002:
case 541:
case 3947:
case 416:
case 1074:
case 944:
case 3835:
case 1817:
case 419:
case 2323:
case 3053:
case 1411:
case 233:
case 3067:
case 1004:
case 3097:
case 2964:
case 2776:
case 2994:
case 1330:
case 1731:
case 2032:
case 2044:
case 2706:
case 4059:
case 1920:
case 3545:
case 573:
case 3665:
case 4061:
case 1082:
case 2175:
case 1741:
case 849:
case 1973:
case 2105:
case 718:
case 1903:
case 3954:
case 1576:
case 221:
case 3372:
case 1858:
case 3608:
case 3302:
case 1477:
case 3549:
case 3256:
case 587:
case 3651:
case 1027:
case 3171:
case 482:
case 2168:
case 2541:
case 675:
case 1610:
case 2659:
case 2296:
case 2691:
case 682:
case 2179:
case 2717:
case 1397:
case 1353:
case 3539:
case 2454:
case 3304:
case 81:
case 1367:
case 3554:
case 275:
case 2439:
case 3297:
case 1917:
case 2187:
case 2055:
case 1147:
case 1573:
case 3441:
case 1520:
case 1272:
case 3183:
case 379:
case 3115:
case 2928:
case 2632:
case 4018:
case 2293:
case 1137:
case 2644:
case 2843:
case 52:
case 2059:
case 2618:
case 155:
case 1160:
case 320:
case 2061:
case 2773:
case 598:
case 1762:
case 3329:
case 2312:
case 2445:
case 1819:
case 3008:
case 2850:
case 3777:
case 4042:
case 2720:
case 3078:
case 2314:
case 3119:
case 3230:
case 1764:
case 3428:
case 1485:
case 1976:
case 1889:
case 361:
case 932:
case 513:
case 3536:
case 2443:
case 3950:
case 1922:
case 1638:
case 2384:
case 3189:
case 2030:
case 2299:
case 2656:
case 2849:
case 1911:
case 3261:
case 2688:
case 3546:
case 2433:
case 200:
case 1334:
case 1509:
case 906:
case 1342:
case 2990:
case 3696:
case 778:
case 3291:
case 3841:
case 909:
case 994:
case 2839:
case 3447:
case 1579:
case 1598:
case 1924:
case 2040:
case 2382:
case 242:
case 1648:
case 1568:
case 2775:
case 1141:
case 3370:
case 1813:
case 3758:
case 2327:
case 415:
case 17:
case 467:
case 1885:
case 3300:
case 3701:
case 3093:
case 1419:
case 3113:
case 3185:
case 1226:
case 2937:
case 2265:
case 3063:
case 1128:
case 3490:
case 4056:
case 3255:
case 2709:
case 2053:
case 3933:
case 2067:
case 3460:
case 2097:
case 2117:
case 660:
case 754:
case 2947:
case 766:
case 2779:
case 1318:
case 428:
case 1575:
case 667:
case 2835:
case 3323:
case 3096:
case 3218:
case 1968:
case 1524:
case 2088:
case 1747:
case 260:
case 1979:
case 551:
case 1223:
case 954:
case 966:
case 1680:
case 1816:
case 2640:
case 2787:
case 1048:
case 1355:
case 2590:
case 886:
case 1909:
case 267:
case 228:
case 953:
case 316:
case 1737:
case 3715:
case 1200:
case 301:
case 3550:
case 4067:
case 3936:
case 29:
case 4053:
case 2056:
case 1270:
case 823:
case 2630:
case 536:
case 352:
case 1012:
case 2697:
case 600:
case 1975:
case 2854:
case 539:
case 2653:
case 1162:
case 2173:
case 711:
case 1587:
case 709:
case 1905:
case 607:
case 978:
case 3892:
case 706:
case 1359:
case 2446:
case 2103:
case 1790:
case 502:
case 3107:
case 1164:
case 1877:
case 547:
case 2722:
case 3719:
case 4040:
case 442:
case 1401:
case 2120:
case 3657:
case 1807:
case 34:
case 3543:
case 400:
case 2436:
case 732:
case 3244:
case 1458:
case 3693:
case 1471:
case 791:
case 2517:
case 939:
case 936:
case 1042:
case 1380:
case 345:
case 230:
case 1034:
case 1655:
case 1992:
case 2082:
case 655:
case 2229:
case 3212:
case 2973:
case 237:
case 2920:
case 947:
case 4010:
case 1044:
case 1032:
case 455:
case 3977:
case 1776:
case 940:
case 3585:
case 3513:
case 1994:
case 2886:
case 3868:
case 554:
case 3735:
case 3898:
case 3879:
case 303:
case 1109:
case 2367:
case 3248:
case 2353:
case 569:
case 3916:
case 1661:
case 1266:
case 1541:
case 3023:
case 1691:
case 821:
case 3809:
case 3473:
case 1659:
case 1846:
case 21:
case 3136:
case 2506:
case 304:
case 3420:
case 2027:
case 3363:
case 396:
case 2576:
case 3357:
case 2871:
case 3393:
case 399:
case 3589:
case 762:
case 1531:
case 2858:
case 962:
case 1594:
case 1257:
case 61:
case 3026:
case 3913:
case 1263:
case 2489:
case 1564:
case 3507:
case 1644:
case 1293:
case 3476:
case 1928:
case 1632:
case 1338:
case 2883:
case 2202:
case 2684:
case 2356:
case 495:
case 3143:
case 3577:
case 1449:
case 2520:
case 2815:
case 2573:
case 1642:
case 3366:
case 2388:
case 1592:
case 695:
case 2274:
case 3133:
case 175:
case 2204:
case 182:
case 3150:
case 1314:
case 2627:
case 3989:
case 1931:
case 2413:
case 3670:
case 2794:
case 359:
case 437:
case 2485:
case 2764:
case 364:
case 356:
case 740:
case 646:
case 593:
case 1321:
case 3752:
case 2906:
case 649:
case 3811:
case 363:
case 511:
case 509:
case 1312:
case 449:
case 3516:
case 255:
case 3754:
case 1111:
case 1091:
case 1618:
case 736:
case 1703:
case 2010:
case 3824:
case 1435:
case 3417:
case 594:
case 3623:
case 2160:
case 991:
case 739:
case 3280:
case 518:
case 2598:
case 774:
case 107:
case 1775:
case 2568:
case 2648:
case 1040:
case 2924:
case 2080:
case 1181:
case 1433:
case 1688:
case 998:
case 3210:
case 2131:
case 2638:
case 2922:
case 1849:
case 1656:
case 773:
case 1176:
case 3571:
case 2889:
case 3558:
case 15:
case 1443:
case 1106:
case 2332:
case 800:
case 2318:
case 623:
case 1779:
case 1798:
case 1947:
case 1835:
case 1768:
case 1067:
case 1053:
case 1709:
case 4038:
case 3629:
case 2987:
case 338:
case 686:
case 1295:
case 1845:
case 2128:
case 3915:
case 3072:
case 624:
case 2813:
case 4048:
case 3002:
case 2885:
case 27:
case 2270:
case 19:
case 3227:
case 2038:
case 289:
case 3971:
case 3395:
case 128:
case 3519:
case 3365:
case 3901:
case 2048:
case 1560:
case 1640:
case 958:
case 115:
case 2511:
case 47:
case 3733:
case 2909:
case 372:
case 2968:
case 3986:
case 385:
case 2680:
case 3025:
case 160:
case 1088:
case 2021:
case 2807:
case 3672:
case 1120:
case 3152:
case 3308:
case 2458:
case 973:
case 3284:
case 2877:
case 3602:
case 2164:
case 3369:
case 1537:
case 1852:
case 3515:
case 1722:
case 3351:
case 2361:
case 2905:
case 2587:
case 798:
case 3409:
case 1697:
case 2012:
case 3029:
case 72:
case 1724:
case 1173:
case 1667:
case 1547:
case 2162:
case 571:
case 3498:
case 3803:
case 974:
case 1854:
case 3684:
case 797:
case 2577:
case 3356:
case 2143:
case 1837:
case 1552:
case 3520:
case 179:
case 4023:
case 2026:
case 1183:
case 2913:
case 231:
case 2507:
case 2476:
case 2985:
case 1095:
case 3137:
case 76:
case 3503:
case 2481:
case 941:
case 4070:
case 1253:
case 1935:
case 544:
case 1267:
case 3147:
case 1325:
case 4000:
case 879:
case 3274:
case 499:
case 820:
case 168:
case 505:
case 2752:
case 445:
case 1777:
case 1949:
case 3627:
case 2989:
case 2670:
case 259:
case 3794:
case 1069:
case 735:
case 3485:
case 1428:
case 1707:
case 1230:
case 355:
case 3981:
case 3010:
case 868:
case 263:
case 3762:
case 1890:
case 1329:
case 127:
case 3792:
case 3416:
case 2805:
case 3082:
case 3340:
case 456:
case 464:
case 3229:
case 2212:
case 3973:
case 337:
case 3517:
case 1535:
case 330:
case 3903:
case 935:
case 2214:
case 346:
case 2513:
case 3330:
case 1789:
case 659:
case 757:
case 2749:
case 664:
case 656:
case 2626:
case 1665:
case 2473:
case 3610:
case 3886:
case 2868:
case 2735:
case 2403:
case 1304:
case 3367:
case 1539:
case 2248:
case 2146:
case 2363:
case 296:
case 1785:
case 990:
case 3728:
case 2393:
case 108:
case 565:
case 1494:
case 1101:
case 517:
case 2589:
case 2000:
case 631:
case 1669:
case 1549:
case 1302:
case 204:
case 1171:
case 2745:
case 1699:
case 3027:
case 3801:
case 1651:
case 2070:
case 1256:
case 1158:
case 1715:
case 2395:
case 3522:
case 2519:
case 1783:
case 2901:
case 101:
case 1326:
case 4004:
case 2958:
case 324:
case 2971:
case 3038:
case 389:
case 272:
case 801:
case 2475:
case 3968:
case 1218:
case 2986:
case 819:
case 285:
case 3680:
case 3223:
case 816:
case 1066:
case 3747:
case 3979:
case 3048:
case 3816:
case 323:
case 1946:
case 2369:
case 1107:
case 3164:
case 2515:
case 2399:
case 3401:
case 3194:
case 2583:
case 2351:
case 852:
case 14:
case 1177:
case 1663:
case 1864:
case 3021:
case 1657:
case 922:
case 2152:
case 1232:
case 1894:
case 1693:
case 3471:
case 3458:
case 1244:
case 2468:
case 3486:
case 2029:
case 152:
case 2479:
case 2803:
case 3905:
case 3587:
case 3391:
case 84:
case 3790:
case 1533:
case 2154:
case 3359:
case 3342:
case 2139:
case 2625:
case 3334:
case 1261:
case 1546:
case 1841:
case 1291:
case 861:
case 1696:
case 2487:
case 3598:
case 2881:
case 3648:
case 2586:
case 584:
case 2571:
case 161:
case 2149:
case 1536:
case 2876:
case 3483:
case 1950:
case 2919:
case 3638:
case 3922:
case 3415:
case 2746:
case 1933:
case 133:
case 2411:
case 1490:
case 2629:
case 2135:
case 948:
case 1460:
case 2074:
case 192:
case 2424:
case 1786:
case 3575:
case 1758:
case 2145:
case 134:
case 892:
case 1093:
case 3419:
case 2422:
case 577:
case 1300:
case 1701:
case 2915:
case 3128:
case 3226:
case 485:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751306402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,];
var gg_b = "1751306402/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}

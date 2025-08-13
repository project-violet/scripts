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
var o = 0;
switch (g) {
case 1956:
case 1061:
case 48:
case 2745:
case 4040:
case 3237:
case 3193:
case 3264:
case 2903:
case 1533:
case 2882:
case 1025:
case 1362:
case 459:
case 3891:
case 2002:
case 2600:
case 2798:
case 3595:
case 1636:
case 1812:
case 4088:
case 3401:
case 3260:
case 859:
case 2902:
case 3192:
case 3107:
case 2181:
case 1469:
case 3086:
case 3806:
case 4044:
case 1859:
case 1813:
case 147:
case 1424:
case 88:
case 3584:
case 671:
case 1056:
case 1961:
case 3009:
case 2883:
case 2396:
case 3665:
case 2533:
case 3834:
case 3867:
case 1301:
case 466:
case 2550:
case 1199:
case 2357:
case 3527:
case 1798:
case 1600:
case 2420:
case 2135:
case 4018:
case 2417:
case 1002:
case 2362:
case 1882:
case 3830:
case 2859:
case 3324:
case 2532:
case 1902:
case 1396:
case 3514:
case 3819:
case 1883:
case 3151:
case 2363:
case 2205:
case 2056:
case 2813:
case 777:
case 2578:
case 2424:
case 788:
case 3005:
case 700:
case 3256:
case 1773:
case 2592:
case 687:
case 1551:
case 2216:
case 264:
case 1657:
case 1114:
case 2300:
case 4041:
case 537:
case 822:
case 1662:
case 2593:
case 1772:
case 1566:
case 1960:
case 3404:
case 3599:
case 3905:
case 790:
case 2696:
case 1127:
case 2749:
case 1037:
case 490:
case 1826:
case 888:
case 3743:
case 800:
case 1507:
case 2964:
case 1592:
case 1601:
case 3815:
case 781:
case 2421:
case 436:
case 3511:
case 736:
case 481:
case 3617:
case 3923:
case 2855:
case 2662:
case 1184:
case 2465:
case 2286:
case 1300:
case 2657:
case 2551:
case 1148:
case 3023:
case 3624:
case 2960:
case 2566:
case 3133:
case 2772:
case 1593:
case 3831:
case 2064:
case 2037:
case 2826:
case 836:
case 2663:
case 1180:
case 2127:
case 1195:
case 67:
case 1113:
case 1062:
case 2397:
case 1758:
case 81:
case 204:
case 1515:
case 2585:
case 3788:
case 972:
case 760:
case 2590:
case 2996:
case 3497:
case 1637:
case 1664:
case 2182:
case 2265:
case 2486:
case 860:
case 2901:
case 1112:
case 1063:
case 1416:
case 3403:
case 2409:
case 1629:
case 3386:
case 294:
case 455:
case 3851:
case 1183:
case 2660:
case 3924:
case 3555:
case 2325:
case 755:
case 272:
case 742:
case 3425:
case 2811:
case 3622:
case 2963:
case 3204:
case 1585:
case 3017:
case 3969:
case 2515:
case 3718:
case 2416:
case 2063:
case 2835:
case 1096:
case 2531:
case 3069:
case 3526:
case 3920:
case 1182:
case 3024:
case 194:
case 307:
case 3152:
case 2957:
case 570:
case 3316:
case 1594:
case 2770:
case 3167:
case 1899:
case 2895:
case 507:
case 1036:
case 2880:
case 1360:
case 818:
case 2697:
case 2405:
case 2224:
case 2602:
case 1810:
case 730:
case 3305:
case 4042:
case 2269:
case 430:
case 1839:
case 2848:
case 3194:
case 1287:
case 1423:
case 1771:
case 1814:
case 2004:
case 830:
case 1364:
case 1337:
case 2884:
case 1656:
case 2900:
case 2506:
case 4043:
case 418:
case 617:
case 1602:
case 1224:
case 2126:
case 1895:
case 1000:
case 811:
case 1848:
case 406:
case 1904:
case 2839:
case 706:
case 3322:
case 2552:
case 3833:
case 2337:
case 3429:
case 806:
case 2656:
case 496:
case 1004:
case 1217:
case 1589:
case 1220:
case 3201:
case 796:
case 3323:
case 3616:
case 3832:
case 2530:
case 3559:
case 3437:
case 3854:
case 3921:
case 3124:
case 3919:
case 2565:
case 2311:
case 2451:
case 2913:
case 2639:
case 1381:
case 3650:
case 1492:
case 2163:
case 843:
case 1680:
case 2294:
case 3351:
case 2012:
case 3930:
case 1407:
case 3536:
case 1196:
case 2959:
case 1802:
case 1897:
case 3953:
case 2825:
case 1082:
case 554:
case 3654:
case 3120:
case 1399:
case 3435:
case 1982:
case 273:
case 1101:
case 3816:
case 2157:
case 2614:
case 1215:
case 1083:
case 3019:
case 2162:
case 1493:
case 2466:
case 2285:
case 89:
case 1861:
case 3307:
case 40:
case 3392:
case 3226:
case 624:
case 1565:
case 2983:
case 2231:
case 825:
case 3481:
case 1012:
case 3500:
case 1627:
case 2196:
case 2695:
case 1294:
case 1163:
case 3187:
case 425:
case 3006:
case 3255:
case 725:
case 1912:
case 49:
case 3089:
case 1466:
case 3504:
case 1856:
case 80:
case 2493:
case 1290:
case 79:
case 1335:
case 1348:
case 3333:
case 891:
case 2289:
case 2517:
case 3410:
case 2206:
case 816:
case 2433:
case 2055:
case 1104:
case 1253:
case 2450:
case 3557:
case 2327:
case 1380:
case 2860:
case 1746:
case 2955:
case 257:
case 3165:
case 2524:
case 2291:
case 3282:
case 2454:
case 2569:
case 3031:
case 2026:
case 2864:
case 2837:
case 1384:
case 2314:
case 801:
case 708:
case 3085:
case 1611:
case 3805:
case 780:
case 3480:
case 408:
case 2219:
case 3501:
case 2348:
case 607:
case 749:
case 480:
case 2681:
case 3448:
case 1450:
case 2253:
case 2395:
case 1327:
case 1310:
case 2104:
case 1055:
case 2230:
case 157:
case 1478:
case 1955:
case 3212:
case 2746:
case 3094:
case 2100:
case 1314:
case 3990:
case 1432:
case 3985:
case 849:
case 2267:
case 808:
case 1864:
case 1454:
case 2252:
case 1103:
case 2857:
case 2467:
case 829:
case 3051:
case 3966:
case 1232:
case 984:
case 1382:
case 2655:
case 2862:
case 1254:
case 2935:
case 2011:
case 1491:
case 2522:
case 3352:
case 3820:
case 3615:
case 3367:
case 3319:
case 3248:
case 2453:
case 2035:
case 2911:
case 1250:
case 861:
case 3869:
case 2313:
case 2125:
case 1197:
case 1981:
case 2626:
case 1233:
case 3537:
case 3824:
case 2359:
case 3280:
case 2523:
case 3295:
case 578:
case 729:
case 1452:
case 37:
case 2254:
case 3391:
case 1862:
case 1655:
case 2999:
case 3109:
case 1467:
case 284:
case 3993:
case 468:
case 3887:
case 3092:
case 2801:
case 3214:
case 2081:
case 73:
case 3685:
case 1522:
case 3482:
case 3708:
case 3907:
case 868:
case 1626:
case 2981:
case 2406:
case 83:
case 3992:
case 1313:
case 3239:
case 2250:
case 1453:
case 1863:
case 1523:
case 1161:
case 3227:
case 3694:
case 3483:
case 3093:
case 1359:
case 2010:
case 1266:
case 1485:
case 3932:
case 1490:
case 3525:
case 2728:
case 371:
case 3954:
case 2415:
case 1080:
case 452:
case 2027:
case 1800:
case 486:
case 4076:
case 3634:
case 3667:
case 445:
case 3050:
case 3865:
case 786:
case 745:
case 275:
case 2129:
case 1509:
case 3556:
case 1084:
case 3078:
case 845:
case 1804:
case 2613:
case 831:
case 3281:
case 3933:
case 2207:
case 1683:
case 3777:
case 1494:
case 2292:
case 3653:
case 57:
case 2516:
case 2927:
case 644:
case 3426:
case 3630:
case 3122:
case 1980:
case 852:
case 3054:
case 587:
case 2095:
case 2080:
case 1293:
case 1137:
case 2490:
case 3597:
case 1355:
case 2485:
case 1010:
case 3691:
case 378:
case 1129:
case 175:
case 975:
case 2747:
case 3385:
case 738:
case 1039:
case 723:
case 3235:
case 2048:
case 2494:
case 823:
case 3503:
case 1207:
case 2948:
case 3689:
case 1613:
case 3211:
case 1939:
case 2084:
case 2980:
case 3394:
case 1910:
case 2251:
case 410:
case 3861:
case 1307:
case 3639:
case 2034:
case 1989:
case 456:
case 3913:
case 833:
case 2633:
case 2052:
case 756:
case 2124:
case 2919:
case 2953:
case 3610:
case 3959:
case 3627:
case 1906:
case 1481:
case 2930:
case 3163:
case 3521:
case 2816:
case 373:
case 2053:
case 2120:
case 2117:
case 2654:
case 2366:
case 882:
case 3912:
case 3059:
case 1393:
case 1006:
case 3013:
case 1089:
case 2967:
case 3290:
case 1809:
case 3162:
case 433:
case 2019:
case 733:
case 3157:
case 1052:
case 917:
case 1768:
case 1633:
case 2392:
case 3648:
case 1034:
case 2989:
case 3381:
case 1650:
case 2307:
case 3680:
case 2500:
case 3695:
case 769:
case 3196:
case 3407:
case 3802:
case 2091:
case 1411:
case 1953:
case 469:
case 2006:
case 2393:
case 1654:
case 1435:
case 1053:
case 1120:
case 1632:
case 2187:
case 869:
case 2991:
case 3101:
case 2499:
case 3803:
case 3215:
case 3083:
case 314:
case 721:
case 2809:
case 421:
case 1934:
case 1085:
case 3289:
case 3611:
case 514:
case 2283:
case 2015:
case 1480:
case 2350:
case 2427:
case 1495:
case 895:
case 2651:
case 954:
case 3860:
case 1448:
case 2557:
case 3327:
case 3450:
case 1994:
case 2562:
case 705:
case 3206:
case 2282:
case 3829:
case 3478:
case 357:
case 805:
case 2165:
case 3955:
case 2823:
case 1094:
case 604:
case 463:
case 3026:
case 2031:
case 2915:
case 379:
case 3681:
case 2495:
case 3587:
case 3348:
case 1015:
case 1283:
case 2805:
case 2090:
case 1822:
case 439:
case 2259:
case 573:
case 1776:
case 2994:
case 3104:
case 1557:
case 739:
case 3253:
case 3380:
case 4047:
case 672:
case 2094:
case 1332:
case 1414:
case 1165:
case 2693:
case 3252:
case 1915:
case 1031:
case 3384:
case 3267:
case 3234:
case 3100:
case 2990:
case 1391:
case 97:
case 1109:
case 3862:
case 3156:
case 2966:
case 3434:
case 1993:
case 3857:
case 3312:
case 2367:
case 2334:
case 803:
case 2116:
case 2820:
case 3522:
case 2817:
case 2284:
case 1690:
case 793:
case 2564:
case 403:
case 712:
case 2631:
case 893:
case 3313:
case 1992:
case 2869:
case 412:
case 3911:
case 1239:
case 2319:
case 3863:
case 1227:
case 3161:
case 3523:
case 3419:
case 3359:
case 2529:
case 1210:
case 2993:
case 3103:
case 1051:
case 3999:
case 2391:
case 27:
case 2690:
case 1284:
case 2708:
case 2482:
case 2685:
case 2186:
case 3491:
case 3278:
case 2214:
case 2887:
case 1334:
case 1367:
case 3383:
case 2239:
case 850:
case 1537:
case 1564:
case 1459:
case 3197:
case 3233:
case 3981:
case 1824:
case 3489:
case 1066:
case 987:
case 1413:
case 1330:
case 84:
case 2093:
case 2306:
case 1295:
case 1353:
case 3836:
case 2821:
case 2954:
case 271:
case 1597:
case 735:
case 2525:
case 3164:
case 3137:
case 978:
case 1691:
case 441:
case 375:
case 3914:
case 2455:
case 1385:
case 2050:
case 1235:
case 3039:
case 2978:
case 2315:
case 2619:
case 3160:
case 2281:
case 2933:
case 3207:
case 2331:
case 2078:
case 2950:
case 3326:
case 2556:
case 2122:
case 835:
case 2426:
case 2630:
case 1606:
case 1394:
case 3516:
case 899:
case 2691:
case 2502:
case 278:
case 3485:
case 748:
case 1525:
case 2597:
case 3490:
case 1821:
case 3080:
case 448:
case 971:
case 647:
case 709:
case 3048:
case 1978:
case 1634:
case 2235:
case 2385:
case 3747:
case 2390:
case 1556:
case 1950:
case 3509:
case 1078:
case 1619:
case 3683:
case 499:
case 1032:
case 2394:
case 1426:
case 848:
case 2606:
case 3995:
case 1054:
case 3980:
case 3586:
case 1122:
case 474:
case 1665:
case 1166:
case 1462:
case 2237:
case 1834:
case 2909:
case 3487:
case 2401:
case 334:
case 2580:
case 3223:
case 3798:
case 1527:
case 3002:
case 3882:
case 3097:
case 2806:
case 2086:
case 937:
case 2107:
case 2496:
case 2260:
case 675:
case 1514:
case 1819:
case 1775:
case 2457:
case 1909:
case 3061:
case 3956:
case 3550:
case 2834:
case 2867:
case 1548:
case 1193:
case 1237:
case 820:
case 2852:
case 3025:
case 413:
case 2510:
case 2916:
case 1891:
case 3420:
case 402:
case 3636:
case 1595:
case 3357:
case 1401:
case 1986:
case 2621:
case 2463:
case 813:
case 3532:
case 1260:
case 1496:
case 237:
case 802:
case 1086:
case 2324:
case 3111:
case 492:
case 3424:
case 3813:
case 3056:
case 1584:
case 3205:
case 720:
case 2819:
case 3507:
case 1436:
case 1132:
case 3601:
case 2256:
case 2005:
case 1617:
case 2885:
case 1365:
case 976:
case 3300:
case 364:
case 3148:
case 2894:
case 1150:
case 2599:
case 167:
case 2404:
case 1202:
case 3593:
case 1297:
case 1133:
case 1669:
case 3304:
case 1922:
case 3696:
case 3195:
case 2617:
case 2365:
case 2022:
case 1256:
case 1890:
case 1005:
case 2815:
case 2132:
case 3964:
case 2203:
case 2620:
case 1581:
case 2321:
case 446:
case 3336:
case 485:
case 3929:
case 3114:
case 746:
case 3286:
case 276:
case 3662:
case 3855:
case 785:
case 3772:
case 846:
case 4071:
case 2297:
case 885:
case 3566:
case 2023:
case 2535:
case 3663:
case 2922:
case 3037:
case 2669:
case 2831:
case 1130:
case 1425:
case 3590:
case 1017:
case 758:
case 1204:
case 657:
case 2807:
case 1153:
case 1718:
case 1969:
case 1917:
case 3303:
case 3096:
case 2744:
case 2987:
case 2191:
case 3901:
case 1069:
case 858:
case 1526:
case 1920:
case 394:
case 1456:
case 3409:
case 1623:
case 3899:
case 1200:
case 2403:
case 1740:
case 3062:
case 2555:
case 2924:
case 2119:
case 297:
case 2851:
case 3057:
case 3515:
case 1892:
case 2969:
case 2020:
case 1402:
case 2204:
case 3963:
case 2622:
case 3774:
case 3159:
case 1605:
case 3356:
case 1744:
case 783:
case 851:
case 3835:
case 3416:
case 527:
case 3962:
case 1236:
case 3770:
case 2167:
case 2316:
case 3629:
case 3957:
case 1893:
case 832:
case 207:
case 2866:
case 3602:
case 3591:
case 3405:
case 489:
case 2582:
case 270:
case 3000:
case 3895:
case 440:
case 3904:
case 2263:
case 3269:
case 2741:
case 2609:
case 85:
case 3217:
case 3589:
case 1513:
case 3004:
case 2583:
case 572:
case 1201:
case 889:
case 924:
case 1832:
case 1616:
case 1115:
case 3506:
case 3900:
case 1559:
case 2262:
case 2686:
case 2185:
case 840:
case 4049:
case 462:
case 3036:
case 3827:
case 2021:
case 3126:
case 762:
case 1582:
case 3810:
case 4073:
case 3422:
case 2833:
case 2322:
case 2850:
case 1263:
case 2460:
case 3534:
case 3287:
case 3771:
case 3814:
case 2513:
case 3155:
case 3337:
case 2429:
case 3364:
case 1686:
case 2854:
case 2559:
case 504:
case 2115:
case 2323:
case 1257:
case 590:
case 2970:
case 2576:
case 1:
case 9:
case 2058:
case 2762:
case 610:
case 974:
case 1701:
case 2673:
case 1345:
case 3720:
case 3679:
case 2074:
case 837:
case 3769:
case 737:
case 4016:
case 3918:
case 1796:
case 292:
case 66:
case 2974:
case 2958:
case 588:
case 2672:
case 220:
case 377:
case 2475:
case 1757:
case 3642:
case 2398:
case 2:
case 444:
case 1576:
case 1970:
case 3040:
case 553:
case 3944:
case 102:
case 113:
case 3271:
case 359:
case 3787:
case 2701:
case 2649:
case 1763:
case 992:
case 192:
case 1974:
case 1638:
case 686:
case 3643:
case 631:
case 1241:
case 1475:
case 120:
case 920:
case 4009:
case 536:
case 1700:
case 1698:
case 381:
case 3721:
case 2828:
case 336:
case 2971:
case 246:
case 1847:
case 3765:
case 1442:
case 2244:
case 476:
case 1146:
case 3877:
case 1349:
case 63:
case 668:
case 3176:
case 2288:
case 4023:
case 1443:
case 3438:
case 119:
case 919:
case 58:
case 388:
case 629:
case 1736:
case 2698:
case 1373:
case 2645:
case 1244:
case 146:
case 2847:
case 1568:
case 185:
case 3343:
case 1288:
case 3941:
case 2218:
case 2349:
case 219:
case 566:
case 1240:
case 518:
case 2761:
case 3975:
case 3458:
case 2374:
case 232:
case 1440:
case 497:
case 4020:
case 2725:
case 3474:
case 2358:
case 158:
case 1098:
case 2418:
case 4017:
case 2242:
case 283:
case 926:
case 1998:
case 1945:
case 707:
case 649:
case 1279:
case 2756:
case 2577:
case 407:
case 897:
case 608:
case 1243:
case 3388:
case 3547:
case 132:
case 511:
case 2045:
case 3238:
case 1761:
case 2098:
case 2488:
case 258:
case 3272:
case 3108:
case 3786:
case 226:
case 2444:
case 183:
case 1242:
case 983:
case 2703:
case 3344:
case 3273:
case 1756:
case 31:
case 3079:
case 1949:
case 940:
case 69:
case 3618:
case 189:
case 4065:
case 3177:
case 2760:
case 15:
case 3876:
case 1441:
case 2658:
case 2072:
case 2729:
case 215:
case 3298:
case 1846:
case 2371:
case 60:
case 2038:
case 311:
case 2737:
case 424:
case 470:
case 289:
case 3943:
case 240:
case 1674:
case 3705:
case 2508:
case 1658:
case 25:
case 3640:
case 2846:
case 2147:
case 915:
case 3942:
case 1072:
case 3043:
case 1973:
case 870:
case 1128:
case 1764:
case 2049:
case 1038:
case 611:
case 1858:
case 956:
case 1468:
case 982:
case 3008:
case 696:
case 1579:
case 3888:
case 269:
case 3792:
case 4091:
case 3844:
case 4006:
case 2543:
case 325:
case 928:
case 501:
case 3793:
case 39:
case 2145:
case 933:
case 133:
case 3175:
case 4067:
case 598:
case 3751:
case 4052:
case 417:
case 618:
case 3573:
case 1277:
case 169:
case 2874:
case 2711:
case 4053:
case 3247:
case 3538:
case 2735:
case 4030:
case 1198:
case 508:
case 1799:
case 580:
case 2870:
case 1646:
case 121:
case 921:
case 817:
case 228:
case 4019:
case 3766:
case 549:
case 3143:
case 380:
case 2780:
case 3598:
case 1727:
case 754:
case 1739:
case 1172:
case 1575:
case 1871:
case 854:
case 995:
case 3446:
case 642:
case 163:
case 963:
case 1928:
case 1173:
case 398:
case 12:
case 2727:
case 1795:
case 61:
case 301:
case 2028:
case 59:
case 3376:
case 2172:
case 205:
case 3733:
case 3668:
case 2476:
case 2739:
case 1748:
case 660:
case 1947:
case 2871:
case 3778:
case 1784:
case 3754:
case 391:
case 22:
case 3179:
case 3732:
case 2173:
case 263:
case 50:
case 77:
case 165:
case 3308:
case 2541:
case 965:
case 47:
case 1170:
case 2845:
case 368:
case 33:
case 250:
case 1628:
case 2408:
case 4007:
case 1174:
case 3706:
case 1759:
case 112:
case 531:
case 103:
case 586:
case 903:
case 636:
case 552:
case 2783:
case 87:
case 681:
case 1158:
case 3140:
case 510:
case 3068:
case 690:
case 4051:
case 950:
case 1782:
case 2628:
case 150:
case 293:
case 622:
case 361:
case 203:
case 3753:
case 56:
case 1276:
case 523:
case 2174:
case 3730:
case 212:
case 2759:
case 3875:
case 787:
case 2158:
case 4066:
case 487:
case 3677:
case 1783:
case 3968:
case 677:
case 941:
case 141:
case 135:
case 3785:
case 529:
case 778:
case 248:
case 338:
case 36:
case 3141:
case 2268:
case 3843:
case 310:
case 878:
case 1726:
case 299:
case 1838:
case 1588:
case 471:
case 1347:
case 948:
case 148:
case 235:
case 3428:
case 3574:
case 241:
case 771:
case 2518:
case 109:
case 4033:
case 2171:
case 1540:
case 3558:
case 2755:
case 4050:
case 2872:
case 659:
case 568:
case 3570:
case 2838:
case 1849:
case 199:
case 999:
case 1268:
case 1175:
case 563:
case 1751:
case 814:
case 1818:
case 2792:
case 369:
case 3781:
case 1368:
case 2008:
case 3543:
case 1247:
case 3198:
case 143:
case 2844:
case 714:
case 3145:
case 662:
case 29:
case 1572:
case 2228:
case 4083:
case 2751:
case 3468:
case 90:
case 2175:
case 2676:
case 1840:
case 356:
case 3874:
case 3711:
case 1008:
case 1888:
case 2368:
case 1707:
case 873:
case 65:
case 3735:
case 1844:
case 2247:
case 925:
case 2766:
case 2572:
case 1793:
case 1228:
case 3870:
case 19:
case 99:
case 2598:
case 779:
case 901:
case 3780:
case 479:
case 280:
case 208:
case 2841:
case 1977:
case 683:
case 3748:
case 2545:
case 1077:
case 582:
case 2446:
case 651:
case 991:
case 298:
case 556:
case 3710:
case 108:
case 521:
case 980:
case 149:
case 3727:
case 1545:
case 3739:
case 626:
case 2750:
case 2733:
case 1841:
case 3208:
case 3575:
case 569:
case 1142:
case 3714:
case 457:
case 363:
case 4026:
case 198:
case 3173:
case 2732:
case 1767:
case 1734:
case 3541:
case 2308:
case 1752:
case 34:
case 3647:
case 1068:
case 3408:
case 350:
case 23:
case 3898:
case 1246:
case 2188:
case 1730:
case 1875:
case 2140:
case 2789:
case 1677:
case 3783:
case 1571:
case 929:
case 2752:
case 1308:
case 3170:
case 2734:
case 261:
case 13:
case 968:
case 168:
case 4035:
case 3759:
case 2730:
case 3174:
case 1188:
case 2118:
case 2571:
case 229:
case 2719:
case 1789:
case 1140:
case 2875:
case 348:
case 1879:
case 3588:
case 1428:
case 4095:
case 1574:
case 952:
case 152:
case 2608:
case 2790:
case 620:
case 512:
case 223:
case 2842:
case 26:
case 3946:
case 1076:
case 3540:
case 986:
case 238:
case 1558:
case 2141:
case 613:
case 1976:
case 3046:
case 1570:
case 593:
case 2794:
case 3544:
case 1377:
case 210:
case 399:
case 2843:
case 3518:
case 341:
case 2574:
case 1790:
case 1608:
case 252:
case 1785:
case 3328:
case 2558:
case 4039:
case 475:
case 1842:
case 923:
case 231:
case 2976:
case 550:
case 3477:
case 1794:
case 1141:
case 4014:
case 1843:
case 910:
case 3726:
case 6:
case 1642:
case 3058:
case 847:
case 3576:
case 3970:
case 519:
case 1808:
case 3074:
case 1088:
case 2679:
case 2720:
case 959:
case 1271:
case 1498:
case 2018:
case 1988:
case 3763:
case 392:
case 2769:
case 2375:
case 3241:
case 747:
case 3475:
case 2724:
case 609:
case 320:
case 1940:
case 3070:
case 4056:
case 3958:
case 3:
case 374:
case 734:
case 2787:
case 259:
case 2271:
case 2088:
case 434:
case 2808:
case 1918:
case 1769:
case 546:
case 585:
case 635:
case 2940:
case 4003:
case 977:
case 236:
case 900:
case 2721:
case 2473:
case 1342:
case 2379:
case 2765:
case 346:
case 1041:
case 3971:
case 922:
case 1274:
case 3288:
case 1343:
case 2675:
case 4029:
case 3338:
case 2877:
case 64:
case 2438:
case 4037:
case 990:
case 190:
case 1449:
case 574:
case 3698:
case 520:
case 2270:
case 200:
case 2041:
case 1765:
case 603:
case 592:
case 464:
case 3442:
case 3146:
case 764:
case 612:
case 502:
case 693:
case 3704:
case 513:
case 2343:
case 222:
case 1472:
case 2274:
case 2258:
case 665:
case 153:
case 953:
case 319:
case 1547:
case 1641:
case 255:
case 332:
case 2458:
case 2975:
case 2318:
case 2249:
case 4062:
case 3418:
case 472:
case 960:
case 160:
case 2528:
case 242:
case 1108:
case 639:
case 4063:
case 1786:
case 3242:
case 2716:
case 3370:
case 3671:
case 2470:
case 540:
case 3756:
case 589:
case 91:
case 2075:
case 1249:
case 155:
case 1458:
case 1868:
case 2547:
case 404:
case 3440:
case 1474:
case 1528:
case 942:
case 2272:
case 2340:
case 605:
case 326:
case 3998:
case 794:
case 562:
case 1470:
case 2344:
case 3703:
case 1943:
case 1341:
case 1705:
case 3674:
case 3658:
case 130:
case 2876:
case 1640:
case 526:
case 1042:
case 2177:
case 3760:
case 296:
case 558:
case 2298:
case 2723:
case 1942:
case 3072:
case 918:
case 1043:
case 3764:
case 3737:
case 3128:
case 211:
case 2245:
case 2979:
case 3949:
case 2688:
case 1722:
case 3275:
case 2705:
case 2341:
case 389:
case 106:
case 2640:
case 583:
case 3441:
case 3147:
case 1298:
case 1723:
case 682:
case 3846:
case 996:
case 2644:
case 656:
case 1245:
case 3049:
case 827:
case 218:
case 2043:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755126001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,];
var gg_b = "1755126001/";

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

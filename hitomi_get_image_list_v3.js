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
case 1422:
case 2289:
case 1217:
case 3206:
case 1428:
case 2297:
case 2650:
case 1206:
case 2911:
case 2403:
case 1991:
case 22:
case 3089:
case 1945:
case 3692:
case 3097:
case 3698:
case 1089:
case 1326:
case 3945:
case 2587:
case 1692:
case 2599:
case 1698:
case 3148:
case 868:
case 1142:
case 3737:
case 1056:
case 1148:
case 212:
case 1453:
case 1176:
case 2256:
case 672:
case 460:
case 3176:
case 3779:
case 3600:
case 2097:
case 2698:
case 144:
case 1599:
case 2692:
case 137:
case 1612:
case 1587:
case 2326:
case 3006:
case 344:
case 337:
case 20:
case 3612:
case 3721:
case 2991:
case 2206:
case 1650:
case 484:
case 465:
case 3634:
case 32:
case 3403:
case 1721:
case 2428:
case 3911:
case 3650:
case 1289:
case 699:
case 3469:
case 2600:
case 2779:
case 2877:
case 2453:
case 112:
case 1469:
case 2056:
case 739:
case 2839:
case 2892:
case 2123:
case 1481:
case 2898:
case 3108:
case 595:
case 2788:
case 1812:
case 2464:
case 3102:
case 345:
case 1335:
case 1108:
case 1102:
case 2955:
case 3812:
case 1834:
case 1850:
case 606:
case 485:
case 464:
case 2110:
case 4031:
case 3514:
case 2677:
case 1246:
case 2078:
case 2800:
case 419:
case 1084:
case 3190:
case 1514:
case 1272:
case 3538:
case 3532:
case 2158:
case 1278:
case 1538:
case 3278:
case 240:
case 949:
case 76:
case 1955:
case 2102:
case 3464:
case 2108:
case 2335:
case 803:
case 3892:
case 1464:
case 1782:
case 2812:
case 1788:
case 1898:
case 1123:
case 626:
case 533:
case 962:
case 2774:
case 1892:
case 3284:
case 2532:
case 1639:
case 3152:
case 888:
case 340:
case 3967:
case 2278:
case 1158:
case 1152:
case 2272:
case 1443:
case 3110:
case 1800:
case 1072:
case 1061:
case 1594:
case 3373:
case 2190:
case 3800:
case 1110:
case 3677:
case 3078:
case 3594:
case 4090:
case 925:
case 2673:
case 2447:
case 109:
case 2377:
case 778:
case 3959:
case 2963:
case 1959:
case 2339:
case 4002:
case 387:
case 1470:
case 1340:
case 2760:
case 707:
case 3501:
case 1339:
case 329:
case 710:
case 129:
case 4052:
case 4058:
case 3963:
case 781:
case 1377:
case 209:
case 1447:
case 101:
case 1673:
case 917:
case 158:
case 650:
case 3447:
case 2131:
case 3944:
case 920:
case 2501:
case 2340:
case 613:
case 3127:
case 3826:
case 563:
case 287:
case 69:
case 1909:
case 1826:
case 1220:
case 3595:
case 508:
case 551:
case 3220:
case 4048:
case 2085:
case 4076:
case 2904:
case 1285:
case 1873:
case 3300:
case 3285:
case 1496:
case 3930:
case 2775:
case 1465:
case 2416:
case 3213:
case 1930:
case 1954:
case 2407:
case 2835:
case 3398:
case 41:
case 3093:
case 3626:
case 1:
case 1398:
case 2583:
case 583:
case 2013:
case 1392:
case 2318:
case 528:
case 2873:
case 742:
case 2285:
case 2541:
case 1904:
case 2457:
case 3085:
case 1949:
case 2733:
case 3515:
case 2220:
case 559:
case 1318:
case 2626:
case 714:
case 1583:
case 2398:
case 3318:
case 367:
case 3013:
case 1835:
case 3583:
case 546:
case 1350:
case 3293:
case 3775:
case 2930:
case 87:
case 1416:
case 3407:
case 2465:
case 1775:
case 3334:
case 3175:
case 525:
case 2487:
case 2499:
case 2255:
case 774:
case 1055:
case 3528:
case 3522:
case 2503:
case 3055:
case 3946:
case 1325:
case 500:
case 1067:
case 3553:
case 3662:
case 830:
case 3671:
case 1946:
case 3824:
case 1972:
case 438:
case 3972:
case 822:
case 3380:
case 1503:
case 47:
case 3629:
case 2055:
case 3503:
case 835:
case 736:
case 1629:
case 2175:
case 2419:
case 3499:
case 354:
case 3255:
case 3487:
case 3984:
case 2824:
case 520:
case 2972:
case 2205:
case 2978:
case 2961:
case 3267:
case 4037:
case 3569:
case 1133:
case 2946:
case 532:
case 963:
case 3133:
case 2671:
case 2325:
case 2668:
case 2662:
case 2553:
case 3005:
case 802:
case 504:
case 1917:
case 2989:
case 2997:
case 3291:
case 3727:
case 951:
case 3917:
case 847:
case 2045:
case 4088:
case 4082:
case 1291:
case 155:
case 1581:
case 3160:
case 416:
case 355:
case 3581:
case 1160:
case 3011:
case 213:
case 673:
case 609:
case 977:
case 1438:
case 2731:
case 983:
case 621:
case 3336:
case 2543:
case 2862:
case 2868:
case 3564:
case 524:
case 1564:
case 2011:
case 2581:
case 2245:
case 2291:
case 3997:
case 2727:
case 959:
case 876:
case 19:
case 54:
case 1045:
case 775:
case 2906:
case 39:
case 1989:
case 2917:
case 1871:
case 3956:
case 629:
case 2414:
case 1862:
case 1494:
case 1956:
case 3862:
case 3543:
case 2336:
case 150:
case 1731:
case 2438:
case 350:
case 1624:
case 601:
case 658:
case 1920:
case 2249:
case 1985:
case 1752:
case 819:
case 3182:
case 3188:
case 2993:
case 3723:
case 423:
case 3570:
case 1188:
case 3913:
case 457:
case 1723:
case 3401:
case 864:
case 885:
case 1254:
case 106:
case 306:
case 2049:
case 1547:
case 1825:
case 3204:
case 994:
case 2636:
case 3451:
case 880:
case 1880:
case 3249:
case 2710:
case 3324:
case 1249:
case 3880:
case 1324:
case 403:
case 3054:
case 2254:
case 1174:
case 2723:
case 126:
case 2188:
case 3708:
case 3702:
case 2182:
case 2230:
case 2570:
case 326:
case 2742:
case 1557:
case 1368:
case 1362:
case 3063:
case 2836:
case 2137:
case 3557:
case 3371:
case 3362:
case 3441:
case 191:
case 372:
case 541:
case 3680:
case 2776:
case 2263:
case 391:
case 172:
case 468:
case 3121:
case 3286:
case 1044:
case 1121:
case 4075:
case 2483:
case 1286:
case 1596:
case 2516:
case 2086:
case 2329:
case 3596:
case 60:
case 1009:
case 399:
case 1776:
case 2495:
case 1179:
case 3415:
case 549:
case 933:
case 562:
case 3742:
case 3748:
case 2362:
case 2368:
case 752:
case 2371:
case 2557:
case 2063:
case 3329:
case 3086:
case 556:
case 1329:
case 644:
case 2565:
case 1086:
case 1516:
case 637:
case 865:
case 2596:
case 3209:
case 2121:
case 2044:
case 797:
case 3483:
case 2236:
case 1604:
case 352:
case 2576:
case 639:
case 1649:
case 2548:
case 3036:
case 3859:
case 1199:
case 804:
case 4083:
case 1796:
case 1886:
case 534:
case 547:
case 3187:
case 2707:
case 197:
case 3886:
case 3765:
case 3311:
case 366:
case 2654:
case 1311:
case 2844:
case 2630:
case 166:
case 2036:
case 3863:
case 3542:
case 4095:
case 2757:
case 1548:
case 2859:
case 4041:
case 631:
case 3236:
case 97:
case 2604:
case 1630:
case 1654:
case 2311:
case 3630:
case 3391:
case 3844:
case 3119:
case 1809:
case 3716:
case 84:
case 1926:
case 3345:
case 3809:
case 2765:
case 3707:
case 1716:
case 2187:
case 2886:
case 1345:
case 1475:
case 2199:
case 3025:
case 2280:
case 2132:
case 3558:
case 3552:
case 2138:
case 1025:
case 1558:
case 916:
case 1552:
case 2225:
case 4051:
case 2114:
case 451:
case 3973:
case 2804:
case 522:
case 1510:
case 3194:
case 1830:
case 1644:
case 1854:
case 825:
case 3830:
case 3854:
case 2502:
case 66:
case 2508:
case 1609:
case 3523:
case 3355:
case 143:
case 3609:
case 1523:
case 2080:
case 1590:
case 3225:
case 820:
case 3114:
case 2194:
case 3590:
case 1114:
case 2663:
case 1747:
case 3280:
case 2558:
case 1849:
case 3132:
case 428:
case 2025:
case 3305:
case 832:
case 1138:
case 3659:
case 1305:
case 2355:
case 805:
case 446:
case 3508:
case 3502:
case 243:
case 1460:
case 3686:
case 4001:
case 817:
case 2854:
case 2644:
case 1474:
case 1229:
case 627:
case 2101:
case 3474:
case 3891:
case 3845:
case 63:
case 992:
case 1845:
case 3309:
case 1527:
case 3363:
case 3068:
case 3071:
case 3062:
case 560:
case 2743:
case 1667:
case 1939:
case 2262:
case 3977:
case 1151:
case 957:
case 118:
case 318:
case 270:
case 1386:
case 1029:
case 2527:
case 979:
case 755:
case 2845:
case 2309:
case 565:
case 3488:
case 3482:
case 3811:
case 1101:
case 615:
case 1482:
case 2781:
case 3268:
case 170:
case 1531:
case 689:
case 370:
case 4014:
case 218:
case 1271:
case 1268:
case 1262:
case 3531:
case 849:
case 2062:
case 862:
case 2667:
case 1743:
case 2068:
case 2071:
case 903:
case 3743:
case 4032:
case 4038:
case 4087:
case 968:
case 754:
case 2645:
case 2421:
case 1183:
case 3728:
case 2998:
case 2992:
case 3722:
case 1912:
case 2703:
case 564:
case 585:
case 1918:
case 336:
case 3934:
case 3611:
case 3950:
case 1934:
case 2330:
case 614:
case 274:
case 2354:
case 2900:
case 3304:
case 2867:
case 3805:
case 1115:
case 882:
case 1479:
case 2195:
case 1349:
case 642:
case 3753:
case 3115:
case 3479:
case 3349:
case 519:
case 2950:
case 1354:
case 1691:
case 1330:
case 2934:
case 374:
case 3354:
case 3330:
case 3421:
case 2918:
case 3645:
case 45:
case 2912:
case 1992:
case 2183:
case 1855:
case 1645:
case 2728:
case 4019:
case 3998:
case 898:
case 3195:
case 3769:
case 511:
case 3867:
case 3166:
case 2349:
case 1195:
case 2479:
case 2224:
case 580:
case 2753:
case 490:
case 3141:
case 1900:
case 2361:
case 2378:
case 169:
case 2448:
case 1741:
case 1384:
case 482:
case 3384:
case 3741:
case 3795:
case 2925:
case 1533:
case 3885:
case 3169:
case 2476:
case 592:
case 2346:
case 1795:
case 1885:
case 1169:
case 142:
case 1103:
case 1035:
case 960:
case 3103:
case 3035:
case 2122:
case 2128:
case 636:
case 767:
case 523:
case 557:
case 2235:
case 314:
case 1153:
case 2766:
case 242:
case 1715:
case 2885:
case 4057:
case 1346:
case 3925:
case 588:
case 2533:
case 3715:
case 579:
case 3980:
case 3073:
case 3372:
case 3448:
case 3442:
case 3361:
case 498:
case 161:
case 2384:
case 1073:
case 1361:
case 3575:
case 1235:
case 674:
case 214:
case 3235:
case 1893:
case 1122:
case 1783:
case 503:
case 2813:
case 3122:
case 2035:
case 985:
case 2936:
case 3410:
case 1356:
case 568:
case 1410:
case 3356:
case 381:
case 3458:
case 2751:
case 310:
case 618:
case 2402:
case 153:
case 2560:
case 1701:
case 3423:
case 327:
case 675:
case 2226:
case 1423:
case 215:
case 2181:
case 3701:
case 919:
case 1026:
case 1389:
case 207:
case 33:
case 2613:
case 1397:
case 3693:
case 3389:
case 3397:
case 3620:
case 462:
case 178:
case 281:
case 670:
case 1620:
case 2410:
case 3685:
case 449:
case 1685:
case 3490:
case 773:
case 307:
case 4070:
case 3317:
case 1613:
case 2389:
case 2026:
case 1317:
case 787:
case 1181:
case 2423:
case 227:
case 2164:
case 456:
case 2701:
case 3181:
case 2034:
case 3218:
case 3212:
case 2292:
case 2298:
case 4064:
case 1574:
case 1098:
case 36:
case 3234:
case 2588:
case 1393:
case 3250:
case 2012:
case 2018:
case 2617:
case 3574:
case 3098:
case 3092:
case 883:
case 1234:
case 16:
case 3393:
case 3689:
case 2606:
case 1846:
case 1656:
case 4043:
case 808:
case 2385:
case 3846:
case 1738:
case 3147:
case 2431:
case 3000:
case 1924:
case 3861:
case 2320:
case 3878:
case 3924:
case 2794:
case 1861:
case 1878:
case 2884:
case 3018:
case 1606:
case 3588:
case 1170:
case 3012:
case 2250:
case 1582:
case 1018:
case 2689:
case 2092:
case 417:
case 2697:
case 2098:
case 2574:
case 846:
case 3050:
case 2427:
case 686:
case 1298:
case 1292:
case 4081:
case 3034:
case 3298:
case 1034:
case 3292:
case 2714:
case 1884:
case 3320:
case 2861:
case 1320:
case 2732:
case 2738:
case 859:
case 2656:
case 2846:
case 2147:
case 3719:
case 3116:
case 1107:
case 697:
case 28:
case 72:
case 2165:
case 2889:
case 1817:
case 1116:
case 3107:
case 2799:
case 3040:
case 404:
case 737:
case 2521:
case 744:
case 652:
case 139:
case 1579:
case 2661:
case 91:
case 1239:
case 2968:
case 2039:
case 2962:
case 1537:
case 712:
case 1277:
case 3537:
case 993:
case 0:
case 3521:
case 38:
case 1799:
case 1196:
case 2116:
case 1787:
case 2817:
case 1165:
case 2719:
case 3799:
case 18:
case 2806:
case 1240:
case 3165:
case 3889:
case 3962:
case 1157:
case 2277:
case 3968:
case 1646:
case 935:
case 4053:
case 2537:
case 1962:
case 1039:
case 3646:
case 1971:
case 3157:
case 3661:
case 3678:
case 2579:
case 239:
case 1672:
case 131:
case 1870:
case 1008:
case 1607:
case 1303:
case 3870:
case 1616:
case 2696:
case 855:
case 2023:
case 597:
case 2426:
case 1730:
case 1754:
case 616:
case 2208:
case 2975:
case 473:
case 347:
case 1184:
case 3090:
case 409:
case 2172:
case 749:
case 2178:
case 2161:
case 1090:
case 3252:
case 3258:
case 552:
case 2290:
case 3369:
case 1210:
case 421:
case 1369:
case 2847:
case 2657:
case 1202:
case 376:
case 3426:
case 2223:
case 247:
case 2730:
case 3202:
case 89:
case 1696:
case 1328:
case 813:
case 2607:
case 3322:
case 2008:
case 2870:
case 3328:
case 429:
case 1749:
case 1052:
case 2933:
case 1146:
case 1847:
case 1525:
case 2369:
case 3290:
case 1353:
case 3052:
case 3749:
case 3146:
case 1290:
case 3353:
case 3161:
case 1580:
case 1010:
case 3172:
case 1704:
case 2090:
case 1178:
case 3580:
case 1172:
case 3010:
case 3704:
case 401:
case 2184:
case 2435:
case 393:
case 2381:
case 235:
case 543:
case 193:
case 2960:
case 1189:
case 1865:
case 2117:
case 2816:
case 3197:
case 2670:
case 2807:
case 4:
case 2106:
case 2763:
case 1048:
case 1857:
case 2276:
case 1759:
case 1343:
case 3647:
case 3156:
case 3759:
case 2536:
case 322:
case 3076:
case 130:
case 638:
case 2242:
case 2248:
case 1076:
case 202:
case 3816:
case 1709:
case 3106:
case 1117:
case 2189:
case 467:
case 4013:
case 854:
case 2896:
case 2197:
case 1960:
case 293:
case 3435:
case 1744:
case 135:
case 1381:
case 3381:
case 496:
case 335:
case 3744:
case 102:
case 98:
case 302:
case 1536:
case 3276:
case 2473:
case 222:
case 4085:
case 782:
case 2343:
case 2042:
case 1276:
case 2156:
case 3705:
case 2869:
case 2185:
case 2767:
case 1643:
case 1853:
case 1477:
case 1347:
case 1705:
case 3347:
case 160:
case 1439:
case 360:
case 1524:
case 284:
case 2681:
case 265:
case 969:
case 1193:
case 2113:
case 2755:
case 1974:
case 2440:
case 3822:
case 2370:
case 2803:
case 40:
case 2988:
case 412:
case 2439:
case 1120:
case 3767:
case 3185:
case 899:
case 2705:
case 2477:
case 570:
case 2853:
case 2643:
case 1869:
case 1185:
case 3755:
case 1982:
case 1370:
case 961:
case 444:
case 1755:
case 3982:
case 437:
case 704:
case 1113:
case 3370:
case 2193:
case 165:
case 2664:
case 3681:
case 384:
case 119:
case 4084:
case 3031:
case 3979:
case 1031:
case 692:
case 720:
case 1979:
case 93:
case 2231:
case 953:
case 2357:
case 2568:
case 2571:
case 3316:
case 1450:
case 623:
case 3603:
case 705:
case 2396:
case 3434:
case 806:
case 3450:
case 657:
case 1529:
case 2365:
case 2027:
case 2711:
case 1881:
case 185:
case 164:
case 2498:
case 1791:
case 1418:
case 2864:
case 385:
case 3881:
case 2921:
case 3791:
case 3412:
case 2937:
case 1843:
case 1562:
case 915:
case 4046:
case 1400:
case 700:
case 3568:
case 3571:
case 907:
case 380:
case 688:
case 4061:
case 3864:
case 603:
case 1921:
case 3498:
case 3921:
case 2418:
case 2791:
case 285:
case 1711:
case 725:
case 1492:
case 1027:
case 2529:
case 1622:
case 2316:
case 2745:
case 978:
case 3365:
case 3628:
case 2307:
case 3396:
case 2603:
case 2526:
case 918:
case 2145:
case 1683:
case 1399:
case 3387:
case 357:
case 2260:
case 123:
case 3399:
case 1801:
case 3111:
case 1060:
case 406:
case 746:
case 664:
case 685:
case 1111:
case 3801:
case 3060:
case 2976:
case 542:
case 4004:
case 192:
case 728:
case 2641:
case 619:
case 392:
case 2666:
case 1615:
case 975:
case 2948:
case 3615:
case 2480:
case 777:
case 2060:
case 103:
case 783:
case 223:
case 1260:
case 3145:
case 3319:
case 1145:
case 426:
case 1319:
case 1480:
case 1948:
case 561:
case 1695:
case 3942:
case 751:
case 448:
case 708:
case 3948:
case 179:
case 1641:
case 271:
case 1425:
case 292:
case 388:
case 3641:
case 53:
case 1075:
case 80:
case 3075:
case 763:
case 3713:
case 527:
case 1923:
case 553:
case 2793:
case 3895:
case 2332:
case 1958:
case 3167:
case 2105:
case 4063:
case 936:
case 1167:
case 510:
case 1785:
case 2815:
case 2990:
case 3720:
case 1910:
case 472:
case 1651:
case 3233:
case 2436:
case 1720:
case 491:
case 3573:
case 3910:
case 4086:
case 1883:
case 3883:
case 1535:
case 515:
case 3275:
case 507:
case 837:
case 2233:
case 3990:
case 1436:
case 268:
case 2651:
case 1314:
case 2841:
case 2573:
case 2910:
case 812:
case 974:
case 3105:
case 3033:
case 2866:
case 3332:
case 4059:
case 2952:
case 1105:
case 3815:
case 1033:
case 1332:
case 2632:
case 3163:
case 1539:
case 4067:
case 2756:
case 1351:
case 138:
case 1694:
case 1577:
case 1237:
case 3577:
case 630:
case 3694:
case 997:
case 1144:
case 8:
case 3021:
case 75:
case 2301:
case 1706:
case 61:
case 3819:
case 733:
case 1927:
case 2186:
case 3706:
case 1819:
case 3109:
case 2797:
case 3927:
case 2221:
case 3079:
case 2237:
case 2694:
case 602:
case 3037:
case 3638:
case 1756:
case 1159:
case 2279:
case 3756:
case 1632:
case 3159:
case 4005:
case 1797:
case 37:
case 2717:
case 2109:
case 3789:
case 795:
case 3186:
case 3887:
case 2144:
case 2021:
case 3778:
case 3772:
case 3814:
case 943:
case 1778:
case 1761:
case 1772:
case 2894:
case 2784:
case 2462:
case 3104:
case 821:
case 2468:
case 1149:
case 809:
case 2395:
case 1746:
case 3838:
case 2366:
case 1832:
case 3746:
case 1838:
case 3315:
case 1383:
case 2074:
case 2592:
case 1687:
case 1088:
case 3699:
case 873:
case 794:
case 3082:
case 3429:
case 1550:
case 455:
case 2154:
case 1274:
case 1429:
case 634:
case 2282:
case 2130:
case 3550:
case 116:
case 647:
case 3366:
case 3395:
case 2832:
case 801:
case 2315:
case 2814:
case 1784:
case 1500:
case 2761:
case 450:
case 3471:
case 3462:
case 3784:
case 1288:
case 1282:
case 2429:
case 58:
case 1154:
case 2550:
case 3288:
case 3282:
case 3154:
case 2534:
case 3619:
case 3598:
case 1619:
case 2088:
case 49:
case 1074:
case 2383:
case 641:
case 906:
case 881:
case 4071:
case 2637:
case 2032:
case 3546:
case 2969:
case 3214:
case 3578:
case 3572:
case 1238:
case 1094:
case 1561:
case 2700:
case 1572:
case 1734:
case 83:
case 3445:
case 3375:
case 294:
case 1750:
case 1445:
case 1621:
case 1375:
case 3750:
case 2411:
case 2798:
case 1874:
case 3922:
case 1491:
case 853:
case 1928:
case 1922:
case 3874:
case 3712:
case 2572:
case 926:
case 2561:
case 2578:
case 2094:
case 3014:
case 2238:
case 3700:
case 3679:
case 512:
case 649:
case 2125:
case 3333:
case 2214:
case 889:
case 3032:
case 1294:
case 3038:
case 3903:
case 2922:
case 2928:
case 3411:
case 3798:
case 716:
case 1882:
case 2874:
case 1792:
case 1411:
case 394:
case 2621:
case 807:
case 656:
case 948:
case 537:
case 2467:
case 3405:
case 842:
case 1879:
case 290:
case 1777:
case 1405:
case 3879:
case 1136:
case 2943:
case 1837:
case 1739:
case 3837:
case 869:
case 3682:
case 3517:
case 1506:
case 25:
case 1682:
case 3506:
case 1517:
case 2019:
case 2589:
case 1688:
case 2597:
case 2674:
case 395:
case 3981:
case 436:
case 2287:
case 1219:
case 2299:
case 195:
case 3219:
case 2740:
case 77:
case 1360:
case 1556:
case 3556:
case 2837:
case 2136:
case 2405:
case 2777:
case 190:
case 2879:
case 540:
case 4024:
case 1467:
case 2360:
case 3821:
case 1964:
case 3299:
case 1740:
case 3287:
case 2981:
case 1821:
case 333:
case 1455:
case 2219:
case 3740:
case 1597:
case 1589:
case 2087:
case 1019:
case 2517:
case 2682:
case 15:
case 3019:
case 3083:
case 3970:
case 2735:
case 3513:
case 3388:
case 497:
case 1083:
case 1513:
case 2593:
case 1388:
case 1382:
case 2875:
case 3660:
case 2283:
case 466:
case 2409:
case 1295:
case 1459:
case 2463:
case 2215:
case 2124:
case 1520:
case 509:
case 4036:
case 2947:
case 3241:
case 1833:
case 3585:
case 2095:
case 1015:
case 1585:
case 3833:
case 1409:
case 3283:
case 163:
case 3875:
case 2660:
case 3409:
case 363:
case 1283:
case 624:
case 1593:
case 2513:
case 1374:
case 3444:
case 3374:
case 2015:
case 1095:
case 501:
case 1947:
case 3041:
case 529:
case 2520:
case 2773:
case 3675:
case 2860:
case 86:
case 183:
case 2001:
case 1321:
case 2129:
case 3996:
case 246:
case 625:
case 1454:
case 3430:
case 1996:
case 377:
case 703:
case 1201:
case 2916:
case 443:
case 1162:
case 3957:
case 2251:
case 228:
case 955:
case 779:
case 2633:
case 1957:
case 2337:
case 4080:
case 108:
case 151:
case 259:
case 3907:
case 2201:
case 346:
case 2996:
case 3726:
case 3129:
case 2454:
case 3916:
case 617:
case 2430:
case 3001:
case 2675:
case 486:
case 605:
case 1001:
case 567:
case 283:
case 1379:
case 99:
case 1449:
case 632:
case 251:
case 208:
case 3379:
case 359:
case 1337:
case 620:
case 328:
case 1404:
case 2171:
case 1251:
case 771:
case 2162:
case 3472:
case 3348:
case 3342:
case 3478:
case 3461:
case 780:
case 3043:
case 1348:
case 1461:
case 1478:
case 1342:
case 711:
case 1446:
case 1376:
case 987:
case 232:
case 2243:
case 2081:
case 2511:
case 3591:
case 3064:
case 683:
case 3281:
case 3126:
case 3827:
case 2999:
case 3729:
case 677:
case 1729:
case 2264:
case 909:
case 200:
case 132:
case 2376:
case 2446:
case 2043:
case 1771:
case 2478:
case 3762:
case 3484:
case 120:
case 3768:
case 3771:
case 4018:
case 2126:
case 4012:
case 2827:
case 785:
case 646:
case 901:
case 1999:
case 317:
case 554:
case 4050:
case 3081:
case 929:
case 2064:
case 2994:
case 2310:
case 1253:
case 3390:
case 2173:
case 439:
case 3914:
case 3505:
case 1938:
case 2567:
case 2352:
case 1505:
case 3932:
case 3302:
case 2028:
case 2627:
case 866:
case 2022:
case 2323:
case 784:
case 555:
case 897:
case 4040:
case 3228:
case 3417:
case 1406:
case 304:
case 1222:
case 1228:
case 1417:
case 3352:
case 4039:
case 3358:
case 1352:
case 2069:
case 550:
case 1567:
case 1053:
case 2938:
case 4077:
case 3310:
case 1173:
case 1269:
case 2914:
case 1310:
case 2631:
case 1994:
case 204:
case 3203:
case 1497:
case 2417:
case 2228:
case 1203:
case 3497:
case 663:
case 2406:
case 59:
case 3555:
case 48:
case 324:
case 2135:
case 3323:
case 2308:
case 3022:
case 2302:
case 3627:
case 1555:
case 1323:
case 1627:
case 2096:
case 3007:
case 3608:
case 1586:
case 2327:
case 4035:
case 1007:
case 1602:
case 3413:
case 1140:
case 2207:
case 3901:
case 2544:
case 414:
case 3140:
case 2216:
case 1901:
case 3257:
case 2610:
case 1331:
case 382:
case 1257:
case 1485:
case 3331:
case 182:
case 2842:
case 2563:
case 2057:
case 442:
case 2736:
case 1216:
case 2296:
case 2413:
case 3493:
case 1207:
case 3216:
case 2140:
case 2602:
case 2007:
case 1509:
case 2608:
case 3096:
case 2586:
case 1065:
case 793:
case 3509:
case 1096:
case 874:
case 730:
case 3057:
case 1736:
case 1842:
case 1652:
case 690:
case 722:
case 4073:
case 2485:
case 3610:
case 1177:
case 3951:
case 548:
case 2331:
case 198:
case 3876:
case 256:
case 1530:
case 427:
case 1270:
case 2150:
case 3530:
case 453:
case 2134:
case 2808:
case 2983:
case 43:
case 3198:
case 3823:
case 776:
case 2112:
case 4026:
case 1198:
case 572:
case 341:
case 3852:
case 3642:
case 3648:
case 2725:
case 2549:
case 3966:
case 591:
case 3941:
case 2247:
case 410:
case 3676:
case 1810:
case 2780:
case 2198:
case 2823:
case 734:
case 3802:
case 1118:
case 3112:
case 1802:
case 1070:
case 1808:
case 940:
case 694:
case 356:
case 1150:
case 2270:
case 3134:
case 2554:
case 2810:
case 3247:
case 1504:
case 362:
case 1890:
case 2100:
case 3780:
case 2676:
case 162:
case 3504:
case 478:
case 2047:
case 2648:
case 149:
case 1549:
case 2642:
case 3915:
case 1725:
case 599:
case 241:
case 2966:
case 349:
case 870:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758308401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,];
var gg_b = "1758308401/";

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

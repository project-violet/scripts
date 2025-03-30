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
case 2127:
case 1970:
case 1236:
case 2786:
case 103:
case 1083:
case 3382:
case 3632:
case 2290:
case 811:
case 2830:
case 710:
case 3223:
case 3938:
case 2578:
case 968:
case 1366:
case 1312:
case 650:
case 2153:
case 552:
case 3945:
case 3596:
case 2864:
case 1721:
case 271:
case 2409:
case 3663:
case 615:
case 3872:
case 336:
case 1493:
case 1213:
case 738:
case 543:
case 3140:
case 581:
case 3102:
case 2670:
case 71:
case 2665:
case 2891:
case 159:
case 3505:
case 4025:
case 3369:
case 1160:
case 1277:
case 3283:
case 2361:
case 1572:
case 3036:
case 2318:
case 2997:
case 1349:
case 1643:
case 1805:
case 3322:
case 389:
case 3401:
case 134:
case 2187:
case 367:
case 3442:
case 3536:
case 1072:
case 416:
case 3373:
case 1637:
case 295:
case 37:
case 2454:
case 1161:
case 2959:
case 3710:
case 2264:
case 939:
case 1118:
case 3317:
case 2003:
case 4091:
case 4058:
case 3141:
case 1836:
case 2767:
case 1706:
case 2671:
case 1099:
case 1252:
case 2230:
case 1780:
case 3188:
case 954:
case 1296:
case 3656:
case 3005:
case 3883:
case 1877:
case 3419:
case 370:
case 2078:
case 4064:
case 1795:
case 874:
case 2044:
case 3513:
case 3914:
case 564:
case 1720:
case 2937:
case 1107:
case 2166:
case 165:
case 2112:
case 329:
case 341:
case 2885:
case 3839:
case 1984:
case 3272:
case 3426:
case 1813:
case 1489:
case 1676:
case 3308:
case 4030:
case 2701:
case 1327:
case 2468:
case 1539:
case 1433:
case 2291:
case 2258:
case 3541:
case 2693:
case 1034:
case 1609:
case 1303:
case 3040:
case 1470:
case 1947:
case 995:
case 2399:
case 2910:
case 3759:
case 70:
case 1157:
case 3391:
case 576:
case 2751:
case 3445:
case 4017:
case 2869:
case 1841:
case 254:
case 3136:
case 286:
case 484:
case 2208:
case 2549:
case 1888:
case 627:
case 3364:
case 3450:
case 290:
case 2027:
case 1828:
case 1183:
case 1779:
case 644:
case 2273:
case 3737:
case 16:
case 1756:
case 669:
case 2053:
case 1792:
case 3680:
case 3055:
case 1507:
case 2882:
case 3606:
case 1378:
case 2497:
case 2217:
case 1240:
case 2144:
case 2269:
case 512:
case 2553:
case 3674:
case 3028:
case 2459:
case 94:
case 1424:
case 192:
case 2066:
case 226:
case 3900:
case 3152:
case 3942:
case 3331:
case 3681:
case 2738:
case 2476:
case 3635:
case 2689:
case 461:
case 851:
case 530:
case 233:
case 268:
case 1094:
case 3451:
case 3218:
case 2383:
case 3834:
case 940:
case 1560:
case 2437:
case 262:
case 204:
case 406:
case 1732:
case 882:
case 638:
case 971:
case 3325:
case 4069:
case 1018:
case 2817:
case 2049:
case 715:
case 1654:
case 3414:
case 2629:
case 1802:
case 1471:
case 3041:
case 1228:
case 599:
case 837:
case 655:
case 2968:
case 3875:
case 1199:
case 2357:
case 4022:
case 75:
case 2835:
case 3519:
case 3293:
case 3889:
case 1653:
case 1826:
case 2705:
case 2220:
case 534:
case 351:
case 786:
case 3833:
case 2415:
case 2197:
case 3940:
case 1791:
case 3150:
case 3902:
case 143:
case 420:
case 1627:
case 1819:
case 559:
case 4080:
case 3608:
case 1934:
case 2104:
case 2881:
case 4095:
case 152:
case 2821:
case 4020:
case 3379:
case 3586:
case 1423:
case 3862:
case 2796:
case 2634:
case 790:
case 42:
case 1093:
case 2280:
case 2752:
case 503:
case 1165:
case 1170:
case 200:
case 3778:
case 1457:
case 944:
case 3617:
case 1516:
case 1886:
case 3829:
case 2509:
case 473:
case 2365:
case 2370:
case 3669:
case 1171:
case 1593:
case 2274:
case 480:
case 3715:
case 2248:
case 553:
case 366:
case 1184:
case 733:
case 1801:
case 250:
case 149:
case 1062:
case 2281:
case 2137:
case 1907:
case 64:
case 2966:
case 1343:
case 1472:
case 3042:
case 3622:
case 3086:
case 1029:
case 875:
case 328:
case 987:
case 1649:
case 726:
case 2618:
case 2777:
case 3233:
case 3114:
case 565:
case 3928:
case 2895:
case 4081:
case 1242:
case 322:
case 1089:
case 1304:
case 1547:
case 955:
case 2510:
case 3646:
case 3332:
case 4074:
case 1033:
case 1725:
case 2736:
case 3229:
case 2221:
case 640:
case 1124:
case 2159:
case 704:
case 1397:
case 301:
case 3262:
case 3216:
case 496:
case 3567:
case 3452:
case 938:
case 950:
case 3625:
case 2329:
case 3045:
case 2915:
case 633:
case 1250:
case 3690:
case 2232:
case 2892:
case 1746:
case 2623:
case 2856:
case 3514:
case 2043:
case 2487:
case 2109:
case 513:
case 3038:
case 1434:
case 210:
case 3402:
case 1814:
case 1584:
case 1065:
case 3977:
case 867:
case 457:
case 1923:
case 2263:
case 3631:
case 485:
case 176:
case 3374:
case 3455:
case 1615:
case 3348:
case 2741:
case 1898:
case 3265:
case 3270:
case 1769:
case 3824:
case 3050:
case 2333:
case 841:
case 1245:
case 238:
case 2110:
case 915:
case 1147:
case 1957:
case 3749:
case 1311:
case 560:
case 740:
case 604:
case 1722:
case 3335:
case 3685:
case 21:
case 2004:
case 598:
case 3550:
case 1214:
case 654:
case 2903:
case 3098:
case 2168:
case 3051:
case 2279:
case 118:
case 1310:
case 2347:
case 2504:
case 1717:
case 3119:
case 3428:
case 1644:
case 90:
case 1850:
case 2832:
case 714:
case 2292:
case 2412:
case 69:
case 2466:
case 639:
case 3284:
case 2597:
case 205:
case 2256:
case 2699:
case 3441:
case 1071:
case 4:
case 3395:
case 889:
case 3320:
case 4079:
case 1845:
case 3488:
case 269:
case 1309:
case 1084:
case 407:
case 1116:
case 3753:
case 1162:
case 2863:
case 3996:
case 2037:
case 1838:
case 3952:
case 3100:
case 1461:
case 3727:
case 2944:
case 1129:
case 2154:
case 2449:
case 1298:
case 3014:
case 4054:
case 3593:
case 1715:
case 3219:
case 166:
case 2595:
case 321:
case 957:
case 3062:
case 3016:
case 2338:
case 364:
case 583:
case 302:
case 1042:
case 1622:
case 1000:
case 128:
case 2458:
case 2211:
case 3649:
case 1501:
case 2783:
case 2268:
case 2179:
case 541:
case 2723:
case 3089:
case 1026:
case 122:
case 494:
case 2035:
case 1151:
case 1198:
case 678:
case 2350:
case 1682:
case 3790:
case 2464:
case 706:
case 3725:
case 1229:
case 1847:
case 4068:
case 1019:
case 2048:
case 2074:
case 877:
case 3961:
case 57:
case 567:
case 2757:
case 3397:
case 2081:
case 2922:
case 1496:
case 1262:
case 1567:
case 813:
case 1519:
case 3653:
case 2080:
case 3975:
case 2581:
case 151:
case 2811:
case 2799:
case 1833:
case 4010:
case 589:
case 2868:
case 536:
case 2398:
case 784:
case 1902:
case 343:
case 2132:
case 3589:
case 1526:
case 2535:
case 3483:
case 3047:
case 3819:
case 892:
case 1608:
case 3376:
case 2485:
case 3533:
case 1145:
case 3764:
case 2210:
case 1247:
case 1542:
case 2425:
case 1379:
case 1001:
case 1356:
case 697:
case 3842:
case 3730:
case 2521:
case 2163:
case 2908:
case 3165:
case 2640:
case 3516:
case 2020:
case 1550:
case 2532:
case 2446:
case 1787:
case 405:
case 2135:
case 1905:
case 3189:
case 1126:
case 920:
case 3133:
case 3494:
case 2760:
case 1051:
case 2897:
case 3999:
case 3310:
case 1664:
case 318:
case 716:
case 3717:
case 2991:
case 2174:
case 2148:
case 591:
case 1428:
case 427:
case 2804:
case 1380:
case 111:
case 4076:
case 2181:
case 3407:
case 684:
case 3972:
case 1224:
case 2964:
case 2259:
case 1441:
case 834:
case 1395:
case 3845:
case 2121:
case 1488:
case 3309:
case 3084:
case 3565:
case 246:
case 444:
case 312:
case 859:
case 1952:
case 2930:
case 2301:
case 1727:
case 2:
case 1186:
case 3129:
case 3298:
case 1870:
case 3251:
case 2079:
case 1014:
case 410:
case 2794:
case 1045:
case 2386:
case 1690:
case 257:
case 1913:
case 1884:
case 2300:
case 1101:
case 2473:
case 624:
case 3571:
case 2985:
case 1712:
case 1766:
case 973:
case 661:
case 3193:
case 393:
case 1402:
case 3065:
case 2195:
case 3070:
case 772:
case 3584:
case 2297:
case 3983:
case 2120:
case 2592:
case 606:
case 231:
case 848:
case 3923:
case 1631:
case 3238:
case 3524:
case 2876:
case 778:
case 4004:
case 1455:
case 3615:
case 2990:
case 2319:
case 3851:
case 3898:
case 1265:
case 1270:
case 3769:
case 2106:
case 2677:
case 98:
case 2032:
case 2761:
case 3311:
case 3957:
case 1598:
case 3722:
case 2408:
case 1335:
case 174:
case 2122:
case 3637:
case 3387:
case 3072:
case 1400:
case 3429:
case 1486:
case 2091:
case 4003:
case 1857:
case 2058:
case 3924:
case 1710:
case 501:
case 3118:
case 1998:
case 2340:
case 1141:
case 2302:
case 2244:
case 2169:
case 3706:
case 2278:
case 3252:
case 3780:
case 3416:
case 3296:
case 216:
case 170:
case 3659:
case 3795:
case 1513:
case 2355:
case 183:
case 2531:
case 1914:
case 707:
case 1128:
case 7:
case 3205:
case 365:
case 1709:
case 129:
case 1096:
case 1052:
case 2030:
case 3353:
case 1839:
case 1272:
case 353:
case 2146:
case 62:
case 2992:
case 3583:
case 2435:
case 3676:
case 1308:
case 2815:
case 3539:
case 3327:
case 876:
case 2585:
case 4044:
case 2698:
case 566:
case 2182:
case 3965:
case 582:
case 3970:
case 2729:
case 1382:
case 4015:
case 3852:
case 3604:
case 3039:
case 2564:
case 3896:
case 1938:
case 818:
case 3312:
case 1013:
case 3366:
case 44:
case 2031:
case 2716:
case 1945:
case 1596:
case 2406:
case 2328:
case 1552:
case 3781:
case 1872:
case 3213:
case 3493:
case 785:
case 2117:
case 2495:
case 1140:
case 2341:
case 1950:
case 1102:
case 2932:
case 3057:
case 1899:
case 1283:
case 3277:
case 3160:
case 731:
case 1036:
case 3572:
case 278:
case 123:
case 2645:
case 2803:
case 3349:
case 1711:
case 2025:
case 471:
case 3643:
case 1322:
case 2173:
case 3735:
case 2789:
case 2765:
case 468:
case 858:
case 3929:
case 972:
case 3315:
case 1674:
case 1028:
case 2827:
case 3424:
case 717:
case 1196:
case 392:
case 2313:
case 773:
case 1900:
case 3288:
case 780:
case 1635:
case 1385:
case 426:
case 2853:
case 445:
case 1743:
case 3916:
case 3962:
case 657:
case 3094:
case 1498:
case 3611:
case 2249:
case 2082:
case 3668:
case 191:
case 1834:
case 2022:
case 3560:
case 2642:
case 1704:
case 2974:
case 2191:
case 78:
case 3732:
case 511:
case 2479:
case 3018:
case 2336:
case 3654:
case 1414:
case 2573:
case 1041:
case 3471:
case 1621:
case 3228:
case 3199:
case 3534:
case 2887:
case 1502:
case 1088:
case 2456:
case 2935:
case 462:
case 978:
case 631:
case 404:
case 2266:
case 3989:
case 319:
case 2492:
case 1926:
case 1541:
case 284:
case 2253:
case 2463:
case 1588:
case 574:
case 1002:
case 2849:
case 3470:
case 3465:
case 1818:
case 1759:
case 2724:
case 3947:
case 256:
case 3157:
case 454:
case 864:
case 1391:
case 1358:
case 3075:
case 3060:
case 779:
case 2125:
case 2906:
case 916:
case 2980:
case 3123:
case 3561:
case 2601:
case 3518:
case 49:
case 720:
case 3888:
case 1364:
case 313:
case 1450:
case 1260:
case 1177:
case 2920:
case 3779:
case 607:
case 3594:
case 2287:
case 1737:
case 36:
case 377:
case 2582:
case 2008:
case 2866:
case 1234:
case 2396:
case 3756:
case 1113:
case 3792:
case 1055:
case 3344:
case 2667:
case 3378:
case 1606:
case 3202:
case 1106:
case 2936:
case 922:
case 2270:
case 2167:
case 1925:
case 3097:
case 3741:
case 789:
case 3559:
case 1876:
case 3453:
case 3788:
case 2631:
case 1180:
case 31:
case 3389:
case 1326:
case 3004:
case 274:
case 2335:
case 2685:
case 1408:
case 476:
case 556:
case 2598:
case 1243:
case 736:
case 338:
case 1761:
case 1032:
case 901:
case 3333:
case 1677:
case 2514:
case 3043:
case 2101:
case 1342:
case 1931:
case 1300:
case 3856:
case 1204:
case 332:
case 3892:
case 2913:
case 157:
case 2690:
case 3232:
case 3915:
case 1636:
case 4070:
case 966:
case 3537:
case 2045:
case 2625:
case 1592:
case 2321:
case 1297:
case 3879:
case 814:
case 1195:
case 895:
case 2402:
case 1063:
case 3362:
case 1837:
case 2766:
case 3109:
case 2712:
case 1985:
case 1707:
case 2753:
case 146:
case 1056:
case 369:
case 125:
case 1843:
case 412:
case 1121:
case 524:
case 2320:
case 2395:
case 1259:
case 982:
case 3543:
case 871:
case 2691:
case 2865:
case 2870:
case 1:
case 741:
case 3944:
case 430:
case 4071:
case 1301:
case 2142:
case 1930:
case 3672:
case 770:
case 2996:
case 4024:
case 2664:
case 1482:
case 3347:
case 506:
case 2051:
case 1897:
case 1760:
case 1775:
case 2126:
case 1135:
case 988:
case 327:
case 1532:
case 3076:
case 43:
case 3597:
case 1734:
case 2284:
case 1181:
case 2630:
case 3292:
case 2380:
case 3412:
case 1652:
case 675:
case 3832:
case 2271:
case 1367:
case 767:
case 3702:
case 1174:
case 1991:
case 3953:
case 3143:
case 4093:
case 237:
case 12:
case 2862:
case 2379:
case 3660:
case 1314:
case 3675:
case 3821:
case 2145:
case 1490:
case 2829:
case 1602:
case 1020:
case 572:
case 300:
case 452:
case 862:
case 2778:
case 3206:
case 3927:
case 2744:
case 804:
case 1095:
case 1908:
case 2138:
case 1163:
case 629:
case 3280:
case 1521:
case 3752:
case 2356:
case 3384:
case 1655:
case 1868:
case 4047:
case 2067:
case 3197:
case 1006:
case 3324:
case 120:
case 1581:
case 2703:
case 868:
case 3987:
case 481:
case 3705:
case 2293:
case 2889:
case 2413:
case 1574:
case 3835:
case 2519:
case 1548:
case 1772:
case 3104:
case 1485:
case 2608:
case 67:
case 1535:
case 2526:
case 2150:
case 2902:
case 1398:
case 2940:
case 1351:
case 3694:
case 1969:
case 3736:
case 3011:
case 1350:
case 1464:
case 2682:
case 3068:
case 3880:
case 2988:
case 3176:
case 1723:
case 1430:
case 2567:
case 2452:
case 315:
case 4089:
case 3607:
case 1506:
case 394:
case 201:
case 2262:
case 1922:
case 1081:
case 3949:
case 1757:
case 1628:
case 3444:
case 791:
case 1580:
case 3221:
case 3478:
case 1048:
case 1810:
case 2405:
case 3281:
case 2363:
case 3713:
case 1595:
case 3248:
case 3274:
case 2669:
case 3509:
case 3365:
case 4029:
case 2928:
case 1179:
case 3895:
case 1268:
case 180:
case 3777:
case 1491:
case 1458:
case 3820:
case 1345:
case 173:
case 2622:
case 117:
case 4016:
case 1739:
case 3966:
case 3235:
case 983:
case 1866:
case 1008:
case 2737:
case 1185:
case 2177:
case 1920:
case 894:
case 3027:
case 1546:
case 815:
case 2364:
case 737:
case 2894:
case 3497:
case 3115:
case 1771:
case 2606:
case 2901:
case 477:
case 2528:
case 1352:
case 2330:
case 2113:
case 2695:
case 156:
case 97:
case 1724:
case 3910:
case 2040:
case 2818:
case 1017:
case 1849:
case 4075:
case 2620:
case 2588:
case 275:
case 39:
case 3822:
case 339:
case 1463:
case 1305:
case 3693:
case 184:
case 4034:
case 3443:
case 3087:
case 1073:
case 3549:
case 1601:
case 2136:
case 2967:
case 1125:
case 460:
case 850:
case 2358:
case 3798:
case 1522:
case 3587:
case 3629:
case 936:
case 1336:
case 1686:
case 2325:
case 498:
case 3817:
case 1479:
case 2390:
case 3282:
case 2919:
case 1191:
case 1974:
case 701:
case 419:
case 1642:
case 674:
case 3437:
case 291:
case 1600:
case 106:
case 2926:
case 923:
case 2207:
case 1517:
case 3616:
case 2088:
case 3873:
case 3911:
case 2797:
case 2875:
case 4018:
case 3103:
case 2942:
case 2331:
case 5:
case 2681:
case 2900:
case 345:
case 3808:
case 2555:
case 1827:
case 3178:
case 3144:
case 525:
case 3383:
case 3633:
case 1377:
case 1249:
case 766:
case 546:
case 2451:
case 3745:
case 368:
case 3222:
case 1626:
case 4007:
case 3476:
case 124:
case 2505:
case 774:
case 3670:
case 3858:
case 3665:
case 3891:
case 991:
case 2950:
case 340:
case 1495:
case 1215:
case 3904:
case 1388:
case 3409:
case 371:
case 2663:
case 3285:
case 2401:
case 3187:
case 1591:
case 289:
case 2711:
case 1645:
case 1803:
case 459:
case 869:
case 2036:
case 579:
case 1090:
case 1733:
case 2899:
case 2223:
case 3700:
case 34:
case 1963:
case 1564:
case 2346:
case 172:
case 3830:
case 628:
case 3410:
case 2382:
case 2632:
case 1878:
case 1844:
case 1729:
case 3786:
case 3394:
case 52:
case 1328:
case 3864:
case 403:
case 2257:
case 2596:
case 2155:
case 666:
case 1031:
case 3943:
case 2013:
case 3578:
case 3515:
case 1793:
case 3166:
case 453:
case 3112:
case 229:
case 2709:
case 580:
case 1979:
case 2128:
case 1355:
case 517:
case 2883:
case 2299:
case 270:
case 81:
case 1448:
case 3624:
case 3078:
case 1182:
case 3291:
case 3411:
case 3258:
case 1698:
case 1815:
case 3468:
case 2577:
case 3701:
case 1435:
case 1992:
case 2426:
case 465:
case 637:
case 855:
case 1146:
case 1956:
case 58:
case 3264:
case 1747:
case 975:
case 1091:
case 711:
case 3375:
case 1614:
case 2486:
case 810:
case 1525:
case 27:
case 2442:
case 409:
case 2373:
case 1122:
case 267:
case 1590:
case 3684:
case 4072:
case 2692:
case 3230:
case 1278:
case 832:
case 688:
case 651:
case 1244:
case 1421:
case 1302:
case 2141:
case 2951:
case 1340:
case 2802:
case 3686:
case 3336:
case 1587:
case 1049:
case 1817:
case 3479:
case 2018:
case 1282:
case 2732:
case 3974:
case 2061:
case 3158:
case 104:
case 959:
case 2560:
case 3981:
case 3022:
case 3266:
case 2989:
case 708:
case 1616:
case 3517:
case 2484:
case 491:
case 1911:
case 2199:
case 1968:
case 2228:
case 2471:
case 2288:
case 3130:
case 2007:
case 1808:
case 903:
case 3313:
case 2424:
case 1553:
case 3827:
case 2929:
case 544:
case 1269:
case 1954:
case 764:
case 2668:
case 721:
case 1633:
case 3377:
case 1383:
case 4028:
case 879:
case 2916:
case 2962:
case 1476:
case 2993:
case 3812:
case 3866:
case 277:
case 2139:
case 2594:
case 1273:
case 2779:
case 2183:
case 2828:
case 3995:
case 3432:
case 965:
case 2240:
case 1115:
case 1497:
case 532:
case 1882:
case 896:
case 1566:
case 2344:
case 3667:
case 1512:
case 3131:
case 1053:
case 948:
case 3784:
case 3396:
case 356:
case 2157:
case 781:
case 2255:
case 260:
case 1399:
case 1910:
case 2947:
case 3017:
case 51:
case 817:
case 942:
case 2303:
case 2034:
case 19:
case 3305:
case 3253:
case 3073:
case 1087:
case 2888:
case 2518:
case 1549:
case 3601:
case 3980:
case 63:
case 186:
case 2561:
case 699:
case 2841:
case 3906:
case 735:
case 3227:
case 3125:
case 4040:
case 618:
case 1869:
case 3190:
case 2060:
case 1798:
case 3030:
case 1515:
case 2353:
case 397:
case 265:
case 1937:
case 2107:
case 3979:
case 2720:
case 2795:
case 1044:
case 96:
case 3448:
case 2877:
case 2659:
case 3182:
case 831:
case 1258:
case 3698:
case 1411:
case 1291:
case 2971:
case 2433:
case 3815:
case 2583:
case 1701:
case 2676:
case 730:
case 3146:
case 429:
case 1831:
case 3956:
case 2984:
case 1149:
case 2118:
case 643:
case 1959:
case 3091:
case 515:
case 2161:
case 3058:
case 2523:
case 2429:
case 1375:
case 594:
case 3614:
case 195:
case 4005:
case 2637:
case 2072:
case 114:
case 681:
case 3122:
case 47:
case 1334:
case 1684:
case 2557:
case 857:
case 635:
case 1890:
case 1767:
case 3244:
case 2836:
case 3340:
case 423:
case 2057:
case 1670:
case 4036:
case 140:
case 3341:
case 3932:
case 3215:
case 807:
case 2774:
case 2493:
case 2134:
case 1904:
case 2781:
case 489:
case 3388:
case 171:
case 1409:
case 1726:
case 998:
case 3173:
case 1187:
case 234:
case 1285:
case 3558:
case 2023:
case 3591:
case 2349:
case 776:
case 3025:
case 1997:
case 1318:
case 919:
case 3803:
case 608:
case 846:
case 3090:
case 1742:
case 664:
case 3963:
case 2896:
case 793:
case 3085:
case 4013:
case 3564:
case 372:
case 2604:
case 2447:
case 203:
case 992:
case 1394:
case 2965:
case 4077:
case 3406:
case 2697:
case 3762:
case 1153:
case 649:
case 1544:
case 2366:
case 1578:
case 3092:
case 346:
case 2162:
case 1393:
case 2116:
case 169:
case 2309:
case 3056:
case 2570:
case 952:
case 3843:
case 3121:
case 3259:
case 2071:
case 526:
case 3:
case 1154:
case 2129:
case 1978:
case 2461:
case 765:
case 144:
case 2708:
case 66:
case 1672:
case 677:
case 212:
case 3422:
case 1863:
case 709:
case 1504:
case 2999:
case 3482:
case 1279:
case 1168:
case 2494:
case 2214:
case 23:
case 2189:
case 299:
case 3135:
case 411:
case 1076:
case 3532:
case 3446:
case 127:
case 2972:
case 105:
case 1597:
case 3181:
case 1466:
case 3804:
case 1412:
case 3652:
case 1059:
case 981:
case 872:
case 2850:
case 1832:
case 3367:
case 2644:
case 958:
case 504:
case 4051:
case 660:
case 742:
case 562:
case 3174:
case 2769:
case 3106:
case 2851:
case 586:
case 1097:
case 1559:
case 3613:
case 1453:
case 908:
case 276:
case 3180:
case 331:
case 2923:
case 1389:
case 1004:
case 759:
case 3243:
case 1110:
case 138:
case 3761:
case 897:
case 539:
case 1427:
case 2368:
case 3859:
case 1333:
case 3677:
case 1576:
case 1487:
case 3579:
case 3300:
case 1856:
case 132:
case 1892:
case 2782:
case 357:
case 1915:
case 1537:
case 3794:
case 2354:
case 1329:
case 3592:
case 2983:
case 3120:
case 2065:
case 3556:
case 3195:
case 1879:
case 4045:
case 3297:
case 2814:
case 902:
case 1362:
case 2193:
case 3837:
case 590:
case 2939:
case 3707:
case 187:
case 703:
case 2286:
case 1736:
case 976:
case 1694:
case 3254:
case 208:
case 1011:
case 15:
case 2033:
case 3350:
case 2790:
case 3464:
case 2867:
case 1068:
case 798:
case 2547:
case 396:
case 2089:
case 2304:
case 1880:
case 401:
case 634:
case 2242:
case 2200:
case 3430:
case 194:
case 4026:
case 38:
case 3081:
case 1949:
case 3580:
case 2961:
case 514:
case 4000:
case 3688:
case 3520:
case 3192:
case 4042:
case 2016:
case 1713:
case 3595:
case 1248:
case 1274:
case 1403:
case 4086:
case 884:
case 1895:
case 1661:
case 3783:
case 380:
case 1777:
case 1618:
case 3345:
case 2029:
case 3809:
case 2472:
case 993:
case 202:
case 1912:
case 2226:
case 2785:
case 1137:
case 2907:
case 856:
case 466:
case 32:
case 2529:
case 2687:
case 2337:
case 1554:
case 3425:
case 1660:
case 1675:
case 252:
case 3210:
case 2764:
case 3020:
case 2886:
case 2516:
case 3640:
case 2457:
case 2562:
case 1206:
case 1371:
case 847:
case 3095:
case 54:
case 3521:
case 4001:
case 2842:
case 713:
case 1009:
case 1384:
case 1634:
case 2800:
case 1796:
case 3655:
case 1295:
case 3868:
case 3006:
case 2975:
case 1220:
case 3209:
case 379:
case 3431:
case 2826:
case 0:
case 1835:
case 258:
case 760:
case 642:
case 1104:
case 2376:
case 2201:
case 3485:
case 2533:
case 1568:
case 3535:
case 1010:
case 3351:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743343201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,];
var gg_b = "1743343201/";

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

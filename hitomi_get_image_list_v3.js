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
case 3733:
case 809:
case 1941:
case 286:
case 1782:
case 3244:
case 1524:
case 728:
case 513:
case 3792:
case 3271:
case 3825:
case 1323:
case 1812:
case 522:
case 2154:
case 2631:
case 2208:
case 1479:
case 922:
case 3600:
case 3109:
case 2695:
case 2946:
case 2973:
case 3475:
case 242:
case 3671:
case 768:
case 1428:
case 2387:
case 3465:
case 1126:
case 432:
case 2491:
case 562:
case 1469:
case 1774:
case 4086:
case 2435:
case 1982:
case 2746:
case 1097:
case 4065:
case 2773:
case 841:
case 962:
case 3087:
case 3806:
case 2608:
case 415:
case 160:
case 1551:
case 3597:
case 1964:
case 219:
case 287:
case 1198:
case 1587:
case 1502:
case 3486:
case 3051:
case 2295:
case 1811:
case 1757:
case 711:
case 1325:
case 3823:
case 1920:
case 3368:
case 3684:
case 2347:
case 2104:
case 23:
case 4073:
case 44:
case 4046:
case 3272:
case 3791:
case 3329:
case 1781:
case 3070:
case 1155:
case 15:
case 79:
case 3662:
case 2258:
case 3047:
case 125:
case 3137:
case 106:
case 895:
case 2816:
case 3473:
case 30:
case 2632:
case 3227:
case 1547:
case 2210:
case 2029:
case 3148:
case 2012:
case 2975:
case 3463:
case 3284:
case 724:
case 1981:
case 2897:
case 2352:
case 357:
case 2177:
case 1957:
case 2301:
case 648:
case 2433:
case 2506:
case 3672:
case 702:
case 854:
case 107:
case 3935:
case 2492:
case 1306:
case 959:
case 875:
case 1434:
case 2658:
case 2649:
case 2119:
case 2775:
case 3052:
case 3001:
case 908:
case 2986:
case 3378:
case 1552:
case 3775:
case 2052:
case 3119:
case 3658:
case 538:
case 3140:
case 1645:
case 121:
case 2378:
case 2218:
case 137:
case 2001:
case 1283:
case 1464:
case 4092:
case 1115:
case 3610:
case 3352:
case 1578:
case 674:
case 3965:
case 81:
case 1006:
case 2463:
case 3078:
case 2330:
case 2935:
case 3506:
case 3433:
case 715:
case 1969:
case 938:
case 2047:
case 1796:
case 3249:
case 2137:
case 353:
case 888:
case 2650:
case 1025:
case 2662:
case 1568:
case 840:
case 3029:
case 3693:
case 2038:
case 114:
case 2227:
case 3975:
case 3012:
case 3167:
case 103:
case 20:
case 2473:
case 3816:
case 66:
case 161:
case 3525:
case 3632:
case 428:
case 3347:
case 2368:
case 2735:
case 136:
case 1441:
case 2823:
case 1769:
case 1917:
case 2329:
case 3338:
case 2070:
case 33:
case 3104:
case 1728:
case 3608:
case 589:
case 2806:
case 3231:
case 2200:
case 1934:
case 2002:
case 3289:
case 3121:
case 1285:
case 3295:
case 2051:
case 2261:
case 1643:
case 319:
case 2597:
case 1676:
case 387:
case 47:
case 2114:
case 1056:
case 1481:
case 1397:
case 3302:
case 1860:
case 2992:
case 989:
case 3351:
case 3689:
case 1023:
case 2600:
case 839:
case 1511:
case 3324:
case 1316:
case 1276:
case 1243:
case 2661:
case 3695:
case 1190:
case 3973:
case 3180:
case 1870:
case 464:
case 1734:
case 2516:
case 2311:
case 2244:
case 2792:
case 2733:
case 386:
case 18:
case 934:
case 516:
case 3154:
case 49:
case 283:
case 1442:
case 533:
case 925:
case 1123:
case 3641:
case 1580:
case 3674:
case 2505:
case 2354:
case 1233:
case 2553:
case 1292:
case 779:
case 3080:
case 4083:
case 3936:
case 1744:
case 3207:
case 3282:
case 2999:
case 1554:
case 1305:
case 3855:
case 1353:
case 646:
case 2776:
case 2743:
case 1837:
case 3054:
case 506:
case 3483:
case 2124:
case 370:
case 1859:
case 1848:
case 2985:
case 2380:
case 341:
case 3274:
case 1326:
case 3314:
case 3241:
case 412:
case 358:
case 3736:
case 1944:
case 2598:
case 2102:
case 1971:
case 423:
case 2151:
case 1692:
case 2766:
case 1633:
case 2088:
case 309:
case 682:
case 1156:
case 1761:
case 2785:
case 1458:
case 3445:
case 700:
case 2321:
case 449:
case 1700:
case 2526:
case 1410:
case 2976:
case 1567:
case 2228:
case 2037:
case 1984:
case 122:
case 3281:
case 731:
case 3466:
case 1291:
case 920:
case 857:
case 113:
case 2269:
case 3112:
case 2138:
case 4085:
case 2503:
case 1235:
case 2304:
case 21:
case 4066:
case 2745:
case 3337:
case 3499:
case 1431:
case 3805:
case 1962:
case 1355:
case 3853:
case 1727:
case 3359:
case 766:
case 693:
case 2170:
case 2890:
case 1809:
case 1495:
case 3004:
case 2296:
case 3485:
case 1918:
case 2160:
case 1691:
case 960:
case 2377:
case 3220:
case 3019:
case 3681:
case 3515:
case 162:
case 3639:
case 1522:
case 4076:
case 1784:
case 1635:
case 3130:
case 3242:
case 1015:
case 1972:
case 2322:
case 856:
case 1408:
case 2319:
case 240:
case 673:
case 2783:
case 1718:
case 395:
case 1577:
case 560:
case 1888:
case 3178:
case 2945:
case 3476:
case 2813:
case 1927:
case 726:
case 1762:
case 705:
case 1958:
case 1949:
case 295:
case 1732:
case 2077:
case 3322:
case 3319:
case 2443:
case 1315:
case 1910:
case 1821:
case 189:
case 1686:
case 676:
case 749:
case 2515:
case 2639:
case 1444:
case 7:
case 83:
case 3628:
case 3377:
case 1665:
case 3160:
case 3152:
case 2220:
case 2681:
case 2019:
case 735:
case 3101:
case 3669:
case 2242:
case 2130:
case 2794:
case 2805:
case 2337:
case 3745:
case 696:
case 2499:
case 1461:
case 1932:
case 1758:
case 3296:
case 1675:
case 3170:
case 2359:
case 3890:
case 2466:
case 2620:
case 3617:
case 1055:
case 3037:
case 2239:
case 58:
case 2168:
case 3147:
case 1854:
case 3436:
case 31:
case 2642:
case 3555:
case 3269:
case 2257:
case 1537:
case 3059:
case 2067:
case 1822:
case 290:
case 537:
case 3014:
case 521:
case 1731:
case 1427:
case 1840:
case 3976:
case 2388:
case 1789:
case 2445:
case 1313:
case 1246:
case 3526:
case 3799:
case 1273:
case 3321:
case 3187:
case 3598:
case 2736:
case 1663:
case 258:
case 2513:
case 2314:
case 1098:
case 3766:
case 209:
case 1472:
case 3088:
case 730:
case 2682:
case 2607:
case 561:
case 3743:
case 3776:
case 887:
case 1450:
case 1462:
case 4094:
case 1931:
case 503:
case 1989:
case 514:
case 1867:
case 1646:
case 241:
case 2309:
case 384:
case 1390:
case 1708:
case 2054:
case 1116:
case 643:
case 3124:
case 2641:
case 3966:
case 466:
case 1484:
case 1005:
case 1053:
case 3494:
case 961:
case 2936:
case 536:
case 3354:
case 3505:
case 903:
case 914:
case 3553:
case 2507:
case 2582:
case 310:
case 1956:
case 4060:
case 4001:
case 2478:
case 1209:
case 147:
case 2092:
case 268:
case 2033:
case 1364:
case 2143:
case 182:
case 2828:
case 3460:
case 3839:
case 2363:
case 787:
case 1891:
case 2987:
case 2564:
case 3711:
case 2951:
case 3857:
case 3392:
case 1723:
case 1835:
case 3534:
case 3653:
case 2879:
case 4047:
case 951:
case 40:
case 1288:
case 830:
case 3298:
case 228:
case 1756:
case 2346:
case 2541:
case 2185:
case 2690:
case 1609:
case 2213:
case 2817:
case 3820:
case 3447:
case 146:
case 1341:
case 1214:
case 2166:
case 1374:
case 3438:
case 472:
case 2429:
case 3842:
case 3046:
case 3136:
case 2702:
case 2787:
case 2091:
case 3255:
case 4002:
case 4087:
case 3203:
case 2834:
case 2770:
case 662:
case 2557:
case 3569:
case 315:
case 2035:
case 2386:
case 585:
case 2145:
case 224:
case 4051:
case 2539:
case 2365:
case 2738:
case 863:
case 3729:
case 3596:
case 1586:
case 1381:
case 2952:
case 332:
case 1497:
case 27:
case 3487:
case 1339:
case 2747:
case 1096:
case 3768:
case 1833:
case 3086:
case 3807:
case 1172:
case 1357:
case 2901:
case 3778:
case 1637:
case 622:
case 2542:
case 1150:
case 8:
case 613:
case 3424:
case 2375:
case 2215:
case 2520:
case 211:
case 835:
case 3194:
case 3841:
case 2947:
case 3730:
case 3968:
case 1925:
case 2701:
case 823:
case 1079:
case 753:
case 193:
case 2752:
case 3912:
case 2938:
case 3929:
case 812:
case 4024:
case 29:
case 3701:
case 1277:
case 2841:
case 2194:
case 2874:
case 1423:
case 2730:
case 2968:
case 805:
case 1604:
case 826:
case 2912:
case 2075:
case 3752:
case 981:
case 2929:
case 3938:
case 3760:
case 2603:
case 4011:
case 772:
case 581:
case 311:
case 578:
case 2424:
case 3183:
case 3970:
case 1193:
case 232:
case 1328:
case 1677:
case 442:
case 3365:
case 2712:
case 3901:
case 617:
case 866:
case 2451:
case 176:
case 2086:
case 689:
case 302:
case 1039:
case 1535:
case 3091:
case 3770:
case 2203:
case 1081:
case 1619:
case 1110:
case 1267:
case 3539:
case 3035:
case 950:
case 1591:
case 197:
case 419:
case 757:
case 3145:
case 487:
case 56:
case 3166:
case 2447:
case 2820:
case 3468:
case 2073:
case 2046:
case 3702:
case 2136:
case 3429:
case 43:
case 994:
case 143:
case 2842:
case 453:
case 1131:
case 3199:
case 3879:
case 2653:
case 594:
case 1680:
case 3373:
case 1221:
case 4029:
case 96:
case 3574:
case 4012:
case 3987:
case 3363:
case 2881:
case 3564:
case 2452:
case 2839:
case 2460:
case 2626:
case 638:
case 2333:
case 2401:
case 2534:
case 1064:
case 2392:
case 2857:
case 3869:
case 1533:
case 2253:
case 1406:
case 2063:
case 1334:
case 1716:
case 3724:
case 1108:
case 3033:
case 955:
case 3143:
case 4030:
case 1007:
case 1082:
case 574:
case 3478:
case 92:
case 3092:
case 1621:
case 3709:
case 3422:
case 973:
case 185:
case 495:
case 3419:
case 3656:
case 2858:
case 2376:
case 2571:
case 299:
case 1998:
case 2921:
case 2810:
case 1371:
case 2697:
case 1543:
case 739:
case 2163:
case 1211:
case 1344:
case 1926:
case 1008:
case 3477:
case 660:
case 200:
case 3076:
case 3043:
case 573:
case 3508:
case 3192:
case 1107:
case 3872:
case 3256:
case 1798:
case 1953:
case 2437:
case 1300:
case 3862:
case 3909:
case 2893:
case 1566:
case 1361:
case 2146:
case 2980:
case 2173:
case 3467:
case 2448:
case 2616:
case 3818:
case 2832:
case 993:
case 4004:
case 1031:
case 784:
case 1174:
case 2366:
case 1894:
case 1585:
case 1611:
case 2297:
case 3623:
case 4067:
case 3589:
case 1599:
case 2500:
case 1726:
case 335:
case 2808:
case 2572:
case 3759:
case 547:
case 3748:
case 982:
case 2922:
case 1703:
case 148:
case 3:
case 2488:
case 349:
case 2186:
case 1413:
case 3737:
case 2345:
case 267:
case 607:
case 226:
case 665:
case 205:
case 1139:
case 1268:
case 312:
case 1049:
case 1181:
case 3225:
case 458:
case 1545:
case 2977:
case 3844:
case 3191:
case 771:
case 1229:
case 1372:
case 3549:
case 740:
case 3045:
case 1630:
case 1350:
case 2889:
case 1903:
case 946:
case 3206:
case 3937:
case 3480:
case 1318:
case 4054:
case 227:
case 2722:
case 3861:
case 3959:
case 3948:
case 2719:
case 2967:
case 633:
case 2175:
case 2518:
case 151:
case 1384:
case 1668:
case 606:
case 3394:
case 1583:
case 625:
case 266:
case 2550:
case 1032:
case 832:
case 4080:
case 546:
case 1647:
case 1866:
case 543:
case 366:
case 1260:
case 1050:
case 1062:
case 2625:
case 2532:
case 1117:
case 614:
case 1638:
case 603:
case 2083:
case 1201:
case 263:
case 1018:
case 16:
case 3550:
case 3904:
case 87:
case 201:
case 661:
case 1084:
case 1405:
case 3740:
case 2206:
case 3094:
case 1453:
case 3889:
case 1715:
case 2800:
case 2861:
case 3722:
case 1393:
case 1885:
case 1670:
case 3967:
case 3719:
case 327:
case 1332:
case 89:
case 3527:
case 212:
case 1247:
case 3704:
case 2045:
case 2135:
case 4088:
case 969:
case 1601:
case 1169:
case 1027:
case 2549:
case 2558:
case 3767:
case 864:
case 3808:
case 235:
case 2606:
case 811:
case 3572:
case 3345:
case 1843:
case 1196:
case 367:
case 439:
case 1498:
case 2:
case 1270:
case 1915:
case 1072:
case 977:
case 1287:
case 2623:
case 1000:
case 3366:
case 2884:
case 596:
case 3500:
case 41:
case 2714:
case 3954:
case 4059:
case 4048:
case 1251:
case 2850:
case 2862:
case 996:
case 3399:
case 3721:
case 2256:
case 178:
case 2788:
case 868:
case 2818:
case 68:
case 577:
case 491:
case 181:
case 1990:
case 3036:
case 3980:
case 3385:
case 3146:
case 2477:
case 2914:
case 2223:
case 2508:
case 1651:
case 997:
case 2872:
case 2076:
case 2133:
case 2656:
case 709:
case 3780:
case 1071:
case 1044:
case 552:
case 1790:
case 976:
case 3921:
case 1913:
case 3544:
case 758:
case 575:
case 3479:
case 3764:
case 320:
case 2699:
case 4017:
case 3153:
case 2685:
case 1661:
case 2243:
case 1475:
case 3941:
case 2420:
case 2847:
case 729:
case 4079:
case 1311:
case 3707:
case 3782:
case 1244:
case 3812:
case 2442:
case 859:
case 493:
case 3829:
case 28:
case 1024:
case 1002:
case 3097:
case 3356:
case 3551:
case 3198:
case 3587:
case 3502:
case 218:
case 2643:
case 1597:
case 3878:
case 1051:
case 1486:
case 3496:
case 2285:
case 1644:
case 2860:
case 2852:
case 2056:
case 2266:
case 2481:
case 1465:
case 3126:
case 3830:
case 1933:
case 3469:
case 3741:
case 3236:
case 1662:
case 2025:
case 3103:
case 35:
case 2979:
case 541:
case 1650:
case 3155:
case 1137:
case 2529:
case 570:
case 1047:
case 3538:
case 2245:
case 2824:
case 10:
case 1473:
case 1618:
case 1446:
case 2683:
case 156:
case 1148:
case 1038:
case 214:
case 2474:
case 3920:
case 3757:
case 3570:
case 1684:
case 2728:
case 941:
case 1070:
case 333:
case 970:
case 1272:
case 3434:
case 958:
case 365:
case 1060:
case 1052:
case 1262:
case 2779:
case 1627:
case 2115:
case 1001:
case 623:
case 2996:
case 237:
case 2645:
case 1378:
case 221:
case 3742:
case 1284:
case 482:
case 509:
case 2006:
case 3294:
case 2928:
case 813:
case 157:
case 3981:
case 2578:
case 2851:
case 558:
case 6:
case 1935:
case 1330:
case 822:
case 2407:
case 2482:
case 1360:
case 1177:
case 3802:
case 1897:
case 3578:
case 1352:
case 2742:
case 945:
case 2939:
case 816:
case 667:
case 4064:
case 3407:
case 3851:
case 3969:
case 3717:
case 2957:
case 1433:
case 1301:
case 939:
case 3530:
case 1649:
case 2434:
case 1658:
case 605:
case 265:
case 626:
case 539:
case 2306:
case 1030:
case 1986:
case 1232:
case 1140:
case 1610:
case 3115:
case 3779:
case 1293:
case 3283:
case 4007:
case 2694:
case 1347:
case 2757:
case 2325:
case 3474:
case 2920:
case 3441:
case 1765:
case 1338:
case 631:
case 3728:
case 443:
case 2739:
case 2942:
case 1104:
case 984:
case 13:
case 4074:
case 153:
case 793:
case 206:
case 1249:
case 889:
case 1068:
case 3529:
case 3025:
case 584:
case 1167:
case 303:
case 3683:
case 1012:
case 314:
case 1029:
case 3245:
case 1632:
case 361:
case 429:
case 3266:
case 3056:
case 3860:
case 1963:
case 3439:
case 1302:
case 142:
case 971:
case 988:
case 1556:
case 1351:
case 1435:
case 3457:
case 476:
case 2830:
case 699:
case 4039:
case 588:
case 600:
case 2551:
case 260:
case 2356:
case 1289:
case 1746:
case 1773:
case 3299:
case 4057:
case 1121:
case 3285:
case 2496:
case 187:
case 2502:
case 2964:
case 2878:
case 3676:
case 3643:
case 497:
case 2323:
case 2707:
case 2524:
case 679:
case 186:
case 3666:
case 3847:
case 3420:
case 2868:
case 51:
case 1154:
case 38:
case 3442:
case 991:
case 2812:
case 3838:
case 1763:
case 2829:
case 3023:
case 1011:
case 2479:
case 1523:
case 3511:
case 1324:
case 746:
case 1946:
case 3870:
case 3190:
case 2989:
case 3353:
case 1855:
case 50:
case 2462:
case 3837:
case 1483:
case 2116:
case 170:
case 860:
case 2390:
case 1309:
case 2418:
case 2646:
case 2263:
case 1111:
case 451:
case 2053:
case 3123:
case 2484:
case 781:
case 2005:
case 2509:
case 1590:
case 3580:
case 1641:
case 2804:
case 3744:
case 1207:
case 778:
case 4093:
case 3771:
case 2908:
case 2026:
case 480:
case 3156:
case 190:
case 3449:
case 2822:
case 992:
case 2273:
case 3700:
case 2313:
case 2427:
case 1664:
case 3410:
case 1388:
case 3398:
case 3326:
case 4058:
case 4049:
case 1274:
case 2197:
case 3971:
case 2877:
case 2663:
case 4010:
case 3692:
case 1021:
case 3013:
case 1682:
case 1607:
case 2098:
case 3633:
case 308:
case 592:
case 2400:
case 1337:
case 76:
case 3962:
case 3809:
case 2675:
case 1359:
case 3918:
case 444:
case 1004:
case 2286:
case 2932:
case 3984:
case 322:
case 794:
case 154:
case 4031:
case 1994:
case 1239:
case 807:
case 2265:
case 3291:
case 2055:
case 3772:
case 1620:
case 1281:
case 1466:
case 2003:
case 304:
case 1257:
case 1112:
case 4095:
case 313:
case 3235:
case 2854:
case 2793:
case 72:
case 755:
case 195:
case 2958:
case 1178:
case 2686:
case 806:
case 825:
case 217:
case 3762:
case 3927:
case 1476:
case 2315:
case 3540:
case 1681:
case 1019:
case 1022:
case 833:
case 2444:
case 1639:
case 1826:
case 3814:
case 615:
case 2471:
case 362:
case 3784:
case 3635:
case 1242:
case 1130:
case 774:
case 1657:
case 3972:
case 1628:
case 748:
case 3444:
case 262:
case 1217:
case 1160:
case 3665:
case 1377:
case 919:
case 987:
case 780:
case 2519:
case 2635:
case 836:
case 3732:
case 2106:
case 0:
case 3958:
case 1319:
case 140:
case 803:
case 1322:
case 3793:
case 2408:
case 3275:
case 2762:
case 3315:
case 1813:
case 2750:
case 3686:
case 2888:
case 498:
case 389:
case 1945:
case 1340:
case 317:
case 2772:
case 3265:
case 1617:
case 2125:
case 1147:
case 2567:
case 3548:
case 1037:
case 1228:
case 1555:
case 2235:
case 3854:
case 1048:
case 1269:
case 3537:
case 3710:
case 2355:
case 2950:
case 2504:
case 1679:
case 2727:
case 2431:
case 837:
case 2489:
case 1745:
case 1296:
case 481:
case 191:
case 3461:
case 3286:
case 3993:
case 1890:
case 1367:
case 3880:
case 1983:
case 3197:
case 3877:
case 1102:
case 1187:
case 2521:
case 1088:
case 42:
case 208:
case 2633:
case 1766:
case 785:
case 2692:
case 2013:
case 1151:
case 3819:
case 2458:
case 1634:
case 2449:
case 3795:
case 1014:
case 3908:
case 2156:
case 1976:
case 1526:
case 2700:
case 1799:
case 3313:
case 3789:
case 3509:
case 53:
case 2580:
case 3053:
case 1494:
case 4050:
case 2123:
case 3484:
case 2292:
case 3804:
case 46:
case 4018:
case 3931:
case 3462:
case 1776:
case 818:
case 3450:
case 2353:
case 2305:
case 2900:
case 2554:
case 1999:
case 184:
case 3390:
case 3995:
case 93:
case 2859:
case 3867:
case 3673:
case 1124:
case 553:
case 2493:
case 1839:
case 1626:
case 3614:
case 1452:
case 382:
case 690:
case 935:
case 3034:
case 523:
case 2997:
case 3171:
case 3891:
case 3144:
case 718:
case 1392:
case 3723:
case 3307:
case 3382:
case 2254:
case 9:
case 949:
case 3835:
case 1333:
case 512:
case 2108:
case 2592:
case 465:
case 844:
case 2334:
case 2406:
case 549:
case 1253:
case 2533:
case 912:
case 2621:
case 2007:
case 3688:
case 609:
case 2886:
case 3563:
case 346:
case 1820:
case 1447:
case 2425:
case 3374:
case 501:
case 3214:
case 1226:
case 3341:
case 243:
case 670:
case 433:
case 1136:
case 14:
case 1046:
case 2189:
case 45:
case 425:
case 885:
case 1298:
case 3609:
case 901:
case 2680:
case 2221:
case 721:
case 3586:
case 373:
case 1729:
case 2677:
case 1596:
case 2863:
case 737:
case 1402:
case 1487:
case 3339:
case 695:
case 2328:
case 132:
case 1086:
case 3096:
case 1768:
case 1930:
case 3833:
case 2369:
case 3357:
case 1203:
case 2619:
case 1255:
case 3906:
case 2039:
case 460:
case 2149:
case 2640:
case 1978:
case 1864:
case 530:
case 2591:
case 3259:
case 3127:
case 252:
case 1968:
case 1730:
case 2423:
case 714:
case 1841:
case 1194:
case 3925:
case 1929:
case 1075:
case 1912:
case 393:
case 3342:
case 4016:
case 675:
case 2379:
case 848:
case 1655:
case 3162:
case 736:
case 3416:
case 2873:
case 2846:
case 3648:
case 3659:
case 3118:
case 2042:
case 3706:
case 880:
case 1517:
case 2240:
case 2150:
case 3222:
case 2017:
case 3020:
case 2118:
case 3132:
case 111:
case 579:
case 1520:
case 1215:
case 2659:
case 3667:
case 3846:
case 2079:
case 3317:
case 2320:
case 2925:
case 2184:
case 1411:
case 396:
case 75:
case 19:
case 293:
case 706:
case 3039:
case 2906:
case 102:
case 3158:
case 894:
case 1770:
case 3456:
case 707:
case 3622:
case 3057:
case 1539:
case 2259:
case 352:
case 2127:
case 1386:
case 3640:
case 1035:
case 4056:
case 2497:
case 17:
case 2381:
case 273:
case 640:
case 3863:
case 1960:
case 2357:
case 1901:
case 765:
case 999:
case 2725:
case 376:
case 3074:
case 898:
case 4025:
case 3189:
case 1199:
case 2609:
case 1690:
case 2161:
case 1213:
case 1574:
case 403:
case 1373:
case 1185:
case 414:
case 461:
case 2756:
case 1924:
case 2341:
case 2573:
case 1817:
case 2923:
case 850:
case 1468:
case 1787:
case 1702:
case 3797:
case 931:
case 343:
case 1412:
case 3654:
case 926:
case 3334:
case 905:
case 3533:
case 3406:
case 3108:
case 1507:
case 1582:
case 567:
case 881:
case 2956:
case 2688:
case 369:
case 2563:
case 168:
case 1033:
case 1896:
case 3280:
case 247:
case 3082:
case 3007:
case 1290:
case 2209:
case 1564:
case 3997:
case 2034:
case 645:
case 1987:
case 1902:
case 2891:
case 282:
case 526:
case 639:
case 505:
case 2835:
case 2723:
case 2307:
case 2382:
case 3344:
case 738:
case 915:
case 1223:
case 3576:
case 3008:
case 1477:
case 3926:
case 1133:
case 1043:
case 1076:
case 1872:
case 3107:
case 1508:
case 846:
case 932:
case 1656:
case 2224:
case 298:
case 2845:
case 3705:
case 3174:
case 1595:
case 1623:
case 2202:
case 413:
case 1336:
case 1531:
case 2251:
case 1714:
case 3599:
case 882:
case 3726:
case 3798:
case 1066:
case 278:
case 2403:
case 1862:
case 3905:
case 3300:
case 2389:
case 3953:
case 847:
case 3566:
case 1909:
case 344:
case 2624:
case 1818:
case 3049:
case 2247:
case 1510:
case 112:
case 2128:
case 1191:
case 2426:
case 717:
case 893:
case 459:
case 2652:
case 789:
case 3181:
case 1871:
case 1225:
case 1558:
case 2238:
case 3010:
case 2601:
case 123:
case 255:
case 3157:
case 2169:
case 3630:
case 22:
case 380:
case 2349:
case 2358:
case 149:
case 3755:
case 2915:
case 1:
case 2498:
case 3703:
case 510:
case 2196:
case 1421:
case 1737:
case 2843:
case 2876:
case 3413:
case 3120:
case 2062:
case 351:
case 54:
case 2252:
case 1532:
case 2050:
case 1394:
case 3668:
case 1593:
case 734:
case 3032:
case 60:
case 3230:
case 3612:
case 4090:
case 1083:
case 2201:
case 1454:
case 2638:
case 3093:
case 3350:
case 1937:
case 2453:
case 2084:
case 2405:
case 94:
case 3318:
case 716:
case 2594:
case 2393:
case 1094:
case 3453:
case 713:
case 897:
case 1831:
case 3084:
case 3899:
case 2362:
case 2955:
case 1967:
case 3594:
case 1175:
case 3670:
case 1383:
case 1895:
case 1584:
case 722:
case 1409:
case 2490:
case 3332:
case 131:
case 127:
case 3866:
case 876:
case 3252:
case 3117:
case 4053:
case 251:
case 2120:
case 3050:
case 3260:
case 2612:
case 2836:
case 1562:
case 2142:
case 1550:
case 3018:
case 36:
case 1572:
case 3358:
case 280:
case 4026:
case 1808:
case 167:
case 3196:
case 2413:
case 877:
case 438:
case 1345:
case 762:
case 1488:
case 3310:
case 2755:
case 3270:
case 1165:
case 3426:
case 1977:
case 2181:
case 2545:
case 2049:
case 2058:
case 3128:
case 896:
case 968:
case 2372:
case 2229:
case 3027:
case 3238:
case 2212:
case 3169:
case 1721:
case 1399:
case 2905:
case 564:
case 3713:
case 2953:
case 3389:
case 686:
case 3536:
case 3331:
case 869:
case 2798:
case 1832:
case 381:
case 3624:
case 1616:
case 1385:
case 3990:
case 1893:
case 1036:
case 2361:
case 2566:
case 3000:
case 4055:
case 1297:
case 2089:
case 2611:
case 2894:
case 2141:
case 2585:
case 2031:
case 59:
case 2726:
case 1500:
case 964:
case 911:
case 3790:
case 524:
case 3044:
case 642:
case 1780:
case 1810:
case 3913:
case 1921:
case 489:
case 398:
case 502:
case 1376:
case 417:
case 199:
case 1343:
case 3845:
case 759:
case 100:
case 843:
case 1163:
case 902:
case 3687:
case 3602:
case 1697:
case 2543:
case 2107:
case 2182:
case 350:
case 3651:
case 57:
case 619:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759597202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,];
var gg_b = "1759597202/";

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

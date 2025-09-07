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
case 2334:
case 3019:
case 57:
case 45:
case 726:
case 711:
case 1640:
case 63:
case 1973:
case 838:
case 1791:
case 214:
case 1100:
case 2927:
case 3879:
case 1434:
case 1265:
case 1776:
case 1131:
case 567:
case 64:
case 3008:
case 39:
case 2748:
case 3766:
case 1334:
case 1927:
case 946:
case 822:
case 2115:
case 2776:
case 2337:
case 2242:
case 3906:
case 2100:
case 2054:
case 1750:
case 1626:
case 3498:
case 434:
case 1658:
case 343:
case 3489:
case 3521:
case 3147:
case 2893:
case 642:
case 3229:
case 3192:
case 392:
case 518:
case 3505:
case 3153:
case 3732:
case 3144:
case 3825:
case 801:
case 3604:
case 3398:
case 329:
case 3389:
case 444:
case 333:
case 572:
case 2078:
case 2724:
case 2205:
case 940:
case 984:
case 2210:
case 1481:
case 3413:
case 1529:
case 259:
case 3170:
case 1449:
case 166:
case 2046:
case 1221:
case 2818:
case 2991:
case 991:
case 2773:
case 1809:
case 2538:
case 1210:
case 1349:
case 59:
case 930:
case 1046:
case 1538:
case 1184:
case 2809:
case 159:
case 879:
case 720:
case 2727:
case 505:
case 2623:
case 3664:
case 2575:
case 3282:
case 3799:
case 2035:
case 735:
case 2020:
case 619:
case 1871:
case 3422:
case 2455:
case 3139:
case 673:
case 318:
case 1575:
case 3594:
case 703:
case 1623:
case 909:
case 4072:
case 529:
case 757:
case 1674:
case 1455:
case 1035:
case 2896:
case 1020:
case 1707:
case 2485:
case 1490:
case 2518:
case 928:
case 1509:
case 993:
case 1829:
case 3726:
case 738:
case 1201:
case 954:
case 3186:
case 1995:
case 942:
case 1967:
case 2980:
case 3044:
case 3433:
case 3053:
case 2390:
case 508:
case 2829:
case 189:
case 4034:
case 1964:
case 1518:
case 3293:
case 1838:
case 2385:
case 315:
case 748:
case 1230:
case 2995:
case 1704:
case 1225:
case 3842:
case 2154:
case 636:
case 2000:
case 1279:
case 2666:
case 1596:
case 197:
case 590:
case 2351:
case 3865:
case 3676:
case 1451:
case 93:
case 2603:
case 576:
case 3691:
case 1031:
case 1666:
case 2279:
case 1015:
case 1143:
case 1351:
case 1154:
case 204:
case 370:
case 3561:
case 646:
case 2031:
case 1603:
case 2157:
case 3579:
case 1120:
case 3296:
case 1135:
case 3271:
case 3336:
case 2907:
case 3459:
case 2261:
case 713:
case 1688:
case 2417:
case 1904:
case 2569:
case 1780:
case 2767:
case 262:
case 1699:
case 973:
case 3359:
case 3723:
case 427:
case 2120:
case 4049:
case 3056:
case 4081:
case 2882:
case 1795:
case 1314:
case 2699:
case 162:
case 1261:
case 1111:
case 3183:
case 3774:
case 3028:
case 2688:
case 515:
case 1417:
case 3436:
case 640:
case 3345:
case 16:
case 1084:
case 1663:
case 1472:
case 835:
case 3362:
case 2593:
case 1146:
case 1606:
case 2372:
case 3627:
case 1552:
case 1060:
case 1593:
case 482:
case 3940:
case 3624:
case 570:
case 26:
case 3712:
case 3810:
case 2552:
case 803:
case 630:
case 3445:
case 1087:
case 845:
case 3462:
case 2606:
case 3654:
case 1397:
case 506:
case 1731:
case 62:
case 2148:
case 893:
case 1342:
case 3643:
case 1619:
case 2176:
case 736:
case 2700:
case 926:
case 911:
case 854:
case 842:
case 1148:
case 746:
case 601:
case 2494:
case 771:
case 51:
case 832:
case 4025:
case 4030:
case 1497:
case 1802:
case 1700:
case 1191:
case 1984:
case 1394:
case 1522:
case 1442:
case 2513:
case 3928:
case 3744:
case 2150:
case 3956:
case 2004:
case 424:
case 3885:
case 83:
case 1004:
case 398:
case 1833:
case 1513:
case 84:
case 648:
case 3747:
case 3429:
case 265:
case 622:
case 1686:
case 3241:
case 3792:
case 1321:
case 306:
case 1405:
case 2787:
case 281:
case 1760:
case 2281:
case 2931:
case 1845:
case 2598:
case 1410:
case 1124:
case 1173:
case 2310:
case 1900:
case 2249:
case 740:
case 784:
case 207:
case 2421:
case 2541:
case 3163:
case 1281:
case 1931:
case 730:
case 1598:
case 2410:
case 2668:
case 2124:
case 31:
case 2405:
case 153:
case 2760:
case 2862:
case 1541:
case 2784:
case 194:
case 3106:
case 378:
case 935:
case 3537:
case 1516:
case 1080:
case 3382:
case 549:
case 1255:
case 3992:
case 312:
case 3482:
case 3728:
case 957:
case 2836:
case 1067:
case 539:
case 3635:
case 1859:
case 3188:
case 3814:
case 461:
case 754:
case 1644:
case 4042:
case 1935:
case 1285:
case 3352:
case 3:
case 836:
case 2330:
case 2107:
case 999:
case 793:
case 728:
case 1430:
case 2692:
case 1050:
case 375:
case 1401:
case 1330:
case 2653:
case 3126:
case 948:
case 3572:
case 2935:
case 2285:
case 1889:
case 3032:
case 3786:
case 2562:
case 3393:
case 4094:
case 2545:
case 3983:
case 846:
case 1743:
case 1076:
case 3631:
case 1946:
case 1754:
case 1379:
case 364:
case 50:
case 3469:
case 1978:
case 3517:
case 626:
case 611:
case 1816:
case 3837:
case 3202:
case 901:
case 3834:
case 463:
case 3140:
case 2946:
case 3003:
case 2536:
case 74:
case 1559:
case 3066:
case 516:
case 719:
case 2502:
case 3088:
case 2164:
case 2214:
case 2628:
case 840:
case 3855:
case 2720:
case 5:
case 1217:
case 1167:
case 455:
case 3174:
case 3783:
case 3396:
case 1735:
case 1361:
case 2639:
case 3177:
case 1720:
case 1822:
case 268:
case 3471:
case 3496:
case 1502:
case 1628:
case 1164:
case 1214:
case 979:
case 3551:
case 4010:
case 1180:
case 2167:
case 3259:
case 830:
case 4005:
case 437:
case 2461:
case 3768:
case 2746:
case 3418:
case 2272:
case 3585:
case 510:
case 3908:
case 564:
case 825:
case 2024:
case 2778:
case 3063:
case 809:
case 3409:
case 1272:
case 3590:
case 217:
case 1943:
case 1954:
case 620:
case 1778:
case 1533:
case 1813:
case 3881:
case 3919:
case 316:
case 2957:
case 2268:
case 1109:
case 2884:
case 236:
case 1681:
case 851:
case 171:
case 914:
case 883:
case 3586:
case 3278:
case 3005:
case 337:
case 2745:
case 146:
case 4088:
case 3021:
case 1118:
case 136:
case 347:
case 2649:
case 3951:
case 1745:
case 1412:
case 1860:
case 271:
case 2887:
case 355:
case 1477:
case 3395:
case 1171:
case 2423:
case 689:
case 1374:
case 2543:
case 3464:
case 3856:
case 2082:
case 2655:
case 421:
case 3828:
case 416:
case 3990:
case 4006:
case 2477:
case 3380:
case 765:
case 2171:
case 1377:
case 3211:
case 1933:
case 3161:
case 40:
case 3364:
case 3717:
case 1736:
case 2557:
case 3519:
case 2323:
case 2759:
case 1655:
case 3839:
case 240:
case 1440:
case 2637:
case 3179:
case 1800:
case 284:
case 707:
case 1945:
case 2831:
case 1075:
case 2219:
case 2169:
case 184:
case 3243:
case 2815:
case 140:
case 3065:
case 1637:
case 1340:
case 2962:
case 191:
case 2075:
case 1219:
case 2634:
case 555:
case 1831:
case 2945:
case 1458:
case 3101:
case 2029:
case 109:
case 3689:
case 3407:
case 3892:
case 1426:
case 3304:
case 3698:
case 1578:
case 4066:
case 2326:
case 3641:
case 2959:
case 1936:
case 1286:
case 2546:
case 3568:
case 2038:
case 2458:
case 1029:
case 410:
case 817:
case 3785:
case 1959:
case 2286:
case 2936:
case 464:
case 2152:
case 3404:
case 1326:
case 2239:
case 2989:
case 2399:
case 783:
case 41:
case 132:
case 1228:
case 3061:
case 751:
case 2531:
case 2998:
case 989:
case 4012:
case 2811:
case 254:
case 1835:
case 2941:
case 2096:
case 1488:
case 1820:
case 585:
case 2228:
case 1531:
case 3883:
case 1998:
case 193:
case 1388:
case 1239:
case 1989:
case 2515:
case 1941:
case 2488:
case 154:
case 1672:
case 2306:
case 3937:
case 4074:
case 1916:
case 3373:
case 1713:
case 14:
case 614:
case 3547:
case 1846:
case 2009:
case 1018:
case 3749:
case 361:
case 1270:
case 2713:
case 3553:
case 2878:
case 997:
case 558:
case 24:
case 3105:
case 1306:
case 2916:
case 3260:
case 3110:
case 865:
case 3473:
case 2406:
case 2270:
case 3284:
case 3934:
case 2846:
case 3868:
case 1009:
case 3645:
case 1798:
case 2253:
case 2432:
case 2052:
case 1789:
case 3030:
case 2244:
case 3025:
case 3886:
case 173:
case 2922:
case 3570:
case 219:
case 1129:
case 1292:
case 3955:
case 1332:
case 2584:
case 1247:
case 1093:
case 1052:
case 2789:
case 385:
case 1560:
case 273:
case 1253:
case 2247:
case 1138:
case 2093:
case 4040:
case 2741:
case 3001:
case 3528:
case 1303:
case 3448:
case 498:
case 2466:
case 3602:
case 3556:
case 3808:
case 3197:
case 659:
case 3215:
case 3165:
case 1651:
case 3200:
case 561:
case 3734:
case 2069:
case 1716:
case 2857:
case 3391:
case 3539:
case 3376:
case 3981:
case 717:
case 4026:
case 1854:
case 1403:
case 2366:
case 3348:
case 3079:
case 449:
case 1843:
case 2827:
case 3979:
case 1610:
case 2507:
case 1605:
case 3049:
case 1824:
case 1145:
case 4056:
case 3346:
case 2368:
case 226:
case 211:
case 760:
case 1504:
case 4028:
case 3806:
case 1507:
case 2873:
case 3558:
case 2718:
case 2605:
case 3172:
case 2468:
case 3446:
case 2610:
case 1368:
case 126:
case 974:
case 4039:
case 2824:
case 2145:
case 1621:
case 3901:
case 431:
case 382:
case 2383:
case 1022:
case 2993:
case 1223:
case 569:
case 3761:
case 1274:
case 1483:
case 2159:
case 1136:
case 651:
case 3117:
case 1952:
case 3888:
case 3114:
case 1771:
case 2223:
case 3055:
case 490:
case 1383:
case 1796:
case 2483:
case 3280:
case 2136:
case 2274:
case 965:
case 4092:
case 2564:
case 1308:
case 527:
case 3034:
case 2102:
case 3523:
case 2876:
case 4047:
case 1769:
case 2665:
case 862:
case 2408:
case 415:
case 3779:
case 1876:
case 1918:
case 1564:
case 1240:
case 2909:
case 2308:
case 2694:
case 220:
case 3151:
case 1408:
case 3457:
case 1642:
case 2769:
case 1580:
case 2595:
case 582:
case 2258:
case 1386:
case 1793:
case 235:
case 1996:
case 3185:
case 877:
case 470:
case 550:
case 1041:
case 2850:
case 3512:
case 1089:
case 369:
case 1098:
case 3638:
case 2133:
case 2996:
case 1226:
case 86:
case 2971:
case 2386:
case 2793:
case 135:
case 1486:
case 1850:
case 2089:
case 1439:
case 3874:
case 1895:
case 3503:
case 2122:
case 122:
case 2576:
case 1929:
case 299:
case 814:
case 2864:
case 951:
case 2591:
case 2938:
case 2288:
case 2339:
case 3823:
case 3017:
case 1548:
case 2867:
case 1880:
case 2439:
case 47:
case 55:
case 1591:
case 1938:
case 1339:
case 2328:
case 199:
case 4068:
case 1576:
case 2929:
case 3224:
case 3460:
case 2263:
case 3710:
case 3532:
case 101:
case 187:
case 3965:
case 3997:
case 3484:
case 2470:
case 472:
case 3942:
case 3387:
case 3273:
case 4083:
case 386:
case 3384:
case 12:
case 1062:
case 201:
case 534:
case 1045:
case 3994:
case 3181:
case 1113:
case 2370:
case 3721:
case 1470:
case 1206:
case 3360:
case 704:
case 287:
case 2601:
case 2189:
case 1804:
case 1453:
case 3693:
case 4008:
case 1444:
case 49:
case 2198:
case 2141:
case 2729:
case 859:
case 3090:
case 4019:
case 2033:
case 2392:
case 1198:
case 2347:
case 2804:
case 1189:
case 1141:
case 279:
case 3085:
case 3652:
case 1447:
case 1492:
case 1807:
case 2738:
case 3858:
case 3431:
case 681:
case 1775:
case 1116:
case 3137:
case 2679:
case 3051:
case 1002:
case 694:
case 3921:
case 1203:
case 352:
case 3669:
case 3905:
case 586:
case 334:
case 3910:
case 3248:
case 3599:
case 2203:
case 3797:
case 3276:
case 3134:
case 76:
case 3291:
case 3742:
case 492:
case 342:
case 354:
case 519:
case 3071:
case 1636:
case 3617:
case 7:
case 3096:
case 2659:
case 605:
case 3239:
case 328:
case 3388:
case 1883:
case 2636:
case 494:
case 3722:
case 3515:
case 3500:
case 481:
case 3009:
case 2121:
case 33:
case 2427:
case 4064:
case 3363:
case 2592:
case 2937:
case 2287:
case 1260:
case 2373:
case 1544:
case 1327:
case 2781:
case 3270:
case 1324:
case 161:
case 2662:
case 2645:
case 3018:
case 1547:
case 2934:
case 2284:
case 2868:
case 3846:
case 996:
case 34:
case 4095:
case 2553:
case 4067:
case 3878:
case 2424:
case 823:
case 898:
case 2544:
case 3916:
case 2110:
case 69:
case 970:
case 3463:
case 319:
case 2570:
case 1001:
case 2955:
case 3432:
case 2450:
case 3560:
case 2886:
case 2025:
case 3685:
case 702:
case 3093:
case 2350:
case 3292:
case 3741:
case 1955:
case 2001:
case 285:
case 532:
case 373:
case 3690:
case 3789:
case 4007:
case 2491:
case 941:
case 1079:
case 3843:
case 2197:
case 2215:
case 2142:
case 465:
case 124:
case 1348:
case 1194:
case 3913:
case 1981:
case 1376:
case 2602:
case 2528:
case 1819:
case 2808:
case 1539:
case 3716:
case 67:
case 1737:
case 2556:
case 158:
case 3175:
case 1734:
case 1491:
case 1215:
case 2819:
case 54:
case 3857:
case 2194:
case 2981:
case 716:
case 1528:
case 4004:
case 1448:
case 3762:
case 2586:
case 591:
case 1951:
case 237:
case 3268:
case 2246:
case 8:
case 2772:
case 1005:
case 3649:
case 137:
case 371:
case 255:
case 1586:
case 1772:
case 1613:
case 3681:
case 247:
case 2021:
case 99:
case 3109:
case 3312:
case 1519:
case 1839:
case 3082:
case 3474:
case 188:
case 1364:
case 1467:
case 864:
case 2828:
case 1380:
case 2714:
case 905:
case 943:
case 3423:
case 2235:
case 3543:
case 929:
case 2211:
case 2495:
case 798:
case 4024:
case 1508:
case 2839:
case 933:
case 1622:
case 615:
case 1464:
case 509:
case 3171:
case 1395:
case 3831:
case 706:
case 4050:
case 2751:
case 2094:
case 3169:
case 3219:
case 676:
case 1065:
case 536:
case 97:
case 690:
case 1042:
case 3208:
case 546:
case 895:
case 2583:
case 1094:
case 571:
case 3702:
case 3800:
case 2065:
case 1179:
case 2616:
case 3520:
case 2243:
case 2972:
case 802:
case 778:
case 4048:
case 1404:
case 1130:
case 1844:
case 325:
case 2641:
case 3959:
case 2689:
case 2407:
case 1785:
case 1914:
case 712:
case 816:
case 2307:
case 972:
case 3578:
case 1847:
case 2914:
case 2568:
case 3546:
case 1407:
case 1689:
case 163:
case 3458:
case 2155:
case 1877:
case 2503:
case 3122:
case 2014:
case 3339:
case 2823:
case 338:
case 466:
case 3288:
case 1671:
case 3456:
case 2874:
case 3548:
case 2566:
case 3880:
case 3428:
case 3782:
case 1017:
case 3036:
case 1014:
case 459:
case 579:
case 3356:
case 3929:
case 1155:
case 2877:
case 322:
case 1503:
case 4078:
case 3059:
case 1566:
case 89:
case 2696:
case 2017:
case 348:
case 2671:
case 715:
case 1874:
case 3439:
case 2072:
case 2997:
case 2942:
case 2387:
case 3206:
case 1994:
case 1181:
case 2705:
case 2618:
case 2460:
case 1487:
case 805:
case 3062:
case 910:
case 186:
case 4011:
case 3550:
case 2532:
case 32:
case 1942:
case 4035:
case 2360:
case 4020:
case 2149:
case 2721:
case 2227:
case 387:
case 1997:
case 770:
case 1965:
case 301:
case 286:
case 1532:
case 2181:
case 1460:
case 2487:
case 2609:
case 3344:
case 1858:
case 1506:
case 3807:
case 3527:
case 538:
case 2090:
case 1085:
case 1652:
case 3141:
case 4054:
case 15:
case 313:
case 1250:
case 678:
case 1563:
case 708:
case 3630:
case 1090:
case 3625:
case 379:
case 3573:
case 995:
case 2506:
case 2563:
case 4057:
case 902:
case 3444:
case 460:
case 3232:
case 3982:
case 548:
case 3347:
case 2921:
case 1588:
case 1291:
case 1797:
case 1765:
case 790:
case 2669:
case 244:
case 252:
case 741:
case 3679:
case 2300:
case 2431:
case 2051:
case 1905:
case 776:
case 2794:
case 2315:
case 2797:
case 2331:
case 2276:
case 1921:
case 587:
case 2134:
case 3002:
case 2742:
case 1051:
case 1315:
case 501:
case 818:
case 234:
case 61:
case 1137:
case 2910:
case 3116:
case 2248:
case 3266:
case 1300:
case 2081:
case 664:
case 1478:
case 3827:
case 3709:
case 1806:
case 3507:
case 2478:
case 3504:
case 815:
case 79:
case 3013:
case 462:
case 3873:
case 3718:
case 3605:
case 2806:
case 1378:
case 520:
case 127:
case 2761:
case 705:
case 2295:
case 2117:
case 1930:
case 2267:
case 743:
case 949:
case 3159:
case 4084:
case 250:
case 1888:
case 1540:
case 1264:
case 1114:
case 1267:
case 1295:
case 3952:
case 1411:
case 1320:
case 870:
case 3223:
case 729:
case 998:
case 2420:
case 2264:
case 2114:
case 2540:
case 939:
case 3022:
case 2055:
case 1901:
case 733:
case 182:
case 3848:
case 2866:
case 1354:
case 3580:
case 3016:
case 1457:
case 511:
case 3408:
case 2574:
case 1343:
case 2443:
case 3891:
case 3876:
case 1779:
case 2803:
case 2454:
case 2457:
case 1574:
case 767:
case 2151:
case 3419:
case 1866:
case 616:
case 2037:
case 2779:
case 1803:
case 1675:
case 1454:
case 489:
case 3308:
case 3694:
case 3909:
case 269:
case 1629:
case 2725:
case 2730:
case 3486:
case 912:
case 841:
case 978:
case 890:
case 3226:
case 1701:
case 2961:
case 3098:
case 345:
case 1638:
case 2629:
case 169:
case 1725:
case 1204:
case 256:
case 1512:
case 3041:
case 0:
case 4000:
case 602:
case 831:
case 4015:
case 3793:
case 2207:
case 3704:
case 115:
case 2186:
case 3230:
case 562:
case 2053:
case 3838:
case 2923:
case 2650:
case 420:
case 1977:
case 4016:
case 1053:
case 1433:
case 688:
case 215:
case 1252:
case 1186:
case 1726:
case 2333:
case 1758:
case 3509:
case 3707:
case 2047:
case 1923:
case 2912:
case 3603:
case 196:
case 1302:
case 1119:
case 1269:
case 2676:
case 1894:
case 1561:
case 457:
case 577:
case 170:
case 4041:
case 3000:
case 2897:
case 3351:
case 3143:
case 882:
case 3666:
case 3015:
case 1691:
case 3031:
case 2561:
case 2894:
case 296:
case 2119:
case 1648:
case 304:
case 647:
case 3571:
case 1842:
case 56:
case 1774:
case 1183:
case 3314:
case 3767:
case 3795:
case 208:
case 3569:
case 2777:
case 2579:
case 1723:
case 3907:
case 2271:
case 1039:
case 108:
case 2056:
case 411:
case 426:
case 2436:
case 2774:
case 2028:
case 1336:
case 1271:
case 3764:
case 3135:
case 1296:
case 3414:
case 1579:
case 1673:
case 241:
case 1805:
case 3087:
case 1530:
case 276:
case 1810:
case 1712:
case 1070:
case 377:
case 2345:
case 3593:
case 744:
case 2209:
case 1624:
case 1218:
case 2821:
case 3060:
case 2530:
case 176:
case 924:
case 2810:
case 3178:
case 2673:
case 2805:
case 958:
case 3146:
case 2168:
case 2624:
case 3472:
case 190:
case 36:
case 504:
case 1906:
case 727:
case 314:
case 937:
case 661:
case 3927:
case 1703:
case 1275:
case 3334:
case 4033:
case 2019:
case 3057:
case 3869:
case 1416:
case 3776:
case 1316:
case 3337:
case 3242:
case 3791:
case 413:
case 3924:
case 2008:
case 3748:
case 947:
case 2147:
case 1988:
case 133:
case 782:
case 2441:
case 1389:
case 2521:
case 1999:
case 292:
case 750:
case 2498:
case 205:
case 1830:
case 1732:
case 1153:
case 1341:
case 2489:
case 1505:
case 2604:
case 2398:
case 1192:
case 1229:
case 2988:
case 1441:
case 2153:
case 1607:
case 1489:
case 2825:
case 105:
case 2510:
case 3852:
case 886:
case 2144:
case 3612:
case 1313:
case 3381:
case 3184:
case 3046:
case 2706:
case 3724:
case 4059:
case 167:
case 2413:
case 560:
case 3948:
case 2966:
case 448:
case 27:
case 624:
case 3809:
case 1068:
case 499:
case 438:
case 3727:
case 1170:
case 2313:
case 3481:
case 85:
case 1763:
case 3020:
case 2597:
case 172:
case 2799:
case 3035:
case 1667:
case 2680:
case 3674:
case 487:
case 2788:
case 2083:
case 2128:
case 1322:
case 1861:
case 769:
case 1594:
case 401:
case 3623:
case 2156:
case 3950:
case 1788:
case 1422:
case 3896:
case 1565:
case 2667:
case 685:
case 1282:
case 3677:
case 1128:
case 3011:
case 756:
case 1083:
case 2322:
case 42:
case 2594:
case 3355:
case 3647:
case 4075:
case 430:
case 3898:
case 1786:
case 383:
case 1393:
case 3889:
case 3290:
case 3841:
case 2493:
case 650:
case 3325:
case 2:
case 1158:
case 3330:
case 2393:
case 175:
case 3562:
case 855:
case 3104:
case 2032:
case 3050:
case 491:
case 3545:
case 3425:
case 2983:
case 847:
case 568:
case 1352:
case 2126:
case 3644:
case 1493:
case 1600:
case 264:
case 1615:
case 1066:
case 3559:
case 2517:
case 3757:
case 2837:
case 627:
case 1834:
case 761:
case 1514:
case 1140:
case 1369:
case 2631:
case 1719:
case 888:
case 68:
case 3978:
case 425:
case 2834:
case 2140:
case 4029:
case 2514:
case 2968:
case 3946:
case 110:
case 1631:
case 517:
case 3743:
case 2003:
case 669:
case 2236:
case 446:
case 2174:
case 1551:
case 471:
case 583:
case 3214:
case 3502:
case 2088:
case 3656:
case 3822:
case 1471:
case 1177:
case 3361:
case 2551:
case 1396:
case 785:
case 1986:
case 1371:
case 3167:
case 368:
case 2471:
case 202:
case 2177:
case 3639:
case 95:
case 1088:
case 1123:
case 121:
case 2112:
case 1318:
case 1919:
case 980:
case 20:
case 2908:
case 2063:
case 944:
case 3533:
case 3778:
case 3813:
case 3954:
case 3746:
case 2768:
case 2006:
case 1590:
case 2585:
case 1409:
case 2881:
case 1245:
case 1262:
case 221:
case 2318:
case 3957:
case 1585:
case 2590:
case 1660:
case 3522:
case 1657:
case 3715:
case 2555:
case 1375:
case 100:
case 3700:
case 3802:
case 927:
case 581:
case 2643:
case 3960:
case 2166:
case 2216:
case 3148:
case 374:
case 200:
case 98:
case 419:
case 1103:
case 3619:
case 1643:
case 3494:
case 1216:
case 3342:
case 686:
case 3365:
case 3731:
case 755:
case 1792:
case 2438:
case 861:
case 3686:
case 2058:
case 1429:
case 2928:
case 1298:
case 3833:
case 3513:
case 2329:
case 1581:
case 139:
case 2753:
case 2744:
case 3004:
case 2132:
case 950:
case 3007:
case 2241:
case 1885:
case 365:
case 1438:
case 1744:
case 298:
case 2289:
case 2939:
case 1928:
case 788:
case 239:
case 1753:
case 2581:
case 1329:
case 1106:
case 3249:
case 680:
case 1678:
case 3310:
case 1872:
case 1770:
case 3305:
case 644:
case 307:
case 353:
case 432:
case 3589:
case 1646:
case 3931:
case 3281:
case 1163:
case 3598:
case 3915:
case 2872:
case 442:
case 3900:
case 2106:
case 3173:
case 428:
case 493:
case 2646:
case 3668:
case 3124:
case 2213:
case 21:
case 3405:
case 3760:
case 634:
case 3862:
case 1188:
case 763:
case 1023:
case 1814:
case 2611:
case 969:
case 212:
case 1199:
case 1222:
case 4018:
case 2992:
case 3095:
case 3067:
case 3859:
case 1635:
case 278:
case 2537:
case 1756:
case 1953:
case 1077:
case 2199:
case 43:
case 3255:
case 1992:
case 2023:
case 1947:
case 2188:
case 1382:
case 956:
case 2953:
case 2728:
case 2074:
case 2482:
case 3080:
case 1739:
case 2635:
case 3836:
case 2620:
case 2756:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757221202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,];
var gg_b = "1757221202/";

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

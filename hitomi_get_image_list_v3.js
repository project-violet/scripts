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
case 1024:
case 3083:
case 1154:
case 288:
case 2723:
case 3552:
case 1953:
case 1384:
case 289:
case 3527:
case 4013:
case 1286:
case 1971:
case 1116:
case 454:
case 1296:
case 457:
case 722:
case 810:
case 2832:
case 745:
case 4031:
case 860:
case 2993:
case 1118:
case 3754:
case 816:
case 2983:
case 3413:
case 866:
case 2214:
case 2519:
case 59:
case 2354:
case 1640:
case 962:
case 1670:
case 2826:
case 2237:
case 912:
case 1170:
case 499:
case 2109:
case 248:
case 1647:
case 3831:
case 1042:
case 1005:
case 1147:
case 145:
case 2573:
case 3449:
case 2828:
case 201:
case 3777:
case 1309:
case 1735:
case 1506:
case 1369:
case 3740:
case 3770:
case 2071:
case 3201:
case 2041:
case 34:
case 3261:
case 1413:
case 2860:
case 3618:
case 1879:
case 1754:
case 3298:
case 2592:
case 1849:
case 40:
case 2784:
case 1431:
case 1083:
case 3154:
case 1718:
case 3296:
case 253:
case 1520:
case 3116:
case 870:
case 3286:
case 3616:
case 3941:
case 1777:
case 3309:
case 2407:
case 2942:
case 972:
case 509:
case 648:
case 532:
case 508:
case 3506:
case 3735:
case 412:
case 3170:
case 3065:
case 999:
case 462:
case 3640:
case 601:
case 3591:
case 998:
case 3072:
case 3147:
case 3177:
case 3508:
case 3677:
case 3647:
case 191:
case 1859:
case 3203:
case 1744:
case 251:
case 3136:
case 730:
case 2464:
case 1006:
case 1738:
case 2051:
case 849:
case 3138:
case 1091:
case 1433:
case 2889:
case 3943:
case 2899:
case 1542:
case 1736:
case 3973:
case 1572:
case 1505:
case 888:
case 193:
case 1750:
case 136:
case 344:
case 2952:
case 2804:
case 1115:
case 1295:
case 347:
case 603:
case 543:
case 2019:
case 1722:
case 1524:
case 3387:
case 3715:
case 3397:
case 3052:
case 95:
case 2787:
case 3593:
case 1992:
case 2315:
case 2255:
case 2499:
case 676:
case 1833:
case 3390:
case 404:
case 2780:
case 3150:
case 3433:
case 1638:
case 455:
case 3081:
case 3321:
case 1138:
case 1951:
case 2278:
case 1973:
case 3572:
case 1644:
case 1943:
case 4011:
case 3542:
case 2812:
case 2344:
case 184:
case 3774:
case 1636:
case 3066:
case 559:
case 744:
case 2991:
case 2968:
case 3738:
case 3411:
case 2981:
case 1157:
case 1027:
case 1052:
case 45:
case 1122:
case 3992:
case 1622:
case 1919:
case 1715:
case 1583:
case 1387:
case 2412:
case 203:
case 1020:
case 907:
case 1150:
case 3833:
case 520:
case 1380:
case 1650:
case 610:
case 2180:
case 784:
case 2571:
case 2690:
case 597:
case 2541:
case 276:
case 3811:
case 2350:
case 2680:
case 2210:
case 2187:
case 853:
case 3757:
case 2697:
case 3459:
case 147:
case 666:
case 2197:
case 2092:
case 2357:
case 3115:
case 2553:
case 180:
case 1273:
case 838:
case 2364:
case 2133:
case 2633:
case 3046:
case 815:
case 3764:
case 3076:
case 1421:
case 2281:
case 1664:
case 2611:
case 2976:
case 1164:
case 3890:
case 2111:
case 3887:
case 2208:
case 3575:
case 252:
case 1530:
case 1104:
case 617:
case 1556:
case 3010:
case 1689:
case 1359:
case 334:
case 1199:
case 4090:
case 3725:
case 596:
case 3929:
case 1699:
case 277:
case 2095:
case 3112:
case 274:
case 3292:
case 1189:
case 3017:
case 2598:
case 2325:
case 2659:
case 2389:
case 3995:
case 906:
case 1558:
case 2415:
case 1625:
case 413:
case 2029:
case 2596:
case 323:
case 2910:
case 1821:
case 900:
case 524:
case 2586:
case 3333:
case 875:
case 1034:
case 2733:
case 3421:
case 1562:
case 723:
case 3903:
case 1502:
case 1048:
case 1887:
case 1078:
case 1545:
case 3604:
case 2003:
case 380:
case 3273:
case 1764:
case 1076:
case 737:
case 2438:
case 3311:
case 652:
case 913:
case 1497:
case 217:
case 1985:
case 214:
case 1789:
case 87:
case 1487:
case 2252:
case 3055:
case 3125:
case 1995:
case 3821:
case 674:
case 677:
case 123:
case 2838:
case 346:
case 3556:
case 2450:
case 340:
case 3189:
case 2759:
case 2874:
case 3699:
case 473:
case 1282:
case 1929:
case 1612:
case 137:
case 3689:
case 3219:
case 1494:
case 3331:
case 956:
case 1058:
case 67:
case 1128:
case 1628:
case 2731:
case 2418:
case 2529:
case 3988:
case 2096:
case 874:
case 2086:
case 3271:
case 2416:
case 3986:
case 718:
case 769:
case 2001:
case 1056:
case 1126:
case 3996:
case 721:
case 735:
case 2847:
case 3728:
case 2877:
case 2713:
case 3253:
case 3313:
case 1809:
case 1632:
case 3239:
case 3167:
case 471:
case 2205:
case 3578:
case 3045:
case 1894:
case 379:
case 3548:
case 3002:
case 215:
case 2818:
case 1030:
case 239:
case 3823:
case 3607:
case 392:
case 2477:
case 3349:
case 119:
case 1707:
case 168:
case 135:
case 3379:
case 2749:
case 1409:
case 2975:
case 169:
case 2332:
case 2816:
case 961:
case 2440:
case 911:
case 852:
case 3576:
case 1469:
case 814:
case 3056:
case 3126:
case 2835:
case 3869:
case 1996:
case 33:
case 1271:
case 864:
case 4084:
case 2131:
case 1253:
case 66:
case 1517:
case 1313:
case 61:
case 1988:
case 1423:
case 2914:
case 1961:
case 52:
case 1998:
case 3555:
case 2113:
case 779:
case 450:
case 275:
case 3707:
case 321:
case 335:
case 1349:
case 2930:
case 3760:
case 429:
case 1576:
case 542:
case 2563:
case 2367:
case 1732:
case 428:
case 639:
case 3700:
case 2937:
case 615:
case 3132:
case 971:
case 3037:
case 1534:
case 1239:
case 3632:
case 2149:
case 178:
case 3884:
case 2179:
case 3030:
case 3894:
case 179:
case 1075:
case 1002:
case 2649:
case 1578:
case 1045:
case 4034:
case 2608:
case 3817:
case 1509:
case 3773:
case 1366:
case 2885:
case 2343:
case 706:
case 2577:
case 2211:
case 842:
case 3810:
case 2191:
case 2168:
case 1306:
case 2106:
case 1368:
case 831:
case 3434:
case 2233:
case 980:
case 1308:
case 773:
case 1643:
case 986:
case 1855:
case 1974:
case 690:
case 3846:
case 3410:
case 363:
case 517:
case 2516:
case 2259:
case 696:
case 2554:
case 2319:
case 423:
case 1782:
case 1225:
case 2997:
case 2485:
case 3719:
case 2429:
case 1584:
case 2015:
case 1289:
case 4010:
case 3087:
case 3848:
case 3182:
case 434:
case 437:
case 3320:
case 940:
case 624:
case 627:
case 3834:
case 3021:
case 2768:
case 3151:
case 3391:
case 1434:
case 3651:
case 3643:
case 1448:
case 3974:
case 3173:
case 3308:
case 763:
case 3509:
case 1773:
case 3936:
case 713:
case 1743:
case 2074:
case 2403:
case 3306:
case 1446:
case 2706:
case 2921:
case 1810:
case 1476:
case 3569:
case 3594:
case 1182:
case 3299:
case 3119:
case 1692:
case 290:
case 3922:
case 3619:
case 1192:
case 1212:
case 1682:
case 1352:
case 373:
case 296:
case 1834:
case 440:
case 937:
case 1320:
case 233:
case 163:
case 306:
case 1846:
case 2863:
case 1410:
case 2057:
case 3782:
case 3225:
case 227:
case 2803:
case 224:
case 2652:
case 300:
case 1830:
case 93:
case 3597:
case 3153:
case 57:
case 1084:
case 3845:
case 1458:
case 3383:
case 1324:
case 3875:
case 3954:
case 3641:
case 3916:
case 711:
case 3580:
case 4:
case 1456:
case 156:
case 2401:
case 1741:
case 1771:
case 2016:
case 2498:
case 1753:
case 150:
case 2624:
case 3918:
case 1414:
case 2461:
case 1228:
case 1365:
case 3940:
case 921:
case 3970:
case 1437:
case 919:
case 2896:
case 1935:
case 1521:
case 3462:
case 918:
case 1342:
case 3947:
case 1430:
case 3977:
case 242:
case 129:
case 3402:
case 3445:
case 1858:
case 231:
case 225:
case 2898:
case 4062:
case 2888:
case 2142:
case 756:
case 2077:
case 1069:
case 1856:
case 4002:
case 3639:
case 2665:
case 4045:
case 2040:
case 2070:
case 3139:
case 890:
case 3741:
case 2550:
case 356:
case 2341:
case 771:
case 4058:
case 2522:
case 2683:
case 2557:
case 2213:
case 2183:
case 1875:
case 1802:
case 1845:
case 3458:
case 1023:
case 3084:
case 3830:
case 1393:
case 2724:
case 43:
case 1597:
case 1141:
case 1862:
case 1171:
case 1590:
case 3226:
case 4037:
case 1207:
case 2574:
case 2279:
case 565:
case 1267:
case 1139:
case 1200:
case 539:
case 2538:
case 3232:
case 979:
case 515:
case 2035:
case 3856:
case 1639:
case 1462:
case 625:
case 2765:
case 3739:
case 631:
case 469:
case 1970:
case 2339:
case 421:
case 435:
case 2909:
case 2772:
case 2705:
case 1445:
case 2742:
case 2536:
case 1402:
case 3342:
case 361:
case 1947:
case 2599:
case 1872:
case 1805:
case 1161:
case 3928:
case 3031:
case 2589:
case 2614:
case 1198:
case 826:
case 1218:
case 1424:
case 3483:
case 1688:
case 2386:
case 1101:
case 985:
case 2396:
case 1601:
case 1216:
case 1356:
case 1686:
case 894:
case 705:
case 3926:
case 4083:
case 1196:
case 1696:
case 2301:
case 1186:
case 2028:
case 2931:
case 3761:
case 2158:
case 2398:
case 1314:
case 1254:
case 2388:
case 2658:
case 354:
case 3932:
case 2762:
case 1533:
case 2949:
case 1472:
case 1405:
case 98:
case 232:
case 3893:
case 2775:
case 2979:
case 209:
case 3345:
case 1960:
case 1824:
case 3883:
case 3302:
case 3375:
case 162:
case 241:
case 1247:
case 70:
case 2209:
case 2504:
case 112:
case 105:
case 922:
case 1270:
case 859:
case 491:
case 1240:
case 2032:
case 2137:
case 695:
case 2269:
case 3235:
case 588:
case 30:
case 3186:
case 3696:
case 2756:
case 2441:
case 799:
case 2471:
case 3216:
case 3356:
case 3686:
case 1798:
case 1013:
case 1761:
case 2714:
case 3424:
case 1483:
case 2512:
case 1928:
case 3198:
case 3872:
case 44:
case 1493:
case 3842:
case 3188:
case 2839:
case 3865:
case 3101:
case 485:
case 312:
case 1079:
case 305:
case 4065:
case 2602:
case 2645:
case 3247:
case 198:
case 3277:
case 883:
case 609:
case 4042:
case 1235:
case 4072:
case 2000:
case 608:
case 754:
case 991:
case 757:
case 641:
case 1362:
case 1375:
case 3907:
case 2730:
case 3824:
case 1883:
case 1893:
case 2819:
case 2473:
case 2004:
case 3579:
case 155:
case 2443:
case 3346:
case 808:
case 3238:
case 841:
case 3663:
case 2221:
case 1033:
case 487:
case 1481:
case 2734:
case 1491:
case 3852:
case 3603:
case 2748:
case 3103:
case 3348:
case 226:
case 1806:
case 4052:
case 2528:
case 3989:
case 3222:
case 2025:
case 3513:
case 503:
case 1912:
case 643:
case 1866:
case 2843:
case 4020:
case 1129:
case 307:
case 2717:
case 304:
case 2873:
case 993:
case 1685:
case 1355:
case 576:
case 1195:
case 447:
case 3420:
case 1868:
case 444:
case 1891:
case 570:
case 3491:
case 1163:
case 1334:
case 2176:
case 4066:
case 2911:
case 283:
case 1964:
case 1663:
case 3468:
case 984:
case 3033:
case 2646:
case 1348:
case 1103:
case 3408:
case 1904:
case 1852:
case 355:
case 4081:
case 2648:
case 2892:
case 1549:
case 2678:
case 2507:
case 4091:
case 2178:
case 2303:
case 2882:
case 2634:
case 4008:
case 3011:
case 3406:
case 3763:
case 2500:
case 2134:
case 1346:
case 1729:
case 1925:
case 2297:
case 1531:
case 3215:
case 2117:
case 2287:
case 3185:
case 1452:
case 3808:
case 3695:
case 626:
case 1427:
case 430:
case 2290:
case 3891:
case 2610:
case 2280:
case 947:
case 694:
case 35:
case 510:
case 1250:
case 560:
case 104:
case 1795:
case 3866:
case 3129:
case 1513:
case 2482:
case 1257:
case 1989:
case 1785:
case 1222:
case 2362:
case 605:
case 612:
case 272:
case 1730:
case 308:
case 58:
case 2302:
case 2893:
case 3745:
case 309:
case 3702:
case 3504:
case 1645:
case 3209:
case 2049:
case 299:
case 1675:
case 1602:
case 2079:
case 1102:
case 1175:
case 1060:
case 1145:
case 1007:
case 298:
case 341:
case 3269:
case 3637:
case 1162:
case 1871:
case 54:
case 3589:
case 3284:
case 1223:
case 3599:
case 3294:
case 60:
case 3114:
case 2493:
case 804:
case 3396:
case 2786:
case 3026:
case 2796:
case 1839:
case 3301:
case 1471:
case 488:
case 2926:
case 3361:
case 953:
case 3658:
case 3931:
case 3028:
case 1714:
case 3525:
case 2788:
case 3398:
case 3007:
case 3102:
case 3175:
case 3602:
case 212:
case 3645:
case 3853:
case 3000:
case 672:
case 3841:
case 949:
case 1137:
case 699:
case 3439:
case 2900:
case 2967:
case 855:
case 109:
case 1775:
case 1979:
case 1702:
case 2472:
case 1949:
case 2405:
case 1745:
case 108:
case 2824:
case 3730:
case 2196:
case 3441:
case 2686:
case 2356:
case 3471:
case 2216:
case 988:
case 2186:
case 741:
case 3756:
case 989:
case 1525:
case 1398:
case 1158:
case 2254:
case 453:
case 2161:
case 1114:
case 3758:
case 2872:
case 2805:
case 2188:
case 1599:
case 1294:
case 2842:
case 4041:
case 2688:
case 2218:
case 1913:
case 2198:
case 2661:
case 85:
case 1589:
case 1284:
case 3223:
case 708:
case 39:
case 654:
case 2101:
case 1386:
case 2865:
case 2601:
case 1026:
case 1396:
case 3710:
case 3851:
case 2310:
case 3843:
case 207:
case 466:
case 3655:
case 903:
case 2999:
case 3873:
case 3717:
case 1492:
case 2222:
case 3419:
case 3528:
case 2785:
case 3395:
case 2257:
case 2513:
case 3025:
case 1482:
case 783:
case 2729:
case 1297:
case 2925:
case 397:
case 2427:
case 976:
case 394:
case 3329:
case 854:
case 1110:
case 1290:
case 857:
case 2420:
case 1280:
case 1678:
case 2244:
case 1648:
case 2274:
case 1148:
case 1560:
case 1882:
case 1178:
case 3819:
case 2238:
case 3746:
case 3532:
case 872:
case 1634:
case 2376:
case 899:
case 1146:
case 1646:
case 655:
case 183:
case 1911:
case 2964:
case 358:
case 2348:
case 2852:
case 2236:
case 194:
case 3287:
case 197:
case 2695:
case 2808:
case 3297:
case 2355:
case 2685:
case 2215:
case 80:
case 758:
case 4092:
case 3280:
case 343:
case 607:
case 2881:
case 759:
case 3110:
case 2891:
case 1851:
case 910:
case 1710:
case 25:
case 2806:
case 2912:
case 2629:
case 1528:
case 1717:
case 120:
case 3492:
case 2059:
case 2129:
case 1655:
case 1385:
case 403:
case 3911:
case 1734:
case 2481:
case 862:
case 1221:
case 3646:
case 794:
case 2491:
case 584:
case 587:
case 159:
case 1748:
case 1778:
case 158:
case 3507:
case 3303:
case 1819:
case 3148:
case 3648:
case 255:
case 1004:
case 1473:
case 3567:
case 3363:
case 3134:
case 1776:
case 2763:
case 3933:
case 914:
case 2410:
case 2846:
case 967:
case 1620:
case 1127:
case 2915:
case 1022:
case 3485:
case 1152:
case 3987:
case 1382:
case 3319:
case 3554:
case 3259:
case 3495:
case 127:
case 1627:
case 3752:
case 606:
case 2848:
case 3518:
case 2352:
case 3429:
case 2212:
case 2327:
case 2192:
case 2080:
case 600:
case 2834:
case 4095:
case 477:
case 4085:
case 540:
case 3547:
case 3343:
case 3108:
case 3577:
case 1403:
case 3608:
case 1766:
case 2773:
case 2817:
case 3168:
case 3691:
case 3540:
case 3570:
case 452:
case 3351:
case 2476:
case 3211:
case 3668:
case 2810:
case 3191:
case 1038:
case 2434:
case 1781:
case 3606:
case 3233:
case 1768:
case 3106:
case 3666:
case 2448:
case 1708:
case 733:
case 3166:
case 3829:
case 586:
case 2289:
case 1015:
case 2584:
case 2922:
case 613:
case 856:
case 1518:
case 2299:
case 2455:
case 2594:
case 1727:
case 1752:
case 2119:
case 850:
case 273:
case 977:
case 1720:
case 3620:
case 464:
case 1980:
case 1516:
case 417:
case 3803:
case 1554:
case 1259:
case 327:
case 1987:
case 2792:
case 3022:
case 1485:
case 1997:
case 2225:
case 2782:
case 3392:
case 3057:
case 2368:
case 1106:
case 2651:
case 3791:
case 3781:
case 4003:
case 1166:
case 1829:
case 2308:
case 2173:
case 4063:
case 2643:
case 3036:
case 3708:
case 3403:
case 1608:
case 3766:
case 1373:
case 1547:
case 2366:
case 1885:
case 3463:
case 1668:
case 3038:
case 3535:
case 2569:
case 1570:
case 2306:
case 811:
case 519:
case 3896:
case 1765:
case 535:
case 568:
case 2462:
case 1339:
case 569:
case 2970:
case 2475:
case 2402:
case 1742:
case 1772:
case 2977:
case 342:
case 3105:
case 3172:
case 271:
case 2207:
case 3861:
case 3142:
case 3077:
case 2260:
case 3888:
case 1279:
case 1574:
case 325:
case 3605:
case 1249:
case 3898:
case 661:
case 3040:
case 2267:
case 2639:
case 465:
case 2587:
case 3793:
case 2653:
case 2845:
case 656:
case 3783:
case 2393:
case 3018:
case 382:
case 2023:
case 2580:
case 2862:
case 650:
case 4088:
case 2641:
case 4061:
case 1550:
case 3401:
case 3016:
case 1371:
case 1683:
case 3624:
case 3488:
case 1984:
case 1193:
case 3461:
case 41:
case 46:
case 1994:
case 1183:
case 1672:
case 1898:
case 1642:
case 131:
case 1047:
case 72:
case 2814:
case 1861:
case 578:
case 2856:
case 1665:
case 938:
case 965:
case 1165:
case 1070:
case 902:
case 1801:
case 939:
case 671:
case 2365:
case 1886:
case 782:
case 3969:
case 2372:
case 228:
case 2858:
case 229:
case 3536:
case 3742:
case 256:
case 2456:
case 12:
case 2771:
case 5:
case 2741:
case 3994:
case 1124:
case 250:
case 96:
case 3693:
case 1923:
case 3522:
case 91:
case 3213:
case 1624:
case 3353:
case 1515:
case 3724:
case 806:
case 2094:
case 2458:
case 1793:
case 1486:
case 742:
case 990:
case 1838:
case 2010:
case 1450:
case 3095:
case 377:
case 3325:
case 1844:
case 933:
case 3085:
case 3561:
case 573:
case 2929:
case 2282:
case 3399:
case 114:
case 3415:
case 3029:
case 506:
case 3659:
case 3389:
case 1836:
case 1227:
case 646:
case 1252:
case 3917:
case 1312:
case 223:
case 927:
case 924:
case 3304:
case 1822:
case 1438:
case 878:
case 3206:
case 2076:
case 767:
case 764:
case 680:
case 2880:
case 714:
case 3268:
case 717:
case 3611:
case 3976:
case 892:
case 3281:
case 2034:
case 3815:
case 2078:
case 2048:
case 364:
case 3252:
case 1917:
case 3312:
case 367:
case 2055:
case 317:
case 1159:
case 4050:
case 2625:
case 2712:
case 1415:
case 2821:
case 427:
case 3220:
case 752:
case 634:
case 1586:
case 1501:
case 3450:
case 3838:
case 246:
case 3457:
case 3422:
case 1085:
case 2514:
case 2359:
case 2689:
case 1598:
case 3844:
case 496:
case 1095:
case 3759:
case 623:
case 3955:
case 819:
case 1611:
case 4074:
case 2664:
case 835:
case 4044:
case 868:
case 3733:
case 821:
case 1291:
case 2537:
case 2333:
case 3436:
case 2604:
case 152:
case 3822:
case 3857:
case 1304:
case 2243:
case 3003:
case 3444:
case 2251:
case 1364:
case 4036:
case 1934:
case 1633:
case 668:
case 2600:
case 2062:
case 2100:
case 2239:
case 3265:
case 2534:
case 315:
case 302:
case 2607:
case 2578:
case 2045:
case 2107:
case 3272:
case 3205:
case 2075:
case 2002:
case 2548:
case 279:
case 3242:
case 1360:
case 3749:
case 3902:
case 3975:
case 1503:
case 2349:
case 292:
case 3477:
case 3962:
case 2546:
case 528:
case 2576:
case 442:
case 3470:
case 1937:
case 511:
case 3440:
case 3816:
case 4016:
case 2961:
case 2988:
case 1613:
case 3418:
case 63:
case 2331:
case 2:
case 42:
case 1293:
case 2998:
case 550:
case 31:
case 834:
case 1956:
case 4054:
case 3326:
case 36:
case 1835:
case 2510:
case 3840:
case 4018:
case 3870:
case 3001:
case 775:
case 2241:
case 3595:
case 3098:
case 2517:
case 2253:
case 1958:
case 3061:
case 3088:
case 3877:
case 268:
case 1447:
case 3930:
case 1902:
case 1975:
case 3307:
case 3360:
case 1945:
case 218:
case 2409:
case 1749:
case 1470:
case 679:
case 3435:
case 1962:
case 925:
case 931:
case 571:
case 2632:
case 2132:
case 880:
case 692:
case 2037:
case 3679:
case 165:
case 1242:
case 138:
case 71:
case 1272:
case 3649:
case 3149:
case 2884:
case 2030:
case 886:
case 115:
case 982:
case 1840:
case 1416:
case 2869:
case 2056:
case 1061:
case 3631:
case 3958:
case 1595:
case 1454:
case 92:
case 2058:
case 3283:
case 846:
case 2628:
case 739:
case 16:
case 1096:
case 715:
case 702:
case 765:
case 738:
case 1039:
case 645:
case 562:
case 2635:
case 884:
case 441:
case 3237:
case 3826:
case 2135:
case 505:
case 887:
case 1275:
case 1202:
case 349:
case 3609:
case 348:
case 753:
case 3230:
case 3828:
case 1407:
case 2813:
case 1460:
case 2777:
case 3543:
case 1905:
case 1972:
case 2449:
case 3377:
case 3573:
case 1335:
case 408:
case 1400:
case 2740:
case 2770:
case 409:
case 1965:
case 3340:
case 1769:
case 3370:
case 3432:
case 3318:
case 2093:
case 2527:
case 2083:
case 2431:
case 50:
case 3426:
case 847:
case 844:
case 481:
case 4028:
case 1867:
case 3832:
case 2413:
case 1860:
case 3983:
case 1924:
case 3354:
case 3214:
case 1592:
case 3184:
case 2849:
case 1053:
case 3993:
case 2754:
case 3694:
case 3709:
case 2566:
case 1543:
case 3460:
case 101:
case 3407:
case 28:
case 572:
case 495:
case 3467:
case 2369:
case 3400:
case 1237:
case 599:
case 789:
case 2591:
case 598:
case 2568:
case 788:
case 3262:
case 3039:
case 2677:
case 4067:
case 222:
case 1230:
case 2147:
case 2005:
case 1609:
case 3245:
case 2042:
case 3275:
case 3202:
case 149:
case 1256:
case 701:
case 24:
case 3071:
case 3041:
case 3867:
case 2118:
case 3053:
case 1993:
case 1428:
case 3623:
case 1214:
case 2618:
case 3582:
case 1983:
case 2288:
case 3924:
case 188:
case 1723:
case 2024:
case 3794:
case 189:
case 2953:
case 1318:
case 2971:
case 981:
case 2941:
case 557:
case 749:
case 830:
case 2116:
case 1690:
case 1571:
case 1180:
case 1210:
case 1680:
case 3864:
case 1082:
case 1697:
case 1187:
case 3019:
case 1092:
case 1322:
case 3927:
case 3787:
case 2397:
case 2122:
case 3499:
case 3255:
case 2157:
case 2027:
case 2583:
case 3797:
case 1412:
case 2657:
case 55:
case 2919:
case 2715:
case 3780:
case 2390:
case 420:
case 366:
case 2020:
case 3790:
case 630:
case 4025:
case 351:
case 3825:
case 776:
case 2203:
case 3043:
case 3404:
case 458:
case 1991:
case 3051:
case 770:
case 3121:
case 1981:
case 1276:
case 3464:
case 3621:
case 1906:
case 1721:
case 2138:
case 2951:
case 555:
case 4064:
case 1248:
case 2943:
case 1278:
case 2973:
case 2144:
case 2174:
case 110:
case 1489:
case 2982:
case 2229:
case 1797:
case 3412:
case 1255:
case 1315:
case 1787:
case 116:
case 647:
case 303:
case 1780:
case 2833:
case 920:
case 376:
case 3190:
case 1864:
case 751:
case 994:
case 3210:
case 3350:
case 3571:
case 3180:
case 4012:
case 2459:
case 3687:
case 3092:
case 3357:
case 3217:
case 1952:
case 2722:
case 1019:
case 3697:
case 230:
case 3906:
case 3721:
case 3539:
case 3234:
case 766:
case 88:
case 716:
case 3248:
case 3908:
case 2066:
case 3344:
case 151:
case 3968:
case 2006:
case 959:
case 3981:
case 958:
case 1051:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760648401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,];
var gg_b = "1760648401/";

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

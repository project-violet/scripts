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
case 2478:
case 2457:
case 2831:
case 3305:
case 3370:
case 1504:
case 1174:
case 2548:
case 1746:
case 1413:
case 2018:
case 1097:
case 418:
case 3516:
case 2460:
case 2204:
case 1982:
case 2765:
case 791:
case 3143:
case 1962:
case 3773:
case 3481:
case 3388:
case 2206:
case 1947:
case 3514:
case 3528:
case 3403:
case 2026:
case 2480:
case 416:
case 2075:
case 1357:
case 1378:
case 3806:
case 404:
case 305:
case 3001:
case 1541:
case 2313:
case 3804:
case 51:
case 655:
case 3063:
case 572:
case 3972:
case 1687:
case 3184:
case 1650:
case 1259:
case 993:
case 3166:
case 2710:
case 3231:
case 521:
case 2768:
case 867:
case 3365:
case 1566:
case 1584:
case 2015:
case 2397:
case 879:
case 193:
case 1411:
case 3525:
case 1326:
case 3912:
case 3909:
case 3385:
case 2788:
case 1586:
case 486:
case 3691:
case 2823:
case 2286:
case 444:
case 975:
case 345:
case 2131:
case 2264:
case 3401:
case 2475:
case 3130:
case 1876:
case 2400:
case 2690:
case 2299:
case 1336:
case 1071:
case 1874:
case 457:
case 527:
case 192:
case 1919:
case 2545:
case 1761:
case 2418:
case 2311:
case 2424:
case 1497:
case 2060:
case 1703:
case 3081:
case 1781:
case 1128:
case 1473:
case 1138:
case 3617:
case 3106:
case 1835:
case 2078:
case 2057:
case 1300:
case 3574:
case 58:
case 1013:
case 764:
case 433:
case 1574:
case 1446:
case 3892:
case 1713:
case 2845:
case 266:
case 2698:
case 1617:
case 2301:
case 2408:
case 235:
case 2383:
case 3300:
case 866:
case 3375:
case 3835:
case 1106:
case 1886:
case 3781:
case 1081:
case 526:
case 1864:
case 2954:
case 456:
case 939:
case 2956:
case 1866:
case 458:
case 3116:
case 1884:
case 2760:
case 432:
case 1141:
case 3874:
case 1463:
case 42:
case 1592:
case 55:
case 615:
case 3902:
case 16:
case 2159:
case 1401:
case 1308:
case 145:
case 1691:
case 3336:
case 3071:
case 2225:
case 1483:
case 3876:
case 1130:
case 3599:
case 1120:
case 1909:
case 3326:
case 894:
case 1525:
case 3564:
case 2088:
case 3586:
case 411:
case 2068:
case 3584:
case 2292:
case 3245:
case 209:
case 2410:
case 1365:
case 3324:
case 543:
case 2381:
case 2488:
case 3125:
case 1199:
case 2521:
case 3814:
case 3011:
case 849:
case 1649:
case 1166:
case 503:
case 2622:
case 1184:
case 860:
case 3816:
case 1711:
case 2468:
case 249:
case 2010:
case 2651:
case 520:
case 96:
case 450:
case 417:
case 2848:
case 3687:
case 2540:
case 1972:
case 3763:
case 2145:
case 3471:
case 3667:
case 1221:
case 2531:
case 69:
case 789:
case 3642:
case 1252:
case 105:
case 945:
case 2470:
case 1806:
case 3701:
case 3073:
case 1820:
case 2085:
case 1481:
case 1388:
case 3962:
case 1773:
case 1528:
case 1693:
case 3947:
case 2718:
case 3097:
case 3248:
case 2065:
case 1368:
case 1461:
case 1677:
case 139:
case 1841:
case 2927:
case 3174:
case 1994:
case 2216:
case 685:
case 2734:
case 2736:
case 790:
case 2214:
case 3506:
case 1370:
case 1305:
case 1996:
case 2008:
case 3744:
case 1830:
case 3176:
case 3840:
case 968:
case 2994:
case 1927:
case 3548:
case 1008:
case 2830:
case 1214:
case 2989:
case 3457:
case 698:
case 2528:
case 3821:
case 3026:
case 3133:
case 1238:
case 2481:
case 3785:
case 3852:
case 2773:
case 2820:
case 3206:
case 2461:
case 1937:
case 715:
case 2143:
case 839:
case 3024:
case 3460:
case 2516:
case 1718:
case 403:
case 1632:
case 1848:
case 2804:
case 2806:
case 3220:
case 2252:
case 361:
case 1531:
case 3075:
case 1775:
case 1303:
case 1521:
case 2186:
case 994:
case 1552:
case 1488:
case 1381:
case 3639:
case 517:
case 909:
case 1010:
case 1651:
case 1361:
case 4019:
case 420:
case 550:
case 2184:
case 2711:
case 2240:
case 2166:
case 3373:
case 3121:
case 3788:
case 690:
case 3152:
case 2912:
case 2909:
case 367:
case 3015:
case 785:
case 2843:
case 949:
case 379:
case 1410:
case 52:
case 45:
case 960:
case 109:
case 3140:
case 26:
case 2592:
case 2463:
case 443:
case 3400:
case 1225:
case 3475:
case 845:
case 3690:
case 511:
case 2691:
case 3286:
case 2401:
case 4079:
case 3770:
case 3131:
case 3264:
case 1533:
case 2864:
case 2886:
case 2899:
case 3426:
case 3080:
case 1276:
case 689:
case 3418:
case 1274:
case 3060:
case 2310:
case 1465:
case 2446:
case 2713:
case 558:
case 168:
case 2574:
case 1148:
case 3243:
case 1653:
case 3434:
case 2104:
case 3078:
case 3436:
case 4047:
case 426:
case 1408:
case 4062:
case 135:
case 2300:
case 3383:
case 1078:
case 763:
case 3698:
case 366:
case 3301:
case 2013:
case 3845:
case 2892:
case 3363:
case 2497:
case 755:
case 2543:
case 2607:
case 1418:
case 1424:
case 3465:
case 2761:
case 4094:
case 3533:
case 3276:
case 2825:
case 2703:
case 1299:
case 961:
case 1475:
case 2876:
case 3225:
case 1131:
case 1264:
case 1770:
case 586:
case 3344:
case 1286:
case 3070:
case 892:
case 691:
case 1266:
case 3159:
case 292:
case 2334:
case 557:
case 2324:
case 4072:
case 1397:
case 167:
case 2245:
case 3068:
case 2584:
case 1768:
case 893:
case 2566:
case 1833:
case 495:
case 3088:
case 1788:
case 394:
case 2586:
case 3235:
case 659:
case 349:
case 3361:
case 3468:
case 3651:
case 2259:
case 967:
case 2011:
case 2360:
case 41:
case 2814:
case 2380:
case 2979:
case 1639:
case 1230:
case 3381:
case 3552:
case 504:
case 2642:
case 2530:
case 3695:
case 1629:
case 2135:
case 3470:
case 551:
case 3775:
case 421:
case 2378:
case 2471:
case 2838:
case 1075:
case 161:
case 1000:
case 3540:
case 473:
case 1313:
case 2248:
case 1204:
case 580:
case 2315:
case 3724:
case 1460:
case 1018:
case 1024:
case 1133:
case 1206:
case 2073:
case 1852:
case 2506:
case 3008:
case 516:
case 1123:
case 3228:
case 1371:
case 1478:
case 1036:
case 3216:
case 1034:
case 518:
case 3859:
case 1548:
case 2746:
case 3927:
case 2504:
case 2871:
case 2438:
case 2076:
case 3557:
case 1203:
case 1281:
case 1023:
case 1261:
case 1134:
case 508:
case 2074:
case 2340:
case 1815:
case 2416:
case 3560:
case 2197:
case 2561:
case 3868:
case 3213:
case 2682:
case 2352:
case 2581:
case 1033:
case 3320:
case 2662:
case 4017:
case 3580:
case 2647:
case 1857:
case 1431:
case 191:
case 2942:
case 3306:
case 3995:
case 1505:
case 1175:
case 1100:
case 229:
case 3304:
case 2268:
case 2987:
case 3932:
case 3459:
case 577:
case 2950:
case 3515:
case 997:
case 3110:
case 3922:
case 569:
case 2784:
case 1568:
case 3951:
case 159:
case 540:
case 2766:
case 1939:
case 2270:
case 925:
case 1588:
case 1452:
case 667:
case 2786:
case 1880:
case 2799:
case 1328:
case 3865:
case 1510:
case 1115:
case 438:
case 500:
case 2897:
case 319:
case 3168:
case 522:
case 452:
case 1818:
case 3343:
case 1826:
case 1283:
case 1052:
case 364:
case 2323:
case 2730:
case 255:
case 3808:
case 2583:
case 571:
case 3500:
case 1990:
case 991:
case 3105:
case 855:
case 2435:
case 1836:
case 2563:
case 1834:
case 453:
case 1759:
case 3059:
case 2210:
case 862:
case 2741:
case 3445:
case 661:
case 3656:
case 3366:
case 1565:
case 3518:
case 3524:
case 2811:
case 2907:
case 2016:
case 3399:
case 1325:
case 3364:
case 2208:
case 1244:
case 3386:
case 1585:
case 3654:
case 3998:
case 2285:
case 1423:
case 2544:
case 1875:
case 2038:
case 2476:
case 2474:
case 3297:
case 3953:
case 1748:
case 548:
case 2704:
case 2863:
case 2224:
case 437:
case 1048:
case 2345:
case 2004:
case 3748:
case 1273:
case 3800:
case 2883:
case 2226:
case 3875:
case 2738:
case 3335:
case 885:
case 2181:
case 2728:
case 1526:
case 2236:
case 1654:
case 3244:
case 1386:
case 3180:
case 1364:
case 3433:
case 989:
case 1656:
case 2597:
case 2234:
case 2716:
case 1518:
case 3040:
case 3374:
case 3834:
case 3759:
case 1740:
case 29:
case 1445:
case 2041:
case 2991:
case 2030:
case 2844:
case 501:
case 1731:
case 1170:
case 1105:
case 3990:
case 3376:
case 2612:
case 4067:
case 1721:
case 3826:
case 1188:
case 2200:
case 2609:
case 2275:
case 2464:
case 3052:
case 1752:
case 2486:
case 1885:
case 554:
case 2484:
case 990:
case 570:
case 3818:
case 547:
case 397:
case 5:
case 1168:
case 3263:
case 4087:
case 119:
case 3452:
case 3939:
case 3314:
case 2803:
case 507:
case 919:
case 1110:
case 1515:
case 2861:
case 359:
case 3568:
case 2084:
case 2163:
case 1304:
case 1459:
case 2215:
case 2571:
case 2101:
case 739:
case 3431:
case 3929:
case 3175:
case 2430:
case 3505:
case 1995:
case 1306:
case 1733:
case 1320:
case 1888:
case 2993:
case 1580:
case 2257:
case 2278:
case 3815:
case 1560:
case 1165:
case 2977:
case 1868:
case 2958:
case 189:
case 998:
case 2694:
case 1448:
case 578:
case 3261:
case 3134:
case 1627:
case 2669:
case 4007:
case 2146:
case 666:
case 2359:
case 1557:
case 1108:
case 3203:
case 668:
case 1578:
case 3136:
case 996:
case 1330:
case 3340:
case 3074:
case 1774:
case 2448:
case 985:
case 2870:
case 1406:
case 2805:
case 1776:
case 2578:
case 2108:
case 3076:
case 749:
case 3428:
case 2185:
case 1257:
case 2888:
case 3581:
case 3662:
case 2733:
case 2320:
case 1958:
case 3197:
case 3682:
case 2637:
case 889:
case 2165:
case 3743:
case 1672:
case 2932:
case 645:
case 1215:
case 407:
case 1348:
case 1792:
case 512:
case 1163:
case 2304:
case 2045:
case 2995:
case 3942:
case 1183:
case 1430:
case 1101:
case 3035:
case 66:
case 1571:
case 1803:
case 2271:
case 441:
case 1725:
case 3205:
case 1086:
case 1881:
case 1064:
case 1066:
case 2951:
case 3766:
case 1084:
case 290:
case 2515:
case 3950:
case 2110:
case 2752:
case 3873:
case 1486:
case 3333:
case 4029:
case 2721:
case 1609:
case 768:
case 1499:
case 2168:
case 735:
case 219:
case 766:
case 2343:
case 2865:
case 1466:
case 1955:
case 1484:
case 3619:
case 3210:
case 3602:
case 3492:
case 19:
case 2211:
case 2575:
case 915:
case 3435:
case 2731:
case 2170:
case 2105:
case 524:
case 3730:
case 1844:
case 355:
case 2808:
case 1030:
case 1103:
case 2364:
case 1573:
case 2386:
case 1236:
case 2399:
case 3014:
case 1714:
case 1181:
case 1728:
case 2526:
case 1716:
case 2518:
case 2524:
case 1161:
case 1234:
case 3016:
case 3546:
case 1004:
case 2048:
case 3704:
case 1224:
case 1218:
case 3113:
case 794:
case 1863:
case 2534:
case 2297:
case 1738:
case 1883:
case 1226:
case 709:
case 3706:
case 185:
case 3285:
case 1917:
case 1038:
case 1476:
case 2800:
case 3226:
case 3738:
case 779:
case 1285:
case 484:
case 2157:
case 1706:
case 1704:
case 2392:
case 3345:
case 2748:
case 3863:
case 1474:
case 3218:
case 1016:
case 3597:
case 3161:
case 3443:
case 3716:
case 2246:
case 2160:
case 3573:
case 2585:
case 2180:
case 3103:
case 1014:
case 3236:
case 2836:
case 1583:
case 2376:
case 2031:
case 2990:
case 3030:
case 3844:
case 565:
case 1730:
case 3846:
case 1741:
case 1492:
case 400:
case 538:
case 54:
case 3041:
case 1619:
case 422:
case 2040:
case 675:
case 1563:
case 163:
case 2824:
case 1897:
case 4032:
case 2263:
case 553:
case 3484:
case 897:
case 3466:
case 225:
case 2052:
case 1720:
case 3020:
case 4095:
case 2021:
case 825:
case 3275:
case 471:
case 3612:
case 2283:
case 2568:
case 3084:
case 3861:
case 3949:
case 2860:
case 2421:
case 3099:
case 2314:
case 3803:
case 1799:
case 2588:
case 2452:
case 693:
case 3881:
case 1786:
case 1205:
case 3420:
case 3086:
case 1679:
case 1270:
case 2175:
case 3430:
case 2100:
case 891:
case 692:
case 291:
case 2878:
case 1967:
case 315:
case 962:
case 2440:
case 1987:
case 477:
case 3215:
case 3672:
case 440:
case 50:
case 3163:
case 3441:
case 2745:
case 3792:
case 1813:
case 1197:
case 1561:
case 408:
case 2815:
case 4053:
case 1647:
case 1414:
case 1428:
case 1321:
case 1581:
case 2126:
case 2023:
case 3406:
case 2136:
case 3696:
case 2281:
case 1331:
case 3689:
case 3144:
case 3776:
case 1871:
case 3146:
case 3774:
case 1340:
case 3404:
case 2261:
case 2134:
case 377:
case 2450:
case 9:
case 107:
case 1272:
case 3377:
case 3837:
case 590:
case 3688:
case 954:
case 2862:
case 1952:
case 3393:
case 1921:
case 314:
case 901:
case 1931:
case 3790:
case 2791:
case 3495:
case 4064:
case 3670:
case 212:
case 4084:
case 2102:
case 812:
case 1940:
case 611:
case 3959:
case 1660:
case 1350:
case 3349:
case 2916:
case 633:
case 2879:
case 702:
case 687:
case 2914:
case 1289:
case 2928:
case 231:
case 3247:
case 1678:
case 831:
case 3098:
case 3262:
case 2237:
case 2594:
case 2613:
case 1753:
case 3053:
case 1387:
case 743:
case 346:
case 976:
case 3608:
case 2390:
case 1634:
case 2819:
case 2802:
case 681:
case 2256:
case 4004:
case 2777:
case 1556:
case 3355:
case 2758:
case 237:
case 283:
case 1618:
case 2793:
case 75:
case 3685:
case 1933:
case 4006:
case 742:
case 384:
case 224:
case 3729:
case 1490:
case 824:
case 941:
case 728:
case 2067:
case 1675:
case 2935:
case 101:
case 2087:
case 1732:
case 2992:
case 3945:
case 170:
case 49:
case 3219:
case 300:
case 907:
case 519:
case 1722:
case 322:
case 147:
case 2925:
case 2179:
case 2509:
case 154:
case 4030:
case 3739:
case 3854:
case 2999:
case 2964:
case 455:
case 1854:
case 525:
case 354:
case 1202:
case 2984:
case 1219:
case 3751:
case 2966:
case 940:
case 977:
case 122:
case 1022:
case 253:
case 3307:
case 3722:
case 462:
case 2663:
case 463:
case 84:
case 2353:
case 123:
case 238:
case 1945:
case 24:
case 2502:
case 2172:
case 2491:
case 2398:
case 2742:
case 3029:
case 3795:
case 2601:
case 1095:
case 265:
case 3209:
case 3675:
case 2767:
case 865:
case 3490:
case 171:
case 184:
case 3554:
case 795:
case 1137:
case 2943:
case 908:
case 148:
case 1608:
case 2189:
case 906:
case 146:
case 2644:
case 1498:
case 1391:
case 3636:
case 4014:
case 721:
case 1948:
case 93:
case 378:
case 1282:
case 3753:
case 3367:
case 1247:
case 2395:
case 3798:
case 376:
case 946:
case 106:
case 2681:
case 2562:
case 4076:
case 3289:
case 3680:
case 1349:
case 1156:
case 3660:
case 2707:
case 2322:
case 830:
case 2661:
case 3294:
case 3537:
case 2582:
case 2458:
case 1827:
case 2869:
case 1959:
case 1432:
case 1790:
case 2889:
case 971:
case 591:
case 4025:
case 688:
case 3429:
case 2920:
case 1688:
case 2109:
case 3439:
case 3921:
case 4035:
case 1393:
case 3272:
case 1422:
case 2449:
case 922:
case 177:
case 140:
case 1451:
case 4092:
case 429:
case 1377:
case 2055:
case 900:
case 3847:
case 214:
case 1920:
case 1112:
case 2688:
case 3862:
case 814:
case 2668:
case 2377:
case 269:
case 716:
case 3882:
case 2837:
case 1449:
case 953:
case 3119:
case 3102:
case 695:
case 952:
case 37:
case 938:
case 459:
case 1894:
case 529:
case 3791:
case 2495:
case 965:
case 1091:
case 780:
case 3671:
case 3914:
case 1547:
case 1493:
case 3339:
case 1458:
case 1351:
case 751:
case 2156:
case 1322:
case 1707:
case 3007:
case 3569:
case 1332:
case 1904:
case 3613:
case 3237:
case 3594:
case 2948:
case 2262:
case 3329:
case 3717:
case 1017:
case 2247:
case 331:
case 3819:
case 248:
case 1169:
case 744:
case 2127:
case 382:
case 848:
case 1194:
case 2453:
case 1196:
case 3976:
case 3390:
case 710:
case 1644:
case 2498:
case 1189:
case 3147:
case 284:
case 1812:
case 3162:
case 1093:
case 884:
case 3697:
case 3182:
case 383:
case 2665:
case 2355:
case 1077:
case 14:
case 3992:
case 1502:
case 562:
case 1683:
case 4021:
case 2317:
case 871:
case 2095:
case 2729:
case 165:
case 136:
case 555:
case 1398:
case 1742:
case 2854:
case 3179:
case 4031:
case 1999:
case 3512:
case 3509:
case 3611:
case 3050:
case 2856:
case 1966:
case 2202:
case 822:
case 2610:
case 2:
case 4059:
case 756:
case 353:
case 2307:
case 1611:
case 8:
case 3984:
case 913:
case 3455:
case 3966:
case 3964:
case 3986:
case 1512:
case 1925:
case 1179:
case 2675:
case 1935:
case 3767:
case 2600:
case 2209:
case 3683:
case 2212:
case 620:
case 1067:
case 3491:
case 3398:
case 3742:
case 365:
case 124:
case 3601:
case 787:
case 3519:
case 97:
case 338:
case 34:
case 3172:
case 3787:
case 2732:
case 352:
case 3663:
case 419:
case 3353:
case 1087:
case 1407:
case 711:
case 137:
case 1758:
case 498:
case 3058:
case 496:
case 1673:
case 3812:
case 3809:
case 931:
case 1390:
case 72:
case 2636:
case 2923:
case 3417:
case 3169:
case 1256:
case 1802:
case 182:
case 276:
case 1596:
case 3395:
case 3017:
case 1329:
case 1938:
case 2678:
case 876:
case 2657:
case 1589:
case 131:
case 3332:
case 982:
case 878:
case 1569:
case 2753:
case 1237:
case 1613:
case 3477:
case 3351:
case 3458:
case 2294:
case 330:
case 2537:
case 626:
case 1916:
case 3707:
case 2660:
case 2289:
case 1339:
case 3681:
case 2296:
case 3562:
case 1879:
case 3091:
case 924:
case 3930:
case 642:
case 3896:
case 1791:
case 1442:
case 3889:
case 65:
case 515:
case 1671:
case 1572:
case 1119:
case 1487:
case 1102:
case 490:
case 3894:
case 30:
case 17:
case 4045:
case 113:
case 1882:
case 781:
case 3055:
case 2615:
case 2272:
case 1847:
case 3579:
case 1862:
case 2952:
case 2439:
case 3920:
case 3112:
case 103:
case 1232:
case 2915:
case 3550:
case 373:
case 850:
case 3337:
case 3858:
case 2382:
case 2652:
case 274:
case 1479:
case 2362:
case 3893:
case 3012:
case 321:
case 874:
case 3191:
case 3567:
case 1971:
case 3239:
case 2190:
case 505:
case 3719:
case 3327:
case 3702:
case 95:
case 4010:
case 460:
case 1251:
case 120:
case 1019:
case 942:
case 2640:
case 2249:
case 372:
case 102:
case 2960:
case 2756:
case 1577:
case 741:
case 683:
case 2839:
case 2980:
case 1614:
case 1628:
case 1593:
case 3117:
case 2957:
case 2829:
case 707:
case 3496:
case 4065:
case 3469:
case 2623:
case 3891:
case 1796:
case 7:
case 1517:
case 3096:
case 3944:
case 1789:
case 232:
case 754:
case 3069:
case 858:
case 2934:
case 2553:
case 258:
case 2727:
case 2302:
case 832:
case 38:
case 3094:
case 887:
case 1082:
case 701:
case 3855:
case 833:
case 2737:
case 2924:
case 3177:
case 3507:
case 233:
case 1997:
case 3747:
case 2926:
case 1298:
case 435:
case 1062:
case 126:
case 2633:
case 1973:
case 466:
case 494:
case 211:
case 3817:
case 545:
case 1591:
case 2900:
case 1772:
case 902:
case 327:
case 1692:
case 920:
case 2255:
case 1419:
case 1150:
case 143:
case 82:
case 3290:
case 3409:
case 4005:
case 4070:
case 1079:
case 3354:
case 748:
case 3079:
case 244:
case 1779:
case 857:
case 1149:
case 1684:
case 2910:
case 257:
case 3911:
case 593:
case 3807:
case 343:
case 2151:
case 784:
case 127:
case 467:
case 1963:
case 288:
case 286:
case 195:
case 3167:
case 2898:
case 60:
case 4057:
case 2309:
case 134:
case 3973:
case 1193:
case 3298:
case 2456:
case 1855:
case 328:
case 3082:
case 771:
case 1643:
case 1507:
case 2207:
case 3794:
case 1094:
case 1096:
case 722:
case 4080:
case 3789:
case 1089:
case 3676:
case 1604:
case 3913:
case 2648:
case 2153:
case 3887:
case 218:
case 2832:
case 2372:
case 4018:
case 3867:
case 740:
case 1117:
case 1489:
case 769:
case 1496:
case 1606:
case 3462:
case 1981:
case 934:
case 3593:
case 3628:
case 3447:
case 1849:
case 880:
case 3577:
case 2851:
case 2394:
case 320:
case 1641:
case 3002:
case 1472:
case 2369:
case 665:
case 302:
case 172:
case 11:
case 636:
case 1587:
case 2250:
case 251:
case 3971:
case 638:
case 1191:
case 1567:
case 575:
case 2396:
case 2970:
case 1630:
case 1620:
case 1229:
case 2988:
case 204:
case 1009:
case 2267:
case 708:
case 461:
case 3712:
case 1893:
case 4075:
case 3709:
case 173:
case 1155:
case 1550:
case 3232:
case 3549:
case 1877:
case 1267:
case 2893:
case 2012:
case 221:
case 2009:
case 3652:
case 3362:
case 2620:
case 2229:
case 1988:
case 317:
case 3551:
case 2337:
case 2858:
case 350:
case 2550:
case 957:
case 3532:
case 272:
case 21:
case 1250:
case 4011:
case 988:
case 872:
case 1394:
case 2641:
case 2239:
case 3595:
case 2630:
case 1970:
case 1529:
case 3190:
case 2191:
case 1389:
case 151:
case 3631:
case 70:
case 2903:
case 3980:
case 1054:
case 180:
case 1056:
case 1822:
case 2849:
case 2469:
case 646:
case 118:
case 1648:
case 2494:
case 1153:
case 3277:
case 2604:
case 4073:
case 2489:
case 3978:
case 63:
case 3957:
case 648:
case 1198:
case 3293:
case 2946:
case 3319:
case 28:
case 358:
case 606:
case 3934:
case 2089:
case 3890:
case 753:
case 3598:
case 356:
case 1908:
case 2096:
case 1454:
case 2193:
case 3217:
case 1312:
case 738:
case 834:
case 387:
case 2177:
case 2643:
case 333:
case 1037:
case 1456:
case 3737:
case 2855:
case 1645:
case 188:
case 1132:
case 827:
case 493:
case 2963:
case 2072:
case 1590:
case 3975:
case 951:
case 2983:
case 3900:
case 311:
case 2817:
case 186:
case 2901:
case 144:
case 2779:
case 2664:
case 677:
case 2686:
case 904:
case 3291:
case 4071:
case 3139:
case 669:
case 492:
case 2356:
case 579:
case 999:
case 2684:
case 1910:
case 1122:
case 2149:
case 3151:
case 310:
case 12:
case 2555:
case 3910:
case 950:
case 445:
case 782:
case 594:
case 1139:
case 2142:
case 1900:
case 1129:
case 2635:
case 783:
case 3898:
case 111:
case 25:
case 2187:
case 388:
case 641:
case 1255:
case 3853:
case 2772:
case 2253:
case 828:
case 724:
case 3456:
case 3037:
case 2082:
case 1633:
case 1217:
case 3985:
case 2298:
case 2062:
case 3454:
case 1926:
case 3309:
case 2047:
case 1890:
case 981:
case 2517:
case 566:
case 156:
case 1623:
case 1598:
case 568:
case 4061:
case 1319:
case 1934:
case 2769:
case 1553:
case 3207:
case 132:
case 3895:
case 956:
case 1829:
case 1957:
case 2867:
case 1978:
case 932:
case 958:
case 3153:
case 439:
case 2558:
case 380:
case 2850:
case 1960:
case 3822:
case 2616:
case 2628:
case 2593:
case 712:
case 77:
case 1379:
case 911:
case 1595:
case 3970:
case 3396:
case 3905:
case 351:
case 2222:
case 820:
case 202:
case 3369:
case 3659:
case 1249:
case 1532:
case 220:
case 2019:
case 802:
case 1382:
case 92:
case 803:
case 117:
case 731:
case 654:
case 1522:
case 2549:
case 4063:
case 670:
case 1347:
case 3267:
case 4083:
case 405:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744099202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,];
var gg_b = "1744099202/";

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

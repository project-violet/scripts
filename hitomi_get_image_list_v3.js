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
case 850:
case 2175:
case 1219:
case 3728:
case 1825:
case 1425:
case 1681:
case 521:
case 1319:
case 3760:
case 790:
case 3221:
case 840:
case 4095:
case 2911:
case 726:
case 854:
case 736:
case 1438:
case 1838:
case 365:
case 377:
case 3735:
case 2910:
case 3415:
case 1774:
case 3503:
case 1718:
case 3229:
case 3003:
case 36:
case 3015:
case 3515:
case 3803:
case 3908:
case 2333:
case 568:
case 3142:
case 3268:
case 735:
case 3320:
case 1632:
case 1787:
case 2137:
case 1195:
case 1636:
case 3948:
case 3368:
case 618:
case 3220:
case 3761:
case 3443:
case 3679:
case 900:
case 1356:
case 2847:
case 2447:
case 547:
case 415:
case 1252:
case 3080:
case 2206:
case 3436:
case 1256:
case 3480:
case 3880:
case 3532:
case 3133:
case 3836:
case 106:
case 980:
case 2547:
case 1643:
case 2985:
case 1479:
case 4048:
case 1879:
case 763:
case 2246:
case 2491:
case 3489:
case 3337:
case 3454:
case 2407:
case 2653:
case 2773:
case 1234:
case 1057:
case 15:
case 1615:
case 954:
case 2807:
case 10:
case 1470:
case 14:
case 4008:
case 1070:
case 944:
case 2168:
case 1570:
case 984:
case 2007:
case 18:
case 3089:
case 280:
case 240:
case 1793:
case 333:
case 3995:
case 1148:
case 2934:
case 1571:
case 200:
case 2090:
case 1946:
case 2590:
case 3638:
case 697:
case 1285:
case 3716:
case 3564:
case 3064:
case 1902:
case 3581:
case 2599:
case 2899:
case 2952:
case 3481:
case 254:
case 1385:
case 204:
case 2663:
case 1567:
case 1067:
case 7:
case 3712:
case 529:
case 4043:
case 3936:
case 863:
case 2085:
case 93:
case 2947:
case 2271:
case 936:
case 1290:
case 2062:
case 2462:
case 2991:
case 3989:
case 2371:
case 2714:
case 2778:
case 2862:
case 1970:
case 2907:
case 3125:
case 3633:
case 2434:
case 1207:
case 2270:
case 2834:
case 1446:
case 1143:
case 195:
case 1542:
case 1042:
case 2357:
case 1846:
case 3304:
case 1442:
case 2370:
case 2990:
case 1046:
case 3895:
case 972:
case 1798:
case 465:
case 2034:
case 2257:
case 1391:
case 2379:
case 1502:
case 2452:
case 226:
case 3344:
case 1002:
case 2999:
case 1406:
case 8:
case 657:
case 607:
case 687:
case 2456:
case 294:
case 2856:
case 31:
case 3606:
case 82:
case 4064:
case 780:
case 83:
case 1189:
case 2739:
case 3602:
case 2786:
case 2730:
case 1180:
case 744:
case 1833:
case 784:
case 433:
case 836:
case 2511:
case 3646:
case 1938:
case 2011:
case 2411:
case 2:
case 3353:
case 2811:
case 1533:
case 2637:
case 316:
case 1033:
case 826:
case 1181:
case 2731:
case 3808:
case 2010:
case 2510:
case 1713:
case 3008:
case 2238:
case 3508:
case 3167:
case 2410:
case 2755:
case 4054:
case 2675:
case 872:
case 3915:
case 2419:
case 2225:
case 621:
case 1745:
case 315:
case 3792:
case 4080:
case 2325:
case 3048:
case 2519:
case 382:
case 1488:
case 5:
case 1888:
case 3197:
case 1194:
case 1212:
case 1588:
case 1316:
case 302:
case 1631:
case 3578:
case 3514:
case 2605:
case 1775:
case 1655:
case 173:
case 218:
case 1017:
case 3478:
case 3973:
case 3322:
case 3734:
case 1630:
case 3140:
case 613:
case 3226:
case 3222:
case 151:
case 3326:
case 4094:
case 2187:
case 829:
case 1665:
case 3672:
case 3827:
case 2912:
case 3427:
case 1024:
case 3527:
case 787:
case 2916:
case 897:
case 1824:
case 2283:
case 3149:
case 1872:
case 1076:
case 1768:
case 1576:
case 2122:
case 1627:
case 1941:
case 2209:
case 474:
case 600:
case 3839:
case 650:
case 1261:
case 3439:
case 3565:
case 1284:
case 1876:
case 1173:
case 2309:
case 1250:
case 3274:
case 3886:
case 2249:
case 3183:
case 1729:
case 3582:
case 239:
case 768:
case 3711:
case 2349:
case 3994:
case 3318:
case 3882:
case 2698:
case 604:
case 2200:
case 3030:
case 1900:
case 594:
case 1251:
case 199:
case 1335:
case 3431:
case 2977:
case 3555:
case 536:
case 1678:
case 3855:
case 2297:
case 4073:
case 127:
case 1351:
case 1369:
case 2201:
case 3531:
case 3719:
case 162:
case 2341:
case 2959:
case 818:
case 2096:
case 1328:
case 53:
case 939:
case 2092:
case 2896:
case 2241:
case 731:
case 2592:
case 1041:
case 1292:
case 63:
case 419:
case 1541:
case 2560:
case 1396:
case 1976:
case 3245:
case 3965:
case 2028:
case 2528:
case 1296:
case 2460:
case 3117:
case 1441:
case 2535:
case 1597:
case 257:
case 3313:
case 626:
case 2869:
case 3982:
case 2451:
case 2569:
case 3305:
case 2551:
case 3930:
case 3986:
case 694:
case 287:
case 1897:
case 3188:
case 2835:
case 2435:
case 3594:
case 247:
case 2626:
case 672:
case 2077:
case 504:
case 2577:
case 1673:
case 159:
case 2477:
case 2703:
case 1049:
case 2877:
case 1127:
case 2622:
case 442:
case 2559:
case 2061:
case 2561:
case 500:
case 1540:
case 1040:
case 2996:
case 2198:
case 2084:
case 2272:
case 1323:
case 2484:
case 2276:
case 821:
case 2884:
case 957:
case 718:
case 907:
case 2859:
case 2459:
case 452:
case 2372:
case 1009:
case 1223:
case 1840:
case 3609:
case 1083:
case 428:
case 2687:
case 1583:
case 2324:
case 1883:
case 2780:
case 1186:
case 2736:
case 438:
case 1744:
case 2224:
case 3914:
case 1139:
case 3791:
case 3707:
case 3473:
case 3172:
case 3573:
case 369:
case 513:
case 3790:
case 1694:
case 2317:
case 191:
case 3601:
case 3697:
case 797:
case 2012:
case 887:
case 2113:
case 1155:
case 268:
case 374:
case 729:
case 3799:
case 3927:
case 2812:
case 807:
case 6:
case 857:
case 2764:
case 3641:
case 2516:
case 4065:
case 3561:
case 3059:
case 3376:
case 3584:
case 1487:
case 1339:
case 1087:
case 533:
case 3276:
case 211:
case 3861:
case 3372:
case 3992:
case 1239:
case 2124:
case 2955:
case 3626:
case 3715:
case 1286:
case 3450:
case 1874:
case 1230:
case 742:
case 782:
case 3577:
case 1574:
case 418:
case 1018:
case 3477:
case 3877:
case 702:
case 3050:
case 1330:
case 1905:
case 3693:
case 3035:
case 2313:
case 3851:
case 719:
case 1231:
case 2982:
case 3569:
case 2305:
case 2930:
case 2986:
case 2213:
case 3435:
case 1331:
case 2094:
case 2594:
case 1255:
case 1616:
case 188:
case 3560:
case 3428:
case 3828:
case 2965:
case 3028:
case 3528:
case 3460:
case 2117:
case 108:
case 870:
case 158:
case 3816:
case 3012:
case 3113:
case 3416:
case 368:
case 1767:
case 4023:
case 3388:
case 616:
case 2799:
case 3781:
case 3105:
case 3812:
case 3516:
case 2790:
case 1196:
case 270:
case 1669:
case 439:
case 1651:
case 1998:
case 1314:
case 1378:
case 1593:
case 167:
case 1214:
case 1278:
case 1426:
case 615:
case 3789:
case 1123:
case 1022:
case 2473:
case 321:
case 2873:
case 1770:
case 1650:
case 2176:
case 974:
case 2298:
case 17:
case 1757:
case 2573:
case 1422:
case 331:
case 577:
case 565:
case 3780:
case 3736:
case 4092:
case 1659:
case 1661:
case 2752:
case 2100:
case 2827:
case 2427:
case 3916:
case 2027:
case 4028:
case 665:
case 677:
case 1150:
case 2756:
case 861:
case 3118:
case 3283:
case 407:
case 457:
case 1184:
case 902:
case 952:
case 2140:
case 1746:
case 2226:
case 515:
case 1373:
case 1742:
case 982:
case 3187:
case 447:
case 838:
case 666:
case 2578:
case 2514:
case 2766:
case 3605:
case 2293:
case 4077:
case 2141:
case 828:
case 2814:
case 318:
case 2878:
case 1926:
case 51:
case 919:
case 1128:
case 242:
case 516:
case 4061:
case 3645:
case 4059:
case 282:
case 1135:
case 2785:
case 117:
case 1169:
case 66:
case 228:
case 3959:
case 3492:
case 3892:
case 2688:
case 3241:
case 3896:
case 3592:
case 1045:
case 1987:
case 769:
case 2831:
case 3397:
case 802:
case 3977:
case 3301:
case 1405:
case 1294:
case 421:
case 3708:
case 1013:
case 1513:
case 1805:
case 1112:
case 2855:
case 1116:
case 1918:
case 1394:
case 3950:
case 431:
case 882:
case 774:
case 261:
case 2486:
case 2274:
case 2886:
case 2183:
case 3249:
case 397:
case 3300:
case 2711:
case 3349:
case 2318:
case 2994:
case 819:
case 3698:
case 2586:
case 2865:
case 2287:
case 2539:
case 2039:
case 3023:
case 3209:
case 770:
case 623:
case 3823:
case 2565:
case 2065:
case 3928:
case 3379:
case 2981:
case 2344:
case 3852:
case 3668:
case 2964:
case 1332:
case 2244:
case 1724:
case 3620:
case 777:
case 765:
case 1280:
case 1236:
case 3856:
case 2633:
case 3434:
case 1037:
case 171:
case 3270:
case 3357:
case 1354:
case 3370:
case 1837:
case 1389:
case 1437:
case 3257:
case 2495:
case 2204:
case 1904:
case 3271:
case 3466:
case 153:
case 3562:
case 3866:
case 3991:
case 143:
case 815:
case 2989:
case 1875:
case 3566:
case 372:
case 2936:
case 1619:
case 1788:
case 1944:
case 3267:
case 3947:
case 3621:
case 3585:
case 2932:
case 76:
case 1281:
case 916:
case 2448:
case 3419:
case 2848:
case 3225:
case 2363:
case 215:
case 2943:
case 2792:
case 3325:
case 2263:
case 1421:
case 2171:
case 4047:
case 3019:
case 2548:
case 3010:
case 1558:
case 2008:
case 363:
case 4007:
case 1953:
case 114:
case 519:
case 674:
case 1215:
case 3730:
case 552:
case 1429:
case 1634:
case 3144:
case 1303:
case 2646:
case 3511:
case 3011:
case 3411:
case 3:
case 1147:
case 2642:
case 3811:
case 450:
case 1529:
case 3782:
case 3637:
case 1203:
case 1029:
case 400:
case 4090:
case 582:
case 21:
case 1468:
case 3104:
case 2157:
case 1772:
case 1963:
case 444:
case 1020:
case 454:
case 404:
case 3739:
case 1820:
case 1107:
case 1656:
case 1776:
case 1568:
case 2543:
case 2043:
case 472:
case 1709:
case 977:
case 2268:
case 2320:
case 3137:
case 2843:
case 1740:
case 2761:
case 3644:
case 2679:
case 2759:
case 435:
case 1958:
case 1853:
case 2750:
case 2670:
case 642:
case 682:
case 1607:
case 2102:
case 2815:
case 3233:
case 1749:
case 2229:
case 4062:
case 2403:
case 1152:
case 2777:
case 1553:
case 1053:
case 425:
case 602:
case 4066:
case 1700:
case 2515:
case 3333:
case 2358:
case 43:
case 592:
case 2751:
case 2769:
case 1929:
case 1308:
case 2258:
case 42:
case 1797:
case 313:
case 426:
case 3175:
case 1063:
case 1248:
case 569:
case 96:
case 833:
case 1968:
case 1463:
case 1741:
case 4052:
case 865:
case 877:
case 2716:
case 2564:
case 2581:
case 344:
case 661:
case 2081:
case 384:
case 354:
case 3499:
case 304:
case 2464:
case 2864:
case 380:
case 3490:
case 340:
case 3890:
case 3121:
case 2375:
case 71:
case 1119:
case 3934:
case 350:
case 2275:
case 300:
case 3090:
case 2638:
case 2889:
case 3120:
case 628:
case 715:
case 3491:
case 1975:
case 2454:
case 3773:
case 3653:
case 3342:
case 3807:
case 2854:
case 638:
case 1804:
case 3346:
case 2554:
case 463:
case 866:
case 1295:
case 3007:
case 2054:
case 3591:
case 923:
case 3447:
case 1544:
case 3302:
case 1044:
case 2080:
case 2536:
case 86:
case 2436:
case 933:
case 2480:
case 2532:
case 3129:
case 2133:
case 3547:
case 3985:
case 3047:
case 4019:
case 1844:
case 77:
case 2987:
case 2045:
case 3328:
case 3721:
case 3909:
case 3940:
case 1688:
case 3228:
case 1719:
case 2445:
case 362:
case 3949:
case 2974:
case 1531:
case 3678:
case 3758:
case 3614:
case 327:
case 2813:
case 2505:
case 2116:
case 1055:
case 1617:
case 2112:
case 2805:
case 2513:
case 776:
case 3251:
case 3269:
case 399:
case 3335:
case 3277:
case 1086:
case 1882:
case 1030:
case 732:
case 3350:
case 491:
case 1711:
case 1374:
case 1994:
case 1318:
case 3997:
case 1430:
case 1486:
case 1274:
case 3901:
case 1218:
case 3876:
case 3072:
case 3476:
case 767:
case 1839:
case 1387:
case 3261:
case 298:
case 3384:
case 3941:
case 1039:
case 583:
case 3076:
case 3768:
case 1865:
case 3576:
case 1465:
case 3359:
case 2150:
case 1676:
case 1149:
case 3424:
case 1527:
case 3824:
case 1427:
case 3524:
case 514:
case 3665:
case 1752:
case 1672:
case 119:
case 2706:
case 301:
case 2498:
case 1326:
case 351:
case 3737:
case 412:
case 1109:
case 758:
case 708:
case 748:
case 1140:
case 4001:
case 2161:
case 2184:
case 1734:
case 1322:
case 3630:
case 341:
case 3686:
case 2128:
case 1973:
case 3655:
case 1814:
case 4049:
case 449:
case 1762:
case 2926:
case 489:
case 3017:
case 1414:
case 2160:
case 1578:
case 4000:
case 1766:
case 1514:
case 3417:
case 3817:
case 1141:
case 3631:
case 679:
case 3316:
case 102:
case 4009:
case 3194:
case 2696:
case 3488:
case 142:
case 1101:
case 3983:
case 4040:
case 1927:
case 1641:
case 232:
case 1799:
case 3131:
case 97:
case 174:
case 4076:
case 3924:
case 3155:
case 2767:
case 267:
case 2593:
case 275:
case 848:
case 1697:
case 2192:
case 888:
case 798:
case 2278:
case 391:
case 2651:
case 2314:
case 2378:
case 808:
case 2493:
case 858:
case 2422:
case 2526:
case 2822:
case 3917:
case 922:
case 3165:
case 564:
case 1573:
case 1176:
case 932:
case 2426:
case 1398:
case 2123:
case 437:
case 3139:
case 1791:
case 499:
case 2779:
case 2661:
case 3988:
case 1640:
case 3130:
case 3186:
case 614:
case 192:
case 2684:
case 3083:
case 3583:
case 967:
case 975:
case 462:
case 2227:
case 643:
case 3509:
case 3009:
case 2945:
case 2587:
case 2887:
case 3409:
case 3540:
case 603:
case 3040:
case 2386:
case 2905:
case 2282:
case 2518:
case 876:
case 349:
case 1931:
case 2574:
case 473:
case 4017:
case 3400:
case 389:
case 2286:
case 2230:
case 3673:
case 359:
case 2474:
case 2382:
case 958:
case 3897:
case 401:
case 1188:
case 1094:
case 2255:
case 1594:
case 3497:
case 3401:
case 1305:
case 1930:
case 3801:
case 1986:
case 1313:
case 2355:
case 1982:
case 3501:
case 481:
case 3097:
case 832:
case 1894:
case 3841:
case 1117:
case 208:
case 1345:
case 3763:
case 3392:
case 1245:
case 671:
case 2725:
case 3541:
case 875:
case 867:
case 288:
case 1481:
case 3902:
case 1581:
case 3467:
case 1716:
case 1564:
case 2110:
case 3262:
case 1638:
case 3148:
case 864:
case 3071:
case 3471:
case 1375:
case 2937:
case 3362:
case 3871:
case 3266:
case 355:
case 3942:
case 1089:
case 588:
case 34:
case 3457:
case 1054:
case 1237:
case 38:
case 1454:
case 3234:
case 3615:
case 558:
case 1337:
case 1489:
case 3643:
case 2444:
case 3352:
case 1436:
case 1480:
case 714:
case 1133:
case 2783:
case 306:
case 346:
case 1432:
case 1080:
case 1580:
case 1036:
case 2111:
case 2544:
case 1368:
case 2740:
case 960:
case 1220:
case 743:
case 1843:
case 1443:
case 783:
case 1761:
case 893:
case 1679:
case 2134:
case 434:
case 1268:
case 3787:
case 166:
case 3632:
case 1543:
case 2709:
case 1043:
case 753:
case 430:
case 279:
case 2553:
case 1657:
case 1015:
case 1106:
case 16:
case 1803:
case 1515:
case 964:
case 2156:
case 1670:
case 1750:
case 1415:
case 1102:
case 2453:
case 3774:
case 3718:
case 1003:
case 2691:
case 532:
case 3689:
case 3438:
case 3838:
case 1735:
case 3933:
case 2929:
case 576:
case 4046:
case 1358:
case 1671:
case 495:
case 1769:
case 3038:
case 2690:
case 3538:
case 2348:
case 3664:
case 2463:
case 3525:
case 3025:
case 1728:
case 2248:
case 57:
case 1321:
case 771:
case 1667:
case 2563:
case 4002:
case 2063:
case 2920:
case 67:
case 1048:
case 2821:
case 1796:
case 2190:
case 853:
case 406:
case 446:
case 115:
case 2685:
case 2521:
case 486:
case 883:
case 1448:
case 1848:
case 3745:
case 1363:
case 214:
case 2953:
case 1008:
case 44:
case 2458:
case 2858:
case 1167:
case 1808:
case 3705:
case 2058:
case 676:
case 3181:
case 445:
case 116:
case 2529:
case 3533:
case 632:
case 2315:
case 2147:
case 517:
case 4071:
case 1179:
case 2303:
case 3938:
case 2215:
case 3833:
case 3180:
case 2829:
case 2429:
case 3154:
case 2107:
case 1602:
case 4067:
case 2656:
case 2568:
case 1170:
case 675:
case 667:
case 2191:
case 3189:
case 2243:
case 1723:
case 2963:
case 2520:
case 2020:
case 914:
case 2468:
case 1157:
case 3802:
case 3402:
case 3347:
case 4025:
case 953:
case 943:
case 983:
case 3103:
case 1981:
case 3502:
case 1344:
case 2232:
case 3806:
case 3406:
case 2837:
case 3391:
case 1495:
case 3307:
case 658:
case 3446:
case 3542:
case 3143:
case 2289:
case 395:
case 688:
case 1304:
case 2537:
case 1095:
case 1595:
case 2037:
case 1954:
case 2475:
case 2875:
case 2717:
case 2075:
case 203:
case 598:
case 2904:
case 39:
case 396:
case 971:
case 2281:
case 334:
case 1138:
case 2788:
case 2944:
case 3399:
case 814:
case 2364:
case 1980:
case 3648:
case 2925:
case 691:
case 3107:
case 3068:
case 3656:
case 3776:
case 3568:
case 3420:
case 895:
case 3191:
case 785:
case 1739:
case 3243:
case 3963:
case 705:
case 755:
case 3652:
case 1104:
case 3343:
case 1765:
case 1637:
case 2033:
case 3029:
case 1411:
case 3315:
case 3303:
case 1511:
case 1011:
case 2938:
case 2136:
case 1786:
case 3215:
case 2833:
case 3829:
case 3429:
case 3634:
case 314:
case 2713:
case 3858:
case 1675:
case 1755:
case 1410:
case 1010:
case 4004:
case 2705:
case 3666:
case 3558:
case 1338:
case 493:
case 786:
case 2181:
case 581:
case 89:
case 541:
case 3821:
case 820:
case 3421:
case 3021:
case 3685:
case 501:
case 551:
case 70:
case 1819:
case 830:
case 296:
case 689:
case 1085:
case 234:
case 1585:
case 3264:
case 3788:
case 3944:
case 2399:
case 1267:
case 3381:
case 3364:
case 659:
case 3619:
case 2390:
case 1907:
case 1991:
case 1462:
case 343:
case 125:
case 1714:
case 1566:
case 3875:
case 1862:
case 1778:
case 1066:
case 1466:
case 1163:
case 3075:
case 1866:
case 220:
case 2957:
case 3904:
case 29:
case 12:
case 3837:
case 2798:
case 3437:
case 1534:
case 3389:
case 562:
case 1034:
case 1257:
case 2307:
case 3354:
case 1370:
case 2842:
case 2542:
case 295:
case 3289:
case 2143:
case 2846:
case 2042:
case 460:
case 3254:
case 1270:
case 1834:
case 2506:
case 2115:
case 612:
case 537:
case 1153:
case 2402:
case 194:
case 1856:
case 1052:
case 2347:
case 2967:
case 3724:
case 920:
case 1620:
case 3380:
case 3336:
case 464:
case 2247:
case 1452:
case 1379:
case 4063:
case 2002:
case 2806:
case 126:
case 930:
case 1056:
case 2643:
case 1047:
case 2879:
case 905:
case 1306:
case 3783:
case 1129:
case 256:
case 1202:
case 512:
case 4021:
case 246:
case 699:
case 1206:
case 637:
case 3111:
case 1847:
case 2356:
case 945:
case 2079:
case 1447:
case 3044:
case 1591:
case 2334:
case 1091:
case 2722:
case 2070:
case 24:
case 2857:
case 3804:
case 1168:
case 1346:
case 1507:
case 2457:
case 28:
case 1407:
case 2557:
case 2234:
case 3004:
case 4058:
case 2470:
case 2615:
case 1891:
case 1491:
case 1962:
case 3975:
case 150:
case 100:
case 4029:
case 1090:
case 1590:
case 946:
case 2148:
case 3119:
case 2571:
case 986:
case 2362:
case 906:
case 2266:
case 180:
case 2942:
case 1890:
case 2567:
case 1663:
case 2067:
case 4068:
case 2108:
case 90:
case 559:
case 95:
case 104:
case 1099:
case 2902:
case 1599:
case 1956:
case 98:
case 184:
case 1158:
case 2867:
case 2285:
case 3348:
case 2664:
case 3741:
case 855:
case 805:
case 2681:
case 2525:
case 3699:
case 3968:
case 3248:
case 364:
case 641:
case 3563:
case 845:
case 3920:
case 885:
case 2438:
case 3797:
case 2838:
case 3185:
case 2933:
case 3701:
case 3929:
case 3308:
case 2310:
case 4037:
case 471:
case 2538:
case 734:
case 978:
case 2211:
case 1333:
case 1604:
case 3053:
case 796:
case 483:
case 886:
case 724:
case 3853:
case 856:
case 2654:
case 4075:
case 2718:
case 1233:
case 806:
case 3691:
case 1910:
case 2689:
case 673:
case 3740:
case 3134:
case 85:
case 2680:
case 80:
case 591:
case 2787:
case 88:
case 3709:
case 3921:
case 3661:
case 2744:
case 4045:
case 2988:
case 1780:
case 2130:
case 2883:
case 3684:
case 859:
case 2083:
case 849:
case 1687:
case 376:
case 3227:
case 3526:
case 3822:
case 2165:
case 3677:
case 1674:
case 3770:
case 762:
case 3123:
case 3826:
case 3593:
case 367:
case 3192:
case 3214:
case 291:
case 3651:
case 3771:
case 3314:
case 3893:
case 3493:
case 332:
case 1412:
case 2131:
case 498:
case 812:
case 3628:
case 1816:
case 1288:
case 3767:
case 168:
case 1460:
case 2841:
case 2296:
case 3612:
case 2763:
case 751:
case 701:
case 959:
case 50:
case 909:
case 54:
case 781:
case 891:
case 741:
case 1828:
case 2041:
case 348:
case 2178:
case 2114:
case 2897:
case 187:
case 1435:
case 1569:
case 212:
case 1051:
case 2801:
case 1469:
case 3231:
case 1451:
case 2097:
case 1535:
case 1693:
case 634:
case 3330:
case 3905:
case 2127:
case 2549:
case 2049:
case 249:
case 3574:
case 1477:
case 1550:
case 289:
case 1050:
case 3874:
case 624:
case 2500:
case 2000:
case 2849:
case 3818:
case 1077:
case 209:
case 259:
case 2753:
case 1577:
case 1850:
case 3474:
case 3913:
case 2440:
case 773:
case 1372:
case 2509:
case 1459:
case 3239:
case 1743:
case 1992:
case 3365:
case 2009:
case 3087:
case 3587:
case 630:
case 1884:
case 1276:
case 3887:
case 1198:
case 1084:
case 3265:
case 69:
case 1584:
case 545:
case 1061:
case 1561:
case 1996:
case 2040:
case 791:
case 881:
case 2572:
case 1309:
case 2173:
case 999:
case 841:
case 1928:
case 1240:
case 645:
case 685:
case 2261:
case 1423:
case 398:
case 1122:
case 1023:
case 422:
case 1960:
case 2768:
case 1340:
case 2361:
case 2472:
case 530:
case 129:
case 2277:
case 1969:
case 475:
case 1951:
case 962:
case 2377:
case 2997:
case 1300:
case 3974:
case 606:
case 656:
case 4026:
case 47:
case 3413:
case 3813:
case 227:
case 3505:
case 3005:
case 3116:
case 2235:
case 1301:
case 3405:
case 1708:
case 3805:
case 646:
case 237:
case 1977:
case 3545:
case 64:
case 3987:
case 68:
case 2328:
case 595:
case 1092:
case 1193:
case 1961:
case 476:
case 2940:
case 2228:
case 1748:
case 1341:
case 60:
case 1984:
case 749:
case 837:
case 899:
case 4087:
case 2588:
case 2212:
case 3696:
case 2488:
case 2216:
case 827:
case 3692:
case 317:
case 951:
case 901:
case 709:
case 3128:
case 2655:
case 4018:
case 118:
case 2017:
case 3160:
case 3922:
case 2817:
case 3498:
case 251:
case 2682:
case 3898:
case 3373:
case 3159:
case 3161:
case 281:
case 3273:
case 3598:
case 3098:
case 2686:
case 712:
case 1283:
case 1118:
case 408:
case 458:
case 1174:
case 3702:
case 2424:
case 2639:
case 1912:
case 2665:
case 488:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753430401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,];
var gg_b = "1753430401/";

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

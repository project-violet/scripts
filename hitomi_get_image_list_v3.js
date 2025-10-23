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
case 628:
case 167:
case 15:
case 958:
case 1740:
case 3818:
case 73:
case 1300:
case 3289:
case 712:
case 2947:
case 2852:
case 1505:
case 3453:
case 43:
case 1988:
case 3158:
case 2454:
case 3767:
case 3498:
case 3266:
case 3916:
case 1869:
case 183:
case 2157:
case 1886:
case 1274:
case 69:
case 417:
case 2398:
case 563:
case 3451:
case 3030:
case 3780:
case 479:
case 3723:
case 1431:
case 1050:
case 1539:
case 1918:
case 2182:
case 779:
case 804:
case 436:
case 385:
case 2275:
case 4033:
case 311:
case 736:
case 640:
case 842:
case 621:
case 1455:
case 2309:
case 1195:
case 2003:
case 847:
case 1138:
case 1816:
case 3773:
case 2887:
case 393:
case 3969:
case 2774:
case 3986:
case 1268:
case 2749:
case 1496:
case 452:
case 2399:
case 3593:
case 2910:
case 2594:
case 3558:
case 1105:
case 3012:
case 2512:
case 2825:
case 694:
case 918:
case 3974:
case 2635:
case 2769:
case 208:
case 533:
case 1717:
case 3654:
case 1406:
case 2653:
case 2287:
case 3819:
case 470:
case 3924:
case 806:
case 2091:
case 1989:
case 3499:
case 46:
case 457:
case 734:
case 2840:
case 649:
case 434:
case 2407:
case 1787:
case 985:
case 351:
case 3968:
case 2716:
case 2609:
case 4022:
case 1269:
case 3101:
case 2308:
case 2582:
case 2980:
case 116:
case 1760:
case 1042:
case 80:
case 1634:
case 1390:
case 2252:
case 1538:
case 1824:
case 527:
case 3866:
case 466:
case 2967:
case 3103:
case 3310:
case 1808:
case 3999:
case 2648:
case 1235:
case 2709:
case 607:
case 3321:
case 2128:
case 2616:
case 3515:
case 1687:
case 1253:
case 2374:
case 3079:
case 3632:
case 699:
case 3543:
case 2890:
case 1734:
case 3029:
case 1251:
case 644:
case 2324:
case 2529:
case 439:
case 2421:
case 3323:
case 2200:
case 1084:
case 1906:
case 476:
case 3541:
case 159:
case 2178:
case 3371:
case 2473:
case 4089:
case 3474:
case 2368:
case 110:
case 3908:
case 2085:
case 2467:
case 3754:
case 3380:
case 1325:
case 263:
case 1511:
case 3806:
case 1545:
case 835:
case 3797:
case 1972:
case 3296:
case 1375:
case 2164:
case 1513:
case 77:
case 3367:
case 2751:
case 2144:
case 64:
case 3143:
case 2179:
case 3206:
case 3623:
case 469:
case 1565:
case 3671:
case 3833:
case 405:
case 3347:
case 2528:
case 2834:
case 227:
case 1181:
case 3951:
case 3577:
case 2077:
case 3855:
case 705:
case 2316:
case 3621:
case 2348:
case 1:
case 1299:
case 3831:
case 1933:
case 177:
case 897:
case 1675:
case 430:
case 1352:
case 2290:
case 1851:
case 1955:
case 730:
case 3185:
case 1996:
case 3667:
case 809:
case 150:
case 343:
case 2061:
case 4046:
case 3222:
case 1898:
case 1446:
case 1835:
case 2668:
case 2564:
case 2063:
case 508:
case 2369:
case 3064:
case 892:
case 172:
case 1170:
case 1145:
case 573:
case 1481:
case 709:
case 3895:
case 1384:
case 194:
case 2132:
case 409:
case 3023:
case 3838:
case 1750:
case 1566:
case 465:
case 2571:
case 3628:
case 4083:
case 32:
case 497:
case 2677:
case 3856:
case 2842:
case 1602:
case 2429:
case 2315:
case 654:
case 3021:
case 1259:
case 637:
case 2627:
case 2510:
case 561:
case 3993:
case 3958:
case 3010:
case 2343:
case 3441:
case 3549:
case 398:
case 115:
case 2837:
case 3574:
case 3936:
case 623:
case 805:
case 2567:
case 1995:
case 1420:
case 1392:
case 616:
case 384:
case 3067:
case 2661:
case 1411:
case 4070:
case 1470:
case 391:
case 568:
case 3664:
case 1626:
case 3080:
case 1118:
case 2663:
case 1893:
case 2385:
case 2982:
case 65:
case 1737:
case 531:
case 667:
case 92:
case 271:
case 2615:
case 695:
case 1087:
case 3378:
case 2171:
case 2016:
case 2123:
case 2428:
case 3032:
case 1166:
case 3124:
case 1258:
case 3477:
case 1189:
case 19:
case 3629:
case 155:
case 3149:
case 1684:
case 1905:
case 735:
case 2641:
case 1801:
case 2110:
case 614:
case 386:
case 1291:
case 3328:
case 3712:
case 656:
case 2758:
case 3794:
case 1859:
case 2167:
case 2793:
case 2685:
case 278:
case 121:
case 2086:
case 3364:
case 203:
case 353:
case 2237:
case 3569:
case 1326:
case 1546:
case 1052:
case 876:
case 1518:
case 1376:
case 3168:
case 3463:
case 2361:
case 3256:
case 1614:
case 3757:
case 2242:
case 2464:
case 991:
case 1692:
case 2693:
case 1106:
case 2658:
case 948:
case 1243:
case 14:
case 2826:
case 3612:
case 2978:
case 3281:
case 2035:
case 1215:
case 2554:
case 3598:
case 3330:
case 2053:
case 2359:
case 2785:
case 3553:
case 3054:
case 1362:
case 1861:
case 329:
case 2597:
case 1965:
case 3459:
case 1792:
case 3977:
case 2430:
case 40:
case 3283:
case 1714:
case 2928:
case 6:
case 2284:
case 70:
case 1000:
case 1285:
case 1439:
case 3220:
case 3401:
case 1637:
case 677:
case 2009:
case 941:
case 1827:
case 920:
case 3779:
case 2107:
case 852:
case 989:
case 1877:
case 1784:
case 834:
case 2404:
case 1555:
case 1642:
case 3403:
case 2214:
case 3108:
case 1034:
case 3729:
case 3245:
case 3270:
case 1596:
case 2741:
case 190:
case 672:
case 870:
case 3153:
case 3458:
case 1983:
case 2154:
case 442:
case 2391:
case 1776:
case 2412:
case 2929:
case 742:
case 107:
case 2814:
case 2202:
case 3135:
case 3436:
case 2761:
case 3941:
case 3870:
case 3811:
case 2393:
case 1885:
case 3394:
case 2358:
case 2099:
case 3820:
case 3630:
case 929:
case 503:
case 2659:
case 2763:
case 578:
case 659:
case 2979:
case 3764:
case 1572:
case 812:
case 4095:
case 1342:
case 1841:
case 3883:
case 2482:
case 1702:
case 2884:
case 775:
case 2276:
case 1131:
case 1913:
case 4056:
case 1456:
case 571:
case 2727:
case 1337:
case 3778:
case 1815:
case 1911:
case 1133:
case 1438:
case 3508:
case 1155:
case 2008:
case 3881:
case 3388:
case 3502:
case 1077:
case 2790:
case 668:
case 1834:
case 1624:
case 1997:
case 3666:
case 1144:
case 335:
case 3689:
case 486:
case 2360:
case 965:
case 2299:
case 1447:
case 3722:
case 1708:
case 3460:
case 245:
case 1316:
case 2387:
case 3619:
case 3897:
case 1061:
case 300:
case 2996:
case 3417:
case 3706:
case 250:
case 1290:
case 661:
case 537:
case 2933:
case 1800:
case 3318:
case 2640:
case 3934:
case 3576:
case 2170:
case 532:
case 2145:
case 2026:
case 1564:
case 133:
case 1369:
case 272:
case 3114:
case 2113:
case 2418:
case 3854:
case 2446:
case 1799:
case 1349:
case 1374:
case 2165:
case 935:
case 4010:
case 1423:
case 2253:
case 4073:
case 2489:
case 2581:
case 798:
case 1473:
case 1178:
case 638:
case 3807:
case 843:
case 309:
case 1041:
case 3796:
case 259:
case 3297:
case 3755:
case 3389:
case 365:
case 2084:
case 3584:
case 4071:
case 3083:
case 1410:
case 2251:
case 1324:
case 3366:
case 1529:
case 2922:
case 3011:
case 514:
case 1735:
case 2419:
case 791:
case 1686:
case 1467:
case 562:
case 2520:
case 210:
case 583:
case 182:
case 3475:
case 413:
case 1751:
case 3425:
case 1480:
case 2700:
case 3013:
case 3126:
case 2340:
case 426:
case 3618:
case 2972:
case 595:
case 1164:
case 2375:
case 2570:
case 631:
case 55:
case 2216:
case 90:
case 1653:
case 2406:
case 2248:
case 1036:
case 1825:
case 347:
case 1058:
case 2105:
case 1594:
case 1971:
case 1557:
case 1875:
case 1260:
case 3306:
case 885:
case 577:
case 2989:
case 1130:
case 3746:
case 3247:
case 237:
case 1923:
case 3718:
case 3821:
case 5:
case 216:
case 906:
case 1582:
case 2849:
case 3537:
case 1748:
case 101:
case 545:
case 2787:
case 1407:
case 2286:
case 3873:
case 1716:
case 2472:
case 1217:
case 441:
case 2595:
case 3696:
case 4007:
case 3095:
case 420:
case 2919:
case 741:
case 2824:
case 2538:
case 1252:
case 2422:
case 3038:
case 3823:
case 3633:
case 3940:
case 3871:
case 2634:
case 3056:
case 2760:
case 375:
case 818:
case 3542:
case 1852:
case 2224:
case 1194:
case 1351:
case 2505:
case 3005:
case 780:
case 3223:
case 429:
case 1112:
case 1947:
case 3719:
case 267:
case 30:
case 2740:
case 671:
case 1335:
case 2725:
case 3210:
case 1932:
case 214:
case 1398:
case 3221:
case 1353:
case 1699:
case 1817:
case 1768:
case 1497:
case 2869:
case 4054:
case 1157:
case 3987:
case 825:
case 3137:
case 1240:
case 1275:
case 1001:
case 1182:
case 2946:
case 3355:
case 3789:
case 3766:
case 2918:
case 256:
case 2539:
case 2050:
case 3550:
case 3039:
case 2334:
case 1608:
case 858:
case 2156:
case 3917:
case 1774:
case 3832:
case 2455:
case 1309:
case 1504:
case 2195:
case 2506:
case 3605:
case 299:
case 3006:
case 1761:
case 357:
case 1412:
case 2776:
case 725:
case 2277:
case 207:
case 1202:
case 1494:
case 2983:
case 596:
case 1391:
case 334:
case 1154:
case 4057:
case 2726:
case 521:
case 1763:
case 4094:
case 1336:
case 1979:
case 202:
case 93:
case 1393:
case 758:
case 1358:
case 3590:
case 3338:
case 2913:
case 2131:
case 3829:
case 2702:
case 3395:
case 1482:
case 1276:
case 3992:
case 1777:
case 2261:
case 682:
case 2342:
case 1601:
case 2841:
case 2970:
case 3639:
case 2572:
case 3072:
case 2155:
case 687:
case 451:
case 1008:
case 3134:
case 2522:
case 2815:
case 2438:
case 3022:
case 2911:
case 4082:
case 3879:
case 131:
case 2843:
case 2456:
case 3844:
case 2196:
case 3720:
case 1053:
case 168:
case 1098:
case 1636:
case 627:
case 1035:
case 2863:
case 4030:
case 24:
case 3462:
case 3500:
case 2714:
case 1876:
case 718:
case 1430:
case 1051:
case 952:
case 364:
case 3745:
case 1691:
case 820:
case 2861:
case 33:
case 2965:
case 841:
case 515:
case 4004:
case 1107:
case 1964:
case 3926:
case 2172:
case 966:
case 581:
case 1743:
case 1303:
case 493:
case 3450:
case 2439:
case 793:
case 2531:
case 161:
case 1715:
case 2596:
case 848:
case 633:
case 2034:
case 2533:
case 3033:
case 2350:
case 2122:
case 3534:
case 3828:
case 785:
case 2784:
case 3656:
case 1301:
case 3783:
case 2642:
case 2555:
case 1930:
case 4078:
case 3402:
case 1428:
case 2293:
case 3294:
case 2258:
case 171:
case 2465:
case 228:
case 939:
case 2737:
case 2236:
case 1327:
case 1048:
case 2291:
case 1121:
case 2588:
case 2905:
case 1377:
case 884:
case 3795:
case 1641:
case 1110:
case 3088:
case 4028:
case 2742:
case 3683:
case 2060:
case 255:
case 3560:
case 1173:
case 1478:
case 813:
case 1069:
case 103:
case 1237:
case 178:
case 1685:
case 2017:
case 3517:
case 3620:
case 1758:
case 2859:
case 960:
case 2119:
case 82:
case 2692:
case 599:
case 3426:
case 3613:
case 1464:
case 2518:
case 2939:
case 743:
case 3125:
case 2376:
case 3018:
case 3950:
case 3645:
case 3552:
case 2052:
case 3670:
case 673:
case 4029:
case 1262:
case 1444:
case 1677:
case 1842:
case 1341:
case 2602:
case 590:
case 608:
case 1479:
case 376:
case 1523:
case 1701:
case 2589:
case 294:
case 2384:
case 3089:
case 853:
case 1573:
case 1074:
case 1343:
case 249:
case 3160:
case 1837:
case 1627:
case 4079:
case 2188:
case 3381:
case 1994:
case 1521:
case 1429:
case 4044:
case 1315:
case 969:
case 2259:
case 2938:
case 824:
case 1661:
case 886:
case 3705:
case 2392:
case 2891:
case 1250:
case 3370:
case 3942:
case 3857:
case 37:
case 3575:
case 2893:
case 1759:
case 3492:
case 2146:
case 1982:
case 3152:
case 974:
case 2203:
case 2025:
case 3812:
case 3525:
case 3311:
case 1663:
case 3204:
case 2836:
case 2470:
case 2445:
case 288:
case 2985:
case 3008:
case 2881:
case 423:
case 2778:
case 716:
case 1442:
case 416:
case 1338:
case 4042:
case 1590:
case 2728:
case 1829:
case 1914:
case 3276:
case 1992:
case 586:
case 3884:
case 289:
case 3601:
case 2007:
case 1765:
case 220:
case 3507:
case 3763:
case 3336:
case 152:
case 3457:
case 0:
case 338:
case 3659:
case 3944:
case 3393:
case 2491:
case 2599:
case 432:
case 3099:
case 2820:
case 2394:
case 41:
case 71:
case 2811:
case 1100:
case 2312:
case 437:
case 2845:
case 890:
case 1006:
case 754:
case 2265:
case 454:
case 3412:
case 3929:
case 3494:
case 2458:
case 2493:
case 3154:
case 2198:
case 3892:
case 1228:
case 456:
case 4050:
case 899:
case 179:
case 931:
case 2961:
case 2245:
case 2865:
case 1339:
case 2729:
case 3292:
case 1534:
case 1033:
case 2108:
case 1783:
case 802:
case 600:
case 2779:
case 3964:
case 598:
case 2963:
case 1926:
case 2401:
case 1781:
case 3009:
case 1450:
case 1190:
case 361:
case 767:
case 495:
case 1500:
case 1713:
case 3928:
case 1305:
case 2977:
case 2199:
case 3051:
case 513:
case 164:
case 3691:
case 2097:
case 13:
case 938:
case 112:
case 229:
case 1720:
case 3554:
case 3098:
case 2054:
case 2553:
case 3636:
case 1711:
case 2535:
case 783:
case 117:
case 1864:
case 762:
case 635:
case 1244:
case 3826:
case 714:
case 3693:
case 591:
case 1279:
case 477:
case 2463:
case 28:
case 1426:
case 777:
case 2757:
case 2256:
case 548:
case 1125:
case 2805:
case 894:
case 1552:
case 2238:
case 3791:
case 174:
case 750:
case 2901:
case 3069:
case 881:
case 303:
case 1175:
case 2461:
case 253:
case 1611:
case 2586:
case 815:
case 378:
case 3685:
case 3086:
case 1517:
case 1620:
case 849:
case 3758:
case 1830:
case 2794:
case 3793:
case 3904:
case 606:
case 472:
case 3167:
case 2712:
case 1282:
case 772:
case 2839:
case 286:
case 3547:
case 1738:
case 224:
case 3110:
case 169:
case 3641:
case 1795:
case 1257:
case 1683:
case 520:
case 2149:
case 4002:
case 3478:
case 1962:
case 1365:
case 2629:
case 1402:
case 2782:
case 3643:
case 3930:
case 1212:
case 745:
case 1804:
case 3428:
case 3123:
case 419:
case 2679:
case 3532:
case 3615:
case 3016:
case 2378:
case 3327:
case 888:
case 1681:
case 7:
case 710:
case 1320:
case 1152:
case 1894:
case 2730:
case 1311:
case 1204:
case 1525:
case 828:
case 675:
case 291:
case 1019:
case 2239:
case 2067:
case 284:
case 2485:
case 1705:
case 160:
case 1117:
case 903:
case 4014:
case 1345:
case 529:
case 1942:
case 2186:
case 580:
case 213:
case 2169:
case 17:
case 2073:
case 2936:
case 2574:
case 3074:
case 2379:
case 1160:
case 2549:
case 821:
case 3049:
case 2344:
case 840:
case 298:
case 2704:
case 1484:
case 2993:
case 3510:
case 3627:
case 2010:
case 3703:
case 604:
case 1230:
case 22:
case 2443:
case 139:
case 1187:
case 4084:
case 2116:
case 2838:
case 2205:
case 2023:
case 2329:
case 896:
case 1739:
case 2415:
case 176:
case 3701:
case 1089:
case 2563:
case 4017:
case 1114:
case 440:
case 3668:
case 1192:
case 987:
case 1452:
case 2469:
case 1897:
case 3061:
case 859:
case 100:
case 2486:
case 1706:
case 3290:
case 1346:
case 2185:
case 1934:
case 1576:
case 2935:
case 3129:
case 2673:
case 728:
case 1722:
case 3954:
case 4087:
case 428:
case 322:
case 551:
case 3348:
case 63:
case 810:
case 612:
case 664:
case 3578:
case 755:
case 2951:
case 1388:
case 49:
case 2855:
case 617:
case 1502:
case 4060:
case 79:
case 3432:
case 2671:
case 2115:
case 2347:
case 1487:
case 3624:
case 3997:
case 135:
case 2896:
case 4075:
case 2233:
case 2367:
case 4040:
case 3234:
case 387:
case 1319:
case 2255:
case 2163:
case 1618:
case 2296:
case 2797:
case 3907:
case 2806:
case 3669:
case 3735:
case 363:
case 3686:
case 3798:
case 3467:
case 2231:
case 3085:
case 666:
case 4025:
case 845:
case 819:
case 3368:
case 922:
case 2371:
case 850:
case 1688:
case 3041:
case 1796:
case 2541:
case 511:
case 3410:
case 3324:
case 197:
case 3890:
case 2029:
case 3529:
case 3421:
case 1366:
case 1733:
case 2044:
case 593:
case 3349:
case 3043:
case 2079:
case 670:
case 3374:
case 3579:
case 3471:
case 2373:
case 2822:
case 1731:
case 2321:
case 415:
case 634:
case 749:
case 3709:
case 715:
case 481:
case 2177:
case 3104:
case 2408:
case 2103:
case 2246:
case 1871:
case 1633:
case 85:
case 1975:
case 1056:
case 175:
case 895:
case 1150:
case 1322:
case 1821:
case 1490:
case 2082:
case 1810:
case 3582:
case 814:
case 3748:
case 67:
case 3407:
case 2968:
case 3217:
case 225:
case 3840:
case 707:
case 3875:
case 3651:
case 1306:
case 407:
case 2159:
case 104:
case 1746:
case 799:
case 2591:
case 1247:
case 2819:
case 1718:
case 3923:
case 3653:
case 3287:
case 3786:
case 2536:
case 444:
case 1162:
case 3036:
case 639:
case 3825:
case 702:
case 3512:
case 3399:
case 2593:
case 2558:
case 1232:
case 2986:
case 446:
case 2773:
case 746:
case 2969:
case 293:
case 832:
case 3887:
case 630:
case 674:
case 1832:
case 1331:
case 2503:
case 3225:
case 2710:
case 3504:
case 211:
case 2771:
case 3240:
case 1137:
case 1396:
case 3275:
case 3182:
case 2888:
case 790:
case 1789:
case 1672:
case 837:
case 2607:
case 1039:
case 3724:
case 1550:
case 1210:
case 816:
case 669:
case 74:
case 1400:
case 3932:
case 3530:
case 2191:
case 2354:
case 3398:
case 2451:
case 44:
case 3699:
case 823:
case 3497:
case 2916:
case 3768:
case 3157:
case 1987:
case 3852:
case 3454:
case 1005:
case 3112:
case 2818:
case 3947:
case 1719:
case 1562:
case 908:
case 973:
case 1271:
case 388:
case 1568:
case 3203:
case 1080:
case 3413:
case 2812:
case 3626:
case 517:
case 2152:
case 2320:
case 3146:
case 1169:
case 2540:
case 564:
case 940:
case 787:
case 3676:
case 2575:
case 921:
case 2117:
case 512:
case 53:
case 1186:
case 3995:
case 1239:
case 184:
case 1067:
case 3891:
case 3392:
case 2313:
case 2019:
case 3201:
case 3314:
case 2230:
case 3259:
case 1958:
case 3188:
case 1010:
case 2882:
case 2160:
case 1344:
case 315:
case 803:
case 381:
case 2383:
case 2089:
case 536:
case 3384:
case 394:
case 3750:
case 1205:
case 1329:
case 276:
case 2665:
case 2739:
case 2187:
case 1628:
case 239:
case 1856:
case 1805:
case 2645:
case 3052:
case 2670:
case 1901:
case 3939:
case 396:
case 3376:
case 1463:
case 988:
case 3692:
case 230:
case 693:
case 3119:
case 2830:
case 611:
case 1586:
case 321:
case 2517:
case 685:
case 2140:
case 3326:
case 2611:
case 1569:
case 2962:
case 427:
case 949:
case 1174:
case 2257:
case 3742:
case 981:
case 2088:
case 3302:
case 186:
case 1839:
case 1328:
case 2738:
case 1548:
case 3737:
case 2681:
case 3087:
case 3465:
case 1516:
case 1378:
case 3166:
case 2402:
case 722:
case 3189:
case 3784:
case 1213:
case 2055:
case 3877:
case 576:
case 3642:
case 2783:
case 3533:
case 1729:
case 2534:
case 3122:
case 2033:
case 3350:
case 539:
case 1961:
case 4001:
case 279:
case 3596:
case 2096:
case 390:
case 3439:
case 1509:
case 2781:
case 1779:
case 1963:
case 3172:
case 4003:
case 23:
case 3362:
case 212:
case 129:
case 3241:
case 2770:
case 57:
case 180:
case 264:
case 3792:
case 1551:
case 1199:
case 1283:
case 1657:
case 3714:
case 3000:
case 1927:
case 4059:
case 1612:
case 2462:
case 999:
case 1330:
case 3215:
case 2720:
case 1598:
case 1553:
case 907:
case 3405:
case 3456:
case 3337:
case 1604:
case 3263:
case 2844:
case 1778:
case 2879:
case 701:
case 3911:
case 3438:
case 401:
case 1382:
case 3920:
case 3572:
case 2765:
case 505:
case 2072:
case 120:
case 3261:
case 3945:
case 189:
case 2356:
case 3342:
case 2395:
case 2992:
case 946:
case 3131:
case 569:
case 2590:
case 2914:
case 2829:
case 3090:
case 1915:
case 1811:
case 708:
case 473:
case 344:
case 1599:
case 1820:
case 1151:
case 4036:
case 1630:
case 252:
case 3227:
case 1764:
case 1458:
case 234:
case 2984:
case 1493:
case 2228:
case 3776:
case 1813:
case 574:
case 4091:
case 94:
case 1870:
case 1941:
case 2280:
case 1503:
case 1710:
case 2434:
case 3433:
case 2331:
case 3138:
case 1773:
case 3816:
case 2622:
case 761:
case 193:
case 3156:
case 2142:
case 1986:
case 68:
case 3848:
case 592:
case 3496:
case 3918:
case 356:
case 1723:
case 1607:
case 3334:
case 2847:
case 565:
case 206:
case 1219:
case 3946:
case 1888:
case 2789:
case 597:
case 2137:
case 3690:
case 111:
case 1771:
case 509:
case 1916:
case 3249:
case 4053:
case 3869:
case 1948:
case 4035:
case 2273:
case 768:
case 2221:
case 1354:
case 314:
case 624:
case 1030:
case 1451:
case 2210:
case 1780:
case 2271:
case 2960:
case 91:
case 3740:
case 1397:
case 1136:
case 4051:
case 1818:
case 3300:
case 1435:
case 3505:
case 3224:
case 1767:
case 1193:
case 2005:
case 2223:
case 2056:
case 691:
case 275:
case 3556:
case 2871:
case 2633:
case 2372:
case 1307:
case 2975:
case 3634:
case 1747:
case 3824:
case 3919:
case 3390:
case 1866:
case 2696:
case 1889:
case 3874:
case 1968:
case 2631:
case 3849:
case 1101:
case 2150:
case 2821:
case 2925:
case 2490:
case 731:
case 337:
case 1288:
case 914:
case 1924:
case 962:
case 3989:
case 1159:
case 2867:
case 204:
case 1499:
case 3752:
case 2306:
case 3600:
case 1057:
case 698:
case 242:
case 1094:
case 2232:
case 3105:
case 1012:
case 2880:
case 62:
case 1536:
case 995:
case 332:
case 2162:
case 31:
case 3868:
case 3717:
case 95:
case 1654:
case 1949:
case 3406:
case 2646:
case 3652:
case 3545:
case 1806:
case 50:
case 3570:
case 3972:
case 1468:
case 1797:
case 1163:
case 3340:
case 3014:
case 2990:
case 3513:
case 2319:
case 2013:
case 3700:
case 2514:
case 1255:
case 3092:
case 827:
case 2475:
case 2440:
case 950:
case 1161:
case 620:
case 1908:
case 1585:
case 2020:
case 3899:
case 1231:
case 1754:
case 3520:
case 3209:
case 2011:
case 1380:
case 3419:
case 1323:
case 2733:
case 3084:
case 265:
case 2083:
case 1541:
case 1127:
case 4024:
case 2807:
case 945:
case 2102:
case 2081:
case 3489:
case 3581:
case 2731:
case 1822:
case 3466:
case 3253:
case 1373:
case 1909:
case 778:
case 403:
case 4069:
case 2192:
case 1222:
case 3898:
case 547:
case 3853:
case 3835:
case 478:
case 3418:
case 3113:
case 3931:
case 4086:
case 3625:
case 3317:
case 3145:
case 2318:
case 3933:
case 2576:
case 3675:
case 2934:
case 3851:
case 3352:
case 3120:
case 3955:
case 542:
case 200:
case 1486:
case 2207:
case 1561:
case 2897:
case 1078:
case 1621:
case 680:
case 1527:
case 2460:
case 1610:
case 1141:
case 629:
case 1998:
case 3809:
case 3299:
case 1935:
case 771:
case 1673:
case 4048:
case 1831:
case 2689:
case 235:
case 1143:
case 3360:
case 2065:
case 575:
case 2772:
case 1623:
case 1028:
case 1347:
case 1115:
case 3002:
case 3181:
case 1577:
case 1951:
case 2502:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761256802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,];
var gg_b = "1761256802/";

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

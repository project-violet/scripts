// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 2989:
case 1060:
case 3283:
case 544:
case 2352:
case 384:
case 2690:
case 3028:
case 2943:
case 916:
case 2188:
case 1299:
case 3995:
case 3302:
case 1908:
case 3691:
case 1513:
case 3186:
case 32:
case 2427:
case 1096:
case 3640:
case 3431:
case 1718:
case 51:
case 2262:
case 2887:
case 3653:
case 862:
case 2970:
case 2198:
case 642:
case 3222:
case 3954:
case 3106:
case 3051:
case 3101:
case 1575:
case 2627:
case 1688:
case 1534:
case 483:
case 723:
case 3658:
case 3290:
case 4028:
case 1223:
case 2685:
case 3947:
case 1333:
case 2395:
case 1230:
case 2493:
case 3969:
case 3212:
case 22:
case 3799:
case 2856:
case 3420:
case 1035:
case 1985:
case 2167:
case 2519:
case 1399:
case 1092:
case 1295:
case 1369:
case 2191:
case 3914:
case 1899:
case 2471:
case 419:
case 2211:
case 3618:
case 1289:
case 775:
case 200:
case 4086:
case 1427:
case 4026:
case 3535:
case 1297:
case 281:
case 1812:
case 3378:
case 898:
case 1429:
case 972:
case 2963:
case 175:
case 1002:
case 1501:
case 2190:
case 2908:
case 1192:
case 3158:
case 3107:
case 3536:
case 1189:
case 1543:
case 3801:
case 2045:
case 4067:
case 3246:
case 2373:
case 1880:
case 184:
case 3440:
case 2757:
case 1152:
case 3626:
case 3957:
case 1372:
case 527:
case 1645:
case 3881:
case 728:
case 134:
case 131:
case 2366:
case 2142:
case 2228:
case 3798:
case 891:
case 2456:
case 2967:
case 2144:
case 1368:
case 3894:
case 2884:
case 2383:
case 1569:
case 3997:
case 3013:
case 1047:
case 705:
case 3521:
case 3047:
case 1678:
case 31:
case 734:
case 2158:
case 1377:
case 1084:
case 1821:
case 3781:
case 1338:
case 2089:
case 2743:
case 1310:
case 4012:
case 611:
case 3339:
case 3484:
case 2225:
case 3239:
case 3171:
case 102:
case 3105:
case 2151:
case 3681:
case 3093:
case 2969:
case 2283:
case 3624:
case 3454:
case 619:
case 873:
case 2376:
case 1252:
case 3058:
case 1144:
case 1453:
case 1415:
case 3503:
case 1693:
case 3152:
case 2630:
case 3709:
case 3202:
case 1302:
case 3821:
case 1925:
case 44:
case 3703:
case 1778:
case 3813:
case 1831:
case 830:
case 3470:
case 4056:
case 1149:
case 808:
case 1259:
case 3785:
case 1697:
case 2362:
case 3506:
case 2059:
case 1274:
case 120:
case 3754:
case 1482:
case 298:
case 2708:
case 1571:
case 2155:
case 1469:
case 3415:
case 2286:
case 3425:
case 3966:
case 2541:
case 3495:
case 849:
case 1419:
case 2023:
case 2993:
case 2987:
case 2664:
case 3398:
case 2022:
case 939:
case 3259:
case 1317:
case 1178:
case 2539:
case 2050:
case 3450:
case 266:
case 142:
case 2636:
case 2217:
case 755:
case 3096:
case 3753:
case 2682:
case 3858:
case 1839:
case 292:
case 752:
case 2531:
case 3960:
case 661:
case 925:
case 247:
case 607:
case 129:
case 4018:
case 284:
case 845:
case 3248:
case 2110:
case 2126:
case 1094:
case 1239:
case 17:
case 2127:
case 3764:
case 1316:
case 3061:
case 3218:
case 3528:
case 2656:
case 3668:
case 3699:
case 2412:
case 580:
case 3288:
case 2174:
case 1655:
case 3559:
case 1873:
case 991:
case 2730:
case 1866:
case 3910:
case 425:
case 450:
case 3359:
case 162:
case 2737:
case 1967:
case 2671:
case 1391:
case 1373:
case 2273:
case 1351:
case 3802:
case 1659:
case 1238:
case 1560:
case 2888:
case 525:
case 1970:
case 2596:
case 2476:
case 3642:
case 2090:
case 2375:
case 1224:
case 3161:
case 1397:
case 2657:
case 337:
case 3223:
case 3189:
case 1624:
case 3816:
case 1982:
case 24:
case 505:
case 3557:
case 2916:
case 305:
case 1079:
case 3306:
case 1617:
case 1395:
case 1634:
case 3925:
case 1406:
case 1106:
case 3335:
case 3865:
case 1540:
case 833:
case 3228:
case 2433:
case 1650:
case 4046:
case 3716:
case 860:
case 3456:
case 1379:
case 979:
case 2206:
case 3234:
case 1203:
case 2029:
case 368:
case 2953:
case 3602:
case 915:
case 1890:
case 1862:
case 2061:
case 3974:
case 1028:
case 1055:
case 12:
case 421:
case 3891:
case 2836:
case 3588:
case 1971:
case 2267:
case 2639:
case 3207:
case 670:
case 1578:
case 2713:
case 3609:
case 91:
case 2933:
case 3230:
case 3324:
case 2689:
case 2390:
case 3959:
case 515:
case 29:
case 159:
case 1147:
case 592:
case 3221:
case 3059:
case 2509:
case 1387:
case 2130:
case 744:
case 287:
case 484:
case 1424:
case 1364:
case 1305:
case 440:
case 3145:
case 3214:
case 3560:
case 3380:
case 1510:
case 643:
case 614:
case 2616:
case 491:
case 1402:
case 1086:
case 1173:
case 697:
case 960:
case 2660:
case 3739:
case 2301:
case 3116:
case 3522:
case 1743:
case 101:
case 1548:
case 1457:
case 3084:
case 3170:
case 1777:
case 1966:
case 797:
case 301:
case 2623:
case 1722:
case 2076:
case 1752:
case 1329:
case 2955:
case 989:
case 3869:
case 995:
case 352:
case 3035:
case 2355:
case 1611:
case 90:
case 3629:
case 2821:
case 1241:
case 937:
case 118:
case 3516:
case 2483:
case 1008:
case 1570:
case 706:
case 1648:
case 2486:
case 2401:
case 3584:
case 687:
case 4052:
case 3563:
case 3285:
case 3672:
case 456:
case 2635:
case 2867:
case 3182:
case 3656:
case 3457:
case 2293:
case 3874:
case 788:
case 3128:
case 807:
case 2791:
case 15:
case 2447:
case 487:
case 2762:
case 2232:
case 1707:
case 3002:
case 3836:
case 1668:
case 3:
case 1893:
case 2849:
case 2936:
case 2612:
case 1532:
case 2972:
case 1380:
case 28:
case 2696:
case 339:
case 1490:
case 3289:
case 1879:
case 502:
case 2035:
case 3162:
case 3402:
case 1872:
case 1163:
case 868:
case 931:
case 514:
case 1011:
case 699:
case 3295:
case 3090:
case 1819:
case 4089:
case 2904:
case 2411:
case 2654:
case 2064:
case 3863:
case 2323:
case 2385:
case 3345:
case 3769:
case 1962:
case 2619:
case 2687:
case 2553:
case 3756:
case 2221:
case 2122:
case 2629:
case 3179:
case 2797:
case 1053:
case 1646:
case 2258:
case 2280:
case 2141:
case 1888:
case 953:
case 2625:
case 1132:
case 1371:
case 376:
case 879:
case 934:
case 3958:
case 1413:
case 1288:
case 3395:
case 1293:
case 3569:
case 428:
case 1806:
case 1588:
case 1158:
case 4043:
case 2394:
case 3673:
case 2957:
case 3396:
case 3748:
case 2683:
case 2549:
case 3056:
case 265:
case 1347:
case 4048:
case 984:
case 3745:
case 2825:
case 1840:
case 1394:
case 21:
case 97:
case 2203:
case 2951:
case 3104:
case 1660:
case 1405:
case 3330:
case 3635:
case 3550:
case 2477:
case 2918:
case 3224:
case 3286:
case 3592:
case 1616:
case 2051:
case 4031:
case 2854:
case 464:
case 3448:
case 458:
case 2634:
case 2234:
case 622:
case 2052:
case 2254:
case 1508:
case 341:
case 1362:
case 454:
case 810:
case 1853:
case 230:
case 2474:
case 847:
case 2900:
case 1783:
case 865:
case 3983:
case 3187:
case 4054:
case 818:
case 2503:
case 821:
case 3353:
case 255:
case 1120:
case 573:
case 2864:
case 182:
case 3507:
case 1307:
case 878:
case 3385:
case 1133:
case 2923:
case 1032:
case 1119:
case 3379:
case 1095:
case 2384:
case 1758:
case 324:
case 2601:
case 3074:
case 1703:
case 3544:
case 1950:
case 1625:
case 1339:
case 615:
case 3438:
case 1847:
case 941:
case 1069:
case 1763:
case 233:
case 3854:
case 189:
case 1496:
case 789:
case 2778:
case 310:
case 507:
case 2318:
case 208:
case 843:
case 967:
case 3851:
case 1455:
case 2706:
case 2005:
case 4037:
case 2003:
case 1606:
case 1796:
case 1390:
case 3032:
case 635:
case 2536:
case 664:
case 1335:
case 3684:
case 2735:
case 3998:
case 825:
case 2075:
case 2785:
case 1517:
case 2410:
case 2436:
case 1036:
case 3553:
case 1649:
case 3811:
case 2617:
case 3848:
case 1813:
case 3021:
case 634:
case 307:
case 124:
case 2779:
case 3873:
case 130:
case 973:
case 2236:
case 1657:
case 1167:
case 3499:
case 3527:
case 3007:
case 2304:
case 451:
case 2501:
case 835:
case 2143:
case 3029:
case 3929:
case 3129:
case 2442:
case 1622:
case 2091:
case 379:
case 3272:
case 2789:
case 48:
case 1398:
case 3596:
case 263:
case 1562:
case 2666:
case 837:
case 3215:
case 3473:
case 751:
case 2314:
case 2962:
case 1343:
case 981:
case 2560:
case 1229:
case 1122:
case 87:
case 1439:
case 2733:
case 2672:
case 594:
case 3628:
case 681:
case 3444:
case 3778:
case 3303:
case 3469:
case 1953:
case 329:
case 1958:
case 2149:
case 2257:
case 2063:
case 4063:
case 1860:
case 330:
case 1724:
case 1263:
case 306:
case 2487:
case 3148:
case 1619:
case 3049:
case 1710:
case 1226:
case 772:
case 1521:
case 3548:
case 1361:
case 2815:
case 1087:
case 914:
case 117:
case 3446:
case 994:
case 846:
case 2803:
case 317:
case 3577:
case 529:
case 770:
case 698:
case 2249:
case 3322:
case 624:
case 1915:
case 1174:
case 2482:
case 3814:
case 539:
case 1015:
case 2804:
case 2357:
case 3052:
case 2561:
case 3150:
case 2164:
case 2405:
case 157:
case 1747:
case 1128:
case 2964:
case 1926:
case 543:
case 798:
case 828:
case 1020:
case 364:
case 1594:
case 1593:
case 1539:
case 1270:
case 3583:
case 1870:
case 3015:
case 600:
case 2397:
case 537:
case 3502:
case 3403:
case 3946:
case 509:
case 2037:
case 3244:
case 2565:
case 2281:
case 60:
case 3014:
case 4064:
case 1121:
case 935:
case 2729:
case 4079:
case 2977:
case 704:
case 3027:
case 523:
case 1261:
case 1669:
case 534:
case 3384:
case 597:
case 926:
case 710:
case 3685:
case 561:
case 1353:
case 1048:
case 1070:
case 444:
case 1784:
case 312:
case 2590:
case 1525:
case 2702:
case 126:
case 2732:
case 2937:
case 469:
case 3092:
case 1181:
case 3540:
case 1321:
case 2551:
case 495:
case 1559:
case 2086:
case 2479:
case 3210:
case 692:
case 3856:
case 1188:
case 2216:
case 3232:
case 2333:
case 885:
case 992:
case 1552:
case 470:
case 707:
case 2160:
case 1134:
case 1744:
case 36:
case 1898:
case 3936:
case 2446:
case 3080:
case 1761:
case 197:
case 4070:
case 1157:
case 3595:
case 2885:
case 1711:
case 1012:
case 2194:
case 4000:
case 1920:
case 2614:
case 2889:
case 2417:
case 1942:
case 2380:
case 2824:
case 116:
case 1984:
case 3404:
case 2294:
case 726:
case 3305:
case 1721:
case 3076:
case 3453:
case 1277:
case 3991:
case 1443:
case 1691:
case 2814:
case 2763:
case 3062:
case 3387:
case 1918:
case 1612:
case 1852:
case 1201:
case 3636:
case 3137:
case 4057:
case 3254:
case 3852:
case 638:
case 1445:
case 234:
case 2108:
case 1756:
case 2704:
case 2453:
case 3654:
case 2102:
case 1589:
case 2242:
case 2919:
case 1346:
case 1956:
case 1218:
case 2399:
case 137:
case 4027:
case 2949:
case 588:
case 3181:
case 716:
case 2716:
case 1799:
case 2783:
case 43:
case 2485:
case 2033:
case 1931:
case 3793:
case 1198:
case 3688:
case 65:
case 3060:
case 872:
case 1647:
case 3220:
case 1247:
case 1131:
case 1708:
case 64:
case 783:
case 930:
case 4034:
case 136:
case 4004:
case 1526:
case 1520:
case 413:
case 3547:
case 895:
case 300:
case 2266:
case 2697:
case 2340:
case 3067:
case 2310:
case 2966:
case 1911:
case 3498:
case 2403:
case 3732:
case 3907:
case 1357:
case 2072:
case 3546:
case 3033:
case 575:
case 431:
case 999:
case 2131:
case 2416:
case 743:
case 2496:
case 2592:
case 178:
case 1608:
case 774:
case 2934:
case 2152:
case 449:
case 2534:
case 3461:
case 4080:
case 2201:
case 1220:
case 3808:
case 503:
case 3604:
case 1977:
case 1493:
case 3556:
case 3413:
case 3312:
case 1017:
case 1161:
case 2851:
case 1378:
case 857:
case 3603:
case 3861:
case 169:
case 3942:
case 2598:
case 296:
case 574:
case 47:
case 2161:
case 1280:
case 688:
case 618:
case 3937:
case 3253:
case 367:
case 2848:
case 3565:
case 1447:
case 3269:
case 3911:
case 2381:
case 1997:
case 3488:
case 167:
case 4044:
case 1667:
case 1292:
case 2669:
case 420:
case 632:
case 1150:
case 2703:
case 1732:
case 340:
case 1686:
case 1779:
case 4006:
case 2429:
case 2831:
case 2290:
case 2230:
case 633:
case 19:
case 2917:
case 2473:
case 222:
case 2425:
case 1914:
case 2935:
case 606:
case 1564:
case 603:
case 2264:
case 41:
case 401:
case 3867:
case 3338:
case 1027:
case 1332:
case 3117:
case 405:
case 1786:
case 2566:
case 3752:
case 3767:
case 2276:
case 3931:
case 2103:
case 3264:
case 3780:
case 1529:
case 3971:
case 2674:
case 2361:
case 598:
case 826:
case 3741:
case 3459:
case 3912:
case 1824:
case 1005:
case 3112:
case 963:
case 2009:
case 1083:
case 418:
case 377:
case 2347:
case 3041:
case 3524:
case 579:
case 1723:
case 894:
case 82:
case 344:
case 3160:
case 3724:
case 2199:
case 475:
case 3980:
case 1304:
case 2101:
case 650:
case 1601:
case 3645:
case 1164:
case 1075:
case 2901:
case 1814:
case 737:
case 1903:
case 443:
case 1735:
case 1576:
case 685:
case 1185:
case 975:
case 3990:
case 2611:
case 2618:
case 1250:
case 457:
case 1895:
case 1168:
case 3390:
case 2339:
case 608:
case 2047:
case 3627:
case 2517:
case 264:
case 2388:
case 2096:
case 1057:
case 1265:
case 3255:
case 1580:
case 3422:
case 595:
case 3637:
case 152:
case 3270:
case 1437:
case 1046:
case 1281:
case 1392:
case 155:
case 1467:
case 1225:
case 910:
case 3788:
case 3321:
case 901:
case 206:
case 3178:
case 2641:
case 394:
case 1266:
case 1197:
case 1116:
case 165:
case 3896:
case 1354:
case 1969:
case 1423:
case 466:
case 2224:
case 163:
case 477:
case 2781:
case 2728:
case 1045:
case 682:
case 1441:
case 1298:
case 2173:
case 1780:
case 1573:
case 1882:
case 248:
case 3048:
case 3001:
case 2145:
case 2184:
case 2319:
case 765:
case 1440:
case 1115:
case 1358:
case 4029:
case 1666:
case 3659:
case 3734:
case 3901:
case 2320:
case 906:
case 1934:
case 490:
case 2121:
case 3772:
case 3213:
case 3927:
case 3817:
case 3908:
case 2421:
case 655:
case 4077:
case 3746:
case 800:
case 1885:
case 3057:
case 3763:
case 3838:
case 3705:
case 2159:
case 683:
case 447:
case 1713:
case 3759:
case 2439:
case 1480:
case 2675:
case 2235:
case 2119:
case 1375:
case 2912:
case 2196:
case 950:
case 3485:
case 3452:
case 1719:
case 18:
case 236:
case 548:
case 3755:
case 713:
case 351:
case 1433:
case 2764:
case 3647:
case 1481:
case 659:
case 2094:
case 3451:
case 71:
case 778:
case 2882:
case 2413:
case 2443:
case 3773:
case 3301:
case 1865:
case 3313:
case 3938:
case 485:
case 3114:
case 928:
case 3660:
case 2445:
case 3271:
case 2830:
case 3350:
case 1592:
case 1403:
case 2595:
case 190:
case 2874:
case 948:
case 3758:
case 2991:
case 2801:
case 318:
case 3429:
case 3118:
case 3465:
case 2879:
case 213:
case 1881:
case 3462:
case 2484:
case 1237:
case 3219:
case 2608:
case 1404:
case 2129:
case 2649:
case 1004:
case 741:
case 183:
case 3346:
case 2790:
case 291:
case 133:
case 3073:
case 3999:
case 777:
case 1193:
case 1557:
case 880:
case 4059:
case 3712:
case 3481:
case 654:
case 1129:
case 3038:
case 1636:
case 3304:
case 1169:
case 1267:
case 3479:
case 1272:
case 3030:
case 3471:
case 3809:
case 2906:
case 2334:
case 3475:
case 2570:
case 3501:
case 4036:
case 3149:
case 2026:
case 2106:
case 2002:
case 1630:
case 3408:
case 2676:
case 3574:
case 6:
case 2204:
case 1929:
case 2406:
case 2852:
case 1857:
case 733:
case 2337:
case 1388:
case 471:
case 959:
case 2927:
case 943:
case 2910:
case 127:
case 2312:
case 1184:
case 936:
case 1992:
case 1485:
case 3421:
case 2268:
case 2259:
case 2822:
case 1202:
case 3906:
case 2415:
case 3399:
case 1631:
case 1024:
case 3667:
case 613:
case 2945:
case 2647:
case 217:
case 2569:
case 971:
case 1737:
case 3257:
case 3871:
case 3698:
case 438:
case 2843:
case 2583:
case 4091:
case 315:
case 2288:
case 668:
case 2809:
case 2632:
case 2153:
case 1483:
case 1712:
case 3310:
case 533:
case 2105:
case 2845:
case 2207:
case 3005:
case 1736:
case 811:
case 2652:
case 3589:
case 349:
case 3670:
case 577:
case 4013:
case 2133:
case 3155:
case 2507:
case 3273:
case 2873:
case 4047:
case 293:
case 1062:
case 3880:
case 3542:
case 73:
case 2440:
case 2749:
case 3262:
case 2802:
case 2550:
case 3632:
case 3677:
case 2285:
case 1769:
case 3394:
case 1494:
case 2772:
case 2624:
case 3918:
case 3514:
case 2036:
case 1204:
case 1340:
case 23:
case 921:
case 658:
case 3655:
case 2799:
case 842:
case 648:
case 3951:
case 214:
case 3489:
case 256:
case 3072:
case 817:
case 732:
case 3889:
case 1097:
case 605:
case 262:
case 3652:
case 2123:
case 629:
case 3491:
case 874:
case 853:
case 2876:
case 2287:
case 446:
case 3293:
case 1210:
case 736:
case 3109:
case 1561:
case 1932:
case 1859:
case 2309:
case 2833:
case 2720:
case 3412:
case 8:
case 1990:
case 1919:
case 403:
case 1717:
case 1389:
case 3088:
case 3904:
case 1638:
case 582:
case 2082:
case 1460:
case 402:
case 2847:
case 74:
case 1988:
case 3686:
case 481:
case 546:
case 1473:
case 489:
case 154:
case 4072:
case 1944:
case 1487:
case 876:
case 467:
case 122:
case 3940:
case 3886:
case 4025:
case 2007:
case 2011:
case 1244:
case 2183:
case 2128:
case 1848:
case 1927:
case 3649:
case 2711:
case 410:
case 2069:
case 3864:
case 448:
case 2999:
case 345:
case 1754:
case 1349:
case 2686:
case 2798:
case 380:
case 1417:
case 1614:
case 3079:
case 2115:
case 3206:
case 354:
case 319:
case 3630:
case 819:
case 3996:
case 1207:
case 1996:
case 482:
case 912:
case 2306:
case 1186:
case 2372:
case 2307:
case 2435:
case 1714:
case 2202:
case 2409:
case 1054:
case 2579:
case 3872:
case 3075:
case 2180:
case 114:
case 3579:
case 1113:
case 2572:
case 3139:
case 493:
case 1123:
case 153:
case 2946:
case 1828:
case 2463:
case 3436:
case 2010:
case 3915:
case 1165:
case 2715:
case 138:
case 435:
case 1382:
case 2407:
case 2758:
case 1107:
case 1063:
case 1200:
case 3486:
case 2752:
case 3941:
case 1951:
case 1759:
case 1906:
case 1947:
case 3568:
case 884:
case 3903:
case 2700:
case 904:
case 1568:
case 3719:
case 2041:
case 68:
case 3348:
case 1511:
case 761:
case 889:
case 2714:
case 141:
case 2646:
case 3786:
case 2721:
case 1782:
case 1574:
case 1897:
case 2253:
case 359:
case 2998:
case 77:
case 2771:
case 511:
case 3132:
case 2227:
case 2633:
case 2360:
case 3855:
case 2837:
case 4055:
case 1180:
case 35:
case 2527:
case 2165:
case 689:
case 1727:
case 3697:
case 1745:
case 3000:
case 1922:
case 1430:
case 1980:
case 547:
case 2053:
case 1960:
case 958:
case 1344:
case 3371:
case 2147:
case 2195:
case 1206:
case 3731:
case 578:
case 3216:
case 30:
case 724:
case 2271:
case 3037:
case 3196:
case 3597:
case 3554:
case 796:
case 2012:
case 1874:
case 3097:
case 1311:
case 1258:
case 2062:
case 2450:
case 2893:
case 3972:
case 1509:
case 2481:
case 1249:
case 2891:
case 173:
case 1140:
case 3329:
case 1320:
case 381:
case 3231:
case 2296:
case 355:
case 3713:
case 84:
case 762:
case 902:
case 725:
case 3099:
case 299:
case 220:
case 1476:
case 3792:
case 1222:
case 2920:
case 1610:
case 338:
case 3445:
case 1464:
case 4061:
case 1755:
case 3127:
case 1556:
case 3366:
case 1477:
case 3085:
case 504:
case 461:
case 1468:
case 2800:
case 207:
case 333:
case 313:
case 649:
case 332:
case 1099:
case 822:
case 2650:
case 3374:
case 676:
case 1127:
case 907:
case 468:
case 2823:
case 3284:
case 1428:
case 1665:
case 2862:
case 2303:
case 0:
case 260:
case 1921:
case 1802:
case 33:
case 2994:
case 3757:
case 1826:
case 478:
case 1751:
case 1033:
case 2915:
case 2604:
case 1651:
case 414:
case 1833:
case 938:
case 270:
case 2767:
case 1456:
case 2325:
case 882:
case 2540:
case 55:
case 3009:
case 2261:
case 2154:
case 4022:
case 2298:
case 2591:
case 3989:
case 83:
case 303:
case 727:
case 1345:
case 1968:
case 1159:
case 2332:
case 445:
case 2329:
case 389:
case 1191:
case 2146:
case 3832:
case 3291:
case 2032:
case 3585:
case 103:
case 3411:
case 2243:
case 2526:
case 1807:
case 2528:
case 2282:
case 406:
case 3472:
case 2330:
case 1823:
case 3619:
case 3878:
case 903:
case 2229:
case 2424:
case 3975:
case 1135:
case 1690:
case 86:
case 718:
case 3010:
case 3837:
case 1190:
case 1182:
case 3829:
case 3512:
case 671:
case 70:
case 1748:
case 771:
case 4032:
case 1923:
case 3791:
case 1287:
case 1886:
case 1233:
case 242:
case 2818:
case 2208:
case 875:
case 1177:
case 4065:
case 1093:
case 4060:
case 2054:
case 226:
case 66:
case 2841:
case 4021:
case 3674:
case 3012:
case 945:
case 1940:
case 2525:
case 1100:
case 501:
case 245:
case 3340:
case 1851:
case 3561:
case 1145:
case 2218:
case 3245:
case 2379:
case 2941:
case 2389:
case 2279:
case 3280:
case 111:
case 2588:
case 2087:
case 4007:
case 3945:
case 918:
case 3782:
case 1296:
case 3607:
case 1211:
case 2349:
case 3898:
case 3172:
case 1941:
case 3669:
case 3227:
case 1515:
case 3679:
case 2001:
case 2605:
case 2926:
case 806:
case 2881:
case 2610:
case 1199:
case 80:
case 1365:
case 225:
case 3124:
case 1018:
case 2820:
case 1706:
case 76:
case 2828:
case 3360:
case 1148:
case 3069:
case 3768:
case 2530:
case 2974:
case 4019:
case 2462:
case 2515:
case 1136:
case 2497:
case 2775:
case 3558:
case 2844:
case 1832:
case 1478:
case 542:
case 2322:
case 3274:
case 1219:
case 1010:
case 2755:
case 1946:
case 852:
case 3121:
case 2505:
case 3362:
case 1102:
case 2886:
case 4093:
case 3526:
case 929:
case 834:
case 365:
case 297:
case 171:
case 1757:
case 67:
case 2472:
case 251:
case 295:
case 388:
case 593:
case 2924:
case 427:
case 3530:
case 1998:
case 2661:
case 1336:
case 2898:
case 2302:
case 4005:
case 2250:
case 1066:
case 2077:
case 3287:
case 3108:
case 1208:
case 1334:
case 3701:
case 1981:
case 1720:
case 3405:
case 631:
case 1613:
case 4069:
case 1000:
case 3646:
case 2863:
case 3849:
case 3933:
case 1523:
case 2044:
case 2925:
case 3464:
case 408:
case 78:
case 3355:
case 2753:
case 779:
case 2996:
case 3923:
case 2554:
case 3601:
case 942:
case 871:
case 2354:
case 3418:
case 836:
case 3944:
case 109:
case 1449:
case 572:
case 3125:
case 1519:
case 1545:
case 1705:
case 1498:
case 1676:
case 2768:
case 3707:
case 3572:
case 793:
case 3068:
case 2139:
case 1815:
case 1300:
case 1741:
case 3332:
case 599:
case 3955:
case 3992:
case 1790:
case 530:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1717081201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,];
var gg_b = "1717081201/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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

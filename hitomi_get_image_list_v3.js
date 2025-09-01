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
case 2964:
case 341:
case 1910:
case 1027:
case 931:
case 358:
case 2185:
case 3748:
case 2561:
case 98:
case 3496:
case 2132:
case 1437:
case 3844:
case 3503:
case 667:
case 3060:
case 3192:
case 966:
case 2026:
case 1392:
case 1715:
case 3742:
case 3219:
case 1291:
case 3340:
case 662:
case 862:
case 1098:
case 3296:
case 2352:
case 1835:
case 3177:
case 901:
case 1327:
case 2688:
case 3768:
case 867:
case 3695:
case 2944:
case 1377:
case 964:
case 3305:
case 2682:
case 3908:
case 2236:
case 2955:
case 538:
case 1963:
case 1548:
case 2530:
case 475:
case 178:
case 3643:
case 1675:
case 2091:
case 1336:
case 671:
case 1197:
case 3136:
case 721:
case 36:
case 294:
case 2969:
case 3432:
case 2277:
case 1703:
case 2875:
case 3607:
case 2498:
case 3072:
case 699:
case 1351:
case 2227:
case 540:
case 2825:
case 3:
case 1542:
case 2746:
case 1178:
case 1801:
case 1036:
case 3097:
case 3328:
case 19:
case 758:
case 610:
case 2292:
case 950:
case 3925:
case 899:
case 1767:
case 3663:
case 3378:
case 3869:
case 2119:
case 1426:
case 2157:
case 683:
case 1562:
case 3285:
case 3770:
case 2427:
case 520:
case 871:
case 2037:
case 2298:
case 3331:
case 1172:
case 3686:
case 4075:
case 1051:
case 3604:
case 3549:
case 2830:
case 2274:
case 3259:
case 467:
case 1029:
case 1848:
case 1755:
case 2224:
case 2334:
case 853:
case 534:
case 2575:
case 123:
case 2581:
case 3394:
case 2411:
case 1744:
case 2100:
case 2525:
case 2012:
case 1194:
case 2984:
case 935:
case 1950:
case 356:
case 3506:
case 3884:
case 1239:
case 2318:
case 536:
case 980:
case 1329:
case 2662:
case 2990:
case 788:
case 3129:
case 3782:
case 2034:
case 2474:
case 1868:
case 4030:
case 3569:
case 2233:
case 1862:
case 3417:
case 325:
case 2710:
case 905:
case 2211:
case 3930:
case 2312:
case 2795:
case 3245:
case 3133:
case 388:
case 3847:
case 3555:
case 499:
case 3465:
case 2508:
case 242:
case 559:
case 1223:
case 1199:
case 1966:
case 4041:
case 3400:
case 1333:
case 2989:
case 3609:
case 2279:
case 309:
case 3254:
case 725:
case 2743:
case 754:
case 176:
case 2502:
case 3941:
case 52:
case 1074:
case 2193:
case 27:
case 2339:
case 1661:
case 1011:
case 1423:
case 3701:
case 4061:
case 1946:
case 3200:
case 875:
case 2903:
case 1473:
case 1412:
case 572:
case 3445:
case 1582:
case 3265:
case 3353:
case 2620:
case 1234:
case 3174:
case 410:
case 1588:
case 2159:
case 54:
case 1324:
case 1116:
case 174:
case 1787:
case 339:
case 3961:
case 745:
case 3124:
case 756:
case 2763:
case 1909:
case 119:
case 2479:
case 1374:
case 2947:
case 3454:
case 3739:
case 1956:
case 1928:
case 3500:
case 1325:
case 94:
case 3181:
case 549:
case 2919:
case 1837:
case 257:
case 3175:
case 381:
case 1636:
case 1978:
case 1282:
case 2106:
case 216:
case 3565:
case 1375:
case 11:
case 1381:
case 690:
case 2408:
case 2402:
case 175:
case 1972:
case 1288:
case 1651:
case 2149:
case 3444:
case 2799:
case 1922:
case 676:
case 1931:
case 726:
case 2208:
case 3857:
case 1025:
case 3255:
case 30:
case 3545:
case 214:
case 1081:
case 3656:
case 1435:
case 3628:
case 279:
case 1075:
case 529:
case 92:
case 724:
case 4036:
case 2753:
case 755:
case 674:
case 746:
case 3464:
case 3554:
case 3622:
case 2996:
case 1891:
case 2301:
case 1488:
case 3819:
case 2529:
case 3672:
case 55:
case 3613:
case 959:
case 619:
case 2202:
case 807:
case 3010:
case 2892:
case 1302:
case 1201:
case 1700:
case 3095:
case 3269:
case 3449:
case 505:
case 961:
case 3102:
case 2088:
case 3734:
case 3640:
case 2082:
case 3871:
case 3108:
case 1960:
case 3406:
case 346:
case 3287:
case 324:
case 2533:
case 936:
case 637:
case 2475:
case 2511:
case 2035:
case 1905:
case 1745:
case 3395:
case 1677:
case 1858:
case 837:
case 2574:
case 73:
case 2921:
case 3249:
case 1401:
case 3814:
case 1627:
case 1195:
case 832:
case 781:
case 2524:
case 1876:
case 2658:
case 2780:
case 2626:
case 2281:
case 153:
case 2877:
case 1008:
case 326:
case 643:
case 344:
case 3718:
case 2827:
case 607:
case 3660:
case 3346:
case 678:
case 2592:
case 4024:
case 728:
case 1633:
case 3284:
case 2917:
case 1268:
case 1611:
case 1146:
case 2070:
case 199:
case 2639:
case 1262:
case 385:
case 792:
case 3974:
case 2797:
case 490:
case 1041:
case 1916:
case 797:
case 3309:
case 3083:
case 89:
case 3161:
case 69:
case 2320:
case 3653:
case 1757:
case 3911:
case 263:
case 110:
case 1166:
case 2722:
case 2731:
case 3484:
case 2370:
case 3933:
case 419:
case 3514:
case 940:
case 2713:
case 2772:
case 1576:
case 4011:
case 2778:
case 3141:
case 1674:
case 2728:
case 369:
case 1462:
case 1552:
case 3383:
case 3817:
case 2167:
case 4033:
case 1242:
case 878:
case 3290:
case 423:
case 3929:
case 2241:
case 2634:
case 3800:
case 1537:
case 287:
case 730:
case 3979:
case 1980:
case 348:
case 2115:
case 2190:
case 3304:
case 4029:
case 501:
case 2068:
case 167:
case 1270:
case 3130:
case 4079:
case 993:
case 1220:
case 1721:
case 769:
case 3403:
case 1679:
case 3758:
case 3680:
case 1873:
case 1812:
case 3845:
case 3004:
case 1629:
case 3776:
case 407:
case 1714:
case 908:
case 2261:
case 2618:
case 1420:
case 3203:
case 1994:
case 2184:
case 2368:
case 1150:
case 3854:
case 3489:
case 1818:
case 397:
case 3350:
case 3519:
case 58:
case 2829:
case 989:
case 3752:
case 4005:
case 2632:
case 1102:
case 522:
case 2344:
case 854:
case 1449:
case 533:
case 4060:
case 3700:
case 2671:
case 527:
case 1838:
case 1010:
case 3302:
case 2685:
case 277:
case 2599:
case 3905:
case 612:
case 645:
case 2926:
case 1821:
case 916:
case 2443:
case 1832:
case 2355:
case 124:
case 1406:
case 3960:
case 3692:
case 617:
case 155:
case 2976:
case 1108:
case 2638:
case 1640:
case 441:
case 1734:
case 503:
case 2044:
case 259:
case 3195:
case 71:
case 817:
case 2860:
case 3627:
case 3110:
case 991:
case 3858:
case 1310:
case 2188:
case 1559:
case 3002:
case 845:
case 1998:
case 3677:
case 2805:
case 542:
case 2516:
case 1992:
case 1660:
case 22:
case 421:
case 1487:
case 144:
case 2729:
case 57:
case 1517:
case 2135:
case 353:
case 3381:
case 31:
case 839:
case 4031:
case 1697:
case 3375:
case 3282:
case 3978:
case 1455:
case 3636:
case 1175:
case 3837:
case 2306:
case 1063:
case 13:
case 261:
case 1307:
case 2897:
case 3922:
case 2349:
case 1444:
case 609:
case 3288:
case 2069:
case 4028:
case 2733:
case 3523:
case 1043:
case 3075:
case 1656:
case 3435:
case 2724:
case 3081:
case 2872:
case 3512:
case 10:
case 3573:
case 1857:
case 3482:
case 3025:
case 1678:
case 2831:
case 2006:
case 2774:
case 1613:
case 3717:
case 2828:
case 2049:
case 1951:
case 2937:
case 1819:
case 3891:
case 1244:
case 1622:
case 2101:
case 2878:
case 1464:
case 1631:
case 2410:
case 1386:
case 639:
case 2657:
case 2495:
case 1304:
case 445:
case 2894:
case 456:
case 1865:
case 2142:
case 1267:
case 1447:
case 148:
case 412:
case 2315:
case 1596:
case 658:
case 641:
case 710:
case 3537:
case 596:
case 1800:
case 3738:
case 417:
case 2597:
case 3721:
case 1050:
case 3220:
case 3732:
case 362:
case 4080:
case 2973:
case 570:
case 2148:
case 3771:
case 3834:
case 1130:
case 3270:
case 783:
case 3785:
case 2446:
case 3714:
case 771:
case 1776:
case 3629:
case 594:
case 1004:
case 3812:
case 2090:
case 1247:
case 3873:
case 2162:
case 2209:
case 1680:
case 2522:
case 3679:
case 2654:
case 2531:
case 3030:
case 2466:
case 2246:
case 1350:
case 1519:
case 841:
case 2727:
case 2384:
case 511:
case 995:
case 197:
case 3818:
case 1489:
case 2578:
case 3150:
case 2645:
case 2777:
case 192:
case 1893:
case 3146:
case 371:
case 4016:
case 3953:
case 3448:
case 66:
case 884:
case 293:
case 1066:
case 3611:
case 2250:
case 2540:
case 3839:
case 1737:
case 3633:
case 265:
case 1346:
case 2899:
case 1161:
case 1309:
case 982:
case 2736:
case 1532:
case 3041:
case 2693:
case 1521:
case 6:
case 1974:
case 238:
case 987:
case 1415:
case 185:
case 1585:
case 3361:
case 1490:
case 1924:
case 2067:
case 1366:
case 2120:
case 2617:
case 2450:
case 2003:
case 2389:
case 1933:
case 886:
case 1859:
case 3248:
case 439:
case 3526:
case 3468:
case 0:
case 3999:
case 2505:
case 310:
case 2816:
case 3757:
case 2047:
case 762:
case 1215:
case 3552:
case 2939:
case 1009:
case 3462:
case 169:
case 767:
case 383:
case 1616:
case 2659:
case 460:
case 16:
case 600:
case 3625:
case 1214:
case 1438:
case 2606:
case 3197:
case 3336:
case 2019:
case 2807:
case 1056:
case 3258:
case 3226:
case 3681:
case 3963:
case 1022:
case 2901:
case 1031:
case 1:
case 3542:
case 2057:
case 1471:
case 481:
case 3351:
case 1072:
case 3986:
case 1013:
case 2504:
case 830:
case 3703:
case 1421:
case 2843:
case 43:
case 1975:
case 3426:
case 3458:
case 3943:
case 4007:
case 3767:
case 2405:
case 582:
case 1925:
case 2687:
case 264:
case 39:
case 1328:
case 1097:
case 2240:
case 1584:
case 1238:
case 2460:
case 1414:
case 2550:
case 2741:
case 3051:
case 1221:
case 1686:
case 2357:
case 1720:
case 1232:
case 3172:
case 1322:
case 40:
case 201:
case 1271:
case 1770:
case 184:
case 3562:
case 1285:
case 800:
case 1372:
case 651:
case 595:
case 2385:
case 2988:
case 1496:
case 892:
case 2371:
case 3398:
case 563:
case 2231:
case 1748:
case 2222:
case 2730:
case 2644:
case 3995:
case 446:
case 79:
case 897:
case 141:
case 2332:
case 828:
case 2338:
case 994:
case 3715:
case 1742:
case 3392:
case 1192:
case 4095:
case 1503:
case 2497:
case 3140:
case 4010:
case 1844:
case 3608:
case 2278:
case 3377:
case 121:
case 1567:
case 2071:
case 444:
case 1610:
case 2664:
case 2422:
case 3327:
case 2032:
case 2583:
case 3835:
case 3098:
case 1296:
case 2472:
case 3160:
case 2810:
case 2038:
case 3520:
case 2297:
case 1040:
case 2895:
case 3105:
case 250:
case 3570:
case 2126:
case 996:
case 518:
case 851:
case 1360:
case 3333:
case 1400:
case 873:
case 3966:
case 1111:
case 1053:
case 2809:
case 1465:
case 1555:
case 2603:
case 3212:
case 2725:
case 3661:
case 3434:
case 707:
case 743:
case 2846:
case 4066:
case 1941:
case 376:
case 3706:
case 2647:
case 2393:
case 1803:
case 702:
case 3024:
case 2781:
case 1254:
case 1544:
case 2280:
case 1353:
case 3412:
case 3473:
case 2294:
case 3769:
case 205:
case 469:
case 4009:
case 1200:
case 3423:
case 1701:
case 2317:
case 60:
case 1666:
case 3535:
case 2883:
case 213:
case 1099:
case 1564:
case 2480:
case 83:
case 3909:
case 3820:
case 2667:
case 723:
case 1961:
case 139:
case 3116:
case 374:
case 673:
case 732:
case 3870:
case 1174:
case 3234:
case 97:
case 3439:
case 2962:
case 4050:
case 3079:
case 229:
case 1080:
case 2216:
case 1493:
case 1259:
case 514:
case 1604:
case 1549:
case 3950:
case 3842:
case 1815:
case 947:
case 337:
case 719:
case 3194:
case 451:
case 2045:
case 1890:
case 112:
case 3744:
case 2499:
case 3630:
case 1394:
case 2804:
case 332:
case 624:
case 323:
case 774:
case 846:
case 1569:
case 855:
case 2354:
case 998:
case 3868:
case 3379:
case 790:
case 824:
case 3904:
case 2586:
case 1782:
case 1129:
case 1735:
case 249:
case 3329:
case 2850:
case 2942:
case 3180:
case 3239:
case 492:
case 1179:
case 2453:
case 626:
case 307:
case 2299:
case 2123:
case 2684:
case 428:
case 2065:
case 125:
case 927:
case 1417:
case 2112:
case 1587:
case 2173:
case 1094:
case 3862:
case 2257:
case 44:
case 1332:
case 2855:
case 3964:
case 3185:
case 1222:
case 1730:
case 3808:
case 796:
case 3561:
case 2198:
case 1371:
case 3132:
case 1988:
case 1213:
case 1385:
case 583:
case 3076:
case 770:
case 2503:
case 2192:
case 3436:
case 1014:
case 3026:
case 1546:
case 3802:
case 2219:
case 1935:
case 2340:
case 2296:
case 1413:
case 1021:
case 3750:
case 3541:
case 3688:
case 794:
case 1422:
case 1085:
case 1664:
case 1431:
case 2567:
case 42:
case 2457:
case 1071:
case 4055:
case 2695:
case 2360:
case 1314:
case 1126:
case 2589:
case 150:
case 1297:
case 1895:
case 2040:
case 2305:
case 2908:
case 3682:
case 459:
case 4044:
case 3955:
case 3358:
case 3326:
case 3709:
case 3530:
case 1807:
case 2397:
case 3091:
case 1606:
case 166:
case 3492:
case 2136:
case 693:
case 1260:
case 2438:
case 2214:
case 1440:
case 461:
case 394:
case 26:
case 1761:
case 131:
case 3969:
case 2607:
case 3875:
case 1843:
case 3277:
case 1649:
case 3498:
case 2013:
case 2471:
case 3227:
case 286:
case 4087:
case 638:
case 2806:
case 3746:
case 2515:
case 2:
case 396:
case 3391:
case 2414:
case 1460:
case 2097:
case 838:
case 1240:
case 3783:
case 2356:
case 2328:
case 1886:
case 3119:
case 1191:
case 2313:
case 370:
case 2770:
case 3427:
case 434:
case 608:
case 2331:
case 865:
case 2686:
case 2232:
case 1863:
case 3949:
case 1134:
case 3274:
case 3830:
case 2604:
case 2259:
case 1708:
case 677:
case 1216:
case 2493:
case 3224:
case 976:
case 672:
case 3334:
case 1690:
case 217:
case 1543:
case 1365:
case 3100:
case 1499:
case 859:
case 212:
case 990:
case 798:
case 15:
case 3012:
case 2890:
case 2506:
case 2217:
case 256:
case 245:
case 3318:
case 2179:
case 2884:
case 3154:
case 1850:
case 1942:
case 974:
case 715:
case 3990:
case 3662:
case 919:
case 2782:
case 2129:
case 51:
case 84:
case 747:
case 1416:
case 1118:
case 2380:
case 3474:
case 3145:
case 254:
case 1173:
case 4015:
case 225:
case 2417:
case 575:
case 1123:
case 3211:
case 77:
case 1299:
case 877:
case 3795:
case 2930:
case 3312:
case 1000:
case 1345:
case 1563:
case 636:
case 4067:
case 2847:
case 2245:
case 3707:
case 923:
case 315:
case 1017:
case 932:
case 2399:
case 438:
case 3861:
case 2400:
case 303:
case 2111:
case 347:
case 1970:
case 3989:
case 2646:
case 3279:
case 1139:
case 1280:
case 2609:
case 3967:
case 2254:
case 1781:
case 493:
case 2941:
case 1059:
case 661:
case 260:
case 902:
case 2666:
case 327:
case 1883:
case 1317:
case 3841:
case 861:
case 2701:
case 606:
case 3670:
case 1689:
case 3903:
case 333:
case 3620:
case 943:
case 634:
case 2867:
case 2353:
case 3786:
case 1093:
case 2174:
case 3159:
case 2961:
case 180:
case 804:
case 2683:
case 1667:
case 2316:
case 1480:
case 489:
case 2564:
case 1359:
case 1510:
case 2500:
case 431:
case 2739:
case 3851:
case 2063:
case 3919:
case 1306:
case 136:
case 1991:
case 2896:
case 2565:
case 3106:
case 281:
case 2343:
case 635:
case 4057:
case 2697:
case 1087:
case 104:
case 352:
case 3637:
case 805:
case 1069:
case 668:
case 2086:
case 502:
case 1210:
case 1711:
case 2444:
case 3799:
case 466:
case 1295:
case 1897:
case 161:
case 3001:
case 3836:
case 1774:
case 1006:
case 106:
case 2936:
case 1831:
case 953:
case 2857:
case 3187:
case 2545:
case 314:
case 401:
case 1724:
case 379:
case 2628:
case 134:
case 2656:
case 868:
case 2043:
case 1619:
case 273:
case 532:
case 3753:
case 835:
case 1878:
case 1410:
case 2631:
case 2244:
case 3301:
case 3996:
case 1049:
case 3202:
case 3529:
case 714:
case 1685:
case 177:
case 1064:
case 3892:
case 2927:
case 1671:
case 1840:
case 2095:
case 3144:
case 2269:
case 172:
case 1344:
case 1407:
case 2593:
case 1621:
case 779:
case 1632:
case 3088:
case 2102:
case 629:
case 14:
case 2734:
case 1976:
case 2871:
case 2108:
case 3425:
case 3082:
case 791:
case 3533:
case 2885:
case 2287:
case 2832:
case 1926:
case 1958:
case 1599:
case 3511:
case 849:
case 3481:
case 91:
case 65:
case 2773:
case 85:
case 1486:
case 2998:
case 2559:
case 2310:
case 3932:
case 3921:
case 1860:
case 3164:
case 3985:
case 4038:
case 1044:
case 159:
case 3971:
case 3524:
case 829:
case 3626:
case 3780:
case 1553:
case 4032:
case 1243:
case 1135:
case 4085:
case 3676:
case 2206:
case 1182:
case 3938:
case 2487:
case 244:
case 2718:
case 2660:
case 1055:
case 3827:
case 967:
case 165:
case 3103:
case 2284:
case 1540:
case 1250:
case 3020:
case 3917:
case 468:
case 2538:
case 4059:
case 2066:
case 193:
case 1089:
case 666:
case 1067:
case 2924:
case 3639:
case 3147:
case 2585:
case 4017:
case 3797:
case 2521:
case 2974:
case 1347:
case 138:
case 1736:
case 3598:
case 2161:
case 2309:
case 1899:
case 435:
case 2653:
case 4093:
case 88:
case 787:
case 1505:
case 1816:
case 1170:
case 3874:
case 2859:
case 2046:
case 2933:
case 1003:
case 1560:
case 831:
case 395:
case 1450:
case 1120:
case 3772:
case 3713:
case 3824:
case 413:
case 866:
case 2141:
case 1659:
case 3778:
case 1204:
case 1853:
case 1367:
case 2383:
case 3756:
case 1939:
case 269:
case 3728:
case 405:
case 2215:
case 2817:
case 2791:
case 3527:
case 2290:
case 1047:
case 999:
case 2929:
case 59:
case 2800:
case 3634:
case 3551:
case 387:
case 3342:
case 248:
case 2979:
case 2865:
case 4045:
case 3954:
case 2267:
case 251:
case 1142:
case 382:
case 1894:
case 2304:
case 3062:
case 1409:
case 1446:
case 1923:
case 120:
case 3068:
case 1266:
case 2289:
case 1600:
case 2130:
case 4054:
case 2694:
case 1973:
case 1798:
case 2050:
case 1665:
case 1084:
case 971:
case 2403:
case 578:
case 1209:
case 2758:
case 1522:
case 4065:
case 2845:
case 228:
case 1483:
case 1513:
case 2776:
case 1572:
case 3441:
case 3261:
case 292:
case 910:
case 2203:
case 718:
case 1777:
case 3368:
case 3184:
case 2854:
case 449:
case 297:
case 2489:
case 2519:
case 1727:
case 3623:
case 3829:
case 3048:
case 3900:
case 1528:
case 1466:
case 1556:
case 2752:
case 2765:
case 3286:
case 734:
case 3407:
case 3344:
case 2698:
case 3952:
case 3671:
case 2302:
case 3064:
case 2308:
case 1511:
case 2905:
case 3599:
case 3443:
case 3958:
case 981:
case 1533:
case 1155:
case 1914:
case 2960:
case 4052:
case 3976:
case 1425:
case 93:
case 34:
case 1524:
case 2876:
case 1388:
case 1164:
case 2401:
case 1574:
case 1921:
case 2826:
case 3364:
case 3188:
case 3207:
case 2745:
case 2677:
case 1225:
case 3055:
case 3614:
case 32:
case 2852:
case 1335:
case 3182:
case 1938:
case 2008:
case 761:
case 253:
case 3135:
case 1877:
case 3243:
case 509:
case 1382:
case 90:
case 2754:
case 1281:
case 1658:
case 1780:
case 603:
case 3594:
case 411:
case 2375:
case 759:
case 2793:
case 647:
case 946:
case 2837:
case 157:
case 955:
case 3306:
case 336:
case 3991:
case 1919:
case 2325:
case 1851:
case 2956:
case 642:
case 2928:
case 1001:
case 361:
case 1836:
case 494:
case 3897:
case 2922:
case 3295:
case 827:
case 3349:
case 3711:
case 67:
case 1149:
case 833:
case 2534:
case 2972:
case 2288:
case 554:
case 2913:
case 3696:
case 822:
case 1402:
case 275:
case 3069:
case 1637:
case 772:
case 2075:
case 622:
case 334:
case 2435:
case 179:
case 926:
case 3872:
case 633:
case 4037:
case 3724:
case 3813:
case 2573:
case 87:
case 2512:
case 114:
case 1187:
case 2025:
case 2482:
case 627:
case 3006:
case 2759:
case 1208:
case 2997:
case 2186:
case 2717:
case 3856:
case 3937:
case 2518:
case 815:
case 1996:
case 1579:
case 74:
case 3410:
case 517:
case 3878:
case 1753:
case 3657:
case 3495:
case 1190:
case 3894:
case 182:
case 1115:
case 4073:
case 3142:
case 4012:
case 789:
case 2980:
case 3792:
case 2104:
case 1551:
case 1461:
case 3597:
case 3084:
case 2220:
case 2732:
case 3665:
case 1348:
case 900:
case 1945:
case 3912:
case 584:
case 2771:
case 3148:
case 2834:
case 3600:
case 2785:
case 1068:
case 3266:
case 1618:
case 1760:
case 2714:
case 1441:
case 56:
case 2629:
case 3572:
case 3513:
case 3934:
case 1362:
case 2873:
case 2679:
case 3209:
case 3531:
case 3654:
case 3015:
case 738:
case 3556:
case 3528:
case 1900:
case 340:
case 1829:
case 3246:
case 1048:
case 930:
case 1623:
case 3727:
case 586:
case 5:
case 3168:
case 2150:
case 1965:
case 1368:
case 1184:
case 1673:
case 3777:
case 2994:
case 3645:
case 2420:
case 1430:
case 2611:
case 521:
case 393:
case 1917:
case 3250:
case 365:
case 2796:
case 3404:
case 2916:
case 447:
case 2041:
case 1959:
case 896:
case 3736:
case 338:
case 3347:
case 951:
case 740:
case 1797:
case 442:
case 2262:
case 1639:
case 415:
case 3067:
case 498:
case 1824:
case 1713:
case 1772:
case 2576:
case 195:
case 997:
case 3560:
case 1370:
case 3389:
case 3003:
case 811:
case 2248:
case 1731:
case 1189:
case 1874:
case 541:
case 2468:
case 3170:
case 163:
case 210:
case 2999:
case 308:
case 3047:
case 2341:
case 2719:
case 2624:
case 2242:
case 1167:
case 1728:
case 2462:
case 2552:
case 3939:
case 1756:
case 928:
case 670:
case 2061:
case 1577:
case 3204:
case 1778:
case 427:
case 3440:
case 4001:
case 1987:
case 2276:
case 1492:
case 2197:
case 3019:
case 2336:
case 278:
case 2747:
case 2675:
case 3807:
case 2226:
case 1530:
case 2963:
case 2681:
case 452:
case 1337:
case 2542:
case 1746:
case 111:
case 3396:
case 3901:
case 3057:
case 1825:
case 416:
case 38:
case 2351:
case 457:
case 1881:
case 2986:
case 592:
case 1875:
case 2703:
case 750:
case 1969:
case 618:
case 331:
case 2458:
case 818:
case 551:
case 548:
case 3191:
case 3886:
case 3405:
case 2476:
case 663:
case 1783:
case 364:
case 491:
case 3741:
case 3319:
case 2036:
case 1391:
case 2178:
case 2801:
case 1906:
case 921:
case 1949:
case 1477:
case 2113:
case 479:
case 3669:
case 1298:
case 414:
case 1427:
case 2789:
case 1766:
case 2452:
case 1157:
case 986:
case 3385:
case 1121:
case 9:
case 4035:
case 3272:
case 1451:
case 2077:
case 682:
case 1808:
case 2398:
case 2995:
case 3222:
case 3321:
case 1185:
case 2910:
case 2027:
case 3935:
case 2790:
case 3338:
case 1802:
case 2715:
case 3655:
case 1436:
case 3152:
case 3071:
case 766:
case 3422:
case 3085:
case 3032:
case 2327:
case 1688:
case 1541:
case 1750:
case 2835:
case 3472:
case 3413:
case 1326:
case 3810:
case 1114:
case 2160:
case 3478:
case 1682:
case 1236:
case 2520:
case 3176:
case 3038:
case 3895:
case 3297:
case 1376:
case 731:
case 1635:
case 2105:
case 350:
case 3428:
case 3566:
case 3126:
case 585:
case 2491:
case 2888:
case 1989:
case 956:
case 3970:
case 912:
case 3809:
case 1508:
case 3017:
case 657:
case 115:
case 917:
case 2212:
case 1707:
case 1339:
case 17:
case 526:
case 2434:
case 2218:
case 1193:
case 2706:
case 1229:
case 3775:
case 3393:
case 4020:
case 1743:
case 368:
case 2024:
case 879:
case 3139:
case 1279:
case 1117:
case 1786:
case 679:
case 1620:
case 133:
case 2412:
case 1903:
case 2033:
case 3294:
case 122:
case 2769:
case 2946:
case 614:
case 3317:
case 3883:
case 925:
case 127:
case 2011:
case 3510:
case 3359:
case 1479:
case 198:
case 75:
case 1947:
case 3480:
case 3595:
case 1763:
case 274:
case 2787:
case 3866:
case 852:
case 2641:
case 2588:
case 816:
case 1159:
case 463:
case 524:
case 2234:
case 546:
case 555:
case 2870:
case 705:
case 3690:
case 3615:
case 1018:
case 2755:
case 2848:
case 4068:
case 2029:
case 1830:
case 3134:
case 2950:
case 1165:
case 482:
case 1984:
case 1012:
case 3045:
case 3300:
case 35:
case 3804:
case 3499:
case 573:
case 232:
case 1581:
case 1648:
case 988:
case 1023:
case 1575:
case 223:
case 780:
case 1474:
case 3416:
case 1034:
case 735:
case 3586:
case 349:
case 1424:
case 1915:
case 3942:
case 3850:
case 2501:
case 2180:
case 3948:
case 3453:
case 1312:
case 243:
case 3299:
case 207:
case 1211:
case 1668:
case 3123:
case 3684:
case 960:
case 202:
case 4042:
case 2862:
case 1145:
case 3112:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756756801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,];
var gg_b = "1756756801/";

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

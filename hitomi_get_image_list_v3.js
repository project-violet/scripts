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
var o = 1;
switch (g) {
case 1982:
case 1654:
case 1123:
case 1555:
case 132:
case 2065:
case 2874:
case 3174:
case 1635:
case 526:
case 560:
case 3342:
case 3189:
case 1147:
case 1224:
case 2062:
case 2726:
case 3698:
case 40:
case 4077:
case 4037:
case 1730:
case 3270:
case 1080:
case 106:
case 1762:
case 56:
case 2913:
case 622:
case 927:
case 2820:
case 2907:
case 618:
case 2704:
case 2785:
case 2276:
case 2804:
case 2362:
case 1840:
case 288:
case 2473:
case 2116:
case 1899:
case 507:
case 490:
case 4060:
case 3222:
case 3999:
case 104:
case 2248:
case 3381:
case 3774:
case 704:
case 3486:
case 1847:
case 1638:
case 562:
case 2320:
case 1750:
case 432:
case 3140:
case 1340:
case 3694:
case 2327:
case 1314:
case 2149:
case 2960:
case 2559:
case 402:
case 870:
case 1989:
case 9:
case 235:
case 218:
case 1406:
case 2289:
case 1432:
case 3719:
case 424:
case 3505:
case 3080:
case 1165:
case 2632:
case 1512:
case 2313:
case 51:
case 3234:
case 647:
case 3884:
case 426:
case 1898:
case 3042:
case 2351:
case 506:
case 724:
case 1980:
case 2287:
case 1235:
case 2443:
case 20:
case 396:
case 1688:
case 2166:
case 3812:
case 3683:
case 4093:
case 1985:
case 1608:
case 2043:
case 2614:
case 2165:
case 1454:
case 2890:
case 1975:
case 1598:
case 1097:
case 3932:
case 18:
case 3299:
case 2585:
case 257:
case 2494:
case 169:
case 1262:
case 4036:
case 1001:
case 3117:
case 1594:
case 3773:
case 365:
case 787:
case 55:
case 2904:
case 1692:
case 1740:
case 1202:
case 2279:
case 2866:
case 2196:
case 2403:
case 717:
case 2875:
case 3685:
case 2393:
case 49:
case 491:
case 2591:
case 428:
case 3475:
case 1523:
case 589:
case 2439:
case 2694:
case 3145:
case 652:
case 1120:
case 3313:
case 1565:
case 2830:
case 336:
case 2098:
case 2840:
case 3747:
case 977:
case 3600:
case 2792:
case 1520:
case 3911:
case 2058:
case 2135:
case 1355:
case 3465:
case 2734:
case 3987:
case 3699:
case 6:
case 4052:
case 376:
case 298:
case 3380:
case 305:
case 1094:
case 3364:
case 2247:
case 1110:
case 2350:
case 2109:
case 1955:
case 1600:
case 1341:
case 248:
case 1496:
case 1813:
case 3531:
case 186:
case 2654:
case 3318:
case 4048:
case 3646:
case 2036:
case 2593:
case 2288:
case 1712:
case 1064:
case 131:
case 3874:
case 1307:
case 3501:
case 180:
case 2478:
case 3325:
case 3218:
case 1865:
case 2481:
case 1498:
case 265:
case 3089:
case 1152:
case 3640:
case 431:
case 253:
case 2987:
case 3030:
case 813:
case 1928:
case 3143:
case 2849:
case 3424:
case 1309:
case 2946:
case 2493:
case 308:
case 3781:
case 387:
case 2933:
case 2371:
case 3777:
case 2394:
case 1000:
case 2366:
case 574:
case 1911:
case 2386:
case 1795:
case 2110:
case 2207:
case 1724:
case 1873:
case 3831:
case 731:
case 2431:
case 3427:
case 940:
case 433:
case 1758:
case 1987:
case 2558:
case 680:
case 808:
case 2453:
case 3502:
case 781:
case 3141:
case 1266:
case 2906:
case 2552:
case 816:
case 4006:
case 1318:
case 2496:
case 2755:
case 1922:
case 3197:
case 2119:
case 1941:
case 3317:
case 946:
case 1088:
case 2708:
case 1332:
case 3354:
case 2543:
case 1844:
case 3832:
case 68:
case 400:
case 1757:
case 3277:
case 611:
case 1379:
case 607:
case 1315:
case 310:
case 1792:
case 2862:
case 2123:
case 1894:
case 1752:
case 3548:
case 489:
case 1167:
case 3713:
case 3861:
case 675:
case 1687:
case 2405:
case 1434:
case 2609:
case 1643:
case 3490:
case 2314:
case 341:
case 1607:
case 3413:
case 145:
case 1283:
case 2033:
case 1494:
case 2263:
case 2883:
case 2322:
case 3190:
case 989:
case 2986:
case 672:
case 2941:
case 1153:
case 3301:
case 514:
case 355:
case 2465:
case 2709:
case 2835:
case 3594:
case 1587:
case 594:
case 1457:
case 1883:
case 824:
case 1465:
case 691:
case 3092:
case 1732:
case 1613:
case 3901:
case 1125:
case 2182:
case 1866:
case 3508:
case 3258:
case 2356:
case 197:
case 443:
case 1451:
case 2373:
case 711:
case 713:
case 1366:
case 1713:
case 2905:
case 3448:
case 2012:
case 1856:
case 2898:
case 3434:
case 171:
case 3399:
case 1745:
case 2857:
case 2677:
case 2497:
case 1444:
case 558:
case 4083:
case 3404:
case 2309:
case 2035:
case 119:
case 3573:
case 2783:
case 1252:
case 1214:
case 3647:
case 3687:
case 4090:
case 313:
case 1803:
case 213:
case 2291:
case 1891:
case 641:
case 1826:
case 13:
case 1400:
case 394:
case 2550:
case 421:
case 958:
case 3224:
case 987:
case 3055:
case 2931:
case 3931:
case 2939:
case 3332:
case 2059:
case 1814:
case 2869:
case 2988:
case 3436:
case 3660:
case 1192:
case 2674:
case 1392:
case 2687:
case 2415:
case 1853:
case 1819:
case 2385:
case 2234:
case 1383:
case 2048:
case 3527:
case 139:
case 1691:
case 1774:
case 1248:
case 2002:
case 2464:
case 3540:
case 902:
case 1363:
case 3630:
case 598:
case 2516:
case 3460:
case 930:
case 2158:
case 752:
case 2092:
case 2114:
case 3848:
case 1070:
case 2091:
case 2174:
case 340:
case 2970:
case 3718:
case 1827:
case 854:
case 1176:
case 147:
case 1387:
case 825:
case 3707:
case 2055:
case 3202:
case 1264:
case 2739:
case 701:
case 1673:
case 911:
case 1706:
case 1247:
case 5:
case 1726:
case 3155:
case 3568:
case 3638:
case 3601:
case 3173:
case 2080:
case 3751:
case 3010:
case 467:
case 2315:
case 220:
case 1101:
case 3852:
case 3906:
case 22:
case 3351:
case 2577:
case 414:
case 3515:
case 2925:
case 949:
case 3138:
case 1306:
case 2168:
case 2126:
case 1604:
case 1798:
case 2321:
case 3334:
case 582:
case 3680:
case 3302:
case 250:
case 3119:
case 70:
case 903:
case 36:
case 465:
case 1554:
case 442:
case 1131:
case 1042:
case 2814:
case 4041:
case 3941:
case 2981:
case 3237:
case 1223:
case 1936:
case 1663:
case 653:
case 2210:
case 3344:
case 1661:
case 786:
case 3038:
case 3726:
case 474:
case 579:
case 3285:
case 3393:
case 878:
case 3093:
case 3248:
case 398:
case 3965:
case 1119:
case 3686:
case 1903:
case 2702:
case 1634:
case 2512:
case 3784:
case 3918:
case 344:
case 3714:
case 2302:
case 2359:
case 3108:
case 2142:
case 3869:
case 2624:
case 3547:
case 681:
case 1653:
case 604:
case 1098:
case 3106:
case 1495:
case 2038:
case 3786:
case 2482:
case 747:
case 2621:
case 3598:
case 2122:
case 3060:
case 3772:
case 1620:
case 2628:
case 1417:
case 369:
case 141:
case 1242:
case 965:
case 3169:
case 968:
case 1227:
case 769:
case 1499:
case 3016:
case 2311:
case 546:
case 2670:
case 1942:
case 964:
case 556:
case 164:
case 59:
case 3454:
case 660:
case 2467:
case 3009:
case 2801:
case 2557:
case 3760:
case 2072:
case 2231:
case 2095:
case 2850:
case 1996:
case 1350:
case 2689:
case 531:
case 231:
case 971:
case 1589:
case 2766:
case 1877:
case 778:
case 140:
case 3800:
case 1428:
case 3585:
case 2131:
case 3756:
case 2504:
case 851:
case 2648:
case 1859:
case 170:
case 1049:
case 2428:
case 3847:
case 1352:
case 3504:
case 2583:
case 4057:
case 1815:
case 2243:
case 1151:
case 3056:
case 1246:
case 4080:
case 512:
case 1953:
case 2997:
case 3593:
case 3883:
case 1367:
case 4065:
case 2606:
case 2274:
case 1829:
case 3553:
case 3036:
case 2353:
case 53:
case 1526:
case 2268:
case 290:
case 2026:
case 2749:
case 3496:
case 2032:
case 698:
case 694:
case 1616:
case 658:
case 661:
case 204:
case 4068:
case 3423:
case 1310:
case 2019:
case 2469:
case 3592:
case 3002:
case 963:
case 1563:
case 1351:
case 3425:
case 2367:
case 2253:
case 461:
case 3319:
case 2487:
case 956:
case 3090:
case 2771:
case 150:
case 295:
case 1253:
case 1333:
case 2406:
case 2432:
case 1441:
case 2544:
case 1203:
case 2206:
case 2238:
case 105:
case 1111:
case 3919:
case 3171:
case 2003:
case 4027:
case 2870:
case 1833:
case 1429:
case 3761:
case 942:
case 3989:
case 2903:
case 485:
case 1615:
case 4032:
case 4069:
case 2173:
case 2105:
case 2384:
case 3758:
case 644:
case 1497:
case 1255:
case 3164:
case 2000:
case 3610:
case 3878:
case 2006:
case 280:
case 758:
case 469:
case 768:
case 3236:
case 1937:
case 838:
case 1365:
case 63:
case 1024:
case 983:
case 1896:
case 2754:
case 3251:
case 3535:
case 2751:
case 179:
case 741:
case 3915:
case 122:
case 1284:
case 568:
case 814:
case 1889:
case 3648:
case 714:
case 3243:
case 2:
case 738:
case 3890:
case 270:
case 1016:
case 3854:
case 2220:
case 703:
case 1842:
case 557:
case 3252:
case 684:
case 3262:
case 3104:
case 3368:
case 3206:
case 541:
case 3649:
case 3653:
case 3998:
case 3887:
case 3503:
case 3711:
case 1675:
case 385:
case 1537:
case 544:
case 3984:
case 561:
case 249:
case 1534:
case 446:
case 1710:
case 2205:
case 3192:
case 650:
case 1700:
case 2155:
case 3347:
case 4094:
case 3795:
case 2024:
case 1420:
case 3449:
case 320:
case 2523:
case 3992:
case 1012:
case 2548:
case 3400:
case 1096:
case 1013:
case 1135:
case 649:
case 1059:
case 1784:
case 456:
case 2603:
case 1590:
case 2894:
case 273:
case 3091:
case 222:
case 2239:
case 3322:
case 3967:
case 2867:
case 722:
case 1409:
case 3820:
case 3787:
case 3541:
case 777:
case 860:
case 3459:
case 1058:
case 2266:
case 4034:
case 1267:
case 2673:
case 3870:
case 1215:
case 2427:
case 1515:
case 3968:
case 3043:
case 629:
case 3371:
case 1698:
case 4095:
case 914:
case 321:
case 3743:
case 2711:
case 1268:
case 3065:
case 2056:
case 2112:
case 3483:
case 223:
case 1892:
case 2623:
case 1964:
case 183:
case 2333:
case 799:
case 2145:
case 1336:
case 1861:
case 1023:
case 1821:
case 277:
case 3216:
case 259:
case 1632:
case 3111:
case 912:
case 3398:
case 3167:
case 3397:
case 1259:
case 2475:
case 943:
case 1386:
case 609:
case 3059:
case 1522:
case 4055:
case 309:
case 2301:
case 3432:
case 3693:
case 2360:
case 3494:
case 2022:
case 800:
case 3271:
case 3075:
case 889:
case 2955:
case 1848:
case 2147:
case 2576:
case 3179:
case 699:
case 3759:
case 3049:
case 1196:
case 3926:
case 3997:
case 1521:
case 3296:
case 3723:
case 785:
case 2202:
case 1237:
case 871:
case 1423:
case 3731:
case 3778:
case 837:
case 3588:
case 637:
case 2810:
case 1073:
case 2108:
case 2697:
case 85:
case 1890:
case 33:
case 246:
case 2521:
case 2758:
case 3037:
case 640:
case 3331:
case 501:
case 3841:
case 3826:
case 934:
case 753:
case 2700:
case 606:
case 807:
case 3631:
case 3925:
case 677:
case 21:
case 2742:
case 42:
case 1342:
case 2082:
case 896:
case 1320:
case 790:
case 3396:
case 1791:
case 154:
case 1185:
case 3838:
case 1467:
case 2137:
case 3214:
case 2344:
case 2489:
case 2488:
case 1356:
case 522:
case 1084:
case 488:
case 2759:
case 2723:
case 3715:
case 4064:
case 1689:
case 791:
case 1453:
case 2241:
case 324:
case 3022:
case 801:
case 2729:
case 2306:
case 4058:
case 89:
case 1182:
case 527:
case 3921:
case 3032:
case 2642:
case 2390:
case 867:
case 788:
case 471:
case 2444:
case 668:
case 3052:
case 3125:
case 3993:
case 2553:
case 2908:
case 1801:
case 632:
case 3220:
case 794:
case 255:
case 2246:
case 1060:
case 2740:
case 3650:
case 770:
case 3048:
case 3330:
case 1053:
case 405:
case 3628:
case 760:
case 2164:
case 1549:
case 3154:
case 2470:
case 3076:
case 457:
case 2779:
case 3488:
case 2256:
case 863:
case 1405:
case 2211:
case 623:
case 737:
case 2143:
case 3705:
case 2426:
case 1102:
case 2545:
case 2657:
case 3377:
case 472:
case 2412:
case 797:
case 1917:
case 1624:
case 3336:
case 1561:
case 1699:
case 3241:
case 3450:
case 549:
case 602:
case 2159:
case 492:
case 291:
case 1543:
case 1312:
case 1802:
case 3072:
case 892:
case 4092:
case 1045:
case 94:
case 3549:
case 3131:
case 374:
case 3509:
case 4063:
case 1501:
case 890:
case 2451:
case 3872:
case 2902:
case 356:
case 617:
case 185:
case 3815:
case 2111:
case 985:
case 2828:
case 1619:
case 1993:
case 252:
case 766:
case 497:
case 3339:
case 1751:
case 2722:
case 1686:
case 3046:
case 1067:
case 1761:
case 113:
case 3669:
case 1039:
case 517:
case 4029:
case 669:
case 1433:
case 3576:
case 559:
case 323:
case 292:
case 3386:
case 2626:
case 144:
case 111:
case 2815:
case 1220:
case 2551:
case 3570:
case 3160:
case 2949:
case 4015:
case 3688:
case 2304:
case 610:
case 3964:
case 3620:
case 318:
case 3830:
case 267:
case 1285:
case 1998:
case 716:
case 1393:
case 2715:
case 3908:
case 754:
case 3599:
case 3487:
case 809:
case 2832:
case 2919:
case 174:
case 853:
case 2966:
case 2705:
case 2844:
case 4030:
case 173:
case 3004:
case 1601:
case 3025:
case 1062:
case 3314:
case 1952:
case 1005:
case 2860:
case 1551:
case 3290:
case 2041:
case 2222:
case 1038:
case 4046:
case 3748:
case 642:
case 445:
case 866:
case 1640:
case 3571:
case 916:
case 3927:
case 2685:
case 133:
case 1960:
case 69:
case 2775:
case 2047:
case 2374:
case 2732:
case 588:
case 554:
case 1776:
case 3928:
case 572:
case 1435:
case 662:
case 935:
case 1536:
case 2124:
case 2753:
case 1807:
case 3740:
case 2622:
case 2921:
case 941:
case 3395:
case 182:
case 2326:
case 3720:
case 2858:
case 3205:
case 2738:
case 719:
case 209:
case 3797:
case 1719:
case 2619:
case 2805:
case 2387:
case 2995:
case 3341:
case 1921:
case 1831:
case 3769:
case 2617:
case 1845:
case 3775:
case 3479:
case 2780:
case 1930:
case 1962:
case 571:
case 2529:
case 1335:
case 2042:
case 1832:
case 98:
case 1296:
case 3414:
case 1449:
case 1330:
case 167:
case 685:
case 1540:
case 664:
case 2480:
case 2750:
case 1805:
case 3980:
case 283:
case 3067:
case 3783:
case 3297:
case 269:
case 2600:
case 2613:
case 2060:
case 3858:
case 2176:
case 3944:
case 121:
case 2153:
case 1124:
case 2773:
case 2215:
case 2364:
case 666:
case 177:
case 4022:
case 1030:
case 1463:
case 3738:
case 2502:
case 901:
case 35:
case 1385:
case 194:
case 2016:
case 3097:
case 3401:
case 2138:
case 2447:
case 455:
case 1302:
case 1582:
case 87:
case 2075:
case 2462:
case 2169:
case 3239:
case 689:
case 3158:
case 1577:
case 3324:
case 1078:
case 1923:
case 1849:
case 450:
case 1508:
case 952:
case 207:
case 2837:
case 3293:
case 1175:
case 2329:
case 2355:
case 2731:
case 3040:
case 1626:
case 1354:
case 3833:
case 1425:
case 2275:
case 3254:
case 251:
case 3578:
case 480:
case 163:
case 412:
case 2972:
case 3151:
case 1934:
case 3376:
case 3014:
case 573:
case 3982:
case 1933:
case 3954:
case 3690:
case 521:
case 730:
case 2250:
case 1234:
case 2324:
case 2915:
case 2560:
case 2885:
case 3940:
case 605:
case 430:
case 1464:
case 2090:
case 1099:
case 1517:
case 440:
case 368:
case 110:
case 2104:
case 1925:
case 1487:
case 1107:
case 3981:
case 845:
case 2195:
case 447:
case 667:
case 2259:
case 1835:
case 3161:
case 2937:
case 1887:
case 2484:
case 2083:
case 159:
case 4018:
case 1968:
case 3682:
case 232:
case 1280:
case 966:
case 1082:
case 181:
case 975:
case 3665:
case 2563:
case 3379:
case 2948:
case 537:
case 848:
case 1115:
case 2375:
case 3507:
case 764:
case 3259:
case 1492:
case 2954:
case 3734:
case 821:
case 3209:
case 2530:
case 659:
case 3162:
case 2186:
case 1221:
case 1718:
case 1074:
case 101:
case 750:
case 3306:
case 3493:
case 1200:
case 2710:
case 1144:
case 721:
case 77:
case 2281:
case 1647:
case 3159:
case 2252:
case 3681:
case 850:
case 1531:
case 3157:
case 874:
case 2841:
case 188:
case 1326:
case 1191:
case 655:
case 1011:
case 1591:
case 3803:
case 3776:
case 1741:
case 3249:
case 477:
case 3315:
case 1906:
case 2410:
case 3807:
case 3976:
case 2300:
case 2514:
case 576:
case 762:
case 1816:
case 435:
case 2477:
case 1156:
case 3028:
case 4000:
case 3500:
case 3265:
case 2251:
case 1837:
case 1388:
case 2629:
case 3829:
case 529:
case 258:
case 2991:
case 3279:
case 2175:
case 1376:
case 2892:
case 967:
case 2261:
case 1187:
case 756:
case 2434:
case 1789:
case 3788:
case 2332:
case 1734:
case 3946:
case 3388:
case 628:
case 1516:
case 1282:
case 2282:
case 621:
case 3407:
case 4047:
case 2466:
case 3391:
case 493:
case 1914:
case 1118:
case 1630:
case 2649:
case 3895:
case 1482:
case 2479:
case 2307:
case 1198:
case 2877:
case 2224:
case 2181:
case 3814:
case 239:
case 603:
case 1935:
case 2846:
case 1249:
case 3303:
case 3064:
case 986:
case 315:
case 950:
case 3749:
case 3390:
case 3543:
case 2221:
case 2086:
case 643:
case 819:
case 833:
case 4042:
case 937:
case 2684:
case 1768:
case 1243:
case 1105:
case 1116:
case 3110:
case 3949:
case 1943:
case 479:
case 41:
case 2486:
case 4003:
case 3491:
case 2457:
case 1729:
case 991:
case 2370:
case 1132:
case 4043:
case 1573:
case 1447:
case 3937:
case 114:
case 37:
case 247:
case 3358:
case 919:
case 2044:
case 1019:
case 1459:
case 3608:
case 1397:
case 189:
case 234:
case 2233:
case 2201:
case 2615:
case 1738:
case 3712:
case 998:
case 1769:
case 2468:
case 1164:
case 17:
case 3426:
case 3499:
case 3708:
case 112:
case 3643:
case 3211:
case 282:
case 1438:
case 3013:
case 2645:
case 789:
case 2148:
case 1809:
case 2743:
case 2422:
case 2565:
case 2483:
case 2209:
case 2398:
case 1169:
case 2833:
case 3834:
case 3113:
case 2492:
case 1450:
case 2592:
case 3790:
case 475:
case 420:
case 2912:
case 236:
case 2914:
case 3101:
case 1251:
case 1990:
case 217:
case 3922:
case 3978:
case 3433:
case 1201:
case 2066:
case 3602:
case 2106:
case 109:
case 683:
case 2547:
case 2799:
case 3532:
case 2440:
case 1893:
case 2416:
case 805:
case 2520:
case 2927:
case 1345:
case 2257:
case 1244:
case 2076:
case 3316:
case 339:
case 2293:
case 823:
case 1694:
case 3626:
case 2208:
case 2515:
case 2139:
case 233:
case 2597:
case 3456:
case 1440:
case 1150:
case 3058:
case 1205:
case 3506:
case 852:
case 2663:
case 3170:
case 1066:
case 2686:
case 3232:
case 1825:
case 2692:
case 1037:
case 2358:
case 2235:
case 125:
case 550:
case 2757:
case 1920:
case 3114:
case 2968:
case 3000:
case 2244:
case 3636:
case 466:
case 900:
case 842:
case 2855:
case 3516:
case 2404:
case 2417:
case 2688:
case 1572:
case 3952:
case 362:
case 3495:
case 3706:
case 1403:
case 3309:
case 75:
case 835:
case 3995:
case 1695:
case 1468:
case 1612:
case 1901:
case 509:
case 511:
case 2886:
case 3008:
case 1052:
case 2420:
case 3645:
case 858:
case 498:
case 2806:
case 3614:
case 2608:
case 1621:
case 1419:
case 3765:
case 2125:
case 47:
case 1448:
case 3822:
case 1051:
case 1867:
case 3910:
case 3733:
case 3087:
case 2994:
case 1189:
case 1304:
case 1394:
case 2744:
case 2328:
case 3529:
case 834:
case 3641:
case 2884:
case 3126:
case 241:
case 3695:
case 886:
case 1489:
case 1009:
case 2879:
case 812:
case 3622:
case 3383:
case 1230:
case 2448:
case 1241:
case 3904:
case 2391:
case 2009:
case 1584:
case 3261:
case 3556:
case 1864:
case 354:
case 2021:
case 3363:
case 925:
case 349:
case 2402:
case 636:
case 3282:
case 2015:
case 996:
case 3:
case 1159:
case 2538:
case 539:
case 2859:
case 3212:
case 570:
case 1958:
case 1300:
case 3664:
case 3947:
case 2951:
case 4044:
case 1347:
case 1969:
case 1377:
case 271:
case 4089:
case 2568:
case 1145:
case 1236:
case 238:
case 2423:
case 2286:
case 3152:
case 953:
case 2967:
case 3739:
case 3559:
case 4079:
case 2916:
case 3188:
case 1368:
case 1778:
case 3281:
case 2459:
case 3066:
case 3909:
case 2635:
case 1226:
case 3737:
case 1519:
case 695:
case 254:
case 631:
case 2554:
case 3466:
case 3039:
case 172:
case 2928:
case 3896:
case 3463:
case 520:
case 2625:
case 1295:
case 2102:
case 1339:
case 2285:
case 2564:
case 1558:
case 2976:
case 2777:
case 578:
case 3802:
case 415:
case 437:
case 1851:
case 2141:
case 303:
case 3742:
case 1183:
case 143:
case 596:
case 2978:
case 3639:
case 2717:
case 1988:
case 553:
case 481:
case 2511:
case 2500:
case 4072:
case 380:
case 1622:
case 3533:
case 1919:
case 2013:
case 3116:
case 1662:
case 1571:
case 3484:
case 3470:
case 1676:
case 2652:
case 3402:
case 2004:
case 1880:
case 1412:
case 4017:
case 627:
case 2901:
case 129:
case 1460:
case 740:
case 1913:
case 3204:
case 3605:
case 1389:
case 1511:
case 3789:
case 1588:
case 4012:
case 2471:
case 2129:
case 3725:
case 1491:
case 1559:
case 1685:
case 1753:
case 2868:
case 1766:
case 155:
case 3730:
case 3308:
case 3021:
case 1431:
case 3752:
case 3674:
case 3012:
case 3035:
case 2348:
case 2161:
case 1547:
case 3288:
case 1711:
case 865:
case 757:
case 361:
case 516:
case 836:
case 2725:
case 904:
case 3329:
case 2399:
case 3613:
case 4005:
case 1361:
case 3274:
case 366:
case 3445:
case 663:
case 1421:
case 3512:
case 2640:
case 1477:
case 1636:
case 1337:
case 2989:
case 745:
case 3821:
case 2310:
case 3528:
case 2330:
case 3753:
case 1349:
case 100:
case 107:
case 1806:
case 2582:
case 2943:
case 648:
case 2269:
case 3590:
case 1812:
case 2690:
case 3538:
case 2784:
case 583:
case 1707:
case 1755:
case 3818:
case 3525:
case 2982:
case 2539:
case 1748:
case 1271:
case 4061:
case 2821:
case 2845:
case 931:
case 3421:
case 1293:
case 1811:
case 1678:
case 1882:
case 1157:
case 1286:
case 28:
case 1574:
case 2682:
case 3912:
case 1529:
case 2863:
case 3034:
case 1103:
case 3824:
case 2762:
case 615:
case 1034:
case 3203:
case 508:
case 1535:
case 1579:
case 651:
case 3438:
case 1846:
case 3851:
case 1288:
case 1273:
case 2566:
case 2318:
case 2490:
case 4009:
case 3361:
case 3637:
case 3658:
case 3129:
case 3939:
case 894:
case 4045:
case 451:
case 2501:
case 2678:
case 4024:
case 1674:
case 1697:
case 1063:
case 1206:
case 3885:
case 2923:
case 984:
case 843:
case 2413:
case 80:
case 32:
case 1566:
case 3675:
case 2499:
case 2485:
case 2120:
case 577:
case 3250:
case 2160:
case 4070:
case 3677:
case 3443:
case 1736:
case 1456:
case 536:
case 3566:
case 2068:
case 893:
case 1818:
case 152:
case 3785:
case 3865:
case 3519:
case 1782:
case 287:
case 884:
case 214:
case 1276:
case 3717:
case 2491:
case 3382:
case 2297:
case 1513:
case 2537:
case 1907:
case 1462:
case 202:
case 3917:
case 2887:
case 1999:
case 1618:
case 3728:
case 383:
case 3291:
case 3536:
case 1372:
case 3005:
case 2620:
case 2680:
case 993:
case 2703:
case 3015:
case 1931:
case 3079:
case 3546:
case 116:
case 2441:
case 3375:
case 826:
case 1965:
case 3061:
case 3284:
case 2361:
case 2634:
case 3983:
case 3328:
case 1260:
case 1956:
case 3898:
case 224:
case 1720:
case 1781:
case 3083:
case 2049:
case 1134:
case 3632:
case 3703:
case 3654:
case 3709:
case 2979:
case 3041:
case 67:
case 831:
case 708:
case 614:
case 1218:
case 3300:
case 117:
case 2085:
case 444:
case 1763:
case 1129:
case 3804:
case 3195:
case 2144:
case 3135:
case 1747:
case 3045:
case 45:
case 2990:
case 2651:
case 272:
case 2429:
case 2357:
case 1411:
case 2073:
case 3603:
case 2836:
case 2881:
case 1128:
case 857:
case 2945:
case 1323:
case 645:
case 2998:
case 126:
case 3811:
case 994:
case 959:
case 678:
case 279:
case 3635:
case 1476:
case 2183:
case 3123:
case 3900:
case 673:
case 3255:
case 3574:
case 2929:
case 3651:
case 1876:
case 2718:
case 2232:
case 1416:
case 2014:
case 2940:
case 2103:
case 2595:
case 2809:
case 1250:
case 3225:
case 4039:
case 3575:
case 1656:
case 841:
case 1693:
case 2236:
case 3562:
case 3482:
case 2262:
case 3623:
case 1334:
case 765:
case 613:
case 23:
case 3233:
case 96:
case 1422:
case 1959:
case 2508:
case 2097:
case 2555:
case 335:
case 679:
case 3902:
case 3130:
case 4021:
case 319:
case 783:
case 2605:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1720364401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,];
var gg_b = "1720364401/";

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

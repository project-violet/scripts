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
case 679:
case 1889:
case 109:
case 544:
case 3749:
case 339:
case 3171:
case 2637:
case 3224:
case 851:
case 3494:
case 1168:
case 331:
case 2472:
case 3120:
case 1603:
case 801:
case 101:
case 671:
case 249:
case 3562:
case 2189:
case 2314:
case 3062:
case 165:
case 865:
case 1362:
case 2963:
case 2850:
case 276:
case 26:
case 222:
case 241:
case 1071:
case 3371:
case 319:
case 3061:
case 1578:
case 1520:
case 1606:
case 3068:
case 1285:
case 1368:
case 2965:
case 311:
case 1078:
case 687:
case 2862:
case 1350:
case 3378:
case 1020:
case 2290:
case 2409:
case 2389:
case 499:
case 543:
case 2194:
case 963:
case 1162:
case 3739:
case 2478:
case 2210:
case 2420:
case 3172:
case 3478:
case 3210:
case 1450:
case 616:
case 3194:
case 881:
case 1791:
case 1468:
case 1205:
case 3389:
case 1686:
case 570:
case 1976:
case 889:
case 189:
case 3966:
case 1685:
case 2050:
case 1975:
case 3965:
case 2550:
case 595:
case 1206:
case 2371:
case 376:
case 1683:
case 825:
case 125:
case 2372:
case 636:
case 1973:
case 3868:
case 2062:
case 607:
case 1820:
case 877:
case 1878:
case 1997:
case 2562:
case 534:
case 231:
case 2120:
case 2178:
case 2494:
case 513:
case 2414:
case 924:
case 2109:
case 2237:
case 2224:
case 708:
case 4076:
case 239:
case 3637:
case 1371:
case 59:
case 819:
case 1568:
case 463:
case 991:
case 3606:
case 584:
case 3361:
case 1061:
case 1550:
case 3009:
case 3578:
case 2872:
case 3571:
case 3350:
case 1378:
case 111:
case 811:
case 1320:
case 3078:
case 1561:
case 1050:
case 3509:
case 710:
case 2976:
case 1690:
case 2798:
case 774:
case 2686:
case 3162:
case 2718:
case 1739:
case 1610:
case 281:
case 2791:
case 1247:
case 2589:
case 1749:
case 139:
case 3889:
case 2654:
case 309:
case 3161:
case 351:
case 1764:
case 1414:
case 2792:
case 3254:
case 647:
case 359:
case 3603:
case 3150:
case 773:
case 831:
case 131:
case 1120:
case 2809:
case 748:
case 1562:
case 730:
case 2871:
case 3362:
case 2917:
case 1062:
case 2820:
case 3940:
case 162:
case 862:
case 583:
case 1372:
case 2683:
case 3072:
case 325:
case 141:
case 86:
case 3514:
case 16:
case 822:
case 4065:
case 2072:
case 606:
case 3878:
case 2362:
case 3917:
case 1850:
case 554:
case 2940:
case 1189:
case 656:
case 3014:
case 1861:
case 3594:
case 149:
case 849:
case 504:
case 2603:
case 201:
case 1472:
case 2168:
case 3462:
case 2161:
case 3792:
case 2254:
case 1624:
case 740:
case 1637:
case 738:
case 1420:
case 3589:
case 1478:
case 1210:
case 1647:
case 3205:
case 3718:
case 1194:
case 381:
case 3711:
case 3089:
case 389:
case 3686:
case 1290:
case 1471:
case 3975:
case 1862:
case 2350:
case 3685:
case 2894:
case 4063:
case 2509:
case 2368:
case 3872:
case 2285:
case 2520:
case 2606:
case 423:
case 718:
case 2814:
case 553:
case 2071:
case 3661:
case 3306:
case 1609:
case 3486:
case 1006:
case 2261:
case 1671:
case 2154:
case 2268:
case 1678:
case 3650:
case 1506:
case 1620:
case 2770:
case 394:
case 2385:
case 3668:
case 4082:
case 1390:
case 2944:
case 992:
case 1854:
case 2386:
case 1505:
case 2406:
case 3090:
case 3510:
case 2547:
case 3485:
case 1005:
case 2183:
case 3590:
case 3736:
case 903:
case 315:
case 414:
case 812:
case 3106:
case 2024:
case 413:
case 2354:
case 2037:
case 14:
case 3847:
case 2934:
case 3303:
case 690:
case 25:
case 4081:
case 1190:
case 393:
case 3454:
case 352:
case 3733:
case 855:
case 1437:
case 3105:
case 2262:
case 627:
case 2403:
case 1982:
case 2383:
case 3662:
case 4088:
case 3745:
case 335:
case 132:
case 1885:
case 434:
case 1110:
case 105:
case 805:
case 667:
case 235:
case 1272:
case 1147:
case 698:
case 1083:
case 30:
case 2105:
case 1707:
case 3722:
case 3403:
case 83:
case 13:
case 252:
case 1583:
case 293:
case 1805:
case 142:
case 842:
case 444:
case 4008:
case 345:
case 821:
case 121:
case 2847:
case 1902:
case 1957:
case 3810:
case 3185:
case 983:
case 1324:
case 3890:
case 3024:
case 4079:
case 3037:
case 829:
case 129:
case 2106:
case 4057:
case 1347:
case 215:
case 3047:
case 1586:
case 2590:
case 3183:
case 599:
case 591:
case 3969:
case 1901:
case 3547:
case 99:
case 3944:
case 1979:
case 1086:
case 1689:
case 984:
case 3406:
case 2090:
case 1410:
case 2743:
case 2668:
case 28:
case 1220:
case 3728:
case 885:
case 478:
case 2650:
case 3405:
case 1758:
case 3385:
case 382:
case 1124:
case 2735:
case 3721:
case 1209:
case 1751:
case 1271:
case 2306:
case 2486:
case 3503:
case 229:
case 1106:
case 3886:
case 934:
case 2337:
case 369:
case 1746:
case 2957:
case 3003:
case 361:
case 3787:
case 34:
case 1483:
case 1303:
case 2902:
case 2805:
case 2554:
case 893:
case 2614:
case 355:
case 3214:
case 152:
case 852:
case 1454:
case 454:
case 1733:
case 2806:
case 2752:
case 23:
case 2083:
case 1105:
case 3110:
case 2694:
case 672:
case 835:
case 626:
case 1745:
case 802:
case 102:
case 970:
case 1661:
case 3609:
case 2271:
case 1486:
case 914:
case 403:
case 1735:
case 2209:
case 3671:
case 3506:
case 194:
case 492:
case 2085:
case 3447:
case 2220:
case 2760:
case 2410:
case 1743:
case 1668:
case 2689:
case 3505:
case 995:
case 2086:
case 3289:
case 1510:
case 2586:
case 1736:
case 2347:
case 115:
case 2310:
case 4034:
case 3803:
case 31:
case 1183:
case 3586:
case 3908:
case 1547:
case 1969:
case 3689:
case 2854:
case 1386:
case 1406:
case 3979:
case 1944:
case 49:
case 3760:
case 563:
case 943:
case 3758:
case 1405:
case 2506:
case 2988:
case 2620:
case 182:
case 484:
case 2678:
case 1728:
case 385:
case 2981:
case 3124:
case 2671:
case 1721:
case 2006:
case 3490:
case 3271:
case 3585:
case 232:
case 2885:
case 3694:
case 3147:
case 33:
case 2982:
case 67:
case 2424:
case 2437:
case 2214:
case 3614:
case 3583:
case 2190:
case 1537:
case 3554:
case 2003:
case 1810:
case 1185:
case 24:
case 3902:
case 1024:
case 2886:
case 1037:
case 3337:
case 3054:
case 269:
case 3324:
case 1890:
case 2503:
case 4069:
case 329:
case 3924:
case 707:
case 4086:
case 2188:
case 3034:
case 1002:
case 3357:
case 3302:
case 1057:
case 757:
case 1697:
case 1881:
case 203:
case 3741:
case 1704:
case 3732:
case 658:
case 3101:
case 39:
case 1983:
case 2402:
case 1673:
case 2723:
case 3108:
case 2263:
case 384:
case 292:
case 3748:
case 878:
case 178:
case 1617:
case 485:
case 945:
case 2479:
case 716:
case 383:
case 2401:
case 3738:
case 1985:
case 3157:
case 2388:
case 2725:
case 2265:
case 204:
case 1079:
case 1508:
case 4054:
case 559:
case 1676:
case 1344:
case 2266:
case 501:
case 3069:
case 1001:
case 3301:
case 3666:
case 429:
case 90:
case 1008:
case 421:
case 3544:
case 3488:
case 442:
case 2910:
case 551:
case 3947:
case 2827:
case 95:
case 1857:
case 3910:
case 993:
case 3827:
case 3834:
case 1802:
case 2544:
case 2488:
case 2308:
case 952:
case 2069:
case 2301:
case 1276:
case 2666:
case 813:
case 2044:
case 1756:
case 902:
case 3726:
case 935:
case 469:
case 3990:
case 1581:
case 2742:
case 1275:
case 1799:
case 3408:
case 834:
case 432:
case 1755:
case 3388:
case 3725:
case 1088:
case 3265:
case 304:
case 2102:
case 525:
case 3401:
case 1081:
case 3479:
case 354:
case 577:
case 1906:
case 284:
case 1640:
case 392:
case 779:
case 195:
case 2663:
case 3382:
case 1427:
case 3723:
case 2108:
case 3457:
case 1217:
case 3263:
case 1082:
case 1297:
case 4006:
case 2732:
case 1582:
case 303:
case 2741:
case 600:
case 4005:
case 170:
case 3188:
case 2027:
case 2034:
case 412:
case 814:
case 2302:
case 1784:
case 994:
case 2924:
case 1879:
case 2534:
case 581:
case 3869:
case 1801:
case 942:
case 562:
case 2588:
case 921:
case 3230:
case 2719:
case 2081:
case 45:
case 2630:
case 717:
case 183:
case 3127:
case 1731:
case 1102:
case 2799:
case 3985:
case 234:
case 2755:
case 2581:
case 1742:
case 3882:
case 213:
case 3079:
case 4037:
case 1666:
case 1069:
case 3001:
case 2905:
case 1488:
case 539:
case 3008:
case 3579:
case 445:
case 1544:
case 1947:
case 2802:
case 1569:
case 3501:
case 618:
case 5:
case 706:
case 2801:
case 1534:
case 3502:
case 1527:
case 1924:
case 2879:
case 1937:
case 3954:
case 2903:
case 1302:
case 1482:
case 4047:
case 1027:
case 1357:
case 214:
case 3002:
case 2582:
case 1741:
case 233:
case 3881:
case 3704:
case 1101:
case 3169:
case 2297:
case 1108:
case 2082:
case 19:
case 2427:
case 3240:
case 519:
case 2434:
case 1748:
case 1663:
case 3617:
case 640:
case 184:
case 884:
case 482:
case 2640:
case 395:
case 2617:
case 278:
case 892:
case 192:
case 3640:
case 494:
case 853:
case 3427:
case 3434:
case 2704:
case 747:
case 2144:
case 673:
case 912:
case 333:
case 2881:
case 630:
case 370:
case 2334:
case 4010:
case 415:
case 1188:
case 314:
case 1844:
case 2954:
case 4090:
case 2501:
case 3905:
case 1182:
case 955:
case 2579:
case 2369:
case 786:
case 2001:
case 2676:
case 2344:
case 313:
case 3756:
case 2508:
case 2675:
case 1265:
case 3088:
case 402:
case 104:
case 549:
case 2985:
case 1408:
case 576:
case 3081:
case 3630:
case 1401:
case 854:
case 154:
case 452:
case 3906:
case 3588:
case 3444:
case 1479:
case 4014:
case 2330:
case 505:
case 2476:
case 1365:
case 555:
case 2950:
case 477:
case 3430:
case 3669:
case 2244:
case 54:
case 922:
case 1679:
case 2729:
case 3644:
case 1989:
case 3197:
case 1076:
case 3117:
case 2140:
case 3566:
case 1608:
case 2700:
case 4089:
case 798:
case 489:
case 767:
case 512:
case 1165:
case 2227:
case 3627:
case 3634:
case 620:
case 1602:
case 2473:
case 3563:
case 323:
case 1097:
case 1914:
case 1830:
case 263:
case 3397:
case 1363:
case 2962:
case 3317:
case 2340:
case 668:
case 1994:
case 1282:
case 3063:
case 1017:
case 2865:
case 2373:
case 628:
case 1040:
case 3340:
case 2063:
case 2176:
case 363:
case 2563:
case 223:
case 1777:
case 2627:
case 3473:
case 891:
case 1202:
case 2440:
case 3417:
case 3497:
case 1793:
case 51:
case 3130:
case 911:
case 2173:
case 3475:
case 3700:
case 401:
case 1715:
case 1208:
case 2566:
case 1465:
case 3729:
case 2644:
case 2376:
case 1201:
case 2197:
case 1795:
case 542:
case 409:
case 451:
case 3244:
case 1978:
case 939:
case 2780:
case 465:
case 1817:
case 3863:
case 1688:
case 364:
case 1796:
case 1873:
case 1530:
case 3968:
case 224:
case 4072:
case 2065:
case 1716:
case 1030:
case 1971:
case 1897:
case 931:
case 1466:
case 2565:
case 3330:
case 2793:
case 515:
case 766:
case 2257:
case 2463:
case 2202:
case 3165:
case 1440:
case 3657:
case 2777:
case 1627:
case 3602:
case 3517:
case 594:
case 3573:
case 1397:
case 1176:
case 1063:
case 3017:
case 1317:
case 2875:
case 989:
case 1373:
case 696:
case 2897:
case 2466:
case 1565:
case 2681:
case 2716:
case 2030:
case 2971:
case 3281:
case 3575:
case 449:
case 1065:
case 441:
case 3365:
case 593:
case 1780:
case 2817:
case 1430:
case 1669:
case 3366:
case 925:
case 3601:
case 2279:
case 2759:
case 1197:
case 3989:
case 3076:
case 2465:
case 3163:
case 2208:
case 1173:
case 1475:
case 1140:
case 431:
case 3465:
case 2163:
case 3208:
case 3759:
case 3795:
case 2989:
case 439:
case 2679:
case 965:
case 1729:
case 2366:
case 2601:
case 2075:
case 3688:
case 909:
case 462:
case 3920:
case 164:
case 2840:
case 1863:
case 3817:
case 1950:
case 55:
case 3873:
case 2365:
case 951:
case 2281:
case 2575:
case 3897:
case 50:
case 1330:
case 3681:
case 3716:
case 3971:
case 3682:
case 3972:
case 1865:
case 411:
case 2573:
case 2097:
case 2914:
case 419:
case 4061:
case 2517:
case 4:
case 391:
case 2602:
case 1234:
case 1767:
case 2165:
case 1866:
case 3876:
case 665:
case 237:
case 2191:
case 3762:
case 2118:
case 206:
case 2622:
case 770:
case 3633:
case 714:
case 256:
case 1687:
case 871:
case 3564:
case 171:
case 733:
case 601:
case 1891:
case 846:
case 146:
case 3049:
case 1074:
case 609:
case 3646:
case 3374:
case 179:
case 879:
case 2392:
case 1993:
case 3064:
case 2246:
case 1364:
case 2391:
case 217:
case 1339:
case 1915:
case 460:
case 3900:
case 1812:
case 2236:
case 3539:
case 1892:
case 2864:
case 1995:
case 2311:
case 3270:
case 3228:
case 3768:
case 3491:
case 713:
case 1996:
case 187:
case 1260:
case 1720:
case 2628:
case 3750:
case 3174:
case 2621:
case 2192:
case 1709:
case 3221:
case 2235:
case 2411:
case 2221:
case 3235:
case 2761:
case 1651:
case 2635:
case 497:
case 3670:
case 2750:
case 3243:
case 468:
case 1660:
case 2270:
case 286:
case 2418:
case 2643:
case 2228:
case 2768:
case 2491:
case 689:
case 1011:
case 1789:
case 1098:
case 3311:
case 2539:
case 996:
case 1591:
case 3864:
case 116:
case 550:
case 1018:
case 3318:
case 1091:
case 3392:
case 2064:
case 1512:
case 2646:
case 2564:
case 1592:
case 2967:
case 3233:
case 356:
case 1449:
case 588:
case 2633:
case 836:
case 136:
case 625:
case 1652:
case 306:
case 3622:
case 3245:
case 337:
case 677:
case 107:
case 807:
case 3339:
case 1636:
case 6:
case 3915:
case 1039:
case 3812:
case 2598:
case 216:
case 4067:
case 2511:
case 2518:
case 1539:
case 3892:
case 704:
case 2874:
case 3995:
case 2011:
case 3959:
case 1228:
case 1491:
case 1270:
case 186:
case 2439:
case 1418:
case 3778:
case 387:
case 3996:
case 3720:
case 3149:
case 3771:
case 1635:
case 619:
case 1221:
case 3709:
case 1498:
case 1761:
case 538:
case 3251:
case 1645:
case 662:
case 1762:
case 2794:
case 1967:
case 3913:
case 2012:
case 2287:
case 631:
case 3977:
case 2592:
case 346:
case 703:
case 371:
case 3891:
case 3811:
case 1374:
case 379:
case 3898:
case 1049:
case 2512:
case 3364:
case 3993:
case 1392:
case 2993:
case 79:
case 2811:
case 2898:
case 3512:
case 2977:
case 1839:
case 2818:
case 2687:
case 2891:
case 2913:
case 1312:
case 510:
case 856:
case 156:
case 1198:
case 3464:
case 574:
case 106:
case 806:
case 2772:
case 1245:
case 66:
case 307:
case 2139:
case 2252:
case 837:
case 1191:
case 4080:
case 2709:
case 1192:
case 2149:
case 2771:
case 3658:
case 2260:
case 2996:
case 2720:
case 1670:
case 573:
case 1112:
case 496:
case 3439:
case 3098:
case 3874:
case 968:
case 548:
case 3011:
case 997:
case 1398:
case 3591:
case 3598:
case 1236:
case 1318:
case 2915:
case 3018:
case 117:
case 783:
case 2239:
case 1218:
case 1705:
case 1428:
case 1291:
case 612:
case 3460:
case 1145:
case 2747:
case 3639:
case 1336:
case 3036:
case 2846:
case 3790:
case 1956:
case 1133:
case 1211:
case 3451:
case 3536:
case 1298:
case 2931:
case 2070:
case 2028:
case 3187:
case 2358:
case 1807:
case 4053:
case 3822:
case 2942:
case 2521:
case 2570:
case 1706:
case 2833:
case 568:
case 1335:
case 1919:
case 3543:
case 2843:
case 2487:
case 3923:
case 2307:
case 1953:
case 1860:
case 127:
case 266:
case 27:
case 605:
case 799:
case 2948:
case 632:
case 1345:
case 875:
case 372:
case 3870:
case 326:
case 2941:
case 2835:
case 1333:
case 2932:
case 655:
case 1087:
case 3407:
case 1422:
case 3387:
case 3546:
case 190:
case 890:
case 1587:
case 3664:
case 2249:
case 1346:
case 1674:
case 1135:
case 4056:
case 974:
case 1984:
case 3046:
case 2151:
case 2649:
case 3724:
case 1121:
case 3151:
case 3249:
case 1612:
case 621:
case 3160:
case 480:
case 2452:
case 3932:
case 1904:
case 1446:
case 2545:
case 3835:
case 3522:
case 3948:
case 898:
case 2045:
case 2533:
case 272:
case 2870:
case 226:
case 3487:
case 3843:
case 2923:
case 63:
case 3307:
case 1052:
case 1007:
case 3352:
case 1783:
case 366:
case 3022:
case 3938:
case 3351:
case 528:
case 1558:
case 3833:
case 4004:
case 458:
case 2822:
case 2043:
case 3521:
case 2535:
case 1436:
case 2925:
case 3070:
case 3028:
case 685:
case 1785:
case 2187:
case 2536:
case 1435:
case 1611:
case 940:
case 1698:
case 1786:
case 2460:
case 3747:
case 2639:
case 1618:
case 1443:
case 1887:
case 3239:
case 2458:
case 61:
case 3152:
case 3860:
case 327:
case 410:
case 2052:
case 1045:
case 3858:
case 1533:
case 267:
case 474:
case 872:
case 172:
case 1870:
case 1828:
case 375:
case 2507:
case 2552:
case 693:
case 652:
case 3422:
case 1387:
case 3087:
case 3703:
case 3212:
case 1546:
case 2612:
case 2754:
case 988:
case 3674:
case 1649:
case 3346:
case 3135:
case 2121:
case 3428:
case 3291:
case 448:
case 1458:
case 3705:
case 2122:
case 2443:
case 2887:
case 1710:
case 1460:
case 3145:
case 1639:
case 3336:
case 2698:
case 3298:
case 1536:
case 3211:
case 3133:
case 2785:
case 1925:
case 1535:
case 3852:
case 2551:
case 1822:
case 3343:
case 473:
case 1035:
case 596:
case 2321:
case 3146:
case 2335:
case 3321:
case 3560:
case 2919:
case 1938:
case 4032:
case 1570:
case 1833:
case 3558:
case 1521:
case 3436:
case 1360:
case 3060:
case 1028:
case 3785:
case 1931:
case 682:
case 440:
case 1070:
case 724:
case 2421:
case 3435:
case 2298:
case 1846:
case 3887:
case 3443:
case 1747:
case 3618:
case 2291:
case 1152:
case 958:
case 2218:
case 3122:
case 2470:
case 3754:
case 2984:
case 2292:
case 3433:
case 1724:
case 1737:
case 3121:
case 1249:
case 3274:
case 645:
case 3612:
case 2143:
case 1158:
case 3170:
case 2703:
case 1836:
case 980:
case 2333:
case 1932:
case 1522:
case 65:
case 2851:
case 4038:
case 3552:
case 2136:
case 275:
case 1352:
case 227:
case 87:
case 166:
case 1843:
case 3322:
case 1307:
case 2023:
case 3541:
case 2353:
case 1952:
case 1907:
case 3922:
case 1855:
case 1899:
case 1504:
case 2945:
case 4058:
case 2831:
case 340:
case 273:
case 3041:
case 1341:
case 4051:
case 2838:
case 158:
case 3032:
case 1004:
case 3548:
case 3304:
case 2933:
case 1332:
case 1423:
case 2155:
case 3453:
case 3267:
case 1213:
case 1702:
case 248:
case 725:
case 2404:
case 777:
case 1856:
case 1293:
case 2946:
case 1138:
case 2119:
case 644:
case 1425:
case 2526:
case 2153:
case 180:
case 880:
case 2600:
case 3200:
case 1148:
case 2936:
case 2356:
case 1884:
case 1779:
case 2629:
case 546:
case 3419:
case 1295:
case 1259:
case 1132:
case 1701:
case 2025:
case 2399:
case 274:
case 3928:
case 498:
case 3538:
case 1960:
case 1296:
case 3042:
case 210:
case 1342:
case 3823:
case 4052:
case 1426:
case 3456:
case 2184:
case 3542:
case 1951:
case 781:
case 1338:
case 3921:
case 2841:
case 2935:
case 2542:
case 1019:
case 2038:
case 1616:
case 3319:
case 2921:
case 3841:
case 2531:
case 2456:
case 1519:
case 427:
case 310:
case 2042:
case 2823:
case 1788:
case 2970:
case 3355:
case 475:
case 188:
case 888:
case 634:
case 1438:
case 2104:
case 1695:
case 972:
case 1659:
case 3356:
case 2200:
case 1442:
case 4087:
case 218:
case 1615:
case 1431:
case 3526:
case 3600:
case 1556:
case 1123:
case 765:
case 850:
case 150:
case 3119:
case 1693:
case 1441:
case 330:
case 800:
case 3199:
case 1677:
case 2453:
case 2727:
case 2267:
case 614:
case 759:
case 3933:
case 373:
case 2041:
case 3838:
case 1553:
case 1126:
case 701:
case 2532:
case 3831:
case 2825:
case 240:
case 751:
case 3842:
case 2556:
case 3708:
case 2123:
case 3215:
case 1499:
case 2431:
case 3425:
case 118:
case 818:
case 998:
case 3141:
case 2695:
case 547:
case 3132:
case 2438:
case 1419:
case 3259:
case 2055:
case 2099:
case 2325:
case 3331:
case 1680:
case 1823:
case 47:
case 466:
case 1538:
case 3853:
case 2804:
case 2555:
case 2599:
case 3338:
case 1921:
case 2019:
case 1038:
case 3951:
case 3907:
case 2323:
case 1541:
case 140:
case 3855:
case 1048:
case 308:
case 1532:
case 586:
case 3341:
case 2126:
case 4021:
case 1041:
case 1304:
case 1032:
case 358:
case 1548:
case 2677:
case 1453:
case 2125:
case 1727:
case 1267:
case 3213:
case 3131:
case 2987:
case 3757:
case 3423:
case 200:
case 3142:
case 2584:
case 749:
case 741:
case 2693:
case 776:
case 722:
case 250:
case 3138:
case 3293:
case 350:
case 1119:
case 2138:
case 1404:
case 762:
case 2856:
case 2293:
case 517:
case 3693:
case 3441:
case 2277:
case 3584:
case 1667:
case 3448:
case 848:
case 3125:
case 2213:
case 2702:
case 4036:
case 2423:
case 2332:
case 258:
case 2004:
case 3126:
case 2819:
case 1838:
case 173:
case 603:
case 1945:
case 1831:
case 692:
case 2348:
case 739:
case 2855:
case 2899:
case 208:
case 2504:
case 3053:
case 2907:
case 4043:
case 1023:
case 3616:
case 1841:
case 506:
case 7:
case 2951:
case 537:
case 3555:
case 3599:
case 1525:
case 1943:
case 1280:
case 556:
case 1848:
case 3099:
case 388:
case 2331:
case 604:
case 4045:
case 2958:
case 1025:
case 426:
case 3696:
case 174:
case 2701:
case 3438:
case 2259:
case 3056:
case 3695:
case 1356:
case 711:
case 4046:
case 2148:
case 719:
case 1936:
case 3615:
case 3442:
case 2708:
case 3556:
case 3431:
case 1153:
case 280:
case 1600:
case 1877:
case 2315:
case 2939:
case 3867:
case 2000:
case 4012:
case 3226:
case 1256:
case 1893:
case 1911:
case 2500:
case 590:
case 2029:
case 2395:
case 2113:
case 2231:
case 1255:
case 3415:
case 1299:
case 3631:
case 1775:
case 2177:
case 2625:
case 407:
case 2396:
case 527:
case 3638:
case 2316:
case 575:
case 2115:
case 3763:
case 868:
case 1253:
case 1896:
case 1467:
case 1773:
case 396:
case 3632:
case 2241:
case 1604:
case 721:
case 2232:
case 3641:
case 2159:
case 2195:
case 416:
case 1180:
case 1815:
case 120:
case 820:
case 2196:
case 4018:
case 2116:
case 3829:
case 2949:
case 2567:
case 4011:
case 2964:
case 73:
case 1284:
case 2393:
case 1093:
case 3964:
case 2829:
case 3116:
case 3949:
case 1513:
case 1684:
case 3567:
case 732:
case 1593:
case 691:
case 3377:
case 3196:
case 1367:
case 3313:
case 860:
case 755:
case 160:
case 1013:
case 3232:
case 74:
case 3159:
case 3195:
case 3248:
case 1653:
case 2477:
case 1100:
case 769:
case 3115:
case 2223:
case 3880:
case 487:
case 2413:
case 2495:
case 2459:
case 567:
case 598:
case 2638:
case 3316:
case 1016:
case 1730:
case 3242:
case 1655:
case 3396:
case 1699:
case 2080:
case 3113:
case 1167:
case 2225:
case 2642:
case 2415:
case 1095:
case 1329:
case 3626:
case 1656:
case 3359:
case 2766:
case 2226:
case 1515:
case 2496:
case 3000:
case 3529:
case 3315:
case 446:
case 1015:
case 2740:
case 397:
case 3253:
case 1413:
case 1648:
case 368:
case 2653:
case 1632:
case 623:
case 2129:
case 2204:
case 1641:
case 260:
case 2367:
case 2077:
case 3180:
case 2593:
case 3815:
case 2513:
case 2684:
case 2974:
case 70:
case 3877:
case 3918:
case 2300:
case 2480:
case 2595:
case 957:
case 3813:
case 3893:
case 3256:
case 2515:
case 936:
case 1416:
case 3998:
case 2656:
case 2095:
case 3911:
case 2059:
case 3299:
case 2516:
case 406:
case 624:
case 2167:
case 1765:
case 1225:
case 1642:
case 1631:
case 3380:
case 2096:
case 2730:
case 1638:
case 1580:
case 1495:
case 2596:
case 2429:
case 2219:
case 3016:
case 971:
case 566:
case 715:
case 1316:
case 3619:
case 946:
case 2380:
case 979:
case 1242:
case 3516:
case 1231:
case 1029:
case 3656:
case 2911:
case 3095:
case 3059:
case 1626:
case 2893:
case 3515:
case 78:
case 1529:
case 3480:
case 3595:
case 447:
case 3559:
case 3015:
case 2991:
case 1315:
case 2918:
case 3577:
case 2284:
case 2992:
case 2895:
case 1567:
case 2859:
case 1949:
case 220:
case 793:
case 4039:
case 2180:
case 1377:
case 2815:
case 3367:
case 2912:
case 752:
case 1159:
case 1195:
case 2797:
case 3129:
case 2816:
case 3204:
case 3653:
case 3100:
case 1880:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760943601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,];
var gg_b = "1760943601/";

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

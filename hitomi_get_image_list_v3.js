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
case 3414:
case 1538:
case 3625:
case 2059:
case 1787:
case 2447:
case 2702:
case 1306:
case 1145:
case 2062:
case 3163:
case 1238:
case 2537:
case 1780:
case 1931:
case 3467:
case 2230:
case 1191:
case 3726:
case 3453:
case 1729:
case 2040:
case 1680:
case 938:
case 1629:
case 3532:
case 718:
case 1900:
case 3149:
case 2462:
case 2688:
case 3284:
case 305:
case 2303:
case 1836:
case 2328:
case 1925:
case 3442:
case 3174:
case 3707:
case 2459:
case 2982:
case 3386:
case 1821:
case 1907:
case 1389:
case 3014:
case 836:
case 2047:
case 2602:
case 3060:
case 292:
case 3557:
case 243:
case 1692:
case 2997:
case 3867:
case 3375:
case 224:
case 1591:
case 1435:
case 1312:
case 385:
case 741:
case 2433:
case 1848:
case 35:
case 2243:
case 1245:
case 863:
case 2395:
case 1393:
case 3257:
case 462:
case 1545:
case 2543:
case 2615:
case 32:
case 2424:
case 4011:
case 4056:
case 3550:
case 3798:
case 1777:
case 3814:
case 535:
case 1291:
case 2130:
case 1021:
case 574:
case 2972:
case 1713:
case 391:
case 1421:
case 1677:
case 2859:
case 3842:
case 3249:
case 3439:
case 472:
case 3318:
case 2552:
case 3954:
case 758:
case 3992:
case 3274:
case 873:
case 2396:
case 1792:
case 2651:
case 664:
case 4055:
case 937:
case 717:
case 1754:
case 3549:
case 61:
case 3730:
case 2226:
case 616:
case 2198:
case 2333:
case 1335:
case 1190:
case 2231:
case 2441:
case 1930:
case 3502:
case 1781:
case 545:
case 496:
case 149:
case 1079:
case 3178:
case 3076:
case 2526:
case 3588:
case 3018:
case 1119:
case 3116:
case 516:
case 3151:
case 2495:
case 2531:
case 2500:
case 3339:
case 2828:
case 1093:
case 1223:
case 3637:
case 855:
case 3061:
case 1321:
case 421:
case 1889:
case 1479:
case 1820:
case 2732:
case 88:
case 3075:
case 1901:
case 2784:
case 1523:
case 1444:
case 988:
case 605:
case 280:
case 4083:
case 897:
case 3701:
case 1582:
case 408:
case 2507:
case 2803:
case 451:
case 3965:
case 1893:
case 1597:
case 3578:
case 62:
case 27:
case 3694:
case 1406:
case 55:
case 806:
case 2347:
case 3516:
case 2763:
case 3314:
case 3188:
case 3086:
case 3861:
case 3743:
case 3958:
case 1666:
case 200:
case 3353:
case 685:
case 2674:
case 3485:
case 1027:
case 951:
case 3875:
case 194:
case 488:
case 3102:
case 3216:
case 1005:
case 3971:
case 2003:
case 374:
case 335:
case 1943:
case 1590:
case 2945:
case 526:
case 364:
case 1405:
case 591:
case 898:
case 2362:
case 1572:
case 1123:
case 2125:
case 1658:
case 411:
case 3769:
case 240:
case 1766:
case 3515:
case 1844:
case 1427:
case 4073:
case 84:
case 1272:
case 1420:
case 3876:
case 846:
case 1489:
case 3486:
case 1952:
case 2663:
case 2359:
case 1134:
case 2749:
case 1665:
case 3752:
case 3794:
case 266:
case 691:
case 3215:
case 815:
case 3818:
case 2933:
case 2419:
case 1195:
case 1826:
case 3470:
case 3829:
case 1330:
case 2506:
case 293:
case 219:
case 3735:
case 1831:
case 2497:
case 3522:
case 2072:
case 2924:
case 1141:
case 1337:
case 301:
case 358:
case 317:
case 3477:
case 3887:
case 3013:
case 2527:
case 2823:
case 3077:
case 1825:
case 3413:
case 150:
case 1936:
case 3939:
case 75:
case 2090:
case 2220:
case 3736:
case 2472:
case 756:
case 282:
case 1921:
case 341:
case 2289:
case 3110:
case 2834:
case 4088:
case 1301:
case 2097:
case 2179:
case 1528:
case 3164:
case 2019:
case 2589:
case 1203:
case 2520:
case 3070:
case 72:
case 3492:
case 1760:
case 4015:
case 872:
case 3365:
case 1898:
case 2023:
case 3877:
case 3573:
case 2293:
case 2656:
case 679:
case 2768:
case 1007:
case 705:
case 2512:
case 2890:
case 2947:
case 202:
case 357:
case 3967:
case 1431:
case 1595:
case 3748:
case 3953:
case 2034:
case 3358:
case 1241:
case 579:
case 1753:
case 3429:
case 3870:
case 2345:
case 259:
case 2962:
case 3564:
case 2579:
case 3299:
case 1128:
case 1026:
case 838:
case 2408:
case 3510:
case 4016:
case 1667:
case 2244:
case 4078:
case 1400:
case 569:
case 2434:
case 1407:
case 381:
case 745:
case 1742:
case 1352:
case 2668:
case 110:
case 669:
case 2959:
case 2872:
case 1596:
case 2127:
case 2105:
case 93:
case 2711:
case 862:
case 936:
case 2544:
case 3942:
case 1614:
case 2346:
case 2423:
case 71:
case 3706:
case 486:
case 1094:
case 48:
case 1140:
case 1837:
case 2148:
case 2046:
case 3909:
case 3620:
case 153:
case 601:
case 1233:
case 2838:
case 501:
case 558:
case 851:
case 4084:
case 497:
case 1785:
case 3066:
case 2445:
case 1443:
case 2722:
case 3605:
case 144:
case 1331:
case 1147:
case 3058:
case 1159:
case 2622:
case 2536:
case 268:
case 1801:
case 104:
case 998:
case 3111:
case 1:
case 2903:
case 2308:
case 1905:
case 2521:
case 2045:
case 3466:
case 887:
case 1685:
case 2928:
case 3065:
case 2446:
case 2236:
case 94:
case 1609:
case 89:
case 1494:
case 1452:
case 3986:
case 1989:
case 774:
case 3568:
case 627:
case 1001:
case 3975:
case 184:
case 1547:
case 1843:
case 807:
case 2248:
case 3481:
case 3370:
case 557:
case 498:
case 2773:
case 3871:
case 3555:
case 3679:
case 415:
case 2135:
case 1540:
case 657:
case 3377:
case 1398:
case 3793:
case 113:
case 1618:
case 1247:
case 44:
case 527:
case 331:
case 1037:
case 1852:
case 3693:
case 3256:
case 1259:
case 1894:
case 2372:
case 1562:
case 1718:
case 40:
case 2764:
case 986:
case 3918:
case 3779:
case 4057:
case 2710:
case 1262:
case 3511:
case 3392:
case 2717:
case 1869:
case 470:
case 3081:
case 3866:
case 2136:
case 3354:
case 2038:
case 888:
case 1559:
case 1675:
case 3556:
case 1030:
case 2121:
case 3802:
case 3585:
case 941:
case 615:
case 1490:
case 1924:
case 1497:
case 3478:
case 119:
case 698:
case 515:
case 1933:
case 2935:
case 85:
case 506:
case 3051:
case 363:
case 856:
case 1808:
case 1205:
case 3118:
case 928:
case 3176:
case 2528:
case 3078:
case 2800:
case 220:
case 2807:
case 1289:
case 917:
case 1882:
case 2739:
case 182:
case 1144:
case 4087:
case 958:
case 1527:
case 1823:
case 2228:
case 2825:
case 2196:
case 606:
case 3561:
case 1106:
case 1212:
case 1008:
case 2767:
case 428:
case 3350:
case 586:
case 3851:
case 2948:
case 58:
case 2000:
case 772:
case 3662:
case 1034:
case 3955:
case 625:
case 275:
case 234:
case 1897:
case 3275:
case 1940:
case 2595:
case 597:
case 1947:
case 1391:
case 1512:
case 2714:
case 2025:
case 2295:
case 2898:
case 1656:
case 1293:
case 3402:
case 3747:
case 4013:
case 3357:
case 1346:
case 1423:
case 3759:
case 1544:
case 3647:
case 3002:
case 1711:
case 3276:
case 2596:
case 1127:
case 142:
case 918:
case 1872:
case 1482:
case 3956:
case 210:
case 2407:
case 1434:
case 3518:
case 2400:
case 3088:
case 1120:
case 2031:
case 995:
case 1244:
case 3640:
case 2667:
case 1579:
case 1655:
case 2128:
case 2653:
case 3374:
case 3160:
case 244:
case 3603:
case 673:
case 1804:
case 3114:
case 1722:
case 1445:
case 2443:
case 3074:
case 2524:
case 3922:
case 2785:
case 864:
case 3450:
case 398:
case 721:
case 2233:
case 1838:
case 1235:
case 3457:
case 315:
case 3463:
case 1046:
case 2686:
case 708:
case 2052:
case 751:
case 2533:
case 2140:
case 2709:
case 2094:
case 1221:
case 2989:
case 3728:
case 306:
case 2494:
case 30:
case 563:
case 469:
case 2786:
case 2162:
case 3063:
case 3449:
case 1446:
case 2325:
case 3474:
case 3142:
case 2:
case 1903:
case 874:
case 3703:
case 2927:
case 1622:
case 1536:
case 2300:
case 190:
case 1548:
case 2247:
case 3214:
case 2437:
case 1891:
case 2761:
case 63:
case 1995:
case 931:
case 2540:
case 2993:
case 1610:
case 2398:
case 3567:
case 711:
case 2133:
case 1664:
case 1135:
case 3032:
case 3553:
case 2676:
case 2912:
case 1438:
case 3514:
case 1773:
case 2775:
case 3351:
case 3741:
case 397:
case 2843:
case 2547:
case 4066:
case 2430:
case 3696:
case 3378:
case 3267:
case 1397:
case 3917:
case 1004:
case 4058:
case 1799:
case 167:
case 2944:
case 1136:
case 1717:
case 2262:
case 3641:
case 3242:
case 2776:
case 1764:
case 979:
case 0:
case 747:
case 2894:
case 2562:
case 2259:
case 788:
case 2204:
case 183:
case 3383:
case 1230:
case 2931:
case 3608:
case 1833:
case 1537:
case 2835:
case 3165:
case 2448:
case 45:
case 456:
case 1062:
case 3322:
case 1143:
case 3682:
case 2145:
case 362:
case 1447:
case 42:
case 1702:
case 547:
case 2787:
case 3158:
case 1237:
case 2687:
case 3411:
case 1602:
case 1047:
case 2320:
case 2821:
case 2907:
case 2389:
case 3723:
case 3456:
case 1328:
case 3166:
case 3782:
case 511:
case 372:
case 818:
case 1303:
case 2305:
case 91:
case 611:
case 916:
case 895:
case 2146:
case 827:
case 3734:
case 1152:
case 2900:
case 2629:
case 3708:
case 1194:
case 1040:
case 607:
case 945:
case 2327:
case 3571:
case 2291:
case 2021:
case 1424:
case 587:
case 2613:
case 1990:
case 1543:
case 1615:
case 3672:
case 2036:
case 3790:
case 154:
case 696:
case 3868:
case 2393:
case 596:
case 2435:
case 2591:
case 3797:
case 1778:
case 1919:
case 3916:
case 416:
case 687:
case 1716:
case 648:
case 1137:
case 985:
case 2754:
case 103:
case 2670:
case 651:
case 956:
case 2792:
case 608:
case 1651:
case 3399:
case 1396:
case 3266:
case 1594:
case 3697:
case 521:
case 828:
case 405:
case 1033:
case 621:
case 926:
case 2436:
case 3772:
case 2246:
case 2677:
case 3310:
case 801:
case 4014:
case 858:
case 3566:
case 1101:
case 2379:
case 1024:
case 3811:
case 1531:
case 1495:
case 3170:
case 869:
case 2806:
case 3287:
case 2197:
case 2079:
case 1632:
case 1526:
case 3064:
case 249:
case 662:
case 3010:
case 538:
case 3580:
case 2781:
case 133:
case 3017:
case 1904:
case 562:
case 3587:
case 638:
case 2930:
case 2190:
case 1684:
case 2044:
case 3738:
case 1333:
case 474:
case 3280:
case 2412:
case 1226:
case 1096:
case 3229:
case 347:
case 3822:
case 1803:
case 755:
case 2582:
case 3984:
case 252:
case 786:
case 3604:
case 3499:
case 311:
case 4085:
case 1041:
case 1200:
case 180:
case 2681:
case 2234:
case 1525:
case 2523:
case 3464:
case 2321:
case 2889:
case 3410:
case 2223:
case 1095:
case 1500:
case 4009:
case 879:
case 2534:
case 3422:
case 706:
case 2758:
case 2943:
case 2348:
case 2590:
case 2812:
case 2005:
case 1003:
case 3187:
case 2219:
case 3950:
case 2771:
case 294:
case 2027:
case 2297:
case 3873:
case 1340:
case 1674:
case 1841:
case 2666:
case 3745:
case 3355:
case 1991:
case 1763:
case 2519:
case 2290:
case 39:
case 3957:
case 17:
case 4018:
case 3791:
case 2893:
case 3368:
case 3963:
case 1298:
case 16:
case 2108:
case 166:
case 1946:
case 3949:
case 3691:
case 798:
case 1359:
case 2134:
case 321:
case 3554:
case 2952:
case 1100:
case 2420:
case 2879:
case 3864:
case 2994:
case 2272:
case 3311:
case 2427:
case 935:
case 974:
case 2671:
case 2844:
case 1774:
case 1107:
case 2123:
case 2969:
case 3899:
case 74:
case 2658:
case 2572:
case 3292:
case 308:
case 1403:
case 3979:
case 3894:
case 432:
case 3562:
case 1693:
case 1256:
case 2910:
case 2695:
case 131:
case 4091:
case 3661:
case 2432:
case 1918:
case 169:
case 2484:
case 510:
case 1744:
case 1354:
case 3869:
case 3262:
case 2796:
case 833:
case 2542:
case 880:
case 2253:
case 1255:
case 1712:
case 2378:
case 478:
case 3240:
case 3912:
case 1871:
case 2084:
case 3775:
case 2850:
case 2741:
case 297:
case 709:
case 967:
case 2560:
case 1481:
case 1370:
case 675:
case 575:
case 534:
case 1865:
case 2863:
case 3993:
case 2032:
case 2857:
case 2553:
case 3618:
case 2214:
case 1961:
case 2795:
case 1111:
case 1705:
case 800:
case 2539:
case 3300:
case 4004:
case 3685:
case 2474:
case 2142:
case 270:
case 3:
case 4038:
case 1071:
case 3905:
case 2050:
case 1727:
case 2884:
case 2239:
case 2057:
case 2832:
case 1720:
case 520:
case 3786:
case 794:
case 1065:
case 206:
case 1606:
case 3494:
case 20:
case 3920:
case 2628:
case 1155:
case 3052:
case 3837:
case 3533:
case 2167:
case 3709:
case 3094:
case 2457:
case 3906:
case 1909:
case 215:
case 1387:
case 712:
case 3326:
case 1168:
case 1329:
case 2074:
case 990:
case 2922:
case 1627:
case 2450:
case 968:
case 1471:
case 1380:
case 2603:
case 1458:
case 2114:
case 840:
case 3667:
case 1510:
case 1366:
case 2576:
case 3296:
case 1892:
case 2374:
case 1564:
case 1217:
case 2518:
case 959:
case 1648:
case 2186:
case 883:
case 2088:
case 3031:
case 365:
case 2276:
case 814:
case 482:
case 2911:
case 2956:
case 181:
case 3407:
case 2759:
case 2349:
case 1942:
case 902:
case 929:
case 3660:
case 1122:
case 2575:
case 1365:
case 1877:
case 3898:
case 2363:
case 2402:
case 236:
case 4072:
case 1914:
case 1183:
case 2185:
case 2662:
case 1748:
case 493:
case 1953:
case 419:
case 334:
case 375:
case 1967:
case 3595:
case 1371:
case 1480:
case 2109:
case 3767:
case 2816:
case 2350:
case 513:
case 2740:
case 599:
case 127:
case 1870:
case 2624:
case 3936:
case 1939:
case 350:
case 2332:
case 504:
case 854:
case 3196:
case 3825:
case 3921:
case 3807:
case 1117:
case 1736:
case 442:
case 3739:
case 2633:
case 761:
case 2176:
case 824:
case 843:
case 3800:
case 1110:
case 320:
case 993:
case 3203:
case 2586:
case 2016:
case 2118:
case 3826:
case 1470:
case 273:
case 459:
case 2451:
case 1222:
case 3935:
case 3831:
case 771:
case 553:
case 2509:
case 2888:
case 803:
case 1283:
case 3330:
case 2161:
case 158:
case 4082:
case 3337:
case 1173:
case 2175:
case 3639:
case 1522:
case 402:
case 1013:
case 523:
case 982:
case 2015:
case 2802:
case 2209:
case 4023:
case 3498:
case 544:
case 1621:
case 117:
case 2899:
case 3123:
case 3658:
case 1966:
case 900:
case 208:
case 2254:
case 3427:
case 878:
case 3844:
case 312:
case 480:
case 2513:
case 2645:
case 3182:
case 1515:
case 1085:
case 2083:
case 2746:
case 2356:
case 3665:
case 221:
case 3489:
case 1486:
case 671:
case 3420:
case 1876:
case 976:
case 3994:
case 2864:
case 2311:
case 1215:
case 1818:
case 1009:
case 2691:
case 744:
case 1342:
case 3406:
case 2180:
case 704:
case 1652:
case 1578:
case 2129:
case 2368:
case 2277:
case 7:
case 3089:
case 1314:
case 1086:
case 3765:
case 3519:
case 96:
case 3020:
case 966:
case 29:
case 868:
case 561:
case 394:
case 2577:
case 2873:
case 1278:
case 1367:
case 1875:
case 2483:
case 1353:
case 433:
case 2355:
case 2745:
case 940:
case 539:
case 3348:
case 3590:
case 2270:
case 3812:
case 3005:
case 1971:
case 135:
case 2187:
case 174:
case 1102:
case 2192:
case 3336:
case 2154:
case 1339:
case 3534:
case 1418:
case 46:
case 322:
case 2464:
case 3321:
case 3282:
case 440:
case 3234:
case 3444:
case 3901:
case 3827:
case 3523:
case 1701:
case 713:
case 207:
case 933:
case 288:
case 1601:
case 3412:
case 2280:
case 2704:
case 2229:
case 980:
case 1730:
case 2822:
case 867:
case 1502:
case 3781:
case 400:
case 2587:
case 1885:
case 1475:
case 3190:
case 2473:
case 3044:
case 1178:
case 3079:
case 2064:
case 2010:
case 2580:
case 4028:
case 3493:
case 1737:
case 47:
case 1116:
case 3806:
case 2287:
case 954:
case 1698:
case 191:
case 2364:
case 492:
case 2811:
case 2915:
case 2690:
case 1439:
case 2772:
case 3246:
case 1249:
case 512:
case 1842:
case 612:
case 1992:
case 1274:
case 1954:
case 819:
case 2619:
case 3546:
case 4040:
case 3344:
case 430:
case 893:
case 1867:
case 2373:
case 2565:
case 3692:
case 1853:
case 483:
case 1557:
case 3770:
case 589:
case 3848:
case 3245:
case 694:
case 3312:
case 2797:
case 2916:
case 2672:
case 594:
case 1977:
case 3393:
case 1263:
case 3998:
case 1814:
case 3021:
case 2571:
case 3104:
case 3777:
case 1798:
case 339:
case 414:
case 126:
case 3545:
case 3613:
case 12:
case 882:
case 3629:
case 1532:
case 2055:
case 3680:
case 652:
case 105:
case 3305:
case 1284:
case 1631:
case 509:
case 522:
case 3146:
case 3048:
case 859:
case 1442:
case 1174:
case 1707:
case 734:
case 2782:
case 622:
case 2166:
case 609:
case 3925:
case 272:
case 1839:
case 2411:
case 3389:
case 3907:
case 1725:
case 2581:
case 2623:
case 1414:
case 3538:
case 2468:
case 3145:
case 649:
case 765:
case 1607:
case 2902:
case 1150:
case 3306:
case 262:
case 1309:
case 1157:
case 238:
case 145:
case 1980:
case 3835:
case 2165:
case 3926:
case 2634:
case 1600:
case 549:
case 930:
case 2455:
case 3729:
case 3204:
case 2988:
case 2383:
case 3191:
case 3931:
case 1467:
case 116:
case 3780:
case 3946:
case 1949:
case 3428:
case 2009:
case 853:
case 989:
case 2215:
case 503:
case 1213:
case 1592:
case 3657:
case 1554:
case 121:
case 2486:
case 3100:
case 1746:
case 3107:
case 2515:
case 2643:
case 844:
case 4012:
case 264:
case 3403:
case 1254:
case 151:
case 108:
case 1292:
case 452:
case 1974:
case 3896:
case 3125:
case 148:
case 912:
case 643:
case 1187:
case 235:
case 274:
case 3945:
case 1270:
case 187:
case 732:
case 2958:
case 300:
case 2669:
case 2485:
case 3841:
case 1577:
case 1873:
case 2278:
case 804:
case 2367:
case 3340:
case 3750:
case 554:
case 4044:
case 654:
case 19:
case 3757:
case 196:
case 2551:
case 2516:
case 3763:
case 1646:
case 2188:
case 2861:
case 2578:
case 1368:
case 1277:
case 790:
case 376:
case 1180:
case 1604:
case 2630:
case 592:
case 1984:
case 1113:
case 3803:
case 630:
case 3525:
case 1638:
case 380:
case 1417:
case 3041:
case 3200:
case 1410:
case 2061:
case 2886:
case 813:
case 2418:
case 949:
case 4006:
case 1154:
case 3095:
case 767:
case 2202:
case 922:
case 583:
case 2151:
case 1170:
case 1580:
case 2461:
case 3324:
case 3632:
case 4020:
case 2076:
case 494:
case 1738:
case 3684:
case 4027:
case 1883:
case 1587:
case 3441:
case 2885:
case 952:
case 2502:
case 3904:
case 333:
case 147:
case 2730:
case 1822:
case 2981:
case 3226:
case 1177:
case 3198:
case 3938:
case 3333:
case 4005:
case 1280:
case 3651:
case 2549:
case 3616:
case 1619:
case 3033:
case 1697:
case 3862:
case 2992:
case 2274:
case 1266:
case 3396:
case 719:
case 2842:
case 2249:
case 2439:
case 1772:
case 540:
case 939:
case 2318:
case 1690:
case 1364:
case 2574:
case 3972:
case 3101:
case 1566:
case 3569:
case 3859:
case 3847:
case 676:
case 2798:
case 2361:
case 3130:
case 1571:
case 67:
case 1265:
case 1672:
case 1797:
case 2250:
case 1271:
case 3433:
case 3243:
case 25:
case 2970:
case 1951:
case 256:
case 782:
case 137:
case 1258:
case 2557:
case 3341:
case 820:
case 1978:
case 1565:
case 3716:
case 3840:
case 2584:
case 3982:
case 2014:
case 3047:
case 2060:
case 1411:
case 759:
case 392:
case 580:
case 2839:
case 172:
case 1068:
case 3328:
case 3501:
case 471:
case 2174:
case 2707:
case 2149:
case 729:
case 2284:
case 2631:
case 205:
case 3908:
case 4035:
case 3040:
case 834:
case 1055:
case 2626:
case 3934:
case 3152:
case 1608:
case 21:
case 1383:
case 3230:
case 2385:
case 2726:
case 2600:
case 3062:
case 1322:
case 1165:
case 2163:
case 3537:
case 3833:
case 2980:
case 633:
case 2731:
case 138:
case 1171:
case 2987:
case 533:
case 2607:
case 2042:
case 1468:
case 1682:
case 3143:
case 810:
case 3059:
case 1056:
case 1623:
case 1011:
case 1581:
case 3702:
case 1542:
case 404:
case 2612:
case 367:
case 1796:
case 542:
case 2392:
case 1641:
case 1874:
case 3717:
case 2866:
case 3136:
case 2354:
case 1139:
case 1484:
case 984:
case 3673:
case 3764:
case 1432:
case 999:
case 1315:
case 733:
case 2313:
case 2779:
case 2918:
case 1242:
case 1849:
case 231:
case 2256:
case 1910:
case 1695:
case 3372:
case 2976:
case 849:
case 1795:
case 2793:
case 1214:
case 3891:
case 3390:
case 822:
case 3548:
case 809:
case 559:
case 2679:
case 1553:
case 629:
case 2865:
case 3995:
case 1863:
case 2268:
case 3610:
case 852:
case 3845:
case 502:
case 529:
case 197:
case 3319:
case 1850:
case 1316:
case 125:
case 1514:
case 2568:
case 1973:
case 1378:
case 2975:
case 659:
case 1253:
case 2858:
case 3941:
case 10:
case 953:
case 332:
case 3382:
case 3091:
case 3221:
case 2986:
case 4037:
case 1063:
case 3928:
case 3446:
case 2065:
case 682:
case 2789:
case 700:
case 1057:
case 1832:
case 2720:
case 1239:
case 2727:
case 1884:
case 3903:
case 2071:
case 1474:
case 582:
case 3683:
case 2156:
case 3334:
case 3622:
case 776:
case 4030:
case 368:
case 894:
case 2705:
case 1983:
case 1388:
case 2985:
case 766:
case 3722:
case 3804:
case 484:
case 1603:
case 378:
case 2380:
case 3235:
case 1074:
case 1922:
case 2066:
case 619:
case 3445:
case 2168:
case 2329:
case 519:
case 2689:
case 1049:
case 3148:
case 3046:
case 2909:
case 2387:
case 593:
case 499:
case 1167:
case 413:
case 2155:
case 3711:
case 1647:
case 2517:
case 3544:
case 2942:
case 1759:
case 1349:
case 281:
case 2210:
case 3668:
case 1956:
case 3959:
case 2264:
case 342:
case 3872:
case 1276:
case 3279:
case 2599:
case 3127:
case 3120:
case 1762:
case 1088:
case 2648:
case 1374:
case 2564:
case 3579:
case 3655:
case 2366:
case 1576:
case 2080:
case 2854:
case 667:
case 975:
case 2429:
case 3755:
case 3819:
case 965:
case 1816:
case 3106:
case 3212:
case 1561:
case 1109:
case 3008:
case 2967:
case 2273:
case 3593:
case 3940:
case 2748:
case 1955:
case 1662:
case 3082:
case 3768:
case 1261:
case 1185:
case 3512:
case 3890:
case 13:
case 329:
case 136:
case 218:
case 1357:
case 1747:
case 2487:
case 577:
case 1575:
case 2365:
case 2573:
case 2454:
case 3589:
case 690:
case 163:
case 668:
case 532:
case 2110:
case 3834:
case 1176:
case 3227:
case 3179:
case 754:
case 2164:
case 1633:
case 3472:
case 3144:
case 410:
case 2117:
case 1286:
case 3505:
case 3289:
case 241:
case 2199:
case 2077:
case 861:
case 743:
case 590:
case 1624:
case 2621:
case 871:
case 4025:
case 1585:
case 3206:
case 2583:
case 1724:
case 1209:
case 703:
case 1015:
case 950:
case 3924:
case 2173:
case 3490:
case 4007:
case 258:
case 1888:
case 4000:
case 1161:
case 393:
case 3304:
case 475:
case 434:
case 2735:
case 1478:
case 3497:
case 3933:
case 3338:
case 3419:
case 678:
case 920:
case 2381:
case 2829:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759413602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,];
var gg_b = "1759413602/";

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

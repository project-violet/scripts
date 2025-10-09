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
case 1714:
case 3196:
case 1974:
case 3088:
case 3452:
case 741:
case 2134:
case 1767:
case 2500:
case 725:
case 4088:
case 2753:
case 3651:
case 2997:
case 1102:
case 3367:
case 3556:
case 3875:
case 527:
case 3755:
case 2819:
case 1202:
case 3821:
case 3112:
case 1389:
case 2845:
case 2602:
case 4081:
case 2332:
case 1634:
case 3658:
case 813:
case 3165:
case 2263:
case 1464:
case 2574:
case 1257:
case 1663:
case 180:
case 2806:
case 972:
case 1900:
case 2095:
case 3770:
case 1559:
case 3850:
case 1585:
case 3093:
case 1786:
case 2087:
case 857:
case 3386:
case 2030:
case 2740:
case 2163:
case 586:
case 3522:
case 3998:
case 2573:
case 1463:
case 3626:
case 3420:
case 2457:
case 422:
case 322:
case 789:
case 2217:
case 1664:
case 3992:
case 3528:
case 579:
case 334:
case 312:
case 2545:
case 3337:
case 1927:
case 1376:
case 3916:
case 3380:
case 2036:
case 103:
case 3575:
case 3856:
case 1737:
case 4094:
case 3521:
case 947:
case 2164:
case 1780:
case 1208:
case 46:
case 3313:
case 3844:
case 1897:
case 1973:
case 2608:
case 2229:
case 1078:
case 3235:
case 583:
case 3652:
case 3190:
case 761:
case 773:
case 3822:
case 3290:
case 607:
case 2129:
case 792:
case 2233:
case 3458:
case 3111:
case 996:
case 1025:
case 2331:
case 887:
case 3379:
case 3703:
case 3218:
case 1919:
case 3550:
case 1859:
case 2527:
case 75:
case 349:
case 3742:
case 3473:
case 4032:
case 2644:
case 1122:
case 1342:
case 1683:
case 1835:
case 2520:
case 801:
case 2443:
case 3674:
case 3297:
case 778:
case 2772:
case 2283:
case 3808:
case 1324:
case 3934:
case 1958:
case 3259:
case 3445:
case 864:
case 3724:
case 1818:
case 90:
case 3197:
case 1144:
case 199:
case 2996:
case 2421:
case 1890:
case 594:
case 1222:
case 276:
case 3419:
case 3330:
case 1920:
case 108:
case 1691:
case 3406:
case 2551:
case 1730:
case 2826:
case 1492:
case 3068:
case 83:
case 2291:
case 1512:
case 1156:
case 2558:
case 64:
case 3061:
case 2965:
case 165:
case 2298:
case 1369:
case 1795:
case 1692:
case 2747:
case 2116:
case 1046:
case 204:
case 3964:
case 2394:
case 2552:
case 273:
case 1511:
case 1736:
case 2292:
case 2820:
case 1491:
case 3336:
case 3606:
case 1926:
case 1377:
case 292:
case 307:
case 3917:
case 2037:
case 66:
case 3899:
case 1590:
case 2456:
case 1865:
case 3501:
case 1410:
case 2192:
case 4062:
case 998:
case 2650:
case 1616:
case 310:
case 1518:
case 3062:
case 1498:
case 1250:
case 1121:
case 2643:
case 1952:
case 3474:
case 4015:
case 737:
case 19:
case 4031:
case 2382:
case 3741:
case 3049:
case 818:
case 1812:
case 2851:
case 612:
case 3739:
case 4049:
case 3673:
case 2725:
case 1609:
case 3929:
case 2935:
case 909:
case 2911:
case 2079:
case 634:
case 3031:
case 1128:
case 1896:
case 2507:
case 3933:
case 1323:
case 2621:
case 622:
case 3723:
case 2990:
case 3619:
case 2858:
case 790:
case 535:
case 3645:
case 1221:
case 844:
case 1275:
case 2422:
case 1099:
case 1630:
case 2961:
case 1687:
case 3391:
case 3700:
case 3477:
case 1791:
case 2287:
case 3293:
case 679:
case 2447:
case 1532:
case 2130:
case 1798:
case 2187:
case 1695:
case 1970:
case 1057:
case 3986:
case 3310:
case 2589:
case 2555:
case 175:
case 2876:
case 187:
case 1783:
case 3096:
case 3967:
case 3439:
case 2471:
case 3383:
case 520:
case 2425:
case 1374:
case 2034:
case 3854:
case 1838:
case 507:
case 2166:
case 3441:
case 116:
case 2722:
case 1568:
case 3540:
case 1849:
case 3181:
case 683:
case 2932:
case 1955:
case 510:
case 2385:
case 2803:
case 4012:
case 1172:
case 1666:
case 266:
case 358:
case 803:
case 1460:
case 2570:
case 1784:
case 2938:
case 1225:
case 3384:
case 3641:
case 3282:
case 2033:
case 3913:
case 1373:
case 3309:
case 627:
case 3442:
case 3853:
case 1001:
case 2625:
case 2721:
case 1903:
case 2775:
case 2576:
case 1466:
case 2855:
case 1278:
case 3979:
case 936:
case 2915:
case 2931:
case 1660:
case 1319:
case 732:
case 1171:
case 2804:
case 4035:
case 4011:
case 1125:
case 2260:
case 2949:
case 1538:
case 123:
case 3505:
case 806:
case 263:
case 1636:
case 230:
case 1247:
case 3294:
case 388:
case 1495:
case 271:
case 1716:
case 1147:
case 3469:
case 2017:
case 297:
case 1976:
case 3937:
case 2503:
case 3980:
case 302:
case 2136:
case 1549:
case 2064:
case 658:
case 3847:
case 118:
case 2186:
case 483:
case 89:
case 1581:
case 2993:
case 3720:
case 3168:
case 2757:
case 1140:
case 1320:
case 2010:
case 852:
case 3930:
case 1056:
case 3987:
case 1437:
case 356:
case 3476:
case 1480:
case 2799:
case 2365:
case 3670:
case 3995:
case 3268:
case 1969:
case 2:
case 2524:
case 3161:
case 551:
case 128:
case 456:
case 549:
case 2640:
case 1022:
case 2312:
case 2841:
case 2454:
case 811:
case 635:
case 1882:
case 1614:
case 2653:
case 522:
case 2405:
case 3871:
case 1351:
case 3132:
case 2981:
case 2848:
case 1479:
case 2569:
case 3232:
case 2083:
case 512:
case 845:
case 2823:
case 3655:
case 91:
case 3966:
case 3689:
case 2396:
case 821:
case 1734:
case 3604:
case 3334:
case 743:
case 1153:
case 1924:
case 1358:
case 2988:
case 1939:
case 1075:
case 1254:
case 2311:
case 1021:
case 1613:
case 1881:
case 353:
case 3149:
case 1467:
case 453:
case 37:
case 771:
case 1941:
case 1205:
case 602:
case 3131:
case 797:
case 3115:
case 13:
case 2708:
case 919:
case 1352:
case 1414:
case 3231:
case 2084:
case 2318:
case 486:
case 1028:
case 763:
case 1888:
case 730:
case 3404:
case 595:
case 1043:
case 1105:
case 1679:
case 1733:
case 3960:
case 3249:
case 3138:
case 865:
case 3455:
case 3489:
case 1326:
case 101:
case 417:
case 54:
case 3726:
case 3262:
case 1717:
case 942:
case 3571:
case 1146:
case 3364:
case 746:
case 2541:
case 317:
case 2180:
case 2237:
case 2280:
case 2646:
case 400:
case 2092:
case 1307:
case 2523:
case 1680:
case 1246:
case 300:
case 2869:
case 3470:
case 2548:
case 1486:
case 718:
case 1359:
case 2666:
case 1385:
case 3224:
case 3051:
case 2831:
case 2815:
case 1570:
case 3759:
case 3785:
case 3688:
case 1722:
case 226:
case 2904:
case 1932:
case 4051:
case 3322:
case 2849:
case 1034:
case 3058:
case 1672:
case 533:
case 560:
case 2002:
case 647:
case 3681:
case 3344:
case 309:
case 2783:
case 1744:
case 3797:
case 1425:
case 890:
case 4058:
case 2272:
case 3124:
case 3837:
case 1876:
case 287:
case 1589:
case 3880:
case 3940:
case 1295:
case 2798:
case 1130:
case 4020:
case 384:
case 2862:
case 696:
case 1230:
case 3494:
case 3514:
case 1961:
case 907:
case 2300:
case 2630:
case 2436:
case 3693:
case 143:
case 3567:
case 536:
case 1136:
case 3946:
case 2515:
case 2716:
case 1870:
case 2147:
case 3579:
case 1750:
case 3350:
case 2327:
case 197:
case 2430:
case 370:
case 2861:
case 3513:
case 3493:
case 2636:
case 2538:
case 1962:
case 1647:
case 3694:
case 3277:
case 1236:
case 2792:
case 3223:
case 3052:
case 30:
case 3139:
case 2171:
case 2008:
case 2345:
case 2832:
case 1678:
case 3537:
case 2903:
case 146:
case 257:
case 2466:
case 1855:
case 3580:
case 1889:
case 1721:
case 2319:
case 454:
case 1915:
case 40:
case 2373:
case 3481:
case 2178:
case 2709:
case 3241:
case 2784:
case 3343:
case 3814:
case 1728:
case 3682:
case 2225:
case 3123:
case 3954:
case 1743:
case 667:
case 591:
case 3449:
case 1167:
case 3302:
case 496:
case 2734:
case 3074:
case 1702:
case 1988:
case 3289:
case 3255:
case 1114:
case 951:
case 3415:
case 949:
case 3860:
case 1569:
case 2479:
case 396:
case 239:
case 1396:
case 1823:
case 1839:
case 892:
case 684:
case 2351:
case 873:
case 2667:
case 1981:
case 96:
case 1454:
case 804:
case 2253:
case 2022:
case 1841:
case 1267:
case 775:
case 2614:
case 2882:
case 698:
case 912:
case 1446:
case 2588:
case 447:
case 1640:
case 609:
case 1799:
case 2480:
case 347:
case 3765:
case 3566:
case 168:
case 3000:
case 716:
case 1091:
case 1365:
case 3836:
case 1877:
case 1757:
case 2581:
case 1993:
case 3357:
case 2320:
case 1010:
case 2763:
case 1186:
case 3170:
case 2894:
case 922:
case 3462:
case 2246:
case 3006:
case 2637:
case 1523:
case 367:
case 2486:
case 148:
case 3560:
case 264:
case 555:
case 1092:
case 1440:
case 4006:
case 1994:
case 2582:
case 1180:
case 493:
case 3662:
case 1137:
case 3176:
case 4027:
case 3027:
case 2326:
case 1016:
case 201:
case 132:
case 393:
case 1539:
case 114:
case 372:
case 2733:
case 3301:
case 2679:
case 2154:
case 3866:
case 1318:
case 2028:
case 3432:
case 1113:
case 1279:
case 1084:
case 1824:
case 538:
case 2043:
case 2105:
case 94:
case 2941:
case 3103:
case 631:
case 3638:
case 815:
case 3308:
case 1982:
case 1708:
case 1179:
case 2254:
case 2021:
case 3019:
case 713:
case 2075:
case 3711:
case 1577:
case 2467:
case 2881:
case 4045:
case 2729:
case 1740:
case 2157:
case 3120:
case 438:
case 1368:
case 3340:
case 1163:
case 2585:
case 2786:
case 2559:
case 3816:
case 1699:
case 3665:
case 1087:
case 846:
case 900:
case 1806:
case 3761:
case 1361:
case 3069:
case 917:
case 3892:
case 442:
case 636:
case 3151:
case 1845:
case 1602:
case 3418:
case 708:
case 782:
case 455:
case 2634:
case 2304:
case 4042:
case 2202:
case 3042:
case 986:
case 1401:
case 429:
case 3510:
case 3696:
case 2433:
case 1234:
case 3158:
case 2767:
case 863:
case 1500:
case 830:
case 3435:
case 3411:
case 2429:
case 953:
case 3353:
case 1997:
case 3944:
case 206:
case 1066:
case 319:
case 593:
case 3251:
case 572:
case 2071:
case 3039:
case 3690:
case 3975:
case 1315:
case 1601:
case 1331:
case 1527:
case 2633:
case 3496:
case 2885:
case 2303:
case 2779:
case 2108:
case 2859:
case 3731:
case 3715:
case 1349:
case 3618:
case 1402:
case 2945:
case 41:
case 1233:
case 3749:
case 2434:
case 1129:
case 2078:
case 3354:
case 1133:
case 42:
case 1338:
case 3412:
case 3928:
case 1229:
case 4048:
case 1754:
case 1874:
case 2101:
case 3738:
case 3611:
case 3305:
case 3048:
case 1060:
case 2629:
case 2208:
case 1506:
case 250:
case 1705:
case 2973:
case 3252:
case 32:
case 3077:
case 391:
case 3950:
case 1036:
case 2927:
case 385:
case 3465:
case 1519:
case 2737:
case 866:
case 477:
case 752:
case 3346:
case 2047:
case 3207:
case 274:
case 1545:
case 596:
case 1117:
case 3126:
case 491:
case 3762:
case 3226:
case 1362:
case 3584:
case 1264:
case 1573:
case 2463:
case 2906:
case 190:
case 3509:
case 983:
case 3891:
case 265:
case 1298:
case 3999:
case 2610:
case 2369:
case 554:
case 1965:
case 902:
case 1450:
case 141:
case 159:
case 1210:
case 125:
case 2698:
case 2256:
case 994:
case 1191:
case 1558:
case 2512:
case 2040:
case 655:
case 4070:
case 3864:
case 629:
case 1826:
case 1393:
case 3817:
case 2730:
case 299:
case 1996:
case 848:
case 3833:
case 3685:
case 176:
case 2565:
case 2053:
case 824:
case 1421:
case 3174:
case 1388:
case 2324:
case 1014:
case 1183:
case 3902:
case 2144:
case 2818:
case 436:
case 18:
case 1852:
case 1772:
case 1443:
case 3372:
case 4089:
case 1428:
case 1381:
case 2122:
case 2951:
case 3274:
case 3089:
case 832:
case 3781:
case 2342:
case 2811:
case 2835:
case 3834:
case 1109:
case 8:
case 2275:
case 662:
case 2221:
case 3378:
case 1184:
case 1507:
case 2323:
case 868:
case 3485:
case 2896:
case 189:
case 252:
case 805:
case 1444:
case 3145:
case 1771:
case 2243:
case 1079:
case 1911:
case 3325:
case 2339:
case 2228:
case 2175:
case 703:
case 3119:
case 1643:
case 685:
case 2952:
case 3564:
case 29:
case 1382:
case 2684:
case 2812:
case 3908:
case 2250:
case 3227:
case 2865:
case 2410:
case 2590:
case 1650:
case 161:
case 2616:
case 935:
case 2491:
case 173:
case 2535:
case 2511:
case 360:
case 1080:
case 192:
case 1116:
case 509:
case 2692:
case 4076:
case 3347:
case 1552:
case 2046:
case 61:
case 1554:
case 3792:
case 3487:
case 1505:
case 270:
case 2513:
case 3247:
case 2007:
case 2493:
case 3531:
case 3716:
case 3515:
case 1194:
case 2579:
case 959:
case 188:
case 941:
case 869:
case 102:
case 231:
case 3327:
case 599:
case 313:
case 1840:
case 3868:
case 3549:
case 194:
case 2946:
case 2148:
case 3784:
case 4001:
case 508:
case 2814:
case 582:
case 3562:
case 2328:
case 1018:
case 98:
case 3373:
case 3178:
case 3709:
case 2867:
case 2905:
case 2241:
case 664:
case 1773:
case 1853:
case 1442:
case 2537:
case 3466:
case 357:
case 895:
case 2375:
case 881:
case 1648:
case 2321:
case 3278:
case 1979:
case 3125:
case 20:
case 1424:
case 3171:
case 1745:
case 793:
case 2248:
case 3345:
case 2813:
case 2344:
case 628:
case 1096:
case 209:
case 416:
case 3272:
case 644:
case 2953:
case 2124:
case 1383:
case 1914:
case 2058:
case 3838:
case 1441:
case 3002:
case 2688:
case 812:
case 2142:
case 1624:
case 3904:
case 1181:
case 834:
case 3849:
case 3568:
case 1540:
case 3666:
case 3955:
case 2051:
case 2224:
case 3815:
case 3831:
case 2759:
case 989:
case 1448:
case 158:
case 3687:
case 1065:
case 1391:
case 973:
case 3436:
case 1700:
case 2567:
case 904:
case 86:
case 552:
case 639:
case 95:
case 796:
case 2494:
case 2169:
case 1398:
case 487:
case 3532:
case 475:
case 3798:
case 1846:
case 135:
case 2356:
case 298:
case 1986:
case 2020:
case 3695:
case 3057:
case 3710:
case 387:
case 3893:
case 70:
case 2027:
case 301:
case 3326:
case 754:
case 3050:
case 3717:
case 2830:
case 1571:
case 2887:
case 1525:
case 2947:
case 3582:
case 1364:
case 3764:
case 657:
case 2662:
case 2176:
case 2468:
case 1578:
case 1162:
case 3637:
case 267:
case 3486:
case 1470:
case 1707:
case 3021:
case 3254:
case 2971:
case 3075:
case 153:
case 2735:
case 2711:
case 1149:
case 3467:
case 3613:
case 3881:
case 3205:
case 2045:
case 731:
case 4075:
case 33:
case 4021:
case 3594:
case 770:
case 2718:
case 2203:
case 1404:
case 3888:
case 3733:
case 2615:
case 4043:
case 623:
case 3679:
case 3923:
case 2790:
case 1489:
case 1333:
case 186:
case 4028:
case 2866:
case 687:
case 2972:
case 2438:
case 3022:
case 3882:
case 2530:
case 1871:
case 1751:
case 2587:
case 3942:
case 1825:
case 4022:
case 3351:
case 3593:
case 3667:
case 3413:
case 784:
case 179:
case 1232:
case 2431:
case 3479:
case 2860:
case 1966:
case 574:
case 296:
case 3044:
case 1655:
case 4044:
case 2302:
case 1878:
case 503:
case 2449:
case 1758:
case 439:
case 3734:
case 3358:
case 810:
case 2074:
case 2289:
case 1334:
case 2255:
case 3153:
case 318:
case 2170:
case 183:
case 1168:
case 3140:
case 1363:
case 1720:
case 990:
case 3320:
case 418:
case 3763:
case 1930:
case 3480:
case 2566:
case 2765:
case 428:
case 247:
case 1268:
case 3686:
case 3969:
case 2399:
case 937:
case 1995:
case 328:
case 2270:
case 518:
case 621:
case 2635:
case 2611:
case 2883:
case 2305:
case 3629:
case 3208:
case 3713:
case 1118:
case 3973:
case 2023:
case 1844:
case 1235:
case 3078:
case 450:
case 2928:
case 3101:
case 2943:
case 1652:
case 2738:
case 2041:
case 1082:
case 1111:
case 3434:
case 733:
case 760:
case 2975:
case 544:
case 3025:
case 1379:
case 2152:
case 528:
case 3885:
case 3633:
case 1550:
case 2715:
case 905:
case 262:
case 3906:
case 2891:
case 2226:
case 122:
case 2584:
case 1992:
case 2346:
case 3047:
case 1094:
case 9:
case 2126:
case 403:
case 2898:
case 858:
case 1916:
case 1380:
case 2950:
case 968:
case 474:
case 3927:
case 1521:
case 4047:
case 3780:
case 277:
case 285:
case 69:
case 3464:
case 736:
case 3199:
case 1165:
case 2892:
case 699:
case 3257:
case 2220:
case 2761:
case 242:
case 1426:
case 3597:
case 2583:
case 1620:
case 53:
case 3585:
case 1093:
case 1770:
case 3559:
case 2816:
case 195:
case 2665:
case 924:
case 2768:
case 3157:
case 1998:
case 406:
case 1828:
case 219:
case 1196:
case 501:
case 2884:
case 665:
case 1843:
case 2251:
case 3974:
case 1088:
case 3767:
case 2158:
case 2411:
case 2435:
case 3429:
case 2591:
case 1212:
case 2944:
case 1651:
case 1367:
case 306:
case 3202:
case 564:
case 2490:
case 2042:
case 1556:
case 1875:
case 802:
case 888:
case 3389:
case 4072:
case 2696:
case 2258:
case 1112:
case 1081:
case 3355:
case 2922:
case 2418:
case 3072:
case 1704:
case 1296:
case 1658:
case 740:
case 608:
case 791:
case 1741:
case 3175:
case 3952:
case 3121:
case 2564:
case 3684:
case 2782:
case 1049:
case 2908:
case 352:
case 2497:
case 2003:
case 3243:
case 3609:
case 883:
case 3339:
case 1748:
case 3760:
case 2459:
case 3323:
case 4054:
case 3896:
case 1723:
case 1360:
case 1619:
case 3348:
case 856:
case 3005:
case 966:
case 2834:
case 2173:
case 575:
case 587:
case 3054:
case 3221:
case 3150:
case 2794:
case 311:
case 2347:
case 943:
case 4046:
case 3491:
case 1857:
case 1400:
case 3736:
case 2076:
case 107:
case 516:
case 233:
case 1606:
case 345:
case 3410:
case 3590:
case 1062:
case 3498:
case 110:
case 321:
case 445:
case 930:
case 963:
case 3691:
case 2957:
case 1600:
case 308:
case 729:
case 4040:
case 382:
case 3787:
case 1406:
case 2817:
case 3040:
case 3156:
case 87:
case 3698:
case 2100:
case 465:
case 365:
case 3610:
case 886:
case 719:
case 1061:
case 1427:
case 971:
case 3596:
case 3795:
case 1473:
case 3951:
case 3122:
case 2697:
case 2089:
case 1742:
case 2829:
case 3409:
case 1557:
case 523:
case 3683:
case 3811:
case 2004:
case 817:
case 1674:
case 3484:
case 738:
case 1808:
case 1259:
case 4053:
case 742:
case 827:
case 3144:
case 1445:
case 499:
case 3818:
case 399:
case 1366:
case 236:
case 513:
case 3565:
case 3053:
case 1801:
case 3222:
case 800:
case 1599:
case 946:
case 2607:
case 337:
case 2380:
case 1465:
case 177:
case 2575:
case 2856:
case 185:
case 2776:
case 2521:
case 2094:
case 928:
case 212:
case 944:
case 1898:
case 4036:
case 3746:
case 3545:
case 437:
case 1762:
case 2543:
case 1584:
case 1107:
case 918:
case 3362:
case 2992:
case 2528:
case 490:
case 162:
case 3264:
case 1891:
case 1509:
case 809:
case 3315:
case 3601:
case 5:
case 1921:
case 65:
case 2703:
case 1715:
case 898:
case 720:
case 1516:
case 1731:
case 3527:
case 1496:
case 1041:
case 2822:
case 692:
case 1618:
case 884:
case 3129:
case 673:
case 2458:
case 2082:
case 568:
case 3233:
case 2135:
case 3338:
case 1412:
case 2235:
case 661:
case 3133:
case 1943:
case 2190:
case 3754:
case 1048:
case 710:
case 2909:
case 1635:
case 1611:
case 1252:
case 2844:
case 12:
case 3705:
case 2451:
case 3506:
case 2118:
case 2704:
case 1598:
case 524:
case 1922:
case 1151:
case 2296:
case 2658:
case 2755:
case 155:
case 3401:
case 2556:
case 3819:
case 1510:
case 615:
case 2821:
case 2789:
case 3985:
case 2081:
case 1258:
case 1696:
case 1353:
case 1411:
case 1435:
case 3066:
case 3753:
case 2651:
case 532:
case 659:
case 119:
case 2196:
case 2452:
case 2843:
case 514:
case 2314:
case 1024:
case 1251:
case 1120:
case 4030:
case 3740:
case 1768:
case 4087:
case 3163:
case 2265:
case 478:
case 2998:
case 3368:
case 1340:
case 2850:
case 1816:
case 3087:
case 68:
case 138:
case 295:
case 0:
case 1956:
case 3030:
case 3699:
case 142:
case 2426:
case 2544:
case 1761:
case 1069:
case 901:
case 1583:
case 3361:
case 3574:
case 1227:
case 896:
case 3456:
case 3192:
case 361:
case 45:
case 2857:
case 3292:
case 373:
case 404:
case 1529:
case 133:
case 160:
case 2336:
case 392:
case 3080:
case 1863:
case 1076:
case 2917:
case 3037:
case 1127:
case 4037:
case 3116:
case 492:
case 4080:
case 751:
case 1206:
case 220:
case 2964:
case 3394:
case 3778:
case 1834:
case 926:
case 2645:
case 1378:
case 3918:
case 1219:
case 3422:
case 2038:
case 722:
case 3184:
case 1245:
case 3990:
case 2360:
case 2619:
case 1145:
case 3851:
case 1517:
case 3526:
case 1497:
case 3444:
case 712:
case 3911:
case 1325:
case 2015:
case 4079:
case 3643:
case 916:
case 1564:
case 2741:
case 1273:
case 3628:
case 2049:
case 543:
case 1908:
case 637:
case 3067:
case 2366:
case 2599:
case 957:
case 376:
case 3475:
case 2285:
case 2934:
case 3388:
case 571:
case 597:
case 2445:
case 2724:
case 3622:
case 2674:
case 3772:
case 2032:
case 530:
case 3912:
case 2159:
case 678:
case 1274:
case 2473:
case 1055:
case 872:
case 1697:
case 2557:
case 1829:
case 3520:
case 1781:
case 2395:
case 3965:
case 3656:
case 1999:
case 74:
case 2427:
case 359:
case 2769:
case 441:
case 546:
case 325:
case 3558:
case 1534:
case 3191:
case 3291:
case 1864:
case 315:
case 2600:
case 2330:
case 415:
case 1793:
case 3393:
case 2406:
case 2963:
case 1139:
case 2745:
case 154:
case 4029:
case 1052:
case 10:
case 632:
case 559:
case 3260:
case 3949:
case 1248:
case 3889:
case 1580:
case 3721:
case 3855:
case 2623:
case 1141:
case 2979:
case 999:
case 3931:
case 717:
case 2182:
case 1375:
case 3029:
case 2648:
case 727:
case 3033:
case 2282:
case 2913:
case 1867:
case 2090:
case 2309:
case 515:
case 1905:
case 3625:
case 1343:
case 1682:
case 648:
case 700:
case 3160:
case 1148:
case 2018:
case 3743:
case 624:
case 2384:
case 1954:
case 1123:
case 829:
case 2840:
case 1177:
case 497:
case 294:
case 1946:
case 77:
case 4064:
case 3750:
case 3870:
case 3017:
case 3503:
case 2937:
case 855:
case 1350:
case 131:
case 2316:
case 982:
case 2706:
case 58:
case 330:
case 363:
case 2677:
case 2294:
case 908:
case 430:
case 463:
case 819:
case 1694:
case 235:
case 1356:
case 2310:
case 2669:
case 3589:
case 81:
case 3756:
case 3555:
case 3876:
case 921:
case 3295:
case 4063:
case 3968:
case 1269:
case 1940:
case 3504:
case 3230:
case 443:
case 3195:
case 2293:
case 3447:
case 1169:
case 1693:
case 2700:
case 2477:
case 1567:
case 1224:
case 3803:
case 885:
case 3359:
case 366:
case 2288:
case 1759:
case 2448:
case 2624:
case 3266:
case 466:
case 3478:
case 2540:
case 2181:
case 561:
case 573:
case 1058:
case 2914:
case 2281:
case 3672:
case 99:
case 3166:
case 2096:
case 1681:
case 1953:
case 952:
case 2642:
case 6:
case 2383:
case 4034:
case 3471:
case 3744:
case 2188:
case 3425:
case 1615:
case 1631:
case 2249:
case 2960:
case 2138:
case 286:
case 2455:
case 1866:
case 1073:
case 1790:
case 4084:
case 3113:
case 2231:
case 1649:
case 3318:
case 1432:
case 2404:
case 4009:
case 2872:
case 788:
case 27:
case 1045:
case 2115:
case 3982:
case 3708:
case 3179:
case 671:
case 1925:
case 3842:
case 3605:
case 3335:
case 794:
case 1735:
case 253:
case 1536:
case 2149:
case 3577:
case 2162:
case 3523:
case 4092:
case 200:
case 2470:
case 836:
case 1895:
case 227:
case 3280:
case 3646:
case 2578:
case 3092:
case 1468:
case 3440:
case 3994:
case 2364:
case 1662:
case 3137:
case 3541:
case 3180:
case 332:
case 3016:
case 2936:
case 1027:
case 980:
case 2726:
case 172:
case 1830:
case 314:
case 3:
case 974:
case 468:
case 4091:
case 1270:
case 1668:
case 3286:
case 3640:
case 2476:
case 256:
case 3799:
case 3091:
case 903:
case 2268:
case 368:
case 1399:
case 2363:
case 3993:
case 1836:
case 283:
case 3757:
case 2930:
case 1357:
case 1661:
case 2987:
case 2847:
case 3186:
case 3098:
case 2572:
case 2261:
case 666:
case 1302:
case 2878:
case 1449:
case 3167:
case 2334:
case 1255:
case 1074:
case 3702:
case 3988:
case 3569:
case 3848:
case 1595:
case 1796:
case 2097:
case 3823:
case 1204:
case 3396:
case 950:
case 2825:
case 833:
case 1530:
case 2871:
case 3405:
case 3981:
case 2132:
case 1438:
case 1155:
case 590:
case 3841:
case 1189:
case 735:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760007601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,];
var gg_b = "1760007601/";

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

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
case 341:
case 3062:
case 984:
case 2814:
case 174:
case 4082:
case 1074:
case 2021:
case 3668:
case 2360:
case 1178:
case 2403:
case 3511:
case 4045:
case 3873:
case 4029:
case 109:
case 1453:
case 406:
case 883:
case 502:
case 308:
case 3143:
case 1733:
case 3278:
case 36:
case 3087:
case 3746:
case 533:
case 606:
case 123:
case 1097:
case 2792:
case 1007:
case 1752:
case 3598:
case 1243:
case 2331:
case 1840:
case 3508:
case 2415:
case 3919:
case 958:
case 1588:
case 1432:
case 3660:
case 3137:
case 621:
case 1948:
case 1112:
case 1724:
case 731:
case 2771:
case 1086:
case 1170:
case 2260:
case 3943:
case 1836:
case 3583:
case 574:
case 1503:
case 3776:
case 2480:
case 1593:
case 1140:
case 1069:
case 500:
case 2072:
case 3730:
case 1978:
case 1777:
case 1337:
case 3450:
case 1051:
case 86:
case 102:
case 808:
case 2018:
case 2516:
case 1912:
case 383:
case 1044:
case 1635:
case 2114:
case 2722:
case 2935:
case 2670:
case 3458:
case 3439:
case 2612:
case 3119:
case 2268:
case 3173:
case 2789:
case 3240:
case 3784:
case 2532:
case 1936:
case 1343:
case 2488:
case 841:
case 967:
case 12:
case 2273:
case 2812:
case 3775:
case 4084:
case 363:
case 3131:
case 3335:
case 1741:
case 2140:
case 1553:
case 3214:
case 2503:
case 3643:
case 505:
case 4061:
case 1480:
case 1091:
case 2219:
case 1863:
case 1423:
case 4038:
case 3400:
case 3363:
case 2836:
case 876:
case 351:
case 3490:
case 1963:
case 2936:
case 1532:
case 948:
case 2515:
case 3408:
case 2704:
case 926:
case 1268:
case 1789:
case 2663:
case 31:
case 4076:
case 1612:
case 88:
case 277:
case 1670:
case 3025:
case 3160:
case 3637:
case 1434:
case 1018:
case 901:
case 2635:
case 2970:
case 2912:
case 1516:
case 1766:
case 2733:
case 3235:
case 2373:
case 200:
case 13:
case 2453:
case 3931:
case 2580:
case 105:
case 1493:
case 3263:
case 3860:
case 1360:
case 1403:
case 2319:
case 2765:
case 678:
case 2848:
case 3483:
case 3767:
case 1814:
case 3968:
case 3314:
case 3619:
case 851:
case 2747:
case 2588:
case 2170:
case 1771:
case 3428:
case 2112:
case 2243:
case 2840:
case 2614:
case 2752:
case 3960:
case 1648:
case 1085:
case 223:
case 1792:
case 3558:
case 863:
case 1163:
case 2136:
case 2534:
case 2491:
case 2846:
case 227:
case 3382:
case 2401:
case 867:
case 3579:
case 3966:
case 4048:
case 719:
case 665:
case 612:
case 3633:
case 99:
case 1222:
case 1521:
case 3802:
case 259:
case 3209:
case 1829:
case 2472:
case 540:
case 3329:
case 3141:
case 3299:
case 364:
case 480:
case 2352:
case 1845:
case 1731:
case 1371:
case 976:
case 1768:
case 792:
case 3513:
case 3871:
case 2324:
case 438:
case 1289:
case 3665:
case 2347:
case 2645:
case 689:
case 1427:
case 3367:
case 234:
case 3505:
case 848:
case 3122:
case 3714:
case 1867:
case 2138:
case 196:
case 1444:
case 499:
case 3039:
case 3058:
case 266:
case 2719:
case 3647:
case 490:
case 3154:
case 1945:
case 3275:
case 2682:
case 1646:
case 412:
case 2333:
case 1199:
case 2946:
case 2586:
case 1982:
case 1366:
case 1109:
case 516:
case 3866:
case 2277:
case 712:
case 1630:
case 1975:
case 1322:
case 1167:
case 1501:
case 3822:
case 3677:
case 1591:
case 2859:
case 2421:
case 2861:
case 3282:
case 3581:
case 2003:
case 2930:
case 3854:
case 692:
case 2247:
case 2394:
case 1389:
case 1510:
case 91:
case 2569:
case 428:
case 2224:
case 790:
case 1053:
case 1572:
case 2976:
case 2743:
case 1899:
case 482:
case 3399:
case 3229:
case 586:
case 1809:
case 3564:
case 3309:
case 836:
case 2146:
case 1999:
case 492:
case 1182:
case 3604:
case 738:
case 1909:
case 2265:
case 1518:
case 951:
case 3763:
case 3694:
case 4078:
case 1497:
case 789:
case 3192:
case 3549:
case 2609:
case 2485:
case 3525:
case 3102:
case 224:
case 1684:
case 2699:
case 2876:
case 2377:
case 1659:
case 57:
case 2961:
case 3496:
case 2015:
case 1341:
case 3954:
case 3922:
case 3455:
case 116:
case 3017:
case 2442:
case 2959:
case 2737:
case 3133:
case 3:
case 1252:
case 1551:
case 1884:
case 1743:
case 2809:
case 671:
case 559:
case 1247:
case 2572:
case 1304:
case 2510:
case 4035:
case 1569:
case 1861:
case 2474:
case 3165:
case 3778:
case 1930:
case 1675:
case 795:
case 137:
case 2354:
case 3641:
case 314:
case 2202:
case 173:
case 2975:
case 3338:
case 2591:
case 1838:
case 983:
case 3359:
case 2032:
case 3770:
case 3712:
case 3124:
case 993:
case 1377:
case 2129:
case 2341:
case 1233:
case 1015:
case 3152:
case 1485:
case 2497:
case 3994:
case 1876:
case 124:
case 2684:
case 3376:
case 2407:
case 3736:
case 2182:
case 3405:
case 858:
case 2518:
case 2909:
case 756:
case 894:
case 2967:
case 1324:
case 3824:
case 2371:
case 242:
case 1294:
case 456:
case 2469:
case 660:
case 715:
case 2731:
case 762:
case 1352:
case 669:
case 3740:
case 150:
case 3852:
case 3259:
case 545:
case 3238:
case 255:
case 2521:
case 485:
case 1176:
case 3000:
case 96:
case 3346:
case 695:
case 3261:
case 2982:
case 1586:
case 3555:
case 3602:
case 1333:
case 2199:
case 1946:
case 2241:
case 685:
case 814:
case 3692:
case 1088:
case 2109:
case 2366:
case 3194:
case 27:
case 495:
case 2646:
case 3098:
case 2760:
case 166:
case 3425:
case 1161:
case 1365:
case 2945:
case 2585:
case 317:
case 656:
case 3952:
case 460:
case 3276:
case 1034:
case 3748:
case 1629:
case 3587:
case 1138:
case 83:
case 3935:
case 1025:
case 2458:
case 59:
case 2378:
case 1160:
case 2119:
case 1049:
case 2738:
case 2937:
case 283:
case 3114:
case 3722:
case 2528:
case 607:
case 576:
case 2843:
case 2240:
case 1799:
case 472:
case 3532:
case 3488:
case 2026:
case 3636:
case 461:
case 1408:
case 940:
case 3789:
case 1498:
case 4077:
case 407:
case 770:
case 2520:
case 1643:
case 1214:
case 1081:
case 672:
case 3480:
case 779:
case 2248:
case 3423:
case 3091:
case 2943:
case 2336:
case 2583:
case 1168:
case 2370:
case 1775:
case 293:
case 3553:
case 3010:
case 2730:
case 163:
case 4094:
case 58:
case 3085:
case 74:
case 2973:
case 1539:
case 3792:
case 955:
case 1558:
case 1095:
case 2278:
case 3163:
case 1005:
case 1673:
case 82:
case 1619:
case 176:
case 2660:
case 3042:
case 1868:
case 4033:
case 3914:
case 1428:
case 2417:
case 3368:
case 3331:
case 2006:
case 3057:
case 51:
case 3648:
case 3415:
case 2919:
case 3493:
case 2236:
case 1420:
case 3360:
case 3403:
case 2819:
case 1263:
case 241:
case 2348:
case 1483:
case 213:
case 679:
case 1314:
case 2631:
case 1968:
case 3814:
case 2500:
case 551:
case 3640:
case 4047:
case 3766:
case 1013:
case 1235:
case 1550:
case 4052:
case 97:
case 2873:
case 2270:
case 18:
case 604:
case 33:
case 2831:
case 2745:
case 3614:
case 2960:
case 2729:
case 1508:
case 3948:
case 4066:
case 1137:
case 3747:
case 3588:
case 3170:
case 781:
case 1417:
case 2428:
case 16:
case 443:
case 802:
case 65:
case 583:
case 1973:
case 475:
case 2056:
case 3007:
case 2558:
case 2539:
case 1270:
case 3373:
case 1212:
case 611:
case 45:
case 833:
case 2550:
case 2013:
case 1062:
case 3848:
case 374:
case 1631:
case 2968:
case 113:
case 2314:
case 1236:
case 3580:
case 3940:
case 2263:
case 2420:
case 2408:
case 3704:
case 681:
case 3663:
case 2517:
case 2799:
case 1784:
case 1240:
case 56:
case 1738:
case 3635:
case 183:
case 809:
case 1439:
case 1458:
case 1761:
case 2049:
case 2160:
case 1378:
case 1119:
case 75:
case 2131:
case 775:
case 3140:
case 3777:
case 2411:
case 3978:
case 1837:
case 3337:
case 1312:
case 3870:
case 2168:
case 541:
case 481:
case 1583:
case 3836:
case 251:
case 1943:
case 1776:
case 2081:
case 2643:
case 3593:
case 924:
case 2192:
case 1456:
case 3485:
case 517:
case 2102:
case 3265:
case 3527:
case 1689:
case 1124:
case 1654:
case 1712:
case 267:
case 1526:
case 2375:
case 2171:
case 2455:
case 2017:
case 827:
case 3737:
case 625:
case 1877:
case 747:
case 3961:
case 2735:
case 2496:
case 2841:
case 1330:
case 3015:
case 3457:
case 2954:
case 1778:
case 977:
case 3421:
case 1361:
case 345:
case 1977:
case 187:
case 1246:
case 2941:
case 2581:
case 337:
case 3003:
case 373:
case 114:
case 201:
case 2822:
case 425:
case 1641:
case 1359:
case 2677:
case 3743:
case 3551:
case 1384:
case 1133:
case 248:
case 2309:
case 2166:
case 226:
case 1894:
case 2889:
case 3569:
case 3224:
case 644:
case 768:
case 2039:
case 3365:
case 2058:
case 3507:
case 366:
case 2624:
case 2154:
case 468:
case 60:
case 1924:
case 3034:
case 2367:
case 2505:
case 3138:
case 2595:
case 1587:
case 3159:
case 852:
case 974:
case 3333:
case 4068:
case 3184:
case 3586:
case 635:
case 1692:
case 2426:
case 873:
case 3277:
case 2189:
case 1194:
case 900:
case 597:
case 2275:
case 1104:
case 1098:
case 845:
case 2902:
case 3773:
case 923:
case 1481:
case 4060:
case 1259:
case 2892:
case 447:
case 3491:
case 3846:
case 1346:
case 3023:
case 514:
case 1933:
case 1000:
case 3401:
case 2579:
case 1261:
case 1090:
case 158:
case 3204:
case 1847:
case 668:
case 2665:
case 236:
case 359:
case 2209:
case 3472:
case 3410:
case 350:
case 2299:
case 1011:
case 3352:
case 2596:
case 2194:
case 37:
case 1189:
case 2506:
case 3646:
case 2104:
case 2098:
case 1275:
case 3982:
case 567:
case 2602:
case 3542:
case 1866:
case 1426:
case 2692:
case 3366:
case 732:
case 284:
case 3867:
case 1652:
case 1122:
case 498:
case 3427:
case 2748:
case 2587:
case 622:
case 2425:
case 1058:
case 905:
case 1039:
case 688:
case 2865:
case 1624:
case 1154:
case 3945:
case 840:
case 1556:
case 2671:
case 654:
case 3469:
case 3829:
case 698:
case 1209:
case 2965:
case 2740:
case 1345:
case 1299:
case 3768:
case 1513:
case 2824:
case 3175:
case 3371:
case 3451:
case 1665:
case 386:
case 2847:
case 3882:
case 2000:
case 816:
case 501:
case 2346:
case 1382:
case 2259:
case 4019:
case 2481:
case 2666:
case 355:
case 1802:
case 3222:
case 3302:
case 3266:
case 2877:
case 3129:
case 3145:
case 1496:
case 2622:
case 2330:
case 1735:
case 2526:
case 167:
case 418:
case 92:
case 4043:
case 2147:
case 1455:
case 657:
case 316:
case 2495:
case 886:
case 403:
case 842:
case 3999:
case 3016:
case 2689:
case 1694:
case 3909:
case 1192:
case 2456:
case 1549:
case 632:
case 1989:
case 620:
case 2994:
case 3684:
case 1102:
case 1525:
case 722:
case 3389:
case 1889:
case 126:
case 603:
case 3572:
case 3053:
case 3510:
case 1399:
case 754:
case 2384:
case 2:
case 896:
case 3676:
case 798:
case 2413:
case 1309:
case 536:
case 148:
case 1564:
case 1822:
case 101:
case 3167:
case 3501:
case 3630:
case 2338:
case 3292:
case 2359:
case 1677:
case 2165:
case 2361:
case 618:
case 2778:
case 2020:
case 1282:
case 457:
case 287:
case 777:
case 1634:
case 1045:
case 2311:
case 3757:
case 35:
case 1029:
case 3958:
case 3117:
case 106:
case 623:
case 1412:
case 3850:
case 3253:
case 3742:
case 1132:
case 1350:
case 891:
case 1795:
case 1436:
case 2548:
case 3608:
case 1705:
case 2463:
case 474:
case 1514:
case 4074:
case 121:
case 2283:
case 968:
case 1688:
case 2540:
case 3600:
case 90:
case 2398:
case 674:
case 3066:
case 3568:
case 4086:
case 1779:
case 343:
case 3950:
case 2834:
case 702:
case 1067:
case 3611:
case 3216:
case 375:
case 1478:
case 3839:
case 4007:
case 723:
case 1250:
case 1853:
case 875:
case 633:
case 2188:
case 506:
case 1009:
case 4051:
case 2414:
case 1563:
case 944:
case 1615:
case 2134:
case 3022:
case 2536:
case 1725:
case 2320:
case 2632:
case 2915:
case 2803:
case 2061:
case 1749:
case 3710:
case 2815:
case 2993:
case 1440:
case 1317:
case 2298:
case 3332:
case 391:
case 1239:
case 3316:
case 2123:
case 2653:
case 3701:
case 700:
case 1953:
case 1781:
case 602:
case 709:
case 3223:
case 3820:
case 1200:
case 1320:
case 1632:
case 3303:
case 3460:
case 1061:
case 2749:
case 1290:
case 870:
case 1893:
case 3727:
case 4091:
case 2563:
case 1038:
case 1414:
case 1536:
case 3280:
case 1134:
case 231:
case 1383:
case 2009:
case 1188:
case 918:
case 1726:
case 2099:
case 1084:
case 1211:
case 2916:
case 4072:
case 1616:
case 3004:
case 3108:
case 3094:
case 2781:
case 62:
case 3234:
case 2258:
case 2239:
case 1123:
case 1208:
case 2764:
case 2832:
case 3983:
case 578:
case 2075:
case 1298:
case 3751:
case 2603:
case 705:
case 1903:
case 361:
case 3111:
case 3315:
case 2440:
case 3077:
case 3431:
case 3288:
case 4021:
case 3797:
case 1880:
case 405:
case 221:
case 3998:
case 2756:
case 2688:
case 3707:
case 861:
case 3908:
case 3293:
case 872:
case 2436:
case 998:
case 1390:
case 2795:
case 1823:
case 1463:
case 1300:
case 1046:
case 3323:
case 3639:
case 853:
case 206:
case 3047:
case 3128:
case 3658:
case 1755:
case 3024:
case 2045:
case 2634:
case 1435:
case 2029:
case 1103:
case 3650:
case 3120:
case 3911:
case 3774:
case 4085:
case 2339:
case 1193:
case 84:
case 3065:
case 2779:
case 72:
case 304:
case 3183:
case 3334:
case 3388:
case 605:
case 988:
case 3900:
case 3033:
case 178:
case 939:
case 2623:
case 1308:
case 379:
case 4057:
case 922:
case 1228:
case 2264:
case 1708:
case 3695:
case 1907:
case 339:
case 528:
case 322:
case 2985:
case 3251:
case 979:
case 3073:
case 3269:
case 388:
case 582:
case 3524:
case 2313:
case 1685:
case 1409:
case 138:
case 2607:
case 3788:
case 486:
case 442:
case 1499:
case 3734:
case 1546:
case 2014:
case 1986:
case 3955:
case 1144:
case 3422:
case 2118:
case 3862:
case 818:
case 2739:
case 3996:
case 3019:
case 3906:
case 285:
case 455:
case 3374:
case 2821:
case 1396:
case 3896:
case 2110:
case 1306:
case 1974:
case 1711:
case 1040:
case 2172:
case 165:
case 112:
case 2750:
case 1355:
case 1151:
case 2674:
case 655:
case 1475:
case 592:
case 2225:
case 354:
case 3723:
case 260:
case 1700:
case 832:
case 2249:
case 2395:
case 2191:
case 3887:
case 1790:
case 2476:
case 3307:
case 686:
case 2885:
case 3397:
case 3780:
case 3244:
case 642:
case 2356:
case 3594:
case 2627:
case 589:
case 1445:
case 2035:
case 128:
case 580:
case 2872:
case 3715:
case 1429:
case 3369:
case 3106:
case 1851:
case 2142:
case 1012:
case 182:
case 146:
case 1944:
case 3625:
case 1186:
case 332:
case 329:
case 854:
case 972:
case 796:
case 898:
case 3037:
case 2918:
case 2801:
case 1482:
case 953:
case 3187:
case 2446:
case 77:
case 1262:
case 1561:
case 1107:
case 2381:
case 357:
case 616:
case 119:
case 1691:
case 94:
case 1255:
case 755:
case 1326:
case 2575:
case 565:
case 318:
case 3466:
case 4032:
case 2901:
case 2991:
case 1296:
case 4016:
case 3297:
case 1844:
case 1467:
case 3162:
case 742:
case 649:
case 907:
case 2295:
case 2349:
case 1287:
case 2910:
case 3703:
case 1576:
case 262:
case 1720:
case 4093:
case 1279:
case 585:
case 1381:
case 1185:
case 3626:
case 1801:
case 325:
case 2036:
case 473:
case 3716:
case 2559:
case 1891:
case 3195:
case 246:
case 2070:
case 734:
case 2012:
case 282:
case 2584:
case 624:
case 1918:
case 991:
case 1364:
case 556:
case 3949:
case 2618:
case 1157:
case 868:
case 3589:
case 3310:
case 2429:
case 2869:
case 1810:
case 1035:
case 3372:
case 3925:
case 2287:
case 1295:
case 1349:
case 652:
case 2078:
case 759:
case 2720:
case 1121:
case 1651:
case 2174:
case 560:
case 2610:
case 3285:
case 2951:
case 2672:
case 981:
case 2827:
case 3964:
case 2467:
case 2206:
case 1901:
case 1991:
case 673:
case 3981:
case 4015:
case 595:
case 3753:
case 2601:
case 3541:
case 210:
case 3291:
case 3149:
case 975:
case 1739:
case 1957:
case 1821:
case 185:
case 3321:
case 335:
case 1686:
case 1461:
case 2144:
case 1438:
case 1582:
case 2986:
case 4023:
case 2546:
case 1459:
case 2048:
case 2657:
case 1379:
case 3879:
case 3696:
case 844:
case 1607:
case 156:
case 2907:
case 3404:
case 30:
case 2708:
case 1545:
case 2798:
case 280:
case 450:
case 1985:
case 466:
case 3218:
case 299:
case 1476:
case 515:
case 368:
case 3385:
case 3856:
case 1885:
case 571:
case 160:
case 1101:
case 1225:
case 4034:
case 3913:
case 752:
case 3895:
case 3342:
case 2886:
case 1842:
case 2355:
case 773:
case 3068:
case 3164:
case 825:
case 3357:
case 1430:
case 2396:
case 1172:
case 195:
case 2711:
case 2974:
case 2040:
case 3477:
case 1110:
case 95:
case 2306:
case 946:
case 1468:
case 2332:
case 172:
case 2150:
case 1983:
case 291:
case 1315:
case 1111:
case 1769:
case 3903:
case 2772:
case 3815:
case 1920:
case 41:
case 1431:
case 928:
case 579:
case 3993:
case 1077:
case 651:
case 4025:
case 1234:
case 3076:
case 3578:
case 4049:
case 663:
case 2316:
case 1100:
case 504:
case 3123:
case 3188:
case 1537:
case 3211:
case 3570:
case 919:
case 1198:
case 14:
case 463:
case 2353:
case 2473:
case 2089:
case 79:
case 107:
case 3632:
case 1223:
case 4081:
case 2054:
case 1393:
case 3893:
case 3061:
case 1617:
case 2158:
case 776:
case 3414:
case 3038:
case 1928:
case 878:
case 1727:
case 2718:
case 3383:
case 1883:
case 451:
case 1280:
case 3536:
case 476:
case 3888:
case 2443:
case 2568:
case 751:
case 1900:
case 1215:
case 3540:
case 2600:
case 561:
case 1898:
case 179:
case 980:
case 1808:
case 3308:
case 1774:
case 1911:
case 1120:
case 3103:
case 763:
case 1065:
case 49:
case 3193:
case 243:
case 3762:
case 68:
case 2950:
case 211:
case 104:
case 2611:
case 965:
case 912:
case 69:
case 3934:
case 2253:
case 4013:
case 2742:
case 1786:
case 1052:
case 3706:
case 1573:
case 3115:
case 3311:
case 48:
case 2785:
case 507:
case 1380:
case 999:
case 1998:
case 3283:
case 990:
case 4079:
case 3787:
case 2698:
case 4087:
case 46:
case 3779:
case 2183:
case 1611:
case 3067:
case 111:
case 1721:
case 3478:
case 175:
case 2650:
case 2120:
case 2774:
case 3339:
case 985:
case 2065:
case 3358:
case 1531:
case 4006:
case 2898:
case 641:
case 270:
case 3153:
case 3217:
case 1443:
case 2990:
case 831:
case 1066:
case 2033:
case 3680:
case 956:
case 3713:
case 1608:
case 960:
case 4062:
case 2293:
case 441:
case 1698:
case 581:
case 969:
case 3514:
case 2323:
case 3705:
case 321:
case 1785:
case 2707:
case 66:
case 2573:
case 3634:
case 2811:
case 2052:
case 1958:
case 995:
case 3029:
case 1939:
case 15:
case 1757:
case 2639:
case 306:
case 3132:
case 2786:
case 1850:
case 2024:
case 1437:
case 543:
case 2190:
case 1701:
case 1316:
case 511:
case 253:
case 3816:
case 3781:
case 575:
case 2234:
case 1772:
case 261:
case 2769:
case 2315:
case 821:
case 2828:
case 1817:
case 3764:
case 3693:
case 3832:
case 2983:
case 272:
case 3603:
case 2727:
case 2928:
case 181:
case 1022:
case 331:
case 3448:
case 2223:
case 2820:
case 1419:
case 3725:
case 1628:
case 962:
case 3749:
case 1353:
case 24:
case 3250:
case 3535:
case 2004:
case 1089:
case 683:
case 2108:
case 2094:
case 3099:
case 2043:
case 3575:
case 1113:
case 3901:
case 1257:
case 1433:
case 1753:
case 1981:
case 2286:
case 3295:
case 3349:
case 2793:
case 2664:
case 6:
case 1825:
case 2703:
case 1465:
case 1285:
case 856:
case 794:
case 371:
case 144:
case 2327:
case 931:
case 2207:
case 2162:
case 3818:
case 3599:
case 3142:
case 220:
case 4:
case 2155:
case 2351:
case 3509:
case 2649:
case 2471:
case 3364:
case 2037:
case 1589:
case 50:
case 1452:
case 2196:
case 3035:
case 1372:
case 1925:
case 3213:
case 3810:
case 1310:
case 2369:
case 2402:
case 3279:
case 535:
case 3185:
case 4020:
case 1881:
case 1716:
case 1105:
case 1301:
case 2926:
case 3801:
case 125:
case 1195:
case 3063:
case 3446:
case 3842:
case 3674:
case 2533:
case 1979:
case 1566:
case 2962:
case 3430:
case 1662:
case 2679:
case 1357:
case 1477:
case 395:
case 1031:
case 3476:
case 2565:
case 2307:
case 658:
case 417:
case 3356:
case 1913:
case 3567:
case 360:
case 1895:
case 3249:
case 3395:
case 2887:
case 1905:
case 458:
case 288:
case 3313:
case 1995:
case 2547:
case 871:
case 617:
case 356:
case 3607:
case 2788:
case 3484:
case 2987:
case 3529:
case 1687:
case 2695:
case 1404:
case 222:
case 2552:
case 4011:
case 2251:
case 2605:
case 230:
case 3739:
case 1291:
case 2019:
case 135:
case 3686:
case 1125:
case 2906:
case 1502:
case 385:
case 2734:
case 3942:
case 3459:
case 3014:
case 3582:
case 4000:
case 525:
case 1696:
case 1879:
case 3118:
case 3379:
case 2862:
case 198:
case 2913:
case 2805:
case 1887:
case 3790:
case 3387:
case 846:
case 3807:
case 2218:
case 4039:
case 1565:
case 1244:
case 268:
case 1780:
case 2385:
case 1613:
case 2181:
case 636:
case 1679:
case 2662:
case 3396:
case 3711:
case 1855:
case 1533:
case 2342:
case 701:
case 3886:
case 3621:
case 2068:
case 1386:
case 312:
case 518:
case 1962:
case 2566:
case 3475:
case 2979:
case 3144:
case 767:
case 1734:
case 2606:
case 1862:
case 3048:
case 3657:
case 3127:
case 2879:
case 247:
case 810:
case 2060:
case 2592:
case 1996:
case 2149:
case 1454:
case 3642:
case 1906:
case 2321:
case 235:
case 3708:
case 389:
case 3997:
case 1073:
case 1489:
case 1605:
case 1251:
case 2956:
case 1552:
case 464:
case 3798:
case 1656:
case 532:
case 3409:
case 3685:
case 188:
case 2813:
case 4050:
case 520:
case 436:
case 1987:
case 1788:
case 2995:
case 529:
case 3610:
case 598:
case 392:
case 2285:
case 103:
case 3672:
case 736:
case 3827:
case 2318:
case 2179:
case 2964:
case 880:
case 3287:
case 3078:
case 648:
case 3720:
case 2465:
case 1703:
case 889:
case 1577:
case 601:
case 1286:
case 3601:
case 2753:
case 2541:
case 2242:
case 2113:
case 4017:
case 2522:
case 1926:
case 2221:
case 2105:
case 2301:
case 2716:
case 865:
case 812:
case 1187:
case 2195:
case 3538:
case 3561:
case 3262:
case 1402:
case 2881:
case 2554:
case 3197:
case 2626:
case 1492:
case 2156:
case 2949:
case 1196:
case 890:
case 2589:
case 2310:
case 1106:
case 1504:
case 3869:
case 2925:
case 132:
case 346:
case 2447:
case 3070:
case 1625:
case 1155:
case 588:
case 3012:
case 120:
case 1037:
case 2424:
case 3927:
case 3728:
case 1471:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760461201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,];
var gg_b = "1760461201/";

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

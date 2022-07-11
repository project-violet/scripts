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
case 691:
case 2583:
case 3224:
case 3919:
case 1757:
case 1411:
case 509:
case 2819:
case 2175:
case 3070:
case 356:
case 1336:
case 2708:
case 2434:
case 2090:
case 3856:
case 1559:
case 1551:
case 433:
case 1592:
case 1634:
case 3748:
case 2335:
case 290:
case 3537:
case 2177:
case 3194:
case 175:
case 3786:
case 2163:
case 3572:
case 988:
case 1158:
case 1560:
case 3109:
case 3930:
case 2948:
case 2120:
case 2229:
case 534:
case 2591:
case 921:
case 2802:
case 1720:
case 1567:
case 970:
case 773:
case 3225:
case 2852:
case 3644:
case 1762:
case 42:
case 1079:
case 977:
case 2556:
case 508:
case 1435:
case 1939:
case 2028:
case 579:
case 888:
case 3024:
case 3192:
case 1810:
case 2053:
case 2929:
case 687:
case 2771:
case 3129:
case 2475:
case 2829:
case 2009:
case 3887:
case 3255:
case 1547:
case 2482:
case 3573:
case 388:
case 889:
case 3319:
case 1491:
case 270:
case 852:
case 1883:
case 1863:
case 1383:
case 1881:
case 1905:
case 1009:
case 578:
case 111:
case 3979:
case 1977:
case 2804:
case 3603:
case 1568:
case 3069:
case 673:
case 4082:
case 1220:
case 2868:
case 1679:
case 376:
case 2286:
case 296:
case 1346:
case 595:
case 65:
case 3513:
case 3232:
case 406:
case 996:
case 1741:
case 4074:
case 2687:
case 3442:
case 791:
case 2499:
case 1270:
case 593:
case 3826:
case 3377:
case 2410:
case 3598:
case 657:
case 284:
case 956:
case 1396:
case 1421:
case 3274:
case 3188:
case 2594:
case 3635:
case 4087:
case 3504:
case 218:
case 2779:
case 1596:
case 2259:
case 3401:
case 1871:
case 2655:
case 3374:
case 1139:
case 3735:
case 3775:
case 1343:
case 2836:
case 2215:
case 2748:
case 933:
case 2987:
case 3577:
case 2537:
case 3057:
case 1360:
case 535:
case 2463:
case 1125:
case 1790:
case 1747:
case 4055:
case 66:
case 2701:
case 2512:
case 1299:
case 1240:
case 1703:
case 31:
case 3009:
case 3089:
case 4092:
case 2715:
case 1556:
case 3871:
case 227:
case 413:
case 2403:
case 2116:
case 476:
case 3602:
case 470:
case 1874:
case 333:
case 3663:
case 696:
case 3953:
case 3250:
case 3116:
case 439:
case 203:
case 1361:
case 3800:
case 2366:
case 1023:
case 660:
case 230:
case 1159:
case 2237:
case 4069:
case 606:
case 2811:
case 1351:
case 1408:
case 815:
case 2457:
case 3178:
case 1629:
case 1238:
case 3113:
case 1313:
case 331:
case 2152:
case 1307:
case 834:
case 2547:
case 1401:
case 3238:
case 974:
case 3248:
case 156:
case 3059:
case 744:
case 3553:
case 2866:
case 322:
case 3468:
case 1738:
case 185:
case 71:
case 389:
case 2200:
case 616:
case 2878:
case 2676:
case 1681:
case 176:
case 2102:
case 2505:
case 2431:
case 1005:
case 1640:
case 3074:
case 2744:
case 341:
case 1875:
case 2007:
case 2755:
case 1992:
case 3994:
case 542:
case 3978:
case 998:
case 1705:
case 2173:
case 1115:
case 1849:
case 3805:
case 4038:
case 646:
case 3097:
case 3533:
case 2320:
case 1131:
case 4094:
case 3143:
case 3106:
case 3842:
case 2061:
case 721:
case 2612:
case 3122:
case 624:
case 2128:
case 2849:
case 3307:
case 3119:
case 1102:
case 1669:
case 953:
case 1797:
case 349:
case 2906:
case 1493:
case 1926:
case 1029:
case 2793:
case 571:
case 3240:
case 2088:
case 855:
case 2796:
case 3820:
case 381:
case 3373:
case 2181:
case 1579:
case 1602:
case 2205:
case 3926:
case 1693:
case 2523:
case 478:
case 620:
case 1124:
case 2299:
case 3558:
case 1368:
case 2916:
case 411:
case 1216:
case 3746:
case 1425:
case 678:
case 3547:
case 1251:
case 1406:
case 1731:
case 927:
case 2639:
case 3934:
case 1792:
case 1642:
case 2745:
case 122:
case 147:
case 3038:
case 2321:
case 1760:
case 1787:
case 385:
case 279:
case 922:
case 1563:
case 2857:
case 2683:
case 885:
case 1974:
case 1514:
case 1981:
case 722:
case 3693:
case 562:
case 3894:
case 2468:
case 3010:
case 883:
case 2479:
case 2342:
case 306:
case 1784:
case 1058:
case 1700:
case 1983:
case 812:
case 2291:
case 3637:
case 1484:
case 2636:
case 1943:
case 261:
case 282:
case 2877:
case 741:
case 2688:
case 247:
case 427:
case 3612:
case 1182:
case 3536:
case 3814:
case 553:
case 842:
case 3470:
case 2025:
case 2861:
case 180:
case 465:
case 1483:
case 2293:
case 2781:
case 518:
case 3002:
case 318:
case 3391:
case 3970:
case 3958:
case 705:
case 2491:
case 1865:
case 759:
case 2069:
case 37:
case 115:
case 2010:
case 2809:
case 3063:
case 1271:
case 2601:
case 1662:
case 2236:
case 2925:
case 2740:
case 749:
case 887:
case 2217:
case 192:
case 70:
case 3576:
case 2000:
case 1867:
case 1080:
case 1478:
case 1378:
case 2133:
case 3961:
case 4022:
case 2824:
case 1609:
case 954:
case 1845:
case 378:
case 2265:
case 4070:
case 3803:
case 3643:
case 866:
case 1524:
case 170:
case 3370:
case 2922:
case 1352:
case 1944:
case 1140:
case 697:
case 1909:
case 3447:
case 2433:
case 3346:
case 2631:
case 3795:
case 1911:
case 423:
case 3117:
case 2623:
case 686:
case 1195:
case 1606:
case 1558:
case 3824:
case 2282:
case 601:
case 3423:
case 172:
case 19:
case 316:
case 3134:
case 2258:
case 2934:
case 538:
case 2703:
case 1782:
case 244:
case 2937:
case 437:
case 2317:
case 4066:
case 2843:
case 366:
case 2201:
case 1355:
case 3709:
case 561:
case 914:
case 3747:
case 3096:
case 2094:
case 428:
case 3323:
case 425:
case 905:
case 2195:
case 3522:
case 1487:
case 3214:
case 2375:
case 275:
case 3678:
case 723:
case 3066:
case 300:
case 3111:
case 3995:
case 117:
case 1809:
case 714:
case 2524:
case 1016:
case 1918:
case 3459:
case 3228:
case 1335:
case 1750:
case 1505:
case 52:
case 1804:
case 521:
case 2481:
case 60:
case 3198:
case 1395:
case 481:
case 4044:
case 2871:
case 2227:
case 1418:
case 1774:
case 570:
case 2327:
case 3242:
case 4056:
case 1903:
case 1832:
case 235:
case 1475:
case 3597:
case 3215:
case 2605:
case 3770:
case 2955:
case 3544:
case 277:
case 3904:
case 168:
case 805:
case 335:
case 782:
case 1678:
case 1672:
case 2279:
case 2444:
case 2765:
case 3713:
case 529:
case 3040:
case 3640:
case 2702:
case 735:
case 1146:
case 138:
case 2056:
case 2831:
case 1232:
case 3694:
case 879:
case 1665:
case 3568:
case 2718:
case 1371:
case 3014:
case 1751:
case 2668:
case 1658:
case 268:
case 3189:
case 3765:
case 399:
case 3103:
case 2543:
case 139:
case 592:
case 2169:
case 1218:
case 1084:
case 3611:
case 2620:
case 2787:
case 1128:
case 1822:
case 958:
case 1632:
case 407:
case 415:
case 2352:
case 3997:
case 4009:
case 801:
case 3642:
case 1077:
case 183:
case 1479:
case 2001:
case 3848:
case 2568:
case 3492:
case 2957:
case 811:
case 1114:
case 3445:
case 402:
case 603:
case 3601:
case 3507:
case 3244:
case 3205:
case 3839:
case 319:
case 512:
case 1752:
case 679:
case 1152:
case 3526:
case 1244:
case 3158:
case 2486:
case 983:
case 159:
case 2290:
case 343:
case 2107:
case 2805:
case 73:
case 505:
case 632:
case 494:
case 395:
case 313:
case 2778:
case 314:
case 3110:
case 1521:
case 1098:
case 3932:
case 1876:
case 3206:
case 2242:
case 337:
case 1441:
case 3257:
case 3379:
case 1205:
case 2658:
case 577:
case 2437:
case 3183:
case 3933:
case 2275:
case 3868:
case 4018:
case 90:
case 330:
case 2338:
case 3685:
case 3830:
case 1168:
case 1470:
case 204:
case 2936:
case 1278:
case 372:
case 1970:
case 118:
case 353:
case 2777:
case 1234:
case 2978:
case 3233:
case 377:
case 59:
case 3098:
case 1302:
case 462:
case 1807:
case 2965:
case 1082:
case 2420:
case 1160:
case 229:
case 2018:
case 2522:
case 1367:
case 1572:
case 134:
case 2637:
case 1850:
case 3827:
case 398:
case 2453:
case 1843:
case 3668:
case 2942:
case 2869:
case 3968:
case 2893:
case 1951:
case 2736:
case 3798:
case 910:
case 2101:
case 1950:
case 2309:
case 598:
case 3540:
case 727:
case 1480:
case 708:
case 1276:
case 3707:
case 3562:
case 2882:
case 2927:
case 1312:
case 3480:
case 1872:
case 3130:
case 2400:
case 3353:
case 1735:
case 1507:
case 2984:
case 1099:
case 1664:
case 3734:
case 2722:
case 2333:
case 1763:
case 3605:
case 2262:
case 2130:
case 96:
case 2164:
case 1296:
case 1398:
case 351:
case 3653:
case 3778:
case 3329:
case 1900:
case 1145:
case 2492:
case 2554:
case 1053:
case 1842:
case 3649:
case 677:
case 1637:
case 1838:
case 4010:
case 1337:
case 2711:
case 2311:
case 4088:
case 1174:
case 57:
case 3037:
case 1268:
case 2038:
case 1040:
case 2440:
case 908:
case 2367:
case 1117:
case 3508:
case 3471:
case 3031:
case 1067:
case 1000:
case 2833:
case 4053:
case 1508:
case 2662:
case 2165:
case 2841:
case 3322:
case 3239:
case 2304:
case 3518:
case 1919:
case 3077:
case 1064:
case 3048:
case 101:
case 3906:
case 2622:
case 112:
case 3226:
case 281:
case 3858:
case 336:
case 2848:
case 482:
case 2851:
case 3815:
case 1840:
case 567:
case 1990:
case 3616:
case 2990:
case 3042:
case 4023:
case 1745:
case 3005:
case 2141:
case 851:
case 1971:
case 1494:
case 2571:
case 340:
case 1639:
case 4029:
case 3922:
case 2374:
case 3479:
case 2752:
case 3901:
case 2727:
case 1761:
case 2596:
case 1272:
case 246:
case 420:
case 4006:
case 4039:
case 3645:
case 3006:
case 4028:
case 1212:
case 4084:
case 746:
case 3646:
case 2503:
case 2894:
case 3139:
case 3706:
case 317:
case 572:
case 925:
case 1841:
case 2764:
case 3421:
case 704:
case 1423:
case 2828:
case 3420:
case 3378:
case 3162:
case 496:
case 2531:
case 2698:
case 2224:
case 1956:
case 1262:
case 511:
case 1458:
case 64:
case 405:
case 463:
case 2105:
case 1776:
case 3869:
case 1304:
case 3949:
case 1989:
case 207:
case 1661:
case 610:
case 3657:
case 3524:
case 3719:
case 3799:
case 3300:
case 3000:
case 3448:
case 3131:
case 157:
case 2356:
case 2546:
case 1571:
case 3589:
case 726:
case 1386:
case 13:
case 1998:
case 2213:
case 820:
case 549:
case 1636:
case 469:
case 239:
case 3201:
case 1130:
case 1728:
case 1239:
case 2558:
case 939:
case 1409:
case 3298:
case 3316:
case 874:
case 1322:
case 177:
case 2730:
case 1965:
case 30:
case 1887:
case 3638:
case 740:
case 3335:
case 4005:
case 1059:
case 638:
case 1047:
case 3578:
case 3463:
case 3190:
case 651:
case 3163:
case 1577:
case 1904:
case 2284:
case 258:
case 719:
case 1923:
case 457:
case 11:
case 3363:
case 2230:
case 1920:
case 2579:
case 1027:
case 1028:
case 1007:
case 1730:
case 875:
case 1257:
case 3834:
case 3350:
case 1711:
case 4019:
case 739:
case 1519:
case 3386:
case 2382:
case 1941:
case 102:
case 347:
case 3286:
case 2287:
case 3600:
case 1330:
case 2204:
case 3124:
case 251:
case 332:
case 1070:
case 3114:
case 1127:
case 1450:
case 618:
case 2021:
case 1426:
case 756:
case 1381:
case 1755:
case 2962:
case 3743:
case 1318:
case 1668:
case 2837:
case 1729:
case 605:
case 877:
case 3715:
case 2651:
case 3880:
case 1122:
case 1496:
case 2158:
case 1327:
case 1603:
case 2066:
case 3366:
case 1823:
case 1587:
case 3216:
case 3539:
case 3989:
case 1800:
case 3296:
case 1283:
case 836:
case 1588:
case 3972:
case 2926:
case 1767:
case 1660:
case 2903:
case 311:
case 1522:
case 2762:
case 4050:
case 631:
case 1113:
case 3924:
case 768:
case 2561:
case 2060:
case 95:
case 2815:
case 650:
case 3948:
case 3081:
case 3425:
case 2895:
case 2576:
case 1523:
case 859:
case 2888:
case 869:
case 2584:
case 4033:
case 187:
case 915:
case 1210:
case 3534:
case 2756:
case 3626:
case 4024:
case 3810:
case 3027:
case 3439:
case 3660:
case 386:
case 2487:
case 326:
case 1651:
case 1469:
case 818:
case 2380:
case 1608:
case 1891:
case 1101:
case 777:
case 3168:
case 1574:
case 3253:
case 1853:
case 1846:
case 897:
case 894:
case 3340:
case 303:
case 3789:
case 2210:
case 4001:
case 2114:
case 2119:
case 1295:
case 1543:
case 2928:
case 4060:
case 3483:
case 892:
case 4076:
case 2372:
case 961:
case 2343:
case 2012:
case 1769:
case 3450:
case 1816:
case 3199:
case 2407:
case 2974:
case 3016:
case 1217:
case 730:
case 3618:
case 1088:
case 1548:
case 1089:
case 2902:
case 1198:
case 689:
case 2782:
case 3580:
case 2192:
case 2826:
case 3885:
case 2002:
case 1692:
case 2958:
case 135:
case 2541:
case 3410:
case 489:
case 2638:
case 2240:
case 3142:
case 3357:
case 3051:
case 1510:
case 1995:
case 3779:
case 2920:
case 2816:
case 2273:
case 1229:
case 551:
case 2700:
case 468:
case 3690:
case 221:
case 3585:
case 327:
case 2043:
case 72:
case 645:
case 39:
case 3287:
case 3774:
case 2689:
case 1189:
case 987:
case 1241:
case 3563:
case 217:
case 2517:
case 267:
case 1319:
case 1654:
case 3809:
case 1617:
case 2995:
case 116:
case 2184:
case 1178:
case 1616:
case 1525:
case 1695:
case 3670:
case 2967:
case 3211:
case 3835:
case 2552:
case 2162:
case 501:
case 2156:
case 584:
case 665:
case 1742:
case 171:
case 449:
case 1339:
case 2738:
case 699:
case 3971:
case 1010:
case 1537:
case 1412:
case 3702:
case 2881:
case 2847:
case 3032:
case 3729:
case 3290:
case 3621:
case 3910:
case 2846:
case 2151:
case 1960:
case 764:
case 3209:
case 3293:
case 3850:
case 2418:
case 2123:
case 223:
case 441:
case 141:
case 3362:
case 2839:
case 1743:
case 1554:
case 3965:
case 1982:
case 1223:
case 775:
case 2578:
case 195:
case 2799:
case 3071:
case 2975:
case 1973:
case 3945:
case 3372:
case 1727:
case 3289:
case 1328:
case 2776:
case 1722:
case 1308:
case 3874:
case 450:
case 748:
case 3306:
case 226:
case 2347:
case 3236:
case 1825:
case 3889:
case 459:
case 2108:
case 85:
case 1721:
case 635:
case 3408:
case 458:
case 61:
case 3278:
case 3344:
case 2250:
case 1162:
case 2109:
case 886:
case 283:
case 3356:
case 3604:
case 2483:
case 1942:
case 827:
case 1248:
case 2474:
case 985:
case 3703:
case 309:
case 2104:
case 2870:
case 2313:
case 132:
case 3137:
case 3523:
case 2785:
case 2050:
case 254:
case 3062:
case 682:
case 3625:
case 3267:
case 1805:
case 2381:
case 232:
case 1106:
case 1036:
case 2682:
case 3404:
case 540:
case 3012:
case 2519:
case 2954:
case 1061:
case 1894:
case 947:
case 82:
case 3759:
case 1297:
case 182:
case 1948:
case 1686:
case 802:
case 198:
case 1143:
case 932:
case 7:
case 993:
case 1959:
case 142:
case 440:
case 3325:
case 1627:
case 1719:
case 1878:
case 3336:
case 2775:
case 3543:
case 2363:
case 483:
case 2051:
case 517:
case 2577:
case 1927:
case 867:
case 799:
case 2132:
case 130:
case 1019:
case 2840:
case 2772:
case 1453:
case 107:
case 3060:
case 2476:
case 2598:
case 3935:
case 2209:
case 3369:
case 1184:
case 1737:
case 3784:
case 3179:
case 3686:
case 2452:
case 1376:
case 2726:
case 4086:
case 1020:
case 1539:
case 928:
case 3781:
case 3075:
case 2017:
case 3396:
case 297:
case 1704:
case 3751:
case 2267:
case 2964:
case 1789:
case 1561:
case 371:
case 670:
case 1323:
case 3318:
case 2389:
case 2737:
case 1892:
case 3161:
case 3860:
case 774:
case 160:
case 3767:
case 4043:
case 15:
case 3212:
case 792:
case 285:
case 1581:
case 129:
case 2786:
case 3132:
case 2408:
case 2274:
case 3245:
case 1039:
case 3872:
case 3460:
case 968:
case 1035:
case 3412:
case 249:
case 3634:
case 3334:
case 121:
case 1552:
case 3395:
case 2296:
case 3207:
case 3173:
case 3787:
case 1501:
case 2226:
case 2768:
case 1107:
case 3126:
case 369:
case 602:
case 287:
case 1287:
case 825:
case 3908:
case 2037:
case 2988:
case 1817:
case 2157:
case 2424:
case 629:
case 3662:
case 324:
case 430:
case 2979:
case 1358:
case 3864:
case 669:
case 3263:
case 3076:
case 2447:
case 3467:
case 3698:
case 3025:
case 447:
case 3154:
case 3937:
case 2312:
case 16:
case 3796:
case 3899:
case 40:
case 2759:
case 3714:
case 2908:
case 245:
case 2588:
case 360:
case 3433:
case 236:
case 2289:
case 1463:
case 387:
case 2500:
case 3962:
case 2723:
case 3591:
case 88:
case 1515:
case 3403:
case 1215:
case 334:
case 2563:
case 845:
case 3312:
case 1553:
case 3771:
case 2897:
case 1736:
case 3430:
case 158:
case 4002:
case 1979:
case 2472:
case 194:
case 280:
case 3414:
case 918:
case 4045:
case 2943:
case 2055:
case 3928:
case 1996:
case 1542:
case 2795:
case 1937:
case 1438:
case 3581:
case 2654:
case 1541:
case 1306:
case 3477:
case 2074:
case 2530:
case 541:
case 3405:
case 2580:
case 252:
case 477:
case 1780:
case 307:
case 1691:
case 3886:
case 2207:
case 2690:
case 4078:
case 1052:
case 2365:
case 3400:
case 1342:
case 189:
case 3647:
case 1282:
case 2086:
case 1043:
case 370:
case 1889:
case 3152:
case 2951:
case 1740:
case 1042:
case 4011:
case 1928:
case 1153:
case 2998:
case 3986:
case 2247:
case 301:
case 3193:
case 653:
case 1527:
case 4047:
case 2324:
case 3980:
case 3664:
case 683:
case 1109:
case 484:
case 3969:
case 271:
case 2597:
case 700:
case 778:
case 2048:
case 3497:
case 2219:
case 662:
case 2714:
case 522:
case 2592:
case 2384:
case 734:
case 625:
case 1:
case 3020:
case 1221:
case 3592:
case 2709:
case 1167:
case 3437:
case 3424:
case 3551:
case 3865:
case 3845:
case 14:
case 1550:
case 2919:
case 3764:
case 2328:
case 2604:
case 3574:
case 2753:
case 3740:
case 87:
case 1161:
case 2016:
case 499:
case 2243:
case 2477:
case 3347:
case 1417:
case 3739:
case 614:
case 1591:
case 1024:
case 498:
case 1933:
case 1511:
case 3633:
case 2394:
case 1332:
case 3140:
case 436:
case 556:
case 2412:
case 48:
case 2540:
case 2314:
case 1604:
case 3927:
case 1054:
case 1921:
case 2614:
case 2629:
case 3452:
case 3229:
case 3488:
case 1057:
case 3588:
case 1419:
case 2269:
case 513:
case 2719:
case 3484:
case 106:
case 2511:
case 54:
case 1181:
case 1196:
case 3218:
case 202:
case 3393:
case 3355:
case 3870:
case 497:
case 51:
case 2803:
case 2924:
case 2735:
case 1870:
case 3564:
case 409:
case 2179:
case 2146:
case 2319:
case 2493:
case 2508:
case 1151:
case 2603:
case 702:
case 1564:
case 2318:
case 486:
case 3413:
case 2986:
case 1252:
case 2266:
case 3281:
case 2485:
case 2393:
case 2176:
case 3304:
case 1468:
case 92:
case 348:
case 3187:
case 2910:
case 2316:
case 2746:
case 143:
case 1315:
case 698:
case 2879:
case 1245:
case 1350:
case 3019:
case 67:
case 1925:
case 1269:
case 860:
case 3530:
case 2003:
case 832:
case 2022:
case 3392:
case 352:
case 2140:
case 3487:
case 3351:
case 2710:
case 979:
case 1044:
case 1802:
case 4051:
case 167:
case 3262:
case 2783:
case 1766:
case 3093:
case 2239:
case 1063:
case 1246:
case 491:
case 3672:
case 688:
case 2983:
case 976:
case 2385:
case 100:
case 1454:
case 3792:
case 1673:
case 531:
case 3758:
case 890:
case 1683:
case 959:
case 2470:
case 2194:
case 3804:
case 2040:
case 2026:
case 1227:
case 27:
case 1580:
case 1799:
case 3916:
case 2015:
case 2196:
case 3838:
case 747:
case 3782:
case 3936:
case 464:
case 1255:
case 3687:
case 1777:
case 861:
case 3004:
case 3080:
case 1754:
case 3624:
case 2518:
case 4035:
case 2501:
case 81:
case 2832:
case 1263:
case 1292:
case 2672:
case 2696:
case 2917:
case 3146:
case 2758:
case 444:
case 2042:
case 1111:
case 604:
case 3174:
case 1192:
case 986:
case 715:
case 1932:
case 3733:
case 3118:
case 1986:
case 1420:
case 1013:
case 1988:
case 784:
case 1532:
case 2191:
case 1187:
case 621:
case 4073:
case 3506:
case 3407:
case 1945:
case 3375:
case 516:
case 1599:
case 2509:
case 3652:
case 3516:
case 45:
case 3397:
case 967:
case 242:
case 1090:
case 2684:
case 1902:
case 3360:
case 1201:
case 766:
case 3473:
case 2443:
case 1279:
case 3453:
case 1851:
case 1880:
case 266:
case 582:
case 972:
case 2161:
case 1176:
case 448:
case 2884:
case 2699:
case 3084:
case 514:
case 184:
case 3427:
case 2495:
case 3280:
case 4032:
case 1031:
case 1006:
case 2199:
case 2378:
case 3676:
case 1598:
case 358:
case 2615:
case 2349:
case 1538:
case 2515:
case 797:
case 973:
case 564:
case 3385:
case 3165:
case 1030:
case 2357:
case 3426:
case 2858:
case 220:
case 2150:
case 1285:
case 28:
case 1690:
case 1954:
case 3599:
case 68:
case 1311:
case 634:
case 338:
case 971:
case 3288:
case 179:
case 1185:
case 2774:
case 1618:
case 3947:
case 2956:
case 1701:
case 1233:
case 2212:
case 3851:
case 3327:
case 3455:
case 1164:
case 197:
case 2950:
case 2044:
case 1912:
case 2792:
case 672:
case 1646:
case 163:
case 1847:
case 941:
case 2616:
case 1347:
case 2498:
case 3402:
case 3846:
case 2760:
case 1488:
case 3812:
case 2422:
case 1814:
case 3345:
case 2075:
case 1440:
case 3398:
case 3033:
case 3203:
case 2080:
case 361:
case 2413:
case 2442:
case 3744:
case 2823:
case 2609:
case 2659:
case 103:
case 574:
case 2911:
case 1967:
case 77:
case 1794:
case 569:
case 1253:
case 576:
case 1718:
case 3817:
case 1882:
case 3918:
case 2763:
case 2652:
case 3959:
case 510:
case 2059:
case 3121:
case 3022:
case 3381:
case 2139:
case 3099:
case 3882:
case 104:
case 2649:
case 4052:
case 362:
case 926:
case 3749:
case 2011:
case 3003:
case 2208:
case 1141:
case 3681:
case 3258:
case 2087:
case 903:
case 2225:
case 1913:
case 2750:
case 2244:
case 3788:
case 3305:
case 2827:
case 752:
case 2570:
case 2930:
case 1565:
case 1046:
case 2256:
case 1619:
case 4071:
case 286:
case 3629:
case 2425:
case 636:
case 345:
case 707:
case 3029:
case 2646:
case 560:
case 1648:
case 3607:
case 769:
case 173:
case 2981:
case 1250:
case 2997:
case 3311:
case 2332:
case 3200:
case 966:
case 379:
case 2791:
case 3891:
case 3595:
case 3026:
case 3073:
case 1659:
case 1078:
case 2536:
case 3776:
case 2729:
case 4085:
case 3476:
case 3041:
case 3150:
case 1121:
case 1773:
case 384:
case 2067:
case 2644:
case 2326:
case 1399:
case 2905:
case 786:
case 231:
case 3550:
case 1349:
case 3944:
case 2068:
case 1377:
case 945:
case 675:
case 2047:
case 3108:
case 2721:
case 416:
case 1324:
case 3317:
case 615:
case 3431:
case 3859:
case 1404:
case 1707:
case 3837:
case 3166:
case 2630:
case 2798:
case 819:
case 354:
case 1712:
case 3125:
case 552:
case 3254:
case 2145:
case 2206:
case 1756:
case 2969:
case 1836:
case 3503:
case 1922:
case 2557:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1657576801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,];
var gg_b = "1657576801/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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

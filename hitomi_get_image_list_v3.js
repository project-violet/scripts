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
case 3801:
case 3804:
case 960:
case 3016:
case 2833:
case 808:
case 2910:
case 1427:
case 3081:
case 1549:
case 1999:
case 217:
case 1028:
case 858:
case 569:
case 1233:
case 1457:
case 1515:
case 2342:
case 1523:
case 362:
case 2578:
case 3780:
case 1269:
case 1472:
case 3926:
case 2165:
case 1764:
case 3809:
case 650:
case 3552:
case 2160:
case 1732:
case 2976:
case 1781:
case 891:
case 4001:
case 233:
case 1672:
case 1614:
case 3545:
case 3947:
case 84:
case 1845:
case 3498:
case 3697:
case 3881:
case 2106:
case 3245:
case 2905:
case 144:
case 2214:
case 2267:
case 2039:
case 3400:
case 3431:
case 429:
case 1506:
case 3944:
case 2690:
case 3183:
case 508:
case 2218:
case 2517:
case 3018:
case 3975:
case 216:
case 471:
case 3895:
case 1769:
case 1392:
case 2057:
case 1376:
case 3001:
case 4018:
case 1477:
case 3356:
case 1012:
case 2241:
case 1252:
case 3404:
case 3620:
case 2604:
case 2120:
case 1510:
case 1513:
case 718:
case 1748:
case 2994:
case 2525:
case 2899:
case 236:
case 222:
case 2562:
case 3969:
case 513:
case 2066:
case 3379:
case 2437:
case 3797:
case 1342:
case 3249:
case 3288:
case 1478:
case 375:
case 902:
case 3025:
case 1237:
case 2428:
case 1972:
case 4089:
case 1551:
case 1532:
case 2887:
case 2684:
case 1543:
case 1890:
case 1758:
case 1486:
case 3276:
case 3429:
case 2772:
case 1599:
case 342:
case 3834:
case 836:
case 1855:
case 3840:
case 3487:
case 1534:
case 3769:
case 4086:
case 3416:
case 619:
case 806:
case 990:
case 2168:
case 4057:
case 3863:
case 997:
case 1736:
case 2884:
case 1050:
case 3357:
case 3813:
case 324:
case 1958:
case 2340:
case 3891:
case 3685:
case 3686:
case 1005:
case 3805:
case 3136:
case 63:
case 1714:
case 3047:
case 1803:
case 940:
case 2532:
case 2489:
case 122:
case 2680:
case 2333:
case 2725:
case 2720:
case 2674:
case 2938:
case 286:
case 6:
case 1695:
case 2341:
case 1776:
case 2980:
case 1909:
case 2953:
case 1940:
case 3033:
case 482:
case 2530:
case 1835:
case 545:
case 314:
case 1726:
case 3029:
case 1496:
case 2734:
case 411:
case 1574:
case 653:
case 1712:
case 2126:
case 655:
case 1039:
case 2330:
case 149:
case 3165:
case 232:
case 680:
case 2950:
case 147:
case 2784:
case 934:
case 1324:
case 3618:
case 2573:
case 3636:
case 2580:
case 3839:
case 549:
case 1232:
case 4002:
case 3348:
case 991:
case 2054:
case 1762:
case 313:
case 3274:
case 1085:
case 47:
case 2027:
case 2009:
case 2380:
case 1581:
case 3737:
case 2648:
case 1598:
case 1623:
case 1553:
case 2284:
case 146:
case 1619:
case 2502:
case 373:
case 249:
case 3086:
case 131:
case 51:
case 455:
case 1439:
case 2813:
case 235:
case 3177:
case 2083:
case 296:
case 4008:
case 3860:
case 706:
case 2243:
case 2299:
case 3451:
case 2882:
case 25:
case 779:
case 4043:
case 2787:
case 3203:
case 3374:
case 0:
case 3192:
case 1141:
case 3410:
case 3748:
case 3830:
case 2119:
case 1679:
case 3383:
case 1041:
case 400:
case 1643:
case 3132:
case 2557:
case 2981:
case 3219:
case 1545:
case 1016:
case 1029:
case 611:
case 414:
case 1433:
case 666:
case 2130:
case 1830:
case 2046:
case 3439:
case 1931:
case 2441:
case 747:
case 1069:
case 3315:
case 3776:
case 2503:
case 2516:
case 3477:
case 2232:
case 3456:
case 1430:
case 2473:
case 3075:
case 618:
case 382:
case 2193:
case 2799:
case 3027:
case 2873:
case 1494:
case 1226:
case 3899:
case 4045:
case 1389:
case 305:
case 2521:
case 1552:
case 451:
case 804:
case 1096:
case 1423:
case 2496:
case 2265:
case 900:
case 1186:
case 542:
case 3479:
case 1258:
case 1573:
case 2598:
case 3597:
case 3792:
case 3465:
case 3259:
case 3376:
case 111:
case 1212:
case 163:
case 1945:
case 409:
case 1823:
case 672:
case 4061:
case 2836:
case 1885:
case 2553:
case 3903:
case 3072:
case 2749:
case 3209:
case 1406:
case 200:
case 1814:
case 3907:
case 1401:
case 3922:
case 464:
case 3945:
case 3063:
case 26:
case 3771:
case 748:
case 3380:
case 3725:
case 1314:
case 3845:
case 2445:
case 856:
case 897:
case 1390:
case 2392:
case 1479:
case 3649:
case 3719:
case 1336:
case 3129:
case 377:
case 2564:
case 2755:
case 1817:
case 1475:
case 2623:
case 3815:
case 953:
case 1602:
case 2614:
case 4078:
case 2810:
case 3672:
case 2956:
case 4021:
case 384:
case 256:
case 3808:
case 3599:
case 827:
case 119:
case 1160:
case 1556:
case 419:
case 2714:
case 1002:
case 1188:
case 1887:
case 507:
case 2849:
case 2365:
case 1162:
case 2768:
case 3671:
case 3143:
case 1976:
case 664:
case 2309:
case 1320:
case 3635:
case 1023:
case 2001:
case 2683:
case 2827:
case 3299:
case 1418:
case 153:
case 4091:
case 3157:
case 4049:
case 4013:
case 1032:
case 105:
case 184:
case 4070:
case 2902:
case 2837:
case 2804:
case 3240:
case 3085:
case 219:
case 3234:
case 3013:
case 155:
case 3070:
case 634:
case 1172:
case 3279:
case 3121:
case 1925:
case 3310:
case 3125:
case 2713:
case 71:
case 3855:
case 3345:
case 302:
case 2322:
case 1075:
case 440:
case 2735:
case 1200:
case 3577:
case 3391:
case 1025:
case 910:
case 3263:
case 1109:
case 1294:
case 179:
case 961:
case 1144:
case 810:
case 3333:
case 199:
case 3710:
case 142:
case 2739:
case 3916:
case 3810:
case 1528:
case 2838:
case 922:
case 1395:
case 3736:
case 1422:
case 1181:
case 673:
case 3215:
case 1079:
case 2226:
case 971:
case 1719:
case 2637:
case 3208:
case 1101:
case 1965:
case 2528:
case 4059:
case 1681:
case 2701:
case 2816:
case 1165:
case 768:
case 3707:
case 212:
case 1152:
case 1291:
case 3460:
case 924:
case 3282:
case 887:
case 3628:
case 1167:
case 2221:
case 126:
case 3546:
case 2328:
case 3024:
case 3761:
case 582:
case 79:
case 442:
case 165:
case 2288:
case 1451:
case 715:
case 2987:
case 4056:
case 2686:
case 3753:
case 3191:
case 1689:
case 2995:
case 1452:
case 587:
case 780:
case 540:
case 2851:
case 2439:
case 3627:
case 4090:
case 1961:
case 3349:
case 3598:
case 1634:
case 44:
case 28:
case 2133:
case 3850:
case 3:
case 2465:
case 1065:
case 2753:
case 965:
case 1785:
case 3585:
case 1241:
case 636:
case 741:
case 2917:
case 2542:
case 4069:
case 2399:
case 2425:
case 2907:
case 559:
case 1078:
case 876:
case 518:
case 2131:
case 1107:
case 91:
case 2356:
case 1481:
case 911:
case 744:
case 517:
case 264:
case 2693:
case 2259:
case 2014:
case 3909:
case 4012:
case 1488:
case 226:
case 3145:
case 447:
case 1927:
case 3578:
case 2417:
case 3139:
case 1337:
case 3030:
case 1753:
case 2470:
case 29:
case 3442:
case 2176:
case 3058:
case 4027:
case 2991:
case 7:
case 3426:
case 1924:
case 1970:
case 3306:
case 3408:
case 3995:
case 726:
case 1616:
case 2455:
case 550:
case 968:
case 2154:
case 1588:
case 118:
case 3420:
case 3447:
case 1357:
case 2921:
case 3140:
case 3155:
case 1558:
case 170:
case 1922:
case 1951:
case 2476:
case 2256:
case 1932:
case 3041:
case 2145:
case 2765:
case 877:
case 203:
case 3787:
case 281:
case 3699:
case 1368:
case 48:
case 1480:
case 2323:
case 1923:
case 453:
case 1652:
case 8:
case 2896:
case 3943:
case 2900:
case 1858:
case 1214:
case 1980:
case 4071:
case 3793:
case 3210:
case 2843:
case 3361:
case 3227:
case 528:
case 3862:
case 3163:
case 2757:
case 1264:
case 3624:
case 1153:
case 2148:
case 3550:
case 3124:
case 825:
case 3068:
case 2918:
case 1724:
case 3826:
case 3162:
case 1322:
case 1071:
case 681:
case 470:
case 2855:
case 1892:
case 3851:
case 3184:
case 2963:
case 546:
case 3973:
case 3323:
case 3354:
case 2791:
case 3692:
case 3032:
case 3936:
case 2660:
case 2069:
case 3232:
case 3779:
case 1104:
case 2529:
case 1218:
case 3582:
case 925:
case 2326:
case 2391:
case 1306:
case 1851:
case 769:
case 3972:
case 3608:
case 626:
case 1592:
case 1837:
case 2422:
case 1666:
case 850:
case 2830:
case 3468:
case 2568:
case 2796:
case 2420:
case 2718:
case 1137:
case 3324:
case 2992:
case 239:
case 3403:
case 1968:
case 2047:
case 3887:
case 129:
case 2075:
case 152:
case 3553:
case 23:
case 2608:
case 625:
case 724:
case 3407:
case 3631:
case 1597:
case 2483:
case 3613:
case 1383:
case 698:
case 139:
case 524:
case 480:
case 3211:
case 1632:
case 3266:
case 1238:
case 379:
case 2161:
case 2479:
case 2649:
case 2570:
case 3375:
case 1876:
case 3074:
case 39:
case 3370:
case 3037:
case 445:
case 2531:
case 2556:
case 523:
case 2433:
case 1952:
case 2565:
case 3388:
case 3341:
case 2236:
case 3519:
case 1435:
case 2170:
case 1746:
case 930:
case 1881:
case 4087:
case 2020:
case 2501:
case 2676:
case 927:
case 1035:
case 213:
case 3173:
case 2522:
case 1943:
case 2975:
case 2854:
case 143:
case 1522:
case 1364:
case 1400:
case 2287:
case 2186:
case 448:
case 3168:
case 918:
case 395:
case 1859:
case 1985:
case 1566:
case 2954:
case 1485:
case 554:
case 1487:
case 3000:
case 2371:
case 3156:
case 1816:
case 116:
case 3090:
case 3750:
case 3921:
case 866:
case 1473:
case 1118:
case 2482:
case 1540:
case 3222:
case 2003:
case 1613:
case 1990:
case 568:
case 969:
case 140:
case 3959:
case 2181:
case 1148:
case 2605:
case 1508:
case 3195:
case 2162:
case 547:
case 2423:
case 1019:
case 723:
case 3673:
case 2353:
case 3889:
case 2644:
case 2121:
case 4011:
case 606:
case 2091:
case 2901:
case 2352:
case 1129:
case 416:
case 3663:
case 359:
case 996:
case 3655:
case 3449:
case 2174:
case 1868:
case 645:
case 3255:
case 2094:
case 3335:
case 3478:
case 3885:
case 1155:
case 240:
case 2436:
case 3328:
case 3256:
case 3640:
case 1548:
case 2070:
case 2585:
case 1361:
case 323:
case 237:
case 2297:
case 591:
case 1355:
case 3352:
case 503:
case 1511:
case 3733:
case 1182:
case 2935:
case 1897:
case 2593:
case 1352:
case 1247:
case 3963:
case 2156:
case 3314:
case 840:
case 743:
case 2195:
case 690:
case 2932:
case 3870:
case 3390:
case 356:
case 2276:
case 2561:
case 428:
case 659:
case 2040:
case 692:
case 1051:
case 1001:
case 289:
case 70:
case 3327:
case 253:
case 1281:
case 789:
case 2610:
case 301:
case 1819:
case 2173:
case 1933:
case 1815:
case 3723:
case 3542:
case 697:
case 3500:
case 3052:
case 1347:
case 3159:
case 967:
case 703:
case 196:
case 2600:
case 2018:
case 1185:
case 2966:
case 519:
case 1121:
case 3544:
case 319:
case 3268:
case 2972:
case 1453:
case 1555:
case 2035:
case 1621:
case 1257:
case 3784:
case 1677:
case 2036:
case 3634:
case 879:
case 1493:
case 1884:
case 785:
case 50:
case 3986:
case 2056:
case 2231:
case 2872:
case 2464:
case 2157:
case 85:
case 3214:
case 3186:
case 2774:
case 183:
case 1751:
case 834:
case 1765:
case 2491:
case 2394:
case 121:
case 3373:
case 4000:
case 2554:
case 1512:
case 803:
case 2547:
case 2509:
case 2727:
case 3726:
case 3964:
case 2357:
case 3441:
case 2621:
case 3244:
case 2389:
case 617:
case 2122:
case 389:
case 2388:
case 4074:
case 907:
case 861:
case 2751:
case 928:
case 457:
case 3993:
case 2511:
case 2448:
case 238:
case 266:
case 3499:
case 102:
case 4033:
case 2663:
case 113:
case 3866:
case 1387:
case 1428:
case 3836:
case 2559:
case 3763:
case 3835:
case 250:
case 2931:
case 406:
case 2862:
case 3501:
case 124:
case 2078:
case 3621:
case 2303:
case 3782:
case 1064:
case 3997:
case 3579:
case 2526:
case 2366:
case 2458:
case 738:
case 3343:
case 3322:
case 3982:
case 2969:
case 24:
case 3762:
case 2808:
case 3847:
case 251:
case 3515:
case 2227:
case 2153:
case 3164:
case 4092:
case 2806:
case 3363:
case 60:
case 4030:
case 366:
case 3108:
case 917:
case 1918:
case 1752:
case 2252:
case 1874:
case 433:
case 2163:
case 4084:
case 2282:
case 981:
case 1333:
case 2818:
case 2579:
case 551:
case 2409:
case 56:
case 1648:
case 2096:
case 916:
case 683:
case 1311:
case 764:
case 3751:
case 1077:
case 821:
case 2635:
case 1878:
case 985:
case 649:
case 694:
case 1575:
case 1821:
case 581:
case 426:
case 3633:
case 2588:
case 2404:
case 1711:
case 1700:
case 3743:
case 2477:
case 3225:
case 2988:
case 1564:
case 2461:
case 1003:
case 1484:
case 1967:
case 3495:
case 2021:
case 2151:
case 2731:
case 854:
case 2840:
case 685:
case 493:
case 396:
case 2622:
case 1375:
case 3514:
case 3481:
case 2968:
case 1436:
case 1344:
case 1420:
case 4065:
case 4019:
case 2446:
case 3960:
case 3007:
case 3937:
case 3444:
case 777:
case 1455:
case 2508:
case 2318:
case 1649:
case 2355:
case 3257:
case 490:
case 3170:
case 2175:
case 2257:
case 2459:
case 3036:
case 1919:
case 3059:
case 3711:
case 622:
case 3475:
case 846:
case 2506:
case 3953:
case 579:
case 3820:
case 1939:
case 3387:
case 364:
case 308:
case 3580:
case 1609:
case 2794:
case 2011:
case 3569:
case 3567:
case 1749:
case 3611:
case 360:
case 745:
case 651:
case 880:
case 2164:
case 1750:
case 1893:
case 3089:
case 4034:
case 2281:
case 3275:
case 3886:
case 914:
case 1661:
case 3419:
case 2143:
case 1323:
case 2694:
case 1886:
case 3476:
case 3535:
case 1696:
case 1688:
case 2319:
case 3443:
case 944:
case 398:
case 1570:
case 1463:
case 1094:
case 255:
case 988:
case 2926:
case 1446:
case 607:
case 599:
case 2678:
case 210:
case 3781:
case 1154:
case 3622:
case 752:
case 161:
case 3466:
case 4037:
case 347:
case 2264:
case 2457:
case 544:
case 2206:
case 1640:
case 3111:
case 420:
case 254:
case 1187:
case 1371:
case 1949:
case 1189:
case 3116:
case 2800:
case 2460:
case 1514:
case 577:
case 1894:
case 1691:
case 1914:
case 3393:
case 1584:
case 2109:
case 2289:
case 2666:
case 4046:
case 1465:
case 3389:
case 408:
case 1685:
case 3658:
case 3559:
case 1416:
case 1745:
case 1842:
case 1559:
case 3791:
case 3002:
case 295:
case 3879:
case 1801:
case 201:
case 1285:
case 1319:
case 530:
case 3843:
case 1385:
case 167:
case 3728:
case 1937:
case 435:
case 3505:
case 3512:
case 1124:
case 2315:
case 2180:
case 3385:
case 3103:
case 3722:
case 2244:
case 3576:
case 2592:
case 374:
case 3981:
case 1620:
case 972:
case 1780:
case 3296:
case 3023:
case 938:
case 404:
case 1043:
case 1458:
case 3358:
case 2467:
case 1089:
case 418:
case 702:
case 862:
case 2034:
case 3061:
case 1280:
case 773:
case 1088:
case 2544:
case 3657:
case 2431:
case 1601:
case 1929:
case 54:
case 1996:
case 708:
case 78:
case 964:
case 345:
case 1412:
case 393:
case 120:
case 3764:
case 830:
case 795:
case 3527:
case 730:
case 788:
case 1:
case 3298:
case 3434:
case 652:
case 1755:
case 2726:
case 3301:
case 3414:
case 2062:
case 1112:
case 1612:
case 2583:
case 2239:
case 1915:
case 3894:
case 863:
case 802:
case 4041:
case 169:
case 3253:
case 474:
case 2104:
case 1959:
case 1908:
case 16:
case 423:
case 935:
case 1222:
case 1850:
case 987:
case 790:
case 3917:
case 3977:
case 1754:
case 1710:
case 2189:
case 755:
case 1024:
case 4062:
case 2253:
case 2550:
case 1377:
case 1127:
case 344:
case 227:
case 231:
case 1284:
case 740:
case 2535:
case 2045:
case 3607:
case 1846:
case 1721:
case 137:
case 3976:
case 42:
case 1122:
case 1723:
case 3656:
case 2484:
case 2334:
case 915:
case 3794:
case 2150:
case 908:
case 3732:
case 2539:
case 2945:
case 3246:
case 1351:
case 2929:
case 390:
case 491:
case 826:
case 1464:
case 1272:
case 1716:
case 815:
case 2754:
case 494:
case 4076:
case 3360:
case 2125:
case 2196:
case 1438:
case 3026:
case 955:
case 3740:
case 3555:
case 3415:
case 2497:
case 353:
case 3968:
case 449:
case 1520:
case 2781:
case 2986:
case 3560:
case 886:
case 562:
case 3888:
case 106:
case 3326:
case 4022:
case 3829:
case 700:
case 635:
case 3134:
case 1482:
case 3182:
case 3615:
case 3651:
case 1450:
case 1206:
case 1310:
case 291:
case 3911:
case 3489:
case 309:
case 1911:
case 1021:
case 644:
case 76:
case 1682:
case 3305:
case 2586:
case 849:
case 421:
case 157:
case 731:
case 2671:
case 2382:
case 3051:
case 3606:
case 1879:
case 2613:
case 750:
case 1231:
case 272:
case 2230:
case 2911:
case 2865:
case 1869:
case 1204:
case 299:
case 3939:
case 3152:
case 215:
case 2761:
case 721:
case 3742:
case 3970:
case 1567:
case 583:
case 2634:
case 874:
case 3216:
case 2951:
case 2182:
case 603:
case 1289:
case 1143:
case 888:
case 2293:
case 2893:
case 3873:
case 2051:
case 3311:
case 3877:
case 3827:
case 1317:
case 2374:
case 135:
case 2679:
case 2146:
case 36:
case 501:
case 3632:
case 1673:
case 2486:
case 1994:
case 3126:
case 3587:
case 1273:
case 380:
case 2485:
case 292:
case 661:
case 4024:
case 627:
case 1190:
case 1956:
case 334:
case 141:
case 2419:
case 3153:
case 3586:
case 766:
case 2010:
case 3088:
case 2642:
case 3248:
case 3329:
case 3715:
case 1921:
case 1399:
case 737:
case 2915:
case 1768:
case 1630:
case 1888:
case 3985:
case 1042:
case 2881:
case 3667:
case 45:
case 3680:
case 1840:
case 1030:
case 3491:
case 1254:
case 3678:
case 2959:
case 2807:
case 2474:
case 727:
case 228:
case 2050:
case 1249:
case 3974:
case 2982:
case 17:
case 1977:
case 2707:
case 3510:
case 1328:
case 1529:
case 1346:
case 3114:
case 2989:
case 511:
case 979:
case 2301:
case 3738:
case 1862:
case 3362:
case 2376:
case 3287:
case 2677:
case 2080:
case 2552:
case 3082:
case 614:
case 2750:
case 4023:
case 3321:
case 3729:
case 2846:
case 1844:
case 1934:
case 176:
case 640:
case 3083:
case 3144:
case 9:
case 2383:
case 570:
case 573:
case 4003:
case 1014:
case 1216:
case 585:
case 446:
case 1627:
case 2468:
case 2262:
case 1205:
case 3302:
case 3197:
case 3912:
case 2576:
case 1517:
case 1993:
case 575:
case 3600:
case 2002:
case 1891:
case 3778:
case 639:
case 757:
case 798:
case 4025:
case 3105:
case 2892:
case 890:
case 3160:
case 369:
case 3915:
case 3325:
case 1871:
case 3999:
case 3012:
case 3918:
case 2147:
case 34:
case 3347:
case 271:
case 2792:
case 3540:
case 623:
case 2925:
case 1103:
case 2350:
case 2314:
case 2589:
case 2325:
case 2405:
case 3890:
case 2270:
case 2471:
case 2842:
case 2098:
case 1276:
case 1011:
case 3317:
case 1261:
case 1622:
case 3252:
case 1178:
case 2979:
case 341:
case 844:
case 1606:
case 180:
case 1684:
case 1207:
case 2490:
case 1292:
case 4040:
case 1321:
case 2961:
case 958:
case 1054:
case 1663:
case 381:
case 1678:
case 3905:
case 3237:
case 1130:
case 322:
case 1786:
case 3079:
case 3884:
case 3226:
case 2798:
case 3046:
case 1315:
case 19:
case 2661:
case 1140:
case 684:
case 1662:
case 889:
case 2427:
case 520:
case 824:
case 712:
case 2876:
case 3949:
case 68:
case 2864:
case 138:
case 1938:
case 2492:
case 2639:
case 2655:
case 1864:
case 2895:
case 1507:
case 586:
case 62:
case 2898:
case 2235:
case 230:
case 1527:
case 178:
case 986:
case 2004:
case 3938:
case 1208:
case 3717:
case 1963:
case 3518:
case 2478:
case 3151:
case 1240:
case 3293:
case 15:
case 2112:
case 4036:
case 578:
case 1810:
case 892:
case 1991:
case 2952:
case 2495:
case 279:
case 2878:
case 2041:
case 2390:
case 3882:
case 3261:
case 3106:
case 1128:
case 3660:
case 2773:
case 631:
case 1327:
case 3169:
case 3292:
case 2519:
case 2504:
case 3708:
case 1704:
case 2048:
case 3331:
case 2943:
case 95:
case 3107:
case 984:
case 2208:
case 2903:
case 3337:
case 4031:
case 221:
case 2127:
case 2758:
case 1984:
case 1658:
case 3260:
case 3767:
case 1345:
case 2228:
case 3185:
case 3213:
case 1789:
case 3057:
case 3798:
case 1806:
case 1624:
case 3330:
case 1578:
case 2411:
case 654:
case 1363:
case 2071:
case 40:
case 3593:
case 1228:
case 1058:
case 3019:
case 796:
case 3050:
case 109:
case 945:
case 3181:
case 2946:
case 1056:
case 1562:
case 3563:
case 2551:
case 954:
case 1603:
case 2520:
case 241:
case 855:
case 3309:
case 1359:
case 3101:
case 1080:
case 2906:
case 3739:
case 2957:
case 2237:
case 492:
case 2762:
case 1986:
case 437:
case 3243:
case 459:
case 1150:
case 3009:
case 458:
case 209:
case 1550:
case 1116:
case 1171:
case 3670:
case 2983:
case 2475:
case 998:
case 2215:
case 1083:
case 2393:
case 1298:
case 2424:
case 487:
case 1132:
case 872:
case 3730:
case 865:
case 2307:
case 3967:
case 107:
case 598:
case 3664:
case 2732:
case 3492:
case 2984:
case 797:
case 873:
case 3893:
case 1731:
case 2958:
case 1265:
case 1209:
case 351:
case 784:
case 2783:
case 3308:
case 1081:
case 1046:
case 3948:
case 3212:
case 2863:
case 1594:
case 392:
case 3802:
case 59:
case 1139:
case 580:
case 3932:
case 3453:
case 41:
case 2626:
case 3965:
case 431:
case 3682:
case 2013:
case 885:
case 2247:
case 3401:
case 3591:
case 3307:
case 1576:
case 194:
case 475:
case 772:
case 3849:
case 3772:
case 3470:
case 3823:
case 514:
case 307:
case 1935:
case 2408:
case 2329:
case 2770:
case 4066:
case 467:
case 3428:
case 1591:
case 695:
case 2890:
case 1904:
case 564:
case 1824:
case 188:
case 1596:
case 2224:
case 1378:
case 14:
case 593:
case 2596:
case 401:
case 1867:
case 2201:
case 3747:
case 265:
case 3109:
case 2675:
case 2618:
case 4080:
case 2790:
case 2653:
case 3265:
case 3440:
case 2171:
case 1798:
case 3734:
case 2406:
case 2216:
case 3561:
case 2178:
case 192:
case 4026:
case 978:
case 3312:
case 1900:
case 104:
case 2321:
case 205:
case 707:
case 516:
case 3110:
case 3454:
case 3502:
case 2779:
case 1709:
case 2733:
case 3099:
case 3158:
case 1034:
case 2567:
case 2814:
case 4053:
case 1340:
case 268:
case 646:
case 1607:
case 2213:
case 884:
case 1483:
case 1912:
case 571:
case 3281:
case 46:
case 725:
case 3040:
case 3679:
case 327:
case 485:
case 1052:
case 2590:
case 1166:
case 2518:
case 3880:
case 478:
case 246:
case 701:
case 1735:
case 2577:
case 133:
case 2823:
case 1975:
case 778:
case 82:
case 2480:
case 3445:
case 1542:
case 1818:
case 3295:
case 1872:
case 677:
case 1969:
case 1380:
case 2788:
case 590:
case 1010:
case 2447:
case 952:
case 4010:
case 4014:
case 3133:
case 2149:
case 713:
case 3690:
case 552:
case 2560:
case 2977:
case 1263:
case 643:
case 346:
case 1560:
case 3754:
case 173:
case 509:
case 2879:
case 895:
case 536:
case 1772:
case 1183:
case 2859:
case 3166:
case 956:
case 3859:
case 1316:
case 3962:
case 980:
case 1760:
case 489:
case 1437:
case 3714:
case 3189:
case 3119:
case 2743:
case 963:
case 484:
case 1404:
case 3980:
case 2885:
case 2832:
case 2023:
case 533:
case 2432:
case 94:
case 3565:
case 1587:
case 2398:
case 3984:
case 1115:
case 1307:
case 1442:
case 2140:
case 1426:
case 2775:
case 3925:
case 2202:
case 2263:
case 2172:
case 67:
case 818:
case 2662:
case 2332:
case 1593:
case 3138:
case 21:
case 3774:
case 1793:
case 1369:
case 2349:
case 689:
case 2922:
case 1008:
case 1156:
case 3280:
case 2363:
case 1384:
case 739:
case 2549:
case 1250:
case 525:
case 3511:
case 2246:
case 3199:
case 2012:
case 410:
case 793:
case 2294:
case 367:
case 336:
case 1638:
case 1490:
case 3423:
case 696:
case 158:
case 3463:
case 5:
case 2443:
case 1068:
case 3425:
case 2008:
case 616:
case 3752:
case 3399:
case 325:
case 1405:
case 1491:
case 83:
case 3788:
case 2964:
case 326:
case 2860:
case 2:
case 1807:
case 1577:
case 245:
case 3652:
case 1095:
case 1099:
case 3472:
case 1142:
case 3662:
case 2372:
case 2760:
case 387:
case 3069:
case 814:
case 1138:
case 1462:
case 3760:
case 3642:
case 3596:
case 465:
case 2487:
case 942:
case 2845:
case 3006:
case 1826:
case 871:
case 1296:
case 2063:
case 2198:
case 1737:
case 1822:
case 413:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1687798802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,];
var gg_b = "1687798802/";

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

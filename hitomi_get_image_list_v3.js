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
case 1195:
case 672:
case 1785:
case 3582:
case 4045:
case 2900:
case 1059:
case 2762:
case 217:
case 3403:
case 2089:
case 3363:
case 3912:
case 2585:
case 2293:
case 2141:
case 4025:
case 3556:
case 263:
case 211:
case 3956:
case 2878:
case 2866:
case 3731:
case 2978:
case 2945:
case 92:
case 1748:
case 2238:
case 3256:
case 2620:
case 4043:
case 1144:
case 1450:
case 1113:
case 1690:
case 2482:
case 2340:
case 4075:
case 2441:
case 857:
case 1553:
case 2748:
case 1452:
case 264:
case 880:
case 2329:
case 2360:
case 1347:
case 692:
case 779:
case 2600:
case 3572:
case 775:
case 2491:
case 128:
case 549:
case 1518:
case 2220:
case 606:
case 2462:
case 3648:
case 2759:
case 1860:
case 1367:
case 145:
case 360:
case 3198:
case 2996:
case 2301:
case 1216:
case 3249:
case 1010:
case 2932:
case 22:
case 3514:
case 824:
case 3719:
case 3985:
case 1085:
case 1423:
case 1142:
case 423:
case 3663:
case 2391:
case 1298:
case 3714:
case 3470:
case 3413:
case 3466:
case 1710:
case 3191:
case 3799:
case 831:
case 47:
case 2906:
case 2057:
case 1022:
case 1415:
case 241:
case 1585:
case 2820:
case 3389:
case 2122:
case 2608:
case 1676:
case 2904:
case 340:
case 563:
case 3531:
case 1629:
case 2217:
case 1306:
case 1213:
case 2080:
case 3279:
case 506:
case 3928:
case 1158:
case 3374:
case 3678:
case 1073:
case 813:
case 1243:
case 640:
case 1902:
case 1030:
case 3371:
case 3606:
case 1713:
case 3884:
case 2087:
case 1535:
case 2016:
case 3559:
case 4010:
case 3402:
case 305:
case 461:
case 3938:
case 1991:
case 401:
case 1995:
case 1366:
case 3519:
case 3035:
case 3488:
case 896:
case 278:
case 2522:
case 4057:
case 830:
case 2073:
case 3058:
case 2432:
case 3732:
case 3224:
case 2506:
case 3199:
case 1229:
case 2000:
case 897:
case 1883:
case 18:
case 2086:
case 1884:
case 3223:
case 1641:
case 793:
case 282:
case 3792:
case 826:
case 1287:
case 2299:
case 3100:
case 3797:
case 3601:
case 1728:
case 397:
case 3333:
case 2535:
case 1427:
case 209:
case 142:
case 3871:
case 3081:
case 421:
case 2713:
case 2205:
case 1782:
case 2613:
case 1528:
case 1786:
case 3429:
case 2743:
case 2313:
case 268:
case 2590:
case 923:
case 2076:
case 2350:
case 180:
case 1637:
case 2444:
case 1757:
case 2788:
case 2863:
case 158:
case 2466:
case 919:
case 342:
case 3716:
case 1084:
case 3787:
case 2728:
case 3311:
case 1408:
case 3809:
case 1569:
case 1964:
case 2204:
case 1458:
case 1096:
case 2869:
case 2152:
case 905:
case 2627:
case 3144:
case 1688:
case 3511:
case 1986:
case 2162:
case 50:
case 3213:
case 1127:
case 948:
case 922:
case 3455:
case 3525:
case 3895:
case 100:
case 3743:
case 1985:
case 1714:
case 3331:
case 2531:
case 2082:
case 3449:
case 4033:
case 3902:
case 742:
case 1773:
case 2651:
case 2659:
case 3695:
case 1338:
case 3776:
case 3786:
case 1695:
case 2460:
case 1751:
case 782:
case 2852:
case 1320:
case 2872:
case 2167:
case 3481:
case 1801:
case 2970:
case 3783:
case 84:
case 3788:
case 1487:
case 2742:
case 3532:
case 3796:
case 936:
case 3512:
case 2761:
case 1160:
case 2028:
case 1267:
case 3113:
case 4051:
case 2560:
case 2591:
case 3991:
case 795:
case 0:
case 1:
case 3527:
case 2241:
case 127:
case 2789:
case 3055:
case 1584:
case 3564:
case 771:
case 3765:
case 3498:
case 2182:
case 27:
case 1966:
case 3611:
case 834:
case 746:
case 1327:
case 1123:
case 1807:
case 1221:
case 3461:
case 3946:
case 1201:
case 3713:
case 542:
case 841:
case 913:
case 764:
case 3693:
case 1424:
case 1671:
case 1725:
case 2905:
case 1012:
case 2302:
case 1233:
case 1212:
case 1464:
case 204:
case 2001:
case 580:
case 232:
case 481:
case 575:
case 258:
case 619:
case 3378:
case 3646:
case 1992:
case 2577:
case 3193:
case 861:
case 2069:
case 448:
case 733:
case 2223:
case 2280:
case 433:
case 1091:
case 1146:
case 2380:
case 2893:
case 1283:
case 2063:
case 4068:
case 1345:
case 1248:
case 3590:
case 1151:
case 3638:
case 1912:
case 2684:
case 2964:
case 3504:
case 2473:
case 1847:
case 3709:
case 2413:
case 1795:
case 1783:
case 1188:
case 2168:
case 713:
case 1977:
case 2734:
case 3002:
case 3999:
case 1089:
case 2251:
case 13:
case 1162:
case 353:
case 3801:
case 617:
case 3212:
case 3218:
case 1749:
case 3020:
case 670:
case 3762:
case 3617:
case 2611:
case 3395:
case 3459:
case 1021:
case 95:
case 2909:
case 784:
case 3781:
case 3431:
case 1199:
case 3001:
case 449:
case 1485:
case 3780:
case 498:
case 3436:
case 593:
case 2100:
case 2402:
case 411:
case 1209:
case 1724:
case 3948:
case 932:
case 3369:
case 1401:
case 333:
case 2493:
case 351:
case 1947:
case 2351:
case 2414:
case 515:
case 54:
case 2935:
case 1814:
case 553:
case 3119:
case 3738:
case 3282:
case 1128:
case 3793:
case 3493:
case 1539:
case 520:
case 3086:
case 150:
case 3222:
case 850:
case 1739:
case 1088:
case 389:
case 2131:
case 2372:
case 82:
case 3725:
case 777:
case 3961:
case 621:
case 3517:
case 4089:
case 4007:
case 1064:
case 1794:
case 1764:
case 3187:
case 638:
case 774:
case 1694:
case 2865:
case 1804:
case 2899:
case 2180:
case 56:
case 2371:
case 2981:
case 3854:
case 3112:
case 2739:
case 1236:
case 2963:
case 1439:
case 383:
case 348:
case 3542:
case 1322:
case 392:
case 823:
case 457:
case 2036:
case 1132:
case 3033:
case 827:
case 2723:
case 4008:
case 424:
case 3760:
case 634:
case 2156:
case 3955:
case 1626:
case 1668:
case 1581:
case 3655:
case 2408:
case 2567:
case 3577:
case 3937:
case 859:
case 641:
case 3894:
case 2914:
case 4085:
case 570:
case 2553:
case 3868:
case 1139:
case 2051:
case 2698:
case 4005:
case 3662:
case 3094:
case 2026:
case 4088:
case 2554:
case 2187:
case 2318:
case 1669:
case 1222:
case 3317:
case 3832:
case 3283:
case 843:
case 1888:
case 2957:
case 3800:
case 2274:
case 1857:
case 371:
case 1863:
case 2090:
case 3168:
case 240:
case 2596:
case 629:
case 1194:
case 2079:
case 412:
case 4002:
case 3122:
case 898:
case 3969:
case 2813:
case 2990:
case 2224:
case 1661:
case 2527:
case 644:
case 3379:
case 2029:
case 3513:
case 2239:
case 3289:
case 4019:
case 1071:
case 133:
case 1809:
case 2116:
case 118:
case 3705:
case 893:
case 598:
case 2484:
case 2797:
case 3634:
case 1056:
case 1049:
case 2661:
case 1746:
case 505:
case 3864:
case 3194:
case 879:
case 140:
case 1832:
case 406:
case 3010:
case 3441:
case 1467:
case 1409:
case 251:
case 1205:
case 1939:
case 2146:
case 3842:
case 2165:
case 37:
case 203:
case 2858:
case 3178:
case 221:
case 3545:
case 1074:
case 3080:
case 179:
case 380:
case 2121:
case 718:
case 3322:
case 2657:
case 3059:
case 1015:
case 3978:
case 1271:
case 1503:
case 3962:
case 760:
case 3619:
case 1858:
case 2032:
case 3886:
case 3771:
case 3761:
case 1065:
case 1914:
case 3485:
case 3424:
case 876:
case 3543:
case 1068:
case 463:
case 3003:
case 525:
case 2068:
case 445:
case 993:
case 3952:
case 1677:
case 107:
case 270:
case 2944:
case 554:
case 1372:
case 2672:
case 1217:
case 3173:
case 1988:
case 166:
case 2845:
case 3439:
case 4006:
case 546:
case 2625:
case 2774:
case 652:
case 2533:
case 1214:
case 3876:
case 2766:
case 1711:
case 1407:
case 2381:
case 3892:
case 4040:
case 3538:
case 5:
case 1899:
case 3880:
case 256:
case 3217:
case 2652:
case 1934:
case 2003:
case 1373:
case 2096:
case 2471:
case 310:
case 214:
case 500:
case 2056:
case 152:
case 2629:
case 3300:
case 2808:
case 744:
case 1168:
case 531:
case 668:
case 2558:
case 2499:
case 2150:
case 281:
case 222:
case 607:
case 1063:
case 3733:
case 3415:
case 3292:
case 848:
case 1873:
case 1307:
case 2687:
case 766:
case 1281:
case 3451:
case 1970:
case 791:
case 261:
case 3387:
case 3677:
case 3904:
case 2692:
case 2965:
case 1787:
case 3994:
case 3518:
case 2566:
case 3298:
case 3077:
case 642:
case 2401:
case 378:
case 3365:
case 1560:
case 160:
case 2405:
case 622:
case 1384:
case 1066:
case 869:
case 3673:
case 3791:
case 120:
case 1633:
case 2703:
case 1509:
case 1081:
case 1141:
case 477:
case 2110:
case 2050:
case 419:
case 265:
case 308:
case 1973:
case 3460:
case 754:
case 3658:
case 2198:
case 2170:
case 1862:
case 3069:
case 4086:
case 2681:
case 2795:
case 2138:
case 1249:
case 2106:
case 950:
case 1288:
case 889:
case 2390:
case 3125:
case 3521:
case 2500:
case 1170:
case 1002:
case 1478:
case 1597:
case 3588:
case 1386:
case 1260:
case 233:
case 1504:
case 3137:
case 2389:
case 1797:
case 216:
case 3090:
case 2557:
case 3689:
case 1698:
case 1610:
case 3063:
case 3099:
case 2020:
case 1517:
case 1563:
case 195:
case 732:
case 3721:
case 229:
case 323:
case 2781:
case 1806:
case 2967:
case 1632:
case 2908:
case 362:
case 1519:
case 302:
case 3881:
case 1062:
case 3669:
case 2517:
case 464:
case 1483:
case 2860:
case 1830:
case 285:
case 2176:
case 1456:
case 1588:
case 1908:
case 3926:
case 471:
case 3350:
case 2526:
case 3899:
case 1982:
case 2394:
case 3774:
case 2412:
case 4084:
case 3448:
case 1881:
case 458:
case 453:
case 1129:
case 42:
case 581:
case 1300:
case 273:
case 417:
case 3068:
case 1155:
case 645:
case 3910:
case 837:
case 1219:
case 2153:
case 1501:
case 748:
case 2286:
case 620:
case 1842:
case 2876:
case 666:
case 227:
case 1654:
case 2634:
case 1420:
case 197:
case 3728:
case 2707:
case 1266:
case 3367:
case 121:
case 3997:
case 1348:
case 3335:
case 338:
case 2041:
case 2135:
case 2446:
case 126:
case 3315:
case 2883:
case 2609:
case 38:
case 104:
case 2711:
case 1451:
case 2495:
case 1931:
case 1075:
case 3456:
case 3104:
case 2475:
case 1938:
case 68:
case 2230:
case 3566:
case 2912:
case 2864:
case 3831:
case 3694:
case 1602:
case 1268:
case 294:
case 601:
case 3091:
case 1086:
case 3964:
case 2821:
case 2297:
case 1492:
case 3520:
case 970:
case 2420:
case 1567:
case 3012:
case 58:
case 674:
case 2008:
case 3207:
case 2042:
case 1621:
case 803:
case 3717:
case 437:
case 2830:
case 1440:
case 2989:
case 1292:
case 847:
case 3953:
case 1590:
case 3903:
case 1449:
case 1566:
case 654:
case 482:
case 2259:
case 438:
case 2972:
case 452:
case 523:
case 1798:
case 3310:
case 3208:
case 3016:
case 1491:
case 3306:
case 260:
case 3757:
case 168:
case 8:
case 1411:
case 316:
case 3312:
case 1259:
case 462:
case 3555:
case 616:
case 291:
case 1901:
case 2314:
case 185:
case 1505:
case 1396:
case 1745:
case 582:
case 2354:
case 2326:
case 286:
case 1011:
case 877:
case 4067:
case 2983:
case 2160:
case 1907:
case 1825:
case 2685:
case 1833:
case 3927:
case 3228:
case 3110:
case 2249:
case 1270:
case 547:
case 2638:
case 2643:
case 3129:
case 81:
case 83:
case 2501:
case 1810:
case 1039:
case 2461:
case 91:
case 3954:
case 659:
case 2284:
case 3697:
case 3339:
case 2819:
case 833:
case 1187:
case 1552:
case 2228:
case 3806:
case 1913:
case 2704:
case 676:
case 1207:
case 3154:
case 460:
case 2913:
case 1117:
case 2941:
case 2589:
case 4087:
case 3201:
case 2736:
case 1568:
case 2435:
case 4:
case 1594:
case 3097:
case 765:
case 3478:
case 1984:
case 3900:
case 689:
case 3845:
case 1282:
case 116:
case 1368:
case 1318:
case 1355:
case 557:
case 2726:
case 23:
case 647:
case 3172:
case 246:
case 2954:
case 3530:
case 796:
case 2229:
case 681:
case 1291:
case 1859:
case 2155:
case 1070:
case 480:
case 2509:
case 3782:
case 3151:
case 1152:
case 740:
case 1799:
case 3399:
case 198:
case 1426:
case 649:
case 172:
case 1733:
case 3044:
case 2361:
case 1556:
case 1017:
case 548:
case 3496:
case 807:
case 2882:
case 1575:
case 361:
case 778:
case 1108:
case 566:
case 450:
case 409:
case 2018:
case 3483:
case 961:
case 1770:
case 3700:
case 3622:
case 2067:
case 3101:
case 588:
case 835:
case 862:
case 521:
case 2871:
case 3422:
case 1258:
case 1381:
case 3182:
case 1315:
case 1256:
case 2943:
case 1651:
case 815:
case 337:
case 2148:
case 2219:
case 2999:
case 1967:
case 1570:
case 656:
case 3790:
case 878:
case 1276:
case 1659:
case 1573:
case 3463:
case 2810:
case 899:
case 3707:
case 3998:
case 716:
case 1035:
case 909:
case 2691:
case 17:
case 1352:
case 36:
case 2844:
case 2798:
case 2102:
case 3423:
case 190:
case 3288:
case 486:
case 844:
case 456:
case 852:
case 2536:
case 1125:
case 727:
case 2532:
case 3977:
case 2780:
case 2817:
case 1055:
case 4028:
case 2497:
case 2523:
case 925:
case 2213:
case 2563:
case 559:
case 2271:
case 1434:
case 1335:
case 3711:
case 2227:
case 3911:
case 2496:
case 269:
case 1839:
case 3337:
case 2881:
case 2436:
case 954:
case 2524:
case 1013:
case 1211:
case 1778:
case 1301:
case 3724:
case 1639:
case 436:
case 439:
case 2640:
case 2142:
case 478:
case 3934:
case 860:
case 2009:
case 1185:
case 405:
case 25:
case 2658:
case 3712:
case 3404:
case 589:
case 3973:
case 1494:
case 2194:
case 3562:
case 2733:
case 3313:
case 660:
case 946:
case 3293:
case 3305:
case 2896:
case 1493:
case 2873:
case 2055:
case 2976:
case 2519:
case 1253:
case 1840:
case 2139:
case 693:
case 1006:
case 3394:
case 2948:
case 1242:
case 998:
case 2655:
case 3621:
case 667:
case 1488:
case 2750:
case 2530:
case 2803:
case 3042:
case 1238:
case 2472:
case 3307:
case 2555:
case 1402:
case 537:
case 3258:
case 1362:
case 1734:
case 1044:
case 3152:
case 1463:
case 368:
case 2775:
case 2363:
case 2573:
case 1499:
case 3025:
case 2347:
case 533:
case 2897:
case 722:
case 3583:
case 792:
case 1481:
case 2693:
case 3758:
case 1576:
case 999:
case 1511:
case 3654:
case 1413:
case 688:
case 2125:
case 1466:
case 187:
case 2103:
case 77:
case 4022:
case 1473:
case 1311:
case 579:
case 238:
case 3254:
case 3925:
case 3789:
case 1077:
case 3203:
case 1274:
case 2388:
case 2272:
case 2635:
case 154:
case 3023:
case 2175:
case 978:
case 1819:
case 3186:
case 451:
case 4082:
case 3592:
case 343:
case 1179:
case 3200:
case 1650:
case 1670:
case 1978:
case 2804:
case 466:
case 2649:
case 199:
case 2940:
case 1512:
case 3396:
case 3932:
case 556:
case 2325:
case 3393:
case 4080:
case 2185:
case 2285:
case 1905:
case 3924:
case 4071:
case 3935:
case 3628:
case 3225:
case 3547:
case 3506:
case 3691:
case 6:
case 1359:
case 1784:
case 236:
case 975:
case 313:
case 4077:
case 3085:
case 2397:
case 3990:
case 2201:
case 1896:
case 1754:
case 1766:
case 781:
case 2442:
case 3641:
case 60:
case 169:
case 608:
case 2777:
case 2370:
case 510:
case 3615:
case 874:
case 2699:
case 1176:
case 3856:
case 3778:
case 3107:
case 3502:
case 3184:
case 1136:
case 2842:
case 1636:
case 1308:
case 2833:
case 1615:
case 851:
case 1729:
case 1697:
case 161:
case 2794:
case 1707:
case 11:
case 1684:
case 2091:
case 2513:
case 726:
case 1790:
case 2548:
case 131:
case 2279:
case 3584:
case 3965:
case 1175:
case 2630:
case 3064:
case 1550:
case 2712:
case 969:
case 1618:
case 1877:
case 863:
case 3524:
case 630:
case 1126:
case 1037:
case 1069:
case 610:
case 2816:
case 1885:
case 1060:
case 3929:
case 602:
case 1337:
case 3111:
case 483:
case 3269:
case 1882:
case 4009:
case 695:
case 3841:
case 571:
case 226:
case 2574:
case 3836:
case 983:
case 1334:
case 3549:
case 1351:
case 508:
case 1848:
case 3323:
case 704:
case 1598:
case 1587:
case 2396:
case 3334:
case 356:
case 650:
case 3907:
case 1609:
case 1727:
case 2262:
case 1930:
case 2848:
case 3837:
case 522:
case 2688:
case 2998:
case 996:
case 1442:
case 3643:
case 112:
case 550:
case 951:
case 1193:
case 386:
case 3231:
case 2196:
case 1312:
case 2225:
case 293:
case 2199:
case 3852:
case 2117:
case 1631:
case 2236:
case 1377:
case 2443:
case 2222:
case 3576:
case 1527:
case 301:
case 2140:
case 572:
case 1731:
case 3105:
case 3486:
case 2464:
case 3345:
case 1648:
case 2646:
case 2485:
case 3442:
case 1979:
case 1285:
case 1685:
case 2423:
case 1433:
case 292:
case 3568:
case 3636:
case 1036:
case 19:
case 1529:
case 653:
case 1263:
case 3957:
case 1436:
case 591:
case 3586:
case 325:
case 2447:
case 1202:
case 1980:
case 1802:
case 3332:
case 3037:
case 1887:
case 1218:
case 2875:
case 3610:
case 3257:
case 1954:
case 2919:
case 3557:
case 798:
case 931:
case 866:
case 2232:
case 3072:
case 2605:
case 2458:
case 3070:
case 3054:
case 1870:
case 2327:
case 501:
case 3325:
case 1050:
case 2947:
case 2520:
case 1328:
case 1580:
case 3155:
case 4015:
case 817:
case 3875:
case 517:
case 683:
case 596:
case 1474:
case 3452:
case 2467:
case 3241:
case 2552:
case 1559:
case 1109:
case 539:
case 1186:
case 2977:
case 1455:
case 1097:
case 3741:
case 2399:
case 1360:
case 1475:
case 3430:
case 2564:
case 2179:
case 3544:
case 1976:
case 1524:
case 1390:
case 186:
case 578:
case 822:
case 3681:
case 235:
case 213:
case 2639:
case 237:
case 1342:
case 2083:
case 138:
case 2024:
case 2097:
case 3428:
case 1788:
case 1094:
case 57:
case 475:
case 4017:
case 1867:
case 1476:
case 1277:
case 1721:
case 1555:
case 1376:
case 2886:
case 2927:
case 73:
case 1220:
case 3045:
case 3987:
case 3664:
case 3708:
case 2332:
case 1607:
case 1005:
case 2859:
case 1667:
case 551:
case 321:
case 3906:
case 2877:
case 1252:
case 1540:
case 1184:
case 2164:
case 628:
case 3167:
case 2034:
case 159:
case 1718:
case 3885:
case 2166:
case 665:
case 2321:
case 2991:
case 355:
case 2415:
case 1293:
case 2070:
case 3008:
case 1140:
case 2612:
case 3443:
case 115:
case 3416:
case 139:
case 46:
case 1430:
case 532:
case 1653:
case 2528:
case 3659:
case 3748:
case 2376:
case 1135:
case 352:
case 785:
case 2546:
case 444:
case 3301:
case 651:
case 1743:
case 1933:
case 2123:
case 2951:
case 1232:
case 2319:
case 1495:
case 1406:
case 1031:
case 682:
case 2406:
case 1681:
case 3126:
case 272:
case 4042:
case 2942:
case 3106:
case 2489:
case 2304:
case 1269:
case 396:
case 3983:
case 3028:
case 2805:
case 3271:
case 562:
case 3030:
case 3440:
case 202:
case 2294:
case 3734:
case 751:
case 3450:
case 2606:
case 2214:
case 1958:
case 1018:
case 3971:
case 3508:
case 3353:
case 327:
case 4092:
case 3660:
case 220:
case 868:
case 1811:
case 2952:
case 4053:
case 3366:
case 511:
case 2607:
case 1558:
case 395:
case 2636:
case 2252:
case 527:
case 70:
case 1949:
case 2336:
case 3215:
case 721:
case 1303:
case 960:
case 255:
case 3972:
case 157:
case 1551:
case 1658:
case 3507:
case 2771:
case 957:
case 178:
case 3767:
case 134:
case 1237:
case 1447:
case 2955:
case 3682:
case 2292:
case 1299:
case 1388:
case 1737:
case 1203:
case 543:
case 743:
case 429:
case 162:
case 962:
case 3923:
case 3720:
case 3844:
case 3433:
case 3408:
case 3351:
case 2349:
case 933:
case 1630:
case 1703:
case 2544:
case 2744:
case 3096:
case 89:
case 2855:
case 59:
case 212:
case 1769:
case 3503:
case 3491:
case 3620:
case 1542:
case 2045:
case 3324:
case 573:
case 132:
case 1936:
case 3873:
case 1951:
case 1457:
case 3679:
case 66:
case 4094:
case 818:
case 2365:
case 49:
case 239:
case 149:
case 3602:
case 2006:
case 2203:
case 2273:
case 3683:
case 806:
case 1836:
case 972:
case 208:
case 1289:
case 1656:
case 1224:
case 3235:
case 509:
case 1866:
case 210:
case 2580:
case 1460:
case 1974:
case 3685:
case 780:
case 2434:
case 3890:
case 759:
case 345:
case 2785:
case 2171:
case 2987:
case 2468:
case 1412:
case 1206:
case 1678:
case 1805:
case 809:
case 1613:
case 3039:
case 72:
case 3019:
case 1025:
case 3941:
case 1700:
case 90:
case 1617:
case 2641:
case 2177:
case 1357:
case 3835:
case 2064:
case 3245:
case 903:
case 2569:
case 1520:
case 2362:
case 1398:
case 2931:
case 3405:
case 1959:
case 2071:
case 1880:
case 2346:
case 1771:
case 3553:
case 3891:
case 3805:
case 442:
case 276:
case 1628:
case 1854:
case 816:
case 3834:
case 2310:
case 2578:
case 1383:
case 3156:
case 4070:
case 1196:
case 1923:
case 3813:
case 2529:
case 1554:
case 51:
case 1145:
case 1904:
case 3013:
case 3578:
case 980:
case 2654:
case 1910:
case 3314:
case 3188:
case 2211:
case 2925:
case 3079:
case 814:
case 1604:
case 1852:
case 1846:
case 2108:
case 3263:
case 1693:
case 61:
case 1310:
case 574:
case 2124:
case 2751:
case 491:
case 148:
case 1020:
case 1038:
case 330:
case 3098:
case 4032:
case 901:
case 151:
case 2011:
case 3164:
case 2671:
case 413:
case 80:
case 2541:
case 2894:
case 496:
case 4029:
case 2151:
case 2344:
case 465:
case 3348:
case 839:
case 2161:
case 2127:
case 3380:
case 3529:
case 3277:
case 2163:
case 2253:
case 3274:
case 3346:
case 2384:
case 2305:
case 1023:
case 2075:
case 3135:
case 1716:
case 3381:
case 3804:
case 3676:
case 3930:
case 476:
case 2343:
case 3861:
case 3830:
case 3082:
case 2933:
case 4011:
case 2690:
case 2851:
case 2128:
case 783:
case 3603:
case 1446:
case 3807:
case 40:
case 646:
case 2645:
case 2854:
case 2753:
case 1374:
case 872:
case 3849:
case 3608:
case 3718:
case 789:
case 1114:
case 33:
case 4060:
case 1812:
case 3420:
case 1996:
case 1341:
case 2490:
case 1118:
case 2974:
case 2547:
case 1226:
case 1134:
case 1014:
case 3746:
case 3247:
case 3665:
case 2450:
case 675:
case 3174:
case 1294:
case 1820:
case 1619:
case 2783:
case 45:
case 4037:
case 2663:
case 2602:
case 2929:
case 1928:
case 1490:
case 2891:
case 637:
case 3391:
case 2765:
case 1674:
case 1762:
case 3598:
case 375:
case 2979:
case 3484:
case 2741:
case 3656:
case 1231:
case 3177:
case 3355:
case 938:
case 821:
case 143:
case 3329:
case 921:
case 1855:
case 2969:
case 1323:
case 3933:
case 369:
case 1952:
case 3565:
case 1163:
case 2888:
case 3340:
case 658:
case 3444:
case 1758:
case 141:
case 811:
case 4046:
case 349:
case 3076:
case 64:
case 1079:
case 1241:
case 2247:
case 274:
case 3347:
case 3285:
case 1497:
case 3102:
case 2192:
case 3567:
case 1480:
case 2144:
case 2514:
case 3918:
case 2782:
case 894:
case 303:
case 2031:
case 2300:
case 2382:
case 2088:
case 2355:
case 845:
case 4090:
case 854:
case 1382:
case 1719:
case 201:
case 4093:
case 1183:
case 2938:
case 2320:
case 3833:
case 3808:
case 2708:
case 1076:
case 1319:
case 2338:
case 2316:
case 3261:
case 1239:
case 3462:
case 1313:
case 2515:
case 3696:
case 1760:
case 1428:
case 3204:
case 2827:
case 277:
case 1776:
case 2404:
case 691:
case 773:
case 2618:
case 1234:
case 3005:
case 215:
case 3011:
case 243:
case 2240:
case 3727:
case 1981:
case 170:
case 1138:
case 1026:
case 2053:
case 1890:
case 1498:
case 3294:
case 3500:
case 1410:
case 918:
case 3552:
case 2369:
case 2754:
case 165:
case 3149:
case 1683:
case 735:
case 2324:
case 605:
case 318:
case 4072:
case 3377:
case 2518:
case 2130:
case 3860:
case 3949:
case 1235:
case 2621:
case 3766:
case 3882:
case 320:
case 673:
case 1606:
case 1502:
case 1137:
case 708:
case 2453:
case 1815:
case 2637:
case 21:
case 420:
case 1647:
case 3893:
case 2856:
case 2806:
case 1649:
case 2448:
case 1124:
case 3050:
case 3299:
case 3297:
case 3179:
case 767:
case 3273:
case 1851:
case 3497:
case 3653:
case 3579:
case 1793:
case 3147:
case 2337:
case 3819:
case 3226:
case 592:
case 2202:
case 1526:
case 631:
case 2049:
case 3526:
case 2680:
case 3032:
case 1817:
case 2895:
case 329:
case 2357:
case 32:
case 2666:
case 52:
case 884:
case 2375:
case 3570:
case 1735:
case 3385:
case 3192:
case 2537:
case 802:
case 1443:
case 1561:
case 3848:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1724929201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,];
var gg_b = "1724929201/";

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

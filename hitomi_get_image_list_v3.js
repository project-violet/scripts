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
case 3304:
case 1202:
case 384:
case 3436:
case 35:
case 2608:
case 3246:
case 3363:
case 3999:
case 1091:
case 1101:
case 3196:
case 3055:
case 2548:
case 2318:
case 797:
case 3192:
case 3573:
case 1767:
case 4009:
case 3845:
case 1454:
case 1552:
case 1015:
case 1488:
case 2307:
case 1985:
case 2441:
case 2073:
case 3123:
case 1308:
case 1083:
case 3329:
case 3688:
case 176:
case 1805:
case 2850:
case 2962:
case 1170:
case 3956:
case 2764:
case 528:
case 2823:
case 1693:
case 2023:
case 361:
case 606:
case 3930:
case 831:
case 302:
case 2590:
case 658:
case 956:
case 1778:
case 584:
case 206:
case 266:
case 1871:
case 3889:
case 3250:
case 2145:
case 3291:
case 3529:
case 2039:
case 1930:
case 2573:
case 742:
case 940:
case 547:
case 2018:
case 215:
case 3137:
case 855:
case 1534:
case 1782:
case 3498:
case 1576:
case 248:
case 1876:
case 1466:
case 2469:
case 764:
case 3831:
case 3114:
case 1903:
case 1033:
case 3758:
case 2824:
case 3043:
case 1140:
case 1507:
case 337:
case 1707:
case 436:
case 3226:
case 451:
case 930:
case 2041:
case 3803:
case 267:
case 1631:
case 283:
case 3240:
case 3914:
case 1678:
case 1894:
case 729:
case 913:
case 830:
case 2663:
case 4012:
case 1398:
case 3857:
case 3651:
case 1503:
case 1326:
case 2914:
case 160:
case 3334:
case 2059:
case 3740:
case 2261:
case 1489:
case 1002:
case 3050:
case 120:
case 1416:
case 672:
case 2810:
case 2819:
case 2171:
case 1868:
case 1869:
case 1952:
case 1738:
case 1437:
case 3660:
case 2760:
case 1155:
case 2986:
case 2369:
case 1079:
case 643:
case 3113:
case 2085:
case 1455:
case 213:
case 3990:
case 1883:
case 4077:
case 1728:
case 910:
case 2093:
case 3374:
case 3509:
case 2462:
case 2305:
case 3696:
case 3802:
case 1159:
case 524:
case 3398:
case 1683:
case 3917:
case 3530:
case 1529:
case 3288:
case 1209:
case 75:
case 1936:
case 839:
case 895:
case 3440:
case 3806:
case 4038:
case 342:
case 3016:
case 2723:
case 3635:
case 488:
case 3719:
case 61:
case 3707:
case 3361:
case 739:
case 301:
case 3706:
case 3315:
case 2616:
case 2945:
case 3111:
case 692:
case 2397:
case 2719:
case 3926:
case 536:
case 1625:
case 399:
case 2211:
case 1652:
case 3319:
case 276:
case 943:
case 3402:
case 2029:
case 3892:
case 1081:
case 2291:
case 356:
case 1960:
case 2120:
case 1789:
case 1950:
case 1439:
case 1987:
case 3143:
case 1957:
case 2314:
case 698:
case 2488:
case 410:
case 437:
case 2151:
case 2999:
case 2396:
case 2750:
case 4059:
case 2737:
case 1850:
case 2524:
case 1494:
case 601:
case 3862:
case 1609:
case 1383:
case 1464:
case 3581:
case 3692:
case 922:
case 2034:
case 419:
case 3209:
case 2293:
case 1884:
case 3943:
case 310:
case 2635:
case 887:
case 958:
case 3557:
case 1258:
case 2652:
case 3566:
case 2313:
case 90:
case 2445:
case 1355:
case 3212:
case 862:
case 2786:
case 2787:
case 2626:
case 983:
case 1382:
case 2531:
case 2394:
case 1616:
case 3109:
case 2499:
case 1636:
case 358:
case 7:
case 2386:
case 1441:
case 3403:
case 2636:
case 2030:
case 2949:
case 2727:
case 284:
case 1521:
case 1164:
case 240:
case 3732:
case 610:
case 170:
case 3042:
case 23:
case 2987:
case 249:
case 324:
case 581:
case 537:
case 2726:
case 527:
case 382:
case 1843:
case 2035:
case 2280:
case 1278:
case 708:
case 3147:
case 472:
case 3734:
case 122:
case 3116:
case 4017:
case 714:
case 2773:
case 1270:
case 1016:
case 571:
case 3219:
case 827:
case 3898:
case 2168:
case 3234:
case 4004:
case 2410:
case 1402:
case 3248:
case 463:
case 2586:
case 2807:
case 1966:
case 2672:
case 2537:
case 1860:
case 770:
case 2800:
case 2040:
case 286:
case 456:
case 1124:
case 126:
case 1297:
case 798:
case 588:
case 2973:
case 901:
case 1858:
case 1846:
case 2595:
case 3575:
case 864:
case 3793:
case 2004:
case 4016:
case 376:
case 4014:
case 1396:
case 522:
case 421:
case 2166:
case 2846:
case 3404:
case 2263:
case 4042:
case 4027:
case 1667:
case 1637:
case 2191:
case 416:
case 3954:
case 3841:
case 1294:
case 1082:
case 1497:
case 448:
case 326:
case 2627:
case 3666:
case 1018:
case 1427:
case 2693:
case 1070:
case 3967:
case 1886:
case 1328:
case 1028:
case 2231:
case 1963:
case 1450:
case 338:
case 2596:
case 2216:
case 2812:
case 3429:
case 670:
case 3792:
case 3473:
case 3579:
case 2940:
case 1300:
case 3639:
case 3318:
case 1853:
case 3321:
case 2557:
case 3003:
case 3497:
case 3213:
case 3634:
case 784:
case 1826:
case 2344:
case 3710:
case 1370:
case 3397:
case 1422:
case 2802:
case 3547:
case 354:
case 665:
case 1511:
case 2077:
case 939:
case 838:
case 2551:
case 2630:
case 205:
case 1679:
case 2713:
case 1080:
case 3339:
case 315:
case 3427:
case 1791:
case 3543:
case 2241:
case 2069:
case 1825:
case 2321:
case 1189:
case 2048:
case 3850:
case 3227:
case 543:
case 1566:
case 641:
case 690:
case 1357:
case 949:
case 2051:
case 3200:
case 1029:
case 1134:
case 4005:
case 3534:
case 458:
case 972:
case 552:
case 268:
case 1216:
case 226:
case 3282:
case 1882:
case 1659:
case 3289:
case 1606:
case 3716:
case 1967:
case 517:
case 273:
case 616:
case 1531:
case 165:
case 1856:
case 3167:
case 1289:
case 474:
case 845:
case 3417:
case 3355:
case 644:
case 889:
case 1213:
case 8:
case 3972:
case 94:
case 3475:
case 3711:
case 3233:
case 695:
case 2389:
case 2468:
case 620:
case 3708:
case 3537:
case 3437:
case 2439:
case 909:
case 2357:
case 3260:
case 1074:
case 3553:
case 1617:
case 3371:
case 512:
case 746:
case 2281:
case 2948:
case 2496:
case 3909:
case 2097:
case 3700:
case 3604:
case 3726:
case 1197:
case 996:
case 605:
case 3687:
case 1200:
case 3625:
case 2664:
case 1909:
case 3753:
case 3129:
case 1284:
case 2219:
case 977:
case 4056:
case 1673:
case 191:
case 3790:
case 2961:
case 2547:
case 1339:
case 3421:
case 2071:
case 3521:
case 2452:
case 2811:
case 1974:
case 2210:
case 897:
case 691:
case 76:
case 2864:
case 979:
case 211:
case 1061:
case 498:
case 3894:
case 4001:
case 2671:
case 2897:
case 2450:
case 1651:
case 272:
case 712:
case 2426:
case 2188:
case 3231:
case 2971:
case 3844:
case 2487:
case 3500:
case 1703:
case 572:
case 1976:
case 950:
case 246:
case 3272:
case 2509:
case 1676:
case 3840:
case 787:
case 2518:
case 1937:
case 208:
case 1793:
case 2442:
case 139:
case 1588:
case 3816:
case 2045:
case 2673:
case 1819:
case 2874:
case 3784:
case 1640:
case 856:
case 898:
case 83:
case 510:
case 4008:
case 79:
case 2634:
case 1022:
case 3241:
case 68:
case 3469:
case 1319:
case 623:
case 3092:
case 1192:
case 3647:
case 2658:
case 1227:
case 278:
case 1736:
case 2054:
case 2267:
case 646:
case 2232:
case 2746:
case 813:
case 2670:
case 3893:
case 2795:
case 1624:
case 1161:
case 530:
case 1296:
case 1814:
case 3267:
case 2153:
case 3965:
case 2418:
case 2108:
case 3968:
case 325:
case 769:
case 2355:
case 3158:
case 2660:
case 2516:
case 1626:
case 1506:
case 2052:
case 3032:
case 1444:
case 3619:
case 969:
case 1446:
case 2989:
case 149:
case 3727:
case 726:
case 2798:
case 2512:
case 1188:
case 2244:
case 508:
case 2266:
case 2558:
case 105:
case 1599:
case 3317:
case 2057:
case 2042:
case 4073:
case 2000:
case 1491:
case 2347:
case 1032:
case 413:
case 2320:
case 3514:
case 1863:
case 3030:
case 2283:
case 2016:
case 874:
case 327:
case 1890:
case 3058:
case 4082:
case 181:
case 3931:
case 962:
case 3869:
case 3145:
case 1215:
case 986:
case 2415:
case 3460:
case 1365:
case 4037:
case 2373:
case 2299:
case 792:
case 2465:
case 2894:
case 3415:
case 3323:
case 2189:
case 1795:
case 2540:
case 632:
case 445:
case 2498:
case 1429:
case 3838:
case 2007:
case 1968:
case 289:
case 4084:
case 993:
case 455:
case 3189:
case 1718:
case 375:
case 1169:
case 3883:
case 865:
case 2702:
case 1939:
case 2709:
case 3236:
case 3545:
case 879:
case 3913:
case 1832:
case 3516:
case 2567:
case 812:
case 2623:
case 3313:
case 3908:
case 1580:
case 1135:
case 1097:
case 3955:
case 3130:
case 1242:
case 3661:
case 693:
case 3013:
case 1549:
case 3420:
case 1280:
case 3154:
case 722:
case 2026:
case 3939:
case 3796:
case 1434:
case 2284:
case 2738:
case 716:
case 3444:
case 2899:
case 2963:
case 3105:
case 1955:
case 3351:
case 3800:
case 3413:
case 159:
case 96:
case 2593:
case 2495:
case 212:
case 3183:
case 3100:
case 1839:
case 2102:
case 3613:
case 1766:
case 3036:
case 1204:
case 2066:
case 21:
case 624:
case 179:
case 2775:
case 599:
case 684:
case 3348:
case 1518:
case 232:
case 1229:
case 1436:
case 2790:
case 15:
case 2692:
case 3057:
case 4028:
case 3302:
case 1001:
case 3959:
case 3389:
case 1852:
case 622:
case 1133:
case 2659:
case 3953:
case 3741:
case 2913:
case 1166:
case 1984:
case 3626:
case 3671:
case 724:
case 3601:
case 2345:
case 2225:
case 183:
case 1324:
case 720:
case 1689:
case 1735:
case 233:
case 1451:
case 4062:
case 2907:
case 363:
case 2028:
case 873:
case 4078:
case 3269:
case 321:
case 2759:
case 1627:
case 1522:
case 3197:
case 2217:
case 306:
case 529:
case 617:
case 733:
case 2543:
case 2906:
case 2877:
case 2936:
case 3684:
case 1293:
case 2909:
case 1150:
case 2685:
case 2329:
case 4025:
case 2938:
case 649:
case 1800:
case 2910:
case 333:
case 3737:
case 1972:
case 3071:
case 1977:
case 947:
case 2256:
case 3695:
case 3595:
case 403:
case 2271:
case 3364:
case 2196:
case 2204:
case 1594:
case 2431:
case 3170:
case 1601:
case 3987:
case 1997:
case 3224:
case 1655:
case 1775:
case 2269:
case 1906:
case 2249:
case 3936:
case 261:
case 1786:
case 854:
case 1144:
case 1554:
case 2362:
case 2569:
case 3773:
case 3533:
case 1076:
case 2134:
case 152:
case 2605:
case 1608:
case 2079:
case 3563:
case 1045:
case 2122:
case 1607:
case 2858:
case 857:
case 1835:
case 1299:
case 1989:
case 2734:
case 177:
case 3177:
case 3504:
case 1949:
case 1349:
case 3513:
case 3438:
case 1354:
case 2110:
case 3428:
case 163:
case 52:
case 2364:
case 2264:
case 3980:
case 2848:
case 1923:
case 1180:
case 1123:
case 3208:
case 1069:
case 1891:
case 3367:
case 1413:
case 344:
case 453:
case 1596:
case 3512:
case 1410:
case 1533:
case 2351:
case 3263:
case 74:
case 244:
case 2235:
case 3360:
case 4095:
case 1137:
case 117:
case 3061:
case 1206:
case 2457:
case 1654:
case 2411:
case 427:
case 1467:
case 2172:
case 2665:
case 2694:
case 2413:
case 3184:
case 1649:
case 582:
case 377:
case 1312:
case 3776:
case 20:
case 237:
case 1184:
case 3149:
case 1899:
case 1935:
case 2503:
case 1333:
case 2831:
case 1:
case 3787:
case 2939:
case 2049:
case 2975:
case 546:
case 967:
case 2336:
case 1958:
case 3586:
case 95:
case 3391:
case 2700:
case 1747:
case 2747:
case 1545:
case 971:
case 2549:
case 1528:
case 1459:
case 349:
case 3904:
case 2279:
case 6:
case 56:
case 1259:
case 754:
case 502:
case 1482:
case 3823:
case 3986:
case 3439:
case 307:
case 223:
case 1613:
case 1561:
case 3494:
case 1118:
case 1473:
case 1761:
case 2729:
case 3038:
case 1093:
case 2911:
case 1058:
case 2437:
case 904:
case 1477:
case 2278:
case 844:
case 1244:
case 1190:
case 2140:
case 252:
case 2255:
case 2245:
case 1687:
case 2582:
case 370:
case 3479:
case 172:
case 2656:
case 1979:
case 1108:
case 725:
case 1095:
case 402:
case 2474:
case 3979:
case 1788:
case 2632:
case 1377:
case 755:
case 3940:
case 1348:
case 216:
case 4030:
case 1394:
case 341:
case 1496:
case 2654:
case 2796:
case 1078:
case 2037:
case 2703:
case 863:
case 1241:
case 1187:
case 1973:
case 460:
case 202:
case 2197:
case 323:
case 1585:
case 1314:
case 2789:
case 3410:
case 3691:
case 250:
case 1378:
case 1368:
case 1243:
case 697:
case 1090:
case 934:
case 3140:
case 336:
case 14:
case 1823:
case 2552:
case 3902:
case 3343:
case 60:
case 493:
case 3778:
case 4018:
case 1157:
case 2842:
case 3698:
case 1356:
case 1505:
case 651:
case 3225:
case 911:
case 3110:
case 2338:
case 3868:
case 3152:
case 1116:
case 2766:
case 420:
case 3344:
case 2444:
case 3031:
case 3023:
case 3998:
case 2808:
case 633:
case 1639:
case 3041:
case 3047:
case 1363:
case 42:
case 2882:
case 564:
case 4023:
case 509:
case 82:
case 2965:
case 711:
case 503:
case 1660:
case 1874:
case 438:
case 154:
case 2492:
case 407:
case 3261:
case 3801:
case 515:
case 1291:
case 1742:
case 2679:
case 4040:
case 1892:
case 800:
case 426:
case 1922:
case 2991:
case 1824:
case 2187:
case 3872:
case 3155:
case 603:
case 3870:
case 2427:
case 2177:
case 4013:
case 921:
case 727:
case 1149:
case 1827:
case 548:
case 2835:
case 1948:
case 1688:
case 3717:
case 2461:
case 3632:
case 1910:
case 1109:
case 3159:
case 638:
case 405:
case 2214:
case 3624:
case 3899:
case 1905:
case 2622:
case 1632:
case 1322:
case 1740:
case 3271:
case 378:
case 3946:
case 2690:
case 3515:
case 3855:
case 3093:
case 2412:
case 2515:
case 495:
case 4045:
case 2794:
case 4083:
case 1131:
case 214:
case 3682:
case 1896:
case 3378:
case 978:
case 1887:
case 452:
case 648:
case 2092:
case 1943:
case 2209:
case 298:
case 3885:
case 1702:
case 815:
case 3153:
case 3552:
case 2839:
case 663:
case 2604:
case 1283:
case 1386:
case 334:
case 500:
case 294:
case 2326:
case 676:
case 2579:
case 741:
case 1737:
case 3576:
case 3142:
case 824:
case 141:
case 44:
case 1648:
case 3099:
case 1004:
case 3328:
case 3235:
case 953:
case 3394:
case 1452:
case 3193:
case 2400:
case 1714:
case 959:
case 1011:
case 4089:
case 1564:
case 1993:
case 568:
case 417:
case 297:
case 225:
case 916:
case 4065:
case 1784:
case 3945:
case 2988:
case 2833:
case 2721:
case 3815:
case 2788:
case 1346:
case 786:
case 3106:
case 2183:
case 867:
case 433:
case 2587:
case 3068:
case 331:
case 1695:
case 45:
case 1047:
case 2126:
case 1653:
case 1925:
case 367:
case 3446:
case 3699:
case 1252:
case 3385:
case 483:
case 3546:
case 631:
case 1037:
case 613:
case 2929:
case 948:
case 1849:
case 245:
case 3652:
case 3247:
case 513:
case 2174:
case 3305:
case 2294:
case 1191:
case 3401:
case 24:
case 2001:
case 811:
case 2277:
case 2968:
case 1749:
case 1575:
case 3842:
case 3701:
case 1323:
case 2695:
case 2753:
case 1089:
case 77:
case 3387:
case 1408:
case 919:
case 3346:
case 597:
case 1238:
case 411:
case 2289:
case 554:
case 540:
case 3685:
case 131:
case 2904:
case 1327:
case 39:
case 1995:
case 219:
case 3991:
case 1753:
case 2710:
case 1290:
case 2285:
case 1009:
case 1721:
case 1310:
case 1235:
case 3107:
case 1971:
case 4032:
case 400:
case 1929:
case 1430:
case 4015:
case 2422:
case 2157:
case 2295:
case 106:
case 330:
case 128:
case 145:
case 1982:
case 3103:
case 3621:
case 556:
case 570:
case 3069:
case 1980:
case 2674:
case 3488:
case 1524:
case 2358:
case 1751:
case 3659:
case 2089:
case 1727:
case 1772:
case 1809:
case 555:
case 2510:
case 2957:
case 3132:
case 2621:
case 1335:
case 2978:
case 817:
case 424:
case 1485:
case 1347:
case 2615:
case 3982:
case 30:
case 2471:
case 505:
case 1085:
case 875:
case 2736:
case 2953:
case 846:
case 1412:
case 3957:
case 175:
case 735:
case 1468:
case 1620:
case 3689:
case 1266:
case 1717:
case 1414:
case 2979:
case 133:
case 1390:
case 1025:
case 1218:
case 1517:
case 2262:
case 2813:
case 2083:
case 3008:
case 3066:
case 2146:
case 2486:
case 2854:
case 366:
case 700:
case 2684:
case 1804:
case 374:
case 837:
case 3255:
case 2862:
case 1537:
case 3799:
case 994:
case 3082:
case 3935:
case 2614:
case 3611:
case 3782:
case 1428:
case 702:
case 2954:
case 1175:
case 1380:
case 2836:
case 1643:
case 1220:
case 2242:
case 826:
case 2383:
case 3330:
case 1435:
case 36:
case 2996:
case 3238:
case 1051:
case 2829:
case 1563:
case 4088:
case 3222:
case 3067:
case 1245:
case 2475:
case 132:
case 657:
case 3510:
case 2572:
case 2330:
case 316:
case 575:
case 2473:
case 2374:
case 680:
case 1007:
case 3097:
case 2354:
case 199:
case 1393:
case 3087:
case 1514:
case 2912:
case 347:
case 2706:
case 73:
case 5:
case 3356:
case 2699:
case 1664:
case 2009:
case 2337:
case 1748:
case 3867:
case 2472:
case 1880:
case 1681:
case 2806:
case 2286:
case 1578:
case 1372:
case 2398:
case 328:
case 3590:
case 600:
case 2455:
case 3406:
case 478:
case 2205:
case 3493:
case 3416:
case 1405:
case 1898:
case 3392:
case 1445:
case 2081:
case 2076:
case 1111:
case 3072:
case 2169:
case 1928:
case 3486:
case 1307:
case 1420:
case 3306:
case 3481:
case 1479:
case 9:
case 1904:
case 3854:
case 2147:
case 3424:
case 3191:
case 2493:
case 2718:
case 2928:
case 2952:
case 3264:
case 229:
case 1495:
case 1440:
case 1540:
case 1313:
case 642:
case 3040:
case 807:
case 1224:
case 335:
case 1292:
case 2322:
case 4002:
case 2133:
case 918:
case 1612:
case 3858:
case 3975:
case 3426:
case 389:
case 1774:
case 806:
case 3783:
case 1373:
case 2201:
case 3656:
case 2883:
case 116:
case 1013:
case 2466:
case 2161:
case 3835:
case 1498:
case 3034:
case 2163:
case 2705:
case 1086:
case 4070:
case 3496:
case 1104:
case 2158:
case 2993:
case 1152:
case 3242:
case 3723:
case 4080:
case 2118:
case 3757:
case 1970:
case 3747:
case 3276:
case 776:
case 434:
case 3848:
case 1073:
case 960:
case 3505:
case 3833:
case 980:
case 3039:
case 1888:
case 902:
case 2797:
case 2983:
case 896:
case 1828:
case 3409:
case 3795:
case 3056:
case 1469:
case 3442:
case 773:
case 150:
case 1320:
case 789:
case 1565:
case 3614:
case 2226:
case 1878:
case 2698:
case 2162:
case 677:
case 468:
case 3622:
case 2342:
case 1057:
case 1796:
case 1424:
case 3278:
case 3168:
case 1261:
case 148:
case 167:
case 1831:
case 1260:
case 3259:
case 360:
case 674:
case 2523:
case 2003:
case 470:
case 2944:
case 1447:
case 614:
case 2384:
case 880:
case 185:
case 2098:
case 594:
case 696:
case 574:
case 2925:
case 1277:
case 1256:
case 3326:
case 586:
case 1369:
case 72:
case 1136:
case 1072:
case 3148:
case 793:
case 2625:
case 2047:
case 1994:
case 2966:
case 782:
case 816:
case 119:
case 2438:
case 1959:
case 2870:
case 2538:
case 379:
case 393:
case 576:
case 1421:
case 3952:
case 748:
case 627:
case 3876:
case 2348:
case 2370:
case 985:
case 2290:
case 2212:
case 2661:
case 1978:
case 2237:
case 659:
case 3265:
case 4090:
case 3941:
case 734:
case 1684:
case 2714:
case 3755:
case 2893:
case 4060:
case 3076:
case 630:
case 2361:
case 1815:
case 1129:
case 209:
case 1387:
case 3004:
case 3863:
case 1443:
case 561:
case 3476:
case 3441:
case 193:
case 2477:
case 3809:
case 2416:
case 3327:
case 3526:
case 1918:
case 1449:
case 3550:
case 2900:
case 482:
case 1141:
case 1329:
case 2148:
case 2607:
case 2896:
case 3618:
case 353:
case 1842:
case 3045:
case 3205:
case 62:
case 1777:
case 345:
case 3730:
case 4031:
case 2250:
case 3164:
case 3985:
case 3538:
case 521:
case 2060:
case 2950:
case 2941:
case 1425:
case 2927:
case 3630:
case 2563:
case 654:
case 2669:
case 2094:
case 3414:
case 3817:
case 355:
case 2491:
case 2521:
case 2992:
case 471:
case 668:
case 1700:
case 2688:
case 2754:
case 112:
case 3349:
case 1854:
case 2101:
case 1768:
case 905:
case 4091:
case 3644:
case 1205:
case 305:
case 778:
case 2741:
case 1309:
case 1685:
case 101:
case 3220:
case 264:
case 3686:
case 1836:
case 1603:
case 4086:
case 2803:
case 2837:
case 2178:
case 55:
case 2592:
case 747:
case 164:
case 801:
case 2972:
case 3640:
case 3472:
case 2859:
case 104:
case 2159:
case 1470:
case 3443:
case 1268:
case 3218:
case 1845:
case 2403:
case 859:
case 1066:
case 1765:
case 1376:
case 2363:
case 1254:
case 3156:
case 559:
case 1475:
case 4011:
case 669:
case 1167:
case 1371:
case 2583:
case 138:
case 763:
case 1350:
case 1750:
case 365:
case 1017:
case 1012:
case 2715:
case 2619:
case 3365:
case 1438:
case 3002:
case 1570:
case 2165:
case 3839:
case 2728:
case 892:
case 1223:
case 359:
case 3161:
case 3381:
case 2602:
case 3608:
case 1644:
case 634:
case 3104:
case 3464:
case 2507:
case 805:
case 2346:
case 1251:
case 443:
case 227:
case 3725:
case 3584:
case 987:
case 168:
case 386:
case 3655:
case 2922:
case 758:
case 3015:
case 3895:
case 1212:
case 3772:
case 394:
case 3668:
case 4034:
case 102:
case 1023:
case 187:
case 1146:
case 661:
case 1282:
case 2871:
case 1897:
case 645:
case 662:
case 3556:
case 2814:
case 2917:
case 3650:
case 1584:
case 804:
case 182:
case 1103:
case 1456:
case 2815:
case 198:
case 1808:
case 462:
case 1614:
case 2678:
case 255:
case 3561:
case 590:
case 3654:
case 439:
case 32:
case 2058:
case 380:
case 454:
case 914:
case 666:
case 3144:
case 224:
case 1755:
case 1406:
case 3856:
case 756:
case 3925:
case 1512:
case 2594:
case 58:
case 3483:
case 3588:
case 1730:
case 3223:
case 699:
case 1117:
case 2476:
case 2070:
case 592:
case 3274:
case 3950:
case 4033:
case 2885:
case 339:
case 29:
case 3522:
case 2056:
case 704:
case 2453:
case 3044:
case 3771:
case 3480:
case 2701:
case 3532:
case 2506:
case 3354:
case 2222:
case 371:
case 843:
case 440:
case 348:
case 3396:
case 2015:
case 2433:
case 1915:
case 258:
case 2087:
case 688:
case 2691:
case 1183:
case 418:
case 1669:
case 2872:
case 1851:
case 1758:
case 3829:
case 3035:
case 595:
case 4010:
case 3807:
case 4048:
case 585:
case 3459:
case 3924:
case 1407:
case 1214:
case 3007:
case 615:
case 1992:
case 1432:
case 3519:
case 107:
case 3507:
case 467:
case 1343:
case 3195:
case 709:
case 3173:
case 1516:
case 2185:
case 98:
case 3352:
case 928:
case 4049:
case 877:
case 3487:
case 4022:
case 3735:
case 2405:
case 2429:
case 2875:
case 51:
case 3186:
case 2969:
case 1705:
case 3971:
case 352:
case 906:
case 3756:
case 204:
case 2443:
case 1490:
case 1336:
case 3019:
case 1160:
case 1374:
case 3150:
case 963:
case 100:
case 1030:
case 1629:
case 381:
case 2253:
case 303:
case 3432:
case 992:
case 1142:
case 4054:
case 842:
case 1128:
case 2642:
case 2761:
case 1154:
case 1178:
case 1579:
case 2606:
case 3518:
case 146:
case 1240:
case 1228:
case 2628:
case 535:
case 2448:
case 37:
case 3620:
case 974:
case 3813:
case 1115:
case 2861:
case 602:
case 390:
case 3165:
case 2776:
case 3918:
case 562:
case 1634:
case 2768:
case 3085:
case 3005:
case 2287:
case 3176:
case 3934:
case 2535:
case 1484:
case 1921:
case 1525:
case 1820:
case 1837:
case 3434:
case 2275:
case 93:
case 1504:
case 2144:
case 3094:
case 2697:
case 3001:
case 1535:
case 1388:
case 2470:
case 2100:
case 3310:
case 1975:
case 207:
case 2655:
case 1276:
case 2530:
case 2164:
case 1318:
case 3256:
case 1098:
case 550:
case 1462:
case 3395:
case 2847:
case 932:
case 87:
case 3172:
case 507:
case 1538:
case 473:
case 158:
case 262:
case 127:
case 946:
case 1597:
case 1945:
case 346:
case 2589:
case 3703:
case 1602:
case 3674:
case 2603:
case 2757:
case 1273:
case 4069:
case 578:
case 2459:
case 423:
case 3285:
case 2561:
case 852:
case 3827:
case 3791:
case 2135:
case 520:
case 1038:
case 3052:
case 1163:
case 1555:
case 1947:
case 1990:
case 1411:
case 1724:
case 3124:
case 2591:
case 465:
case 1279:
case 3548:
case 486:
case 2867:
case 683:
case 1198:
case 2239:
case 1071:
case 1806:
case 3739:
case 3627:
case 2609:
case 277:
case 1697:
case 3555:
case 3932:
case 1941:
case 1872:
case 2435:
case 3570:
case 538:
case 3279:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1667883602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,];
var gg_b = "1667883602/";

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

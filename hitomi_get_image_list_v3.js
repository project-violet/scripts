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
case 3363:
case 2133:
case 2351:
case 3890:
case 3361:
case 671:
case 1046:
case 2488:
case 3547:
case 1850:
case 2244:
case 1367:
case 3450:
case 748:
case 3907:
case 2271:
case 1155:
case 3192:
case 1174:
case 1659:
case 355:
case 2098:
case 1414:
case 2573:
case 3277:
case 3721:
case 2139:
case 3908:
case 2326:
case 334:
case 1485:
case 1473:
case 3198:
case 2256:
case 3185:
case 1111:
case 2865:
case 2158:
case 3665:
case 1759:
case 1305:
case 2737:
case 3139:
case 28:
case 1402:
case 1817:
case 3028:
case 392:
case 3909:
case 2967:
case 868:
case 4088:
case 2333:
case 3197:
case 312:
case 945:
case 264:
case 373:
case 3601:
case 799:
case 1487:
case 3582:
case 3480:
case 114:
case 343:
case 867:
case 625:
case 1775:
case 3302:
case 1898:
case 1087:
case 2167:
case 4078:
case 149:
case 465:
case 1880:
case 2634:
case 3313:
case 3783:
case 3529:
case 2793:
case 2805:
case 1142:
case 2521:
case 2597:
case 3247:
case 610:
case 15:
case 1266:
case 1965:
case 2694:
case 647:
case 3286:
case 2046:
case 4074:
case 4008:
case 3292:
case 2209:
case 230:
case 1678:
case 3855:
case 2151:
case 3841:
case 1330:
case 3276:
case 1224:
case 65:
case 1629:
case 3949:
case 1052:
case 1758:
case 3110:
case 3752:
case 1411:
case 1776:
case 955:
case 946:
case 1076:
case 1688:
case 2551:
case 4076:
case 35:
case 943:
case 3934:
case 2810:
case 518:
case 1971:
case 3509:
case 2297:
case 3550:
case 1625:
case 1603:
case 2995:
case 340:
case 2765:
case 3896:
case 2096:
case 1110:
case 2062:
case 3912:
case 3556:
case 3927:
case 2986:
case 640:
case 3583:
case 1461:
case 3296:
case 932:
case 493:
case 697:
case 2839:
case 1643:
case 2843:
case 3549:
case 3168:
case 1793:
case 2225:
case 1285:
case 3820:
case 2707:
case 1930:
case 1550:
case 757:
case 1236:
case 1874:
case 3058:
case 3605:
case 1085:
case 2185:
case 3838:
case 2787:
case 3127:
case 1472:
case 3381:
case 2080:
case 3535:
case 926:
case 2960:
case 2056:
case 3377:
case 20:
case 1444:
case 3244:
case 1597:
case 2557:
case 3253:
case 1286:
case 3810:
case 668:
case 3047:
case 1534:
case 2001:
case 3822:
case 1200:
case 4080:
case 2554:
case 1774:
case 953:
case 4021:
case 297:
case 3360:
case 180:
case 1890:
case 136:
case 2109:
case 3756:
case 2725:
case 507:
case 3538:
case 3690:
case 2945:
case 1507:
case 2924:
case 3886:
case 181:
case 3458:
case 1878:
case 405:
case 1059:
case 3421:
case 3169:
case 95:
case 1499:
case 3700:
case 965:
case 1158:
case 354:
case 126:
case 2104:
case 3793:
case 385:
case 3:
case 1268:
case 3437:
case 3950:
case 1023:
case 1377:
case 3585:
case 2595:
case 379:
case 1160:
case 467:
case 3697:
case 2317:
case 433:
case 90:
case 2400:
case 141:
case 2259:
case 3039:
case 2440:
case 1230:
case 2002:
case 1363:
case 4045:
case 3644:
case 1290:
case 252:
case 1651:
case 1561:
case 3367:
case 3498:
case 3259:
case 1711:
case 4027:
case 3676:
case 3234:
case 2491:
case 449:
case 2757:
case 2889:
case 1631:
case 1863:
case 3687:
case 1717:
case 2334:
case 3001:
case 2668:
case 648:
case 606:
case 607:
case 1369:
case 626:
case 209:
case 4028:
case 2957:
case 1366:
case 919:
case 3183:
case 3046:
case 1581:
case 1108:
case 3520:
case 466:
case 4039:
case 376:
case 3290:
case 153:
case 3677:
case 922:
case 2606:
case 1118:
case 2116:
case 3651:
case 2024:
case 538:
case 3389:
case 2273:
case 2270:
case 3683:
case 4040:
case 168:
case 1885:
case 3012:
case 2231:
case 248:
case 3955:
case 1048:
case 3617:
case 1600:
case 681:
case 2372:
case 1806:
case 177:
case 2864:
case 2972:
case 4020:
case 506:
case 43:
case 1470:
case 1828:
case 1582:
case 3930:
case 3984:
case 962:
case 3628:
case 841:
case 1173:
case 1167:
case 3243:
case 3929:
case 2235:
case 185:
case 3688:
case 636:
case 1129:
case 3107:
case 387:
case 3868:
case 3745:
case 1465:
case 2230:
case 3242:
case 3204:
case 3231:
case 2907:
case 951:
case 1922:
case 2082:
case 3372:
case 2028:
case 3653:
case 719:
case 952:
case 2636:
case 2738:
case 628:
case 3329:
case 2263:
case 3800:
case 3205:
case 2463:
case 364:
case 1476:
case 1801:
case 2691:
case 2699:
case 1957:
case 2204:
case 2761:
case 1672:
case 2175:
case 1344:
case 1925:
case 2704:
case 3794:
case 2478:
case 3673:
case 3362:
case 3667:
case 254:
case 1360:
case 3430:
case 696:
case 1471:
case 23:
case 2579:
case 1265:
case 516:
case 2169:
case 669:
case 2899:
case 2075:
case 2161:
case 2258:
case 1315:
case 1755:
case 751:
case 1212:
case 3369:
case 2939:
case 2088:
case 3539:
case 1638:
case 2559:
case 5:
case 1109:
case 1203:
case 3835:
case 2117:
case 3981:
case 2300:
case 1398:
case 3358:
case 1262:
case 3427:
case 2708:
case 3174:
case 3920:
case 3235:
case 2470:
case 2069:
case 508:
case 3485:
case 2015:
case 889:
case 309:
case 2320:
case 2862:
case 2375:
case 1086:
case 270:
case 1168:
case 2767:
case 1428:
case 3668:
case 2272:
case 2054:
case 674:
case 2959:
case 901:
case 1121:
case 2281:
case 1361:
case 1743:
case 3281:
case 3074:
case 2356:
case 2092:
case 724:
case 1408:
case 338:
case 237:
case 2674:
case 3755:
case 904:
case 2187:
case 3433:
case 1794:
case 832:
case 107:
case 1846:
case 695:
case 3630:
case 3790:
case 2357:
case 3933:
case 845:
case 3396:
case 3175:
case 1697:
case 1181:
case 1611:
case 994:
case 1703:
case 425:
case 3518:
case 1923:
case 2997:
case 3150:
case 2424:
case 229:
case 1893:
case 2835:
case 1966:
case 2111:
case 1609:
case 363:
case 2085:
case 665:
case 1400:
case 806:
case 3526:
case 3618:
case 869:
case 2398:
case 3780:
case 781:
case 2802:
case 2950:
case 488:
case 846:
case 1433:
case 667:
case 26:
case 2742:
case 983:
case 2650:
case 1441:
case 298:
case 642:
case 447:
case 3937:
case 1183:
case 555:
case 2994:
case 1694:
case 585:
case 398:
case 1326:
case 1539:
case 3252:
case 556:
case 2025:
case 1951:
case 1807:
case 2115:
case 1516:
case 644:
case 3960:
case 761:
case 3740:
case 3716:
case 1610:
case 1616:
case 395:
case 1833:
case 2822:
case 2477:
case 2774:
case 3256:
case 2055:
case 3124:
case 616:
case 2119:
case 683:
case 1664:
case 3203:
case 1380:
case 335:
case 1299:
case 3943:
case 2804:
case 1917:
case 2355:
case 3034:
case 1027:
case 463:
case 4014:
case 1683:
case 1393:
case 3612:
case 2384:
case 3170:
case 906:
case 2989:
case 2017:
case 1865:
case 774:
case 2904:
case 996:
case 2897:
case 1877:
case 3100:
case 2295:
case 2021:
case 2679:
case 793:
case 3659:
case 1726:
case 3457:
case 2195:
case 699:
case 3055:
case 2410:
case 3346:
case 3767:
case 3386:
case 2520:
case 888:
case 1239:
case 2255:
case 409:
case 1816:
case 1939:
case 1491:
case 3321:
case 3614:
case 2439:
case 3503:
case 3294:
case 897:
case 3940:
case 2814:
case 3246:
case 32:
case 3003:
case 3370:
case 2614:
case 262:
case 2527:
case 3701:
case 2747:
case 3095:
case 509:
case 2138:
case 2140:
case 2249:
case 2284:
case 2984:
case 291:
case 3742:
case 2574:
case 1679:
case 2779:
case 1586:
case 2227:
case 2003:
case 2191:
case 358:
case 2884:
case 321:
case 3282:
case 3116:
case 1857:
case 4001:
case 1447:
case 2378:
case 917:
case 216:
case 305:
case 3872:
case 144:
case 273:
case 3514:
case 3837:
case 2813:
case 2245:
case 894:
case 2689:
case 820:
case 3751:
case 2306:
case 1116:
case 1043:
case 213:
case 3210:
case 2494:
case 3339:
case 3073:
case 1790:
case 3782:
case 618:
case 82:
case 3149:
case 876:
case 3261:
case 2009:
case 2974:
case 1338:
case 1873:
case 2544:
case 594:
case 2467:
case 3424:
case 27:
case 4072:
case 3958:
case 2754:
case 529:
case 2343:
case 2034:
case 586:
case 979:
case 3663:
case 2367:
case 2072:
case 62:
case 2657:
case 1808:
case 1646:
case 2891:
case 1382:
case 300:
case 808:
case 3921:
case 3802:
case 1924:
case 2428:
case 1988:
case 927:
case 2941:
case 1701:
case 1591:
case 2846:
case 353:
case 827:
case 4068:
case 365:
case 1327:
case 3971:
case 2247:
case 1727:
case 1445:
case 1577:
case 3749:
case 345:
case 1359:
case 83:
case 862:
case 1963:
case 36:
case 1479:
case 4000:
case 1710:
case 3053:
case 1026:
case 3941:
case 1568:
case 2660:
case 4061:
case 419:
case 1222:
case 2610:
case 1439:
case 3327:
case 2962:
case 914:
case 3728:
case 753:
case 3776:
case 106:
case 1458:
case 3747:
case 3115:
case 3179:
case 2349:
case 1214:
case 3196:
case 673:
case 411:
case 1958:
case 1780:
case 2201:
case 421:
case 1968:
case 4082:
case 320:
case 2714:
case 527:
case 204:
case 2221:
case 787:
case 2770:
case 1248:
case 13:
case 790:
case 3629:
case 238:
case 3997:
case 1012:
case 1940:
case 4:
case 2712:
case 1783:
case 1788:
case 3792:
case 1859:
case 3120:
case 1560:
case 873:
case 240:
case 840:
case 2590:
case 1700:
case 148:
case 2789:
case 3187:
case 3048:
case 657:
case 3973:
case 1457:
case 1276:
case 134:
case 372:
case 2968:
case 1373:
case 1578:
case 2269:
case 2921:
case 1467:
case 3490:
case 924:
case 99:
case 1317:
case 290:
case 2331:
case 3393:
case 2510:
case 2391:
case 2267:
case 289:
case 619:
case 723:
case 1189:
case 2441:
case 2601:
case 1546:
case 592:
case 1938:
case 3878:
case 1517:
case 605:
case 2172:
case 1642:
case 1073:
case 242:
case 3368:
case 797:
case 1083:
case 4002:
case 1010:
case 3214:
case 3471:
case 2919:
case 3225:
case 2071:
case 3936:
case 583:
case 4077:
case 1047:
case 2481:
case 3208:
case 3260:
case 2709:
case 2203:
case 715:
case 1244:
case 918:
case 2900:
case 1133:
case 3734:
case 1496:
case 1976:
case 1091:
case 1583:
case 327:
case 1692:
case 3331:
case 3066:
case 3070:
case 1964:
case 1920:
case 2827:
case 1036:
case 2760:
case 3217:
case 1818:
case 3846:
case 1798:
case 2502:
case 3634:
case 2031:
case 553:
case 2466:
case 450:
case 3870:
case 3263:
case 700:
case 666:
case 3799:
case 362:
case 3222:
case 1040:
case 866:
case 1901:
case 1749:
case 3647:
case 212:
case 1567:
case 432:
case 435:
case 370:
case 1151:
case 963:
case 571:
case 3915:
case 1864:
case 711:
case 2421:
case 898:
case 2110:
case 2688:
case 1384:
case 3606:
case 746:
case 1520:
case 3935:
case 1213:
case 1904:
case 2437:
case 722:
case 998:
case 852:
case 3534:
case 1820:
case 3657:
case 2282:
case 87:
case 3338:
case 968:
case 3557:
case 2486:
case 2412:
case 4011:
case 2234:
case 2346:
case 2376:
case 3727:
case 2123:
case 3642:
case 2426:
case 2686:
case 3098:
case 990:
case 823:
case 3769:
case 3757:
case 3308:
case 4037:
case 2290:
case 2550:
case 2036:
case 2091:
case 2399:
case 1494:
case 2589:
case 1246:
case 3011:
case 2628:
case 3980:
case 2144:
case 1811:
case 3738:
case 3787:
case 2855:
case 2552:
case 2764:
case 2283:
case 1934:
case 3944:
case 2068:
case 2016:
case 453:
case 3303:
case 4089:
case 1876:
case 802:
case 2450:
case 588:
case 1905:
case 1761:
case 1721:
case 2482:
case 2369:
case 3209:
case 154:
case 495:
case 1630:
case 3604:
case 193:
case 1937:
case 2753:
case 2066:
case 3761:
case 1097:
case 1707:
case 1145:
case 2070:
case 2136:
case 2727:
case 2817:
case 3105:
case 967:
case 311:
case 992:
case 3452:
case 477:
case 3513:
case 4052:
case 1952:
case 1014:
case 2387:
case 2901:
case 3322:
case 1362:
case 1078:
case 3622:
case 2661:
case 3082:
case 1595:
case 676:
case 3289:
case 877:
case 2261:
case 738:
case 4064:
case 3631:
case 7:
case 1370:
case 3366:
case 1150:
case 2013:
case 63:
case 3495:
case 351:
case 2456:
case 3861:
case 621:
case 2100:
case 1407:
case 72:
case 3537:
case 2903:
case 475:
case 3357:
case 3190:
case 2338:
case 663:
case 3611:
case 2985:
case 2958:
case 2142:
case 1942:
case 2797:
case 2587:
case 3273:
case 2464:
case 1887:
case 3126:
case 407:
case 401:
case 1872:
case 1105:
case 3988:
case 1298:
case 2778:
case 3211:
case 315:
case 2181:
case 1639:
case 4094:
case 1066:
case 3906:
case 1666:
case 2008:
case 2539:
case 2654:
case 217:
case 4030:
case 816:
case 1541:
case 709:
case 3096:
case 566:
case 176:
case 3508:
case 3597:
case 638:
case 3590:
case 2154:
case 1334:
case 2914:
case 1535:
case 173:
case 1128:
case 3271:
case 1612:
case 2285:
case 1216:
case 788:
case 2499:
case 767:
case 257:
case 1596:
case 3359:
case 1875:
case 2915:
case 1015:
case 836:
case 3033:
case 2687:
case 3375:
case 2543:
case 3027:
case 659:
case 2933:
case 3085:
case 3488:
case 609:
case 2575:
case 2670:
case 2560:
case 430:
case 549:
case 1652:
case 2217:
case 408:
case 3551:
case 1757:
case 1559:
case 891:
case 2598:
case 78:
case 976:
case 94:
case 4086:
case 2302:
case 2641:
case 1797:
case 1156:
case 1551:
case 2943:
case 1486:
case 1852:
case 170:
case 3515:
case 2207:
case 1188:
case 2885:
case 2332:
case 1427:
case 3809:
case 3573:
case 8:
case 2058:
case 1556:
case 3043:
case 3947:
case 2604:
case 2045:
case 330:
case 1270:
case 2250:
case 3269:
case 2801:
case 1233:
case 2656:
case 474:
case 1960:
case 3911:
case 834:
case 4056:
case 2964:
case 1055:
case 861:
case 2298:
case 892:
case 2783:
case 3026:
case 479:
case 59:
case 3511:
case 3215:
case 2877:
case 2541:
case 473:
case 2420:
case 1613:
case 782:
case 813:
case 1921:
case 191:
case 2966:
case 1007:
case 3633:
case 3625:
case 3091:
case 3975:
case 3325:
case 843:
case 4083:
case 1932:
case 1249:
case 1219:
case 1993:
case 2609:
case 3111:
case 2174:
case 3340:
case 1747:
case 2664:
case 346:
case 250:
case 1306:
case 2776:
case 562:
case 2366:
case 324:
case 253:
case 2555:
case 1163:
case 526:
case 2073:
case 1791:
case 2318:
case 1113:
case 1770:
case 3866:
case 2780:
case 3420:
case 2746:
case 3380:
case 2296:
case 1357:
case 1267:
case 3857:
case 2739:
case 2312:
case 2010:
case 2777:
case 1456:
case 2471:
case 3119:
case 3735:
case 3405:
case 1062:
case 4079:
case 2752:
case 159:
case 1782:
case 2132:
case 468:
case 1733:
case 350:
case 2826:
case 1696:
case 3979:
case 1247:
case 1144:
case 2417:
case 2095:
case 58:
case 1234:
case 539:
case 629:
case 2715:
case 2262:
case 3439:
case 842:
case 903:
case 2316:
case 645:
case 2649:
case 599:
case 2929:
case 4059:
case 651:
case 3180:
case 3880:
case 3939:
case 503:
case 3213:
case 1844:
case 478:
case 1907:
case 2354:
case 3660:
case 3712:
case 1117:
case 1825:
case 66:
case 3470:
case 1368:
case 4051:
case 939:
case 2459:
case 3733:
case 2758:
case 563:
case 3996:
case 2582:
case 1149:
case 3464:
case 445:
case 1034:
case 333:
case 1634:
case 1416:
case 2171:
case 3731:
case 1335:
case 146:
case 2498:
case 3795:
case 1350:
case 2364:
case 3186:
case 1649:
case 3840:
case 1175:
case 3778:
case 4024:
case 735:
case 16:
case 1809:
case 2029:
case 1812:
case 2621:
case 1916:
case 34:
case 1211:
case 3505:
case 498:
case 794:
case 1682:
case 2808:
case 1114:
case 2038:
case 3489:
case 481:
case 969:
case 2202:
case 678:
case 3726:
case 1588:
case 279:
case 1364:
case 2444:
case 2150:
case 3978:
case 614:
case 3574:
case 2156:
case 1715:
case 2616:
case 954:
case 1325:
case 3094:
case 3114:
case 3266:
case 1044:
case 908:
case 2394:
case 1088:
case 296:
case 2405:
case 3571:
case 1198:
case 4026:
case 3969:
case 2647:
case 130:
case 2549:
case 2999:
case 3692:
case 3502:
case 3521:
case 826:
case 3084:
case 3991:
case 811:
case 1243:
case 3666:
case 789:
case 1985:
case 1022:
case 3637:
case 186:
case 971:
case 3753:
case 3093:
case 2289:
case 1050:
case 3181:
case 3469:
case 2576:
case 1910:
case 828:
case 864:
case 470:
case 2164:
case 3805:
case 3065:
case 1691:
case 442:
case 2078:
case 2890:
case 3561:
case 386:
case 670:
case 989:
case 2675:
case 2388:
case 1241:
case 1459:
case 3019:
case 1337:
case 2529:
case 1450:
case 1760:
case 1868:
case 3519:
case 1096:
case 2702:
case 2065:
case 2607:
case 3118:
case 3018:
case 2698:
case 3268:
case 3669:
case 199:
case 2000:
case 3853:
case 3569:
case 1004:
case 4034:
case 2643:
case 2286:
case 2347:
case 115:
case 163:
case 2512:
case 1399:
case 2473:
case 1287:
case 1675:
case 3560:
case 2157:
case 1552:
case 132:
case 3965:
case 1974:
case 3324:
case 1660:
case 664:
case 2517:
case 742:
case 1906:
case 949:
case 366:
case 3596:
case 2487:
case 3542:
case 124:
case 2323:
case 2409:
case 3398:
case 2061:
case 940:
case 1620:
case 46:
case 280:
case 210:
case 2556:
case 1426:
case 1403:
case 3128:
case 1548:
case 2678:
case 439:
case 1648:
case 1339:
case 369:
case 3765:
case 1474:
case 4041:
case 1933:
case 3994:
case 1819:
case 12:
case 557:
case 3057:
case 786:
case 3675:
case 1215:
case 3373:
case 1469:
case 2821:
case 2635:
case 1513:
case 3910:
case 1745:
case 299:
case 215:
case 3926:
case 1926:
case 3133:
case 3995:
case 730:
case 3877:
case 3152:
case 1842:
case 4003:
case 109:
case 3417:
case 521:
case 1525:
case 3227:
case 1318:
case 342:
case 255:
case 2599:
case 712:
case 706:
case 3109:
case 3237:
case 2196:
case 2260:
case 2963:
case 2243:
case 3412:
case 2344:
case 452:
case 1587:
case 1013:
case 3050:
case 3768:
case 1977:
case 3985:
case 269:
case 2044:
case 942:
case 3565:
case 3586:
case 1829:
case 2875:
case 2644:
case 4005:
case 1959:
case 171:
case 3989:
case 611:
case 1092:
case 1994:
case 2177:
case 728:
case 374:
case 1540:
case 1661:
case 591:
case 863:
case 494:
case 2211:
case 2257:
case 1911:
case 763:
case 117:
case 1538:
case 1410:
case 2254:
case 1170:
case 522:
case 1870:
case 3507:
case 1973:
case 3474:
case 559:
case 2951:
case 875:
case 2970:
case 2074:
case 1184:
case 2360:
case 3349:
case 3440:
case 615:
case 3390:
case 1071:
case 3428:
case 2042:
case 2455:
case 1712:
case 2569:
case 4069:
case 3236:
case 3510:
case 2190:
case 3635:
case 1312:
case 2198:
case 785:
case 2135:
case 2163:
case 208:
case 3987:
case 2452:
case 1394:
case 3496:
case 779:
case 3353:
case 2385:
case 3858:
case 2371:
case 769:
case 597:
case 1549:
case 1252:
case 1053:
case 1180:
case 118:
case 197:
case 2457:
case 570:
case 1547:
case 2248:
case 1803:
case 2948:
case 179:
case 2037:
case 1902:
case 241:
case 260:
case 328:
case 2580:
case 982:
case 3784:
case 524:
case 3191:
case 1065:
case 2794:
case 2791:
case 2624:
case 396:
case 3042:
case 1510:
case 755:
case 1575:
case 1258:
case 3775:
case 113:
case 3311:
case 1662:
case 2120:
case 1261:
case 911:
case 3576:
case 3806:
case 3403:
case 1990:
case 2553:
case 1070:
case 1826:
case 3829:
case 3717:
case 1656:
case 1913:
case 3045:
case 567:
case 371:
case 1397:
case 3719:
case 3415:
case 2379:
case 436:
case 2935:
case 1112:
case 2353:
case 1669:
case 3069:
case 4018:
case 2631:
case 2586:
case 3789:
case 773:
case 2603:
case 3032:
case 733:
case 3862:
case 2350:
case 2460:
case 1847:
case 3922:
case 2756:
case 2434:
case 3468:
case 3954:
case 2268:
case 3593:
case 2508:
case 1443:
case 635:
case 937:
case 3029:
case 2352:
case 2592:
case 4054:
case 2768:
case 2676:
case 1889:
case 3968:
case 1839:
case 1687:
case 856:
case 3723:
case 3392:
case 3854:
case 1342:
case 458:
case 3704:
case 2465:
case 1126:
case 2956:
case 987:
case 1989:
case 3525:
case 3009:
case 505:
case 416:
case 3959:
case 3336:
case 1950:
case 1396:
case 1636:
case 3239:
case 574:
case 1324:
case 731:
case 2411:
case 2807:
case 744:
case 1621:
case 2228:
case 2906:
case 3992:
case 1929:
case 3736:
case 1670:
case 1557:
case 1490:
case 504:
case 4012:
case 1278:
case 1579:
case 1673:
case 1301:
case 1558:
case 1381:
case 2838:
case 282:
case 1735:
case 600:
case 3714:
case 2506:
case 1100:
case 3746:
case 406:
case 3942:
case 1281:
case 1332:
case 1063:
case 3595:
case 587:
case 2361:
case 1773:
case 3608:
case 3155:
case 1054:
case 1751:
case 1802:
case 3059:
case 1841:
case 792:
case 2099:
case 3607:
case 2937:
case 2942:
case 578:
case 2328:
case 1739:
case 2680:
case 2293:
case 1075:
case 3814:
case 2860:
case 1824:
case 1663:
case 357:
case 1405:
case 3881:
case 2615:
case 3763:
case 138:
case 47:
case 1754:
case 1161:
case 3904:
case 825:
case 2189:
case 1430:
case 3869:
case 1606:
case 3317:
case 412:
case 1553:
case 2829:
case 654:
case 1518:
case 1555:
case 3815:
case 256:
case 1331:
case 3219:
case 2108:
case 561:
case 2505:
case 4031:
case 1453:
case 1169:
case 2453:
case 37:
case 3661:
case 1316:
case 2041:
case 658:
case 3462:
case 413:
case 649:
case 510:
case 2651:
case 3063:
case 565:
case 3983:
case 1199:
case 3299:
case 2812:
case 3725:
case 3839:
case 377:
case 2039:
case 2611:
case 3391:
case 3212:
case 1693:
case 1431:
case 2518:
case 2337:
case 854:
case 1536:
case 3332:
case 390:
case 1223:
case 2402:
case 2454:
case 2442:
case 980:
case 3345:
case 2030:
case 2617:
case 4060:
case 4015:
case 958:
case 1618:
case 2848:
case 4091:
case 2035:
case 1107:
case 3076:
case 1854:
case 2902:
case 2183:
case 1832:
case 38:
case 1779:
case 3423:
case 2500:
case 532:
case 2771:
case 3077:
case 2726:
case 2977:
case 286:
case 3233:
case 3411:
case 2348:
case 2851:
case 3932:
case 2741:
case 2087:
case 679:
case 717:
case 235:
case 2492:
case 1633:
case 3825:
case 554:
case 3278:
case 973:
case 3159:
case 3718:
case 2567:
case 3938:
case 2229:
case 3888:
case 1799:
case 3167:
case 2515:
case 896:
case 1296:
case 40:
case 3044:
case 1303:
case 3750:
case 3035:
case 2773:
case 1853:
case 2127:
case 3342:
case 2788:
case 426:
case 3524:
case 1840:
case 2501:
case 3962:
case 2311:
case 3022:
case 2458:
case 3828:
case 2540:
case 3406:
case 3650:
case 2830:
case 1171:
case 3151:
case 306:
case 3456:
case 265:
case 3176:
case 2973:
case 997:
case 2049:
case 2237:
case 2630:
case 190:
case 3131:
case 271:
case 3125:
case 251:
case 3695:
case 440:
case 1228:
case 2519:
case 778:
case 814:
case 222:
case 2079:
case 77:
case 471:
case 692:
case 1709:
case 2170:
case 515:
case 3801:
case 3284:
case 482:
case 196:
case 2979:
case 400:
case 701:
case 791:
case 120:
case 2583:
case 1895:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1726754402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,];
var gg_b = "1726758001/";

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
